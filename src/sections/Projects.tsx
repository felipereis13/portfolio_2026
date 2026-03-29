import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Folder } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlight: boolean;
  repoUrl?: string;
  demoUrl?: string;
}

export const Projects = () => {
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

  const projects: Project[] = t('projects.items', { returnObjects: true }) as Project[];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group overflow-hidden ${
                project.highlight ? 'md:ring-2 md:ring-primary/20' : ''
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {/* Project Header with gradient */}
              <div className="relative h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-background overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.highlight && (
                    <Badge variant="default" className="gap-1">
                      <Star className="h-3 w-3" />
                      Destaque
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-4 left-6">
                  <div className="p-3 rounded-xl bg-background/90 backdrop-blur shadow-lg">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3 pt-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.repoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 flex-1"
                      onClick={() => window.open(project.repoUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      {t('projects.viewRepo')}
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="gap-2 flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t('projects.viewDemo')}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming soon indicator */}
        <div
          className="mt-8 text-center"
          style={{
            transitionDelay: '400ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-sm text-muted-foreground">
            Mais projetos em breve...
          </p>
        </div>
      </div>
    </section>
  );
};
