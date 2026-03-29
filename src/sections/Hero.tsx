import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';

export const Hero = () => {
  const { t } = useTranslation();
  const scrollTo = useScrollTo();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1Y0B-YTErmCBU60cmtTpAQG_AjJrTsEiI/view?usp=sharing",
      "_blank",
    )
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1.5 text-sm font-medium"
            >
              {t('hero.greeting')}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Felipe Reis
              <br />
              <span className="text-primary">de Melo Pires</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
              {t('hero.role')}
            </p>

            <p className="text-base sm:text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={() => scrollTo('contact')}
                className="gap-2"
              >
                <Mail className="h-4 w-4" />
                {t('hero.contactBtn')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('projects')}
                className="gap-2"
              >
                <ArrowDown className="h-4 w-4" />
                {t('hero.projectsBtn')}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleDownloadCV}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                {t('hero.downloadCV')}
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/felipereismp/', '_blank')}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => window.open('https://github.com/felipereis13', '_blank')}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => window.location.href = 'mailto:felipermpires@gmail.com'}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Avatar/Illustration */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-primary/30 mb-2">
                    FR
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Full Stack Developer
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollTo('about')}
          className="rounded-full"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </section>
  );
};
