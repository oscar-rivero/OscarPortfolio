import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground">
            Let's connect and discuss opportunities
          </p>
        </div>
        <Card className="p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  {t.contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  data-testid="link-phone"
                >
                  {t.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-medium" data-testid="text-location">
                  {t.contact.location}
                </p>
              </div>
            </div>
            <div className="pt-6 flex justify-center">
              <Button
                size="lg"
                onClick={() => window.location.href = `mailto:${t.contact.email}`}
                data-testid="button-send-email"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </div>
          </div>
        </Card>
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Oscar Rivero. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
