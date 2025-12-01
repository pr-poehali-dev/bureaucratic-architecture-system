CREATE TABLE IF NOT EXISTS cases (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    implementation_year INTEGER NOT NULL,
    rules_generated INTEGER DEFAULT 0,
    efficiency_increase INTEGER DEFAULT 0,
    staff_count INTEGER,
    duration_months INTEGER,
    status VARCHAR(50) DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_cases_status ON cases(status);
CREATE INDEX idx_cases_year ON cases(implementation_year);

INSERT INTO cases (title, organization, description, implementation_year, rules_generated, efficiency_increase, staff_count, duration_months, status) VALUES
('Оптимизация закупочных процедур', 'Федеральное министерство', 'Внедрение многоуровневой системы согласования закупок с автоматической генерацией регламентов для каждого типа закупки. Система самостоятельно адаптируется под новые требования законодательства.', 2019, 347, 85, 1200, 18, 'completed'),
('Система документооборота', 'Региональная администрация', 'Создание иерархической структуры обработки входящих документов с автоматическим распределением по отделам и генерацией процедур согласования.', 2020, 523, 92, 450, 12, 'completed'),
('Контроль исполнения поручений', 'Государственная корпорация', 'Разработка самовосстанавливающейся системы контроля с автоматическим созданием подзадач и процедур эскалации при нарушении сроков.', 2021, 891, 78, 3500, 24, 'completed'),
('Управление персоналом', 'Крупное ведомство', 'Внедрение комплексной системы учета, аттестации и развития сотрудников с автоматической генерацией индивидуальных планов и регламентов оценки.', 2022, 1247, 95, 8000, 30, 'completed'),
('Цифровизация архива', 'Муниципальное управление', 'Создание многоуровневой системы классификации и доступа к архивным документам с самогенерируемыми правилами индексации.', 2023, 634, 88, 180, 15, 'completed');