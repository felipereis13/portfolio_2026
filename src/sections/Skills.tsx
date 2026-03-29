import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Wrench, 
  Users,
  Server,
  Layout
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

export const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: t('skills.backend'),
      icon: Server,
      skills: ['Java', 'Spring Boot', 'Node.js'],
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      title: t('skills.frontend'),
      icon: Layout,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Mantine UI'],
      color: 'bg-cyan-500/10 text-cyan-500'
    },
    {
      title: t('skills.database'),
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'bg-green-500/10 text-green-500'
    },
    {
      title: t('skills.tools'),
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Scrum/Kanban', 'Excel Avançado'],
      color: 'bg-purple-500/10 text-purple-500'
    }
  ];

  const softSkills: string[] = t('skills.softSkills', { returnObjects: true }) as string[];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            {t('skills.technical')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <CardHeader className="pb-3">
                  <div className={`p-2 rounded-lg w-fit ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            {t('skills.soft')}
          </h3>
          <Card
            className="border-border/50"
            style={{
              transitionDelay: '400ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
