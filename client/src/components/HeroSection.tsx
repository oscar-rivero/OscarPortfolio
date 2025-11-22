import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Mail } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Avatar className="w-64 h-64 border-4 border-primary/20 shadow-xl">
              <AvatarImage src="/attached_assets/Diseño sin título_1763800381743.jpg" alt="Oscar Rivero" />
              <AvatarFallback className="text-4xl">OR</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground font-mono text-sm">{t.hero.greeting}</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-hero-name">
                {t.hero.name}
              </h1>
              <p className="text-xl md:text-2xl font-mono text-primary" data-testid="text-hero-title">
                {t.hero.title}
              </p>
            </div>
            <p className="text-muted-foreground text-base max-w-prose leading-relaxed" data-testid="text-hero-description">
              {t.hero.description}
            </p>
            <div>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group relative overflow-hidden"
                data-testid="button-contact-cta"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.hero.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
