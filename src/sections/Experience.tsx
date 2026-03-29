import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export const Experience = () => {
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

  const jobs: Job[] = t('experience.jobs', { returnObjects: true }) as Job[];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 hidden sm:block z-10" />

                <div className={`grid md:grid-cols-2 gap-4 md:gap-8 ${index % 2 === 0 ? '' : 'md:direction-rtl'}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                    <Card className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 ml-8 sm:ml-0">
                      <CardHeader className="pb-3">
                        <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Badge variant="secondary" className="text-xs">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {job.role}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {job.company}
                        </h3>
                        <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {job.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
