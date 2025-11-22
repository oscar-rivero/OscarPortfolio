import Header from '../Header';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function HeaderExample() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <div className="h-[200vh] pt-20 px-6">
          <p className="text-center text-muted-foreground">Scroll down to see the header effect</p>
        </div>
      </div>
    </LanguageProvider>
  );
}
