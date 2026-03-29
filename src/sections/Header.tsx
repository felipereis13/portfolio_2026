import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useScrollTo } from '@/hooks/useScrollTo';

export const Header = () => {
  const { t } = useTranslation();
  const { isScrolled } = useScrollPosition();
  const scrollTo = useScrollTo();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('header.home'), target: 'hero' },
    { label: t('header.about'), target: 'about' },
    { label: t('header.experience'), target: 'experience' },
    { label: t('header.education'), target: 'education' },
    { label: t('header.skills'), target: 'skills' },
    { label: t('header.certifications'), target: 'certifications' },
    { label: t('header.projects'), target: 'projects' },
    { label: t('header.contact'), target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    scrollTo(target);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Felipe<span className="text-primary"> </span>Reis
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.target}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.target)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav
          className={`absolute top-20 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-2 transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {navItems.map((item) => (
            <Button
              key={item.target}
              variant="ghost"
              onClick={() => handleNavClick(item.target)}
              className="justify-start text-base font-medium py-3"
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </>
  );
};
