import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeLevel, setActiveLevel] = useState(0);

  const architectureLevels = [
    { id: 0, name: 'Запрос', nodes: 1 },
    { id: 1, name: 'Согласование', nodes: 3 },
    { id: 2, name: 'Проверка', nodes: 5 },
    { id: 3, name: 'Утверждение', nodes: 4 },
    { id: 4, name: 'Исполнение', nodes: 2 }
  ];

  const features = [
    {
      icon: 'RefreshCcw',
      title: 'Системная устойчивость',
      description: 'Автоматическое восстановление баланса после любых изменений. Система адаптируется, создавая новые правила.'
    },
    {
      icon: 'Network',
      title: 'Иерархическая оптимизация',
      description: 'Многоуровневые цепочки согласований с чётким разделением зон ответственности.'
    },
    {
      icon: 'GitBranch',
      title: 'Интеграция процессов',
      description: 'Связь запросов с максимально широким кругом смежных процессов и нормативных актов.'
    },
    {
      icon: 'Zap',
      title: 'Самогенерация правил',
      description: 'Новые прецеденты автоматически формируют уточняющие инструкции и регламенты.'
    }
  ];

  const ruleGenerationSteps = [
    { stage: 'Прецедент', status: 'completed', rules: 0 },
    { stage: 'Анализ', status: 'active', rules: 2 },
    { stage: 'Генерация', status: 'pending', rules: 5 },
    { stage: 'Интеграция', status: 'pending', rules: 8 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-24">
        
        <section className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
            <Icon name="Cpu" size={20} className="text-secondary animate-pulse-glow" />
            <span className="text-sm font-medium text-secondary">Архитектор бюрократических систем</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Полная системная
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              устойчивость
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Проектирую процессы, которые автоматически восстанавливают баланс после любых попыток изменений. 
            Система адаптируется, создавая новые правила и подпроцедуры.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Изучить кейсы
            </Button>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold">Архитектура процессов</h2>
            <p className="text-muted-foreground text-lg">Многоуровневая система с глубокой иерархической оптимизацией</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="space-y-3">
              {architectureLevels.map((level, idx) => (
                <div
                  key={level.id}
                  className={`relative transition-all duration-300 cursor-pointer ${
                    activeLevel === idx ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveLevel(idx)}
                >
                  <div className={`p-6 rounded-xl border-2 transition-colors ${
                    activeLevel === idx
                      ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${
                          activeLevel === idx ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{level.name}</h3>
                          <p className="text-sm text-muted-foreground">{level.nodes} процедур согласования</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {Array.from({ length: level.nodes }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              activeLevel === idx ? 'bg-primary animate-pulse-glow' : 'bg-muted'
                            }`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {idx < architectureLevels.length - 1 && (
                    <div className="flex justify-center py-2">
                      <Icon
                        name="ArrowDown"
                        size={24}
                        className={activeLevel === idx ? 'text-primary animate-float' : 'text-muted-foreground'}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold">Самогенерируемое нормотворчество</h2>
            <p className="text-muted-foreground text-lg">Автоматическое создание правил и регламентов из прецедентов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {ruleGenerationSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className={`p-6 text-center space-y-4 transition-all duration-300 ${
                  step.status === 'active'
                    ? 'bg-secondary/10 border-secondary shadow-lg shadow-secondary/20 scale-105'
                    : step.status === 'completed'
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-card border-border opacity-60'
                }`}>
                  <div className="flex justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      step.status === 'active'
                        ? 'bg-secondary text-white animate-pulse-glow'
                        : step.status === 'completed'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.status === 'completed' ? (
                        <Icon name="CheckCircle" size={28} />
                      ) : step.status === 'active' ? (
                        <Icon name="Loader" size={28} className="animate-spin" />
                      ) : (
                        <Icon name="Circle" size={28} />
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.stage}</h3>
                    <div className="text-3xl font-bold text-primary">+{step.rules}</div>
                    <p className="text-xs text-muted-foreground mt-1">новых правил</p>
                  </div>
                </Card>
                
                {idx < ruleGenerationSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full">
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 border border-primary/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Icon name="Database" size={32} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Органичное развитие базы знаний</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Каждый прецедент становится частью постоянно растущей архитектуры. 
                  Система самостоятельно анализирует ситуации, выявляет паттерны и формирует 
                  новые регламенты без необходимости внешнего вмешательства.
                </p>
                <div className="mt-4 flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                    <span className="text-muted-foreground">2,847 активных правил</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
                    <span className="text-muted-foreground">+127 за последний месяц</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold">Ключевые преимущества</h2>
            <p className="text-muted-foreground text-lg">Почему системы работают десятилетиями</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-8 space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Готовы к внедрению?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Создам систему, которая будет работать десятилетиями независимо от изменений в организации
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Обсудить проект
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
