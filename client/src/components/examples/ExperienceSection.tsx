import ExperienceSection from '../ExperienceSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ExperienceSectionExample() {
  return (
    <LanguageProvider>
      <ExperienceSection />
    </LanguageProvider>
  );
}
