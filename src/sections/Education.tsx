import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';

interface Course {
  institution: string;
  degree: string;
  period: string;
  type: string;
  description: string;
}

export const Education = () => {
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

  const courses: Course[] = t('education.courses', { returnObjects: true }) as Course[];

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('education.title')}
          subtitle={t('education.subtitle')}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group ${
                index === 0 ? 'md:ring-2 md:ring-primary/20' : ''
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  {index === 0 && (
                    <Badge variant="default" className="text-xs">
                      {t('experience.present')}
                    </Badge>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-foreground">
                    {course.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Building2 className="h-4 w-4" />
                    {course.institution}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  {course.period}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
