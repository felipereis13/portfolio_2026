import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Code2 } from 'lucide-react';

export const About = () => {
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
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: 'Desenvolvimento Full Stack',
      description: 'Experiência prática em projetos reais com tecnologias modernas'
    },
    {
      icon: Lightbulb,
      title: 'Visão Estratégica',
      description: 'Formação em Contabilidade para sistemas financeiros e ERPs'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Projeto premiado no Porto Digital com Cesar School e Mesa Tech'
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-border/50">
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.description')}
                </p>
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    Objetivo Profissional
                  </p>
                  <p className="text-foreground italic">
                    &ldquo;{t('about.objective')}&rdquo;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div
            className={`space-y-4 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
