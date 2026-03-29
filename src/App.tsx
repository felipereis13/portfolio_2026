import { useEffect } from 'react';
import './i18n';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Skills } from '@/sections/Skills';
import { Certifications } from '@/sections/Certifications';
import { Projects } from '@/sections/Projects';
import { Languages } from '@/sections/Languages';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
