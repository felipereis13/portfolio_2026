import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Calendar, ExternalLink, GraduationCap } from 'lucide-react';

interface Certification {
  name: string;
  institution: string;
  year: string;
  link?: string;
  description?: string;
}

export const Certifications = () => {
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

  // Array vazio para adicionar certificações posteriormente
  const certifications: Certification[] = t('certifications.items', { returnObjects: true }) as Certification[] || [];

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('certifications.title')}
          subtitle={t('certifications.subtitle')}
        />

        {certifications.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Award className="h-6 w-6" />
                    </div>
                    {cert.link && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-foreground">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <GraduationCap className="h-4 w-4" />
                      {cert.institution}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {cert.year}
                  </div>
                  {cert.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card
            className="border-border/50 border-dashed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <CardContent className="p-12 text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mx-auto w-fit mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('certifications.empty.title')}
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                {t('certifications.empty.description')}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};
