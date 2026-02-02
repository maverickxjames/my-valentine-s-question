import { useState } from 'react';
import { FloatingHearts } from '@/components/FloatingHearts';
import { HeroSection } from '@/components/HeroSection';
import { LoveNoteSection } from '@/components/LoveNoteSection';
import { MemoriesSection } from '@/components/MemoriesSection';
import { MusicSection } from '@/components/MusicSection';
import { QuotesSection } from '@/components/QuotesSection';
import { LoveMeterGame } from '@/components/LoveMeterGame';
import { GiftsSection } from '@/components/GiftsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleYesClick = () => {
    setShowFullContent(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      
      <HeroSection onYesClick={handleYesClick} />
      
      {showFullContent && (
        <div className="animate-fade-in-up">
          <LoveNoteSection />
          <MemoriesSection />
          <MusicSection />
          <QuotesSection />
          <LoveMeterGame />
          <GiftsSection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
