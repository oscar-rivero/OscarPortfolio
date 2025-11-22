import SkillsSection from '../SkillsSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function SkillsSectionExample() {
  return (
    <LanguageProvider>
      <SkillsSection />
    </LanguageProvider>
  );
}
