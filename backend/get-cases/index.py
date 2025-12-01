import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get all cases from database
    Args: event with httpMethod, context with request_id
    Returns: JSON list of cases
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    cur.execute('''
        SELECT id, title, organization, description, implementation_year, 
               rules_generated, efficiency_increase, staff_count, duration_months, status
        FROM cases 
        ORDER BY implementation_year DESC
    ''')
    
    rows = cur.fetchall()
    
    cases = []
    for row in rows:
        cases.append({
            'id': row[0],
            'title': row[1],
            'organization': row[2],
            'description': row[3],
            'implementationYear': row[4],
            'rulesGenerated': row[5],
            'efficiencyIncrease': row[6],
            'staffCount': row[7],
            'durationMonths': row[8],
            'status': row[9]
        })
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'cases': cases}),
        'isBase64Encoded': False
    }
