import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Globe } from 'lucide-react';

interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export const Languages = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const languages: Language[] = t('languages.items', { returnObjects: true }) as Language[];

  // Map proficiency levels to percentages
  const getProficiency = (level: string): number => {
    if (level.includes('Nativo') || level.includes('Native')) return 100;
    if (level.includes('Avançado') || level.includes('Advanced')) return 85;
    if (level.includes('Intermediário') || level.includes('Intermediate')) return 60;
    if (level.includes('Básico') || level.includes('Basic')) return 30;
    return 50;
  };

  return (
    <section
      id="languages"
      ref={ref}
      className="py-20 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('languages.title')}
          subtitle={t('languages.subtitle')}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {language.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language.level}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Proficiência</span>
                        <span className="font-medium text-primary">
                          {getProficiency(language.level)}%
                        </span>
                      </div>
                      <Progress 
                        value={isVisible ? getProficiency(language.level) : 0} 
                        className="h-2 transition-all duration-1000"
                        style={{ transitionDelay: `${index * 200 + 300}ms` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
