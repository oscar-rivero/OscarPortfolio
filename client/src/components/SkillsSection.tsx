import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Languages, Code } from 'lucide-react';

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-skills-title">
            {t.skills.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Languages className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold" data-testid="text-languages-title">
                {t.skills.languages.title}
              </h3>
            </div>
            <div className="space-y-4">
              {t.skills.languages.items.map((lang, index) => (
                <div key={index} className="flex items-center justify-between" data-testid={`row-language-${index}`}>
                  <span className="font-medium">{lang.name}</span>
                  <Badge variant="secondary" className="font-mono">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold" data-testid="text-digital-skills-title">
                {t.skills.digital.title}
              </h3>
            </div>
            <div className="space-y-6">
              {t.skills.digital.categories.map((category, catIndex) => (
                <div key={catIndex} data-testid={`category-${catIndex}`}>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="hover-elevate"
                        data-testid={`skill-${catIndex}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
