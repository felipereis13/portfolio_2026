import { useEffect, useRef, useState } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle = ({ title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className={`mb-12 ${centered ? 'text-center' : ''} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {subtitle && (
        <span className={`text-sm font-semibold tracking-wider uppercase mb-2 block ${light ? 'text-primary-foreground/70' : 'text-primary/70'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-primary-foreground' : 'text-foreground'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 mt-4 rounded-full ${centered ? 'mx-auto' : ''} ${light ? 'bg-primary-foreground/30' : 'bg-primary/30'}`} />
    </div>
  );
};
