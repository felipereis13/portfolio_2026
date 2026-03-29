import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Felipe Reis de Melo Pires. {t('footer.rights')}.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
          </div>
        </div>
      </div>
    </footer>
  );
};
