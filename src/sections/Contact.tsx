import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Send
} from 'lucide-react';

export const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'felipermpires@gmail.com',
      href: 'mailto:felipermpires@gmail.com'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+55 (81) 99824-2649',
      href: 'tel:+5581998242649'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Olinda, Pernambuco - Brasil',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/felipereismp/'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/felipereis13'
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  {t('contact.message')}
                </p>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-foreground mb-4">
                  Redes Sociais
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((item, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="flex-1 gap-2"
                      onClick={() => window.open(item.href, '_blank')}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Placeholder */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-border/50 h-full">
              <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full min-h-[300px]">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Entre em Contato
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                  Estou disponível para oportunidades de estágio e projetos. 
                  Clique no botão abaixo para me enviar um email diretamente.
                </p>
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => window.location.href = 'mailto:felipermpires@gmail.com'}
                >
                  <Mail className="h-4 w-4" />
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
