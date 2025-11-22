import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-lg font-semibold hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-all"
              data-testid="link-home"
            >
              OR
            </button>
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm hover-elevate active-elevate-2 px-3 py-1 rounded-md transition-all"
                data-testid="link-about"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-sm hover-elevate active-elevate-2 px-3 py-1 rounded-md transition-all"
                data-testid="link-experience"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-sm hover-elevate active-elevate-2 px-3 py-1 rounded-md transition-all"
                data-testid="link-education"
              >
                {t.nav.education}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-sm hover-elevate active-elevate-2 px-3 py-1 rounded-md transition-all"
                data-testid="link-skills"
              >
                {t.nav.skills}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm hover-elevate active-elevate-2 px-3 py-1 rounded-md transition-all"
                data-testid="link-contact"
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
