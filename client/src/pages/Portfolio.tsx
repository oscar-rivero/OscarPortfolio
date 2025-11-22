import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
