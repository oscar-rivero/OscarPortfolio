import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin } from 'lucide-react';

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-education-title">
            {t.education.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {t.education.items.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-education-${index}`}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-degree-${index}`}>
                    {item.degree}
                  </h3>
                  <p className="font-medium text-primary mb-1" data-testid={`text-institution-${index}`}>
                    {item.institution}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground" data-testid={`text-period-${index}`}>
                    {item.period}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span data-testid={`text-location-${index}`}>{item.location}</span>
                  </div>
                </div>
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {item.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
