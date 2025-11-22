import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-experience-title">
            {t.experience.title}
          </h2>
        </div>
        <div className="space-y-6">
          {t.experience.jobs.map((job, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-job-${index}`}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-48 flex-shrink-0">
                  <p className="font-mono text-sm text-muted-foreground" data-testid={`text-job-period-${index}`}>
                    {job.period}
                  </p>
                  {index === 0 && (
                    <Badge variant="secondary" className="mt-2">
                      {t.experience.current}
                    </Badge>
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold" data-testid={`text-job-role-${index}`}>
                    {job.role}
                  </h3>
                  <p className="font-medium text-primary" data-testid={`text-job-company-${index}`}>
                    {job.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-job-description-${index}`}>
                    {job.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
