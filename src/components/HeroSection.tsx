import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Celebration } from './Celebration';

const noButtonTexts = [
  "Arre ruk ja na 😭",
  "Soch le ek baar ❤️",
  "Itni jaldi NO? 🥺",
  "Dil todna acchi baat nahi 💔",
  "YES hi better option hai 😌",
  "Try again 😜",
  "Phir se soch 💕",
  "Nahi nahi, galti ho gayi 🙈",
  "Haan bol de yaar 💖",
  "Itna bhi kya gussa 🥹",
];

export const HeroSection = ({ onYesClick }: { onYesClick: () => void }) => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonText, setNoButtonText] = useState("NO 🙈");
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonMoved, setNoButtonMoved] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);

  const handleYesClick = () => {
    setYesClicked(true);
    setShowCelebration(true);
    onYesClick();
  };

  const handleNoHover = useCallback(() => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
    setNoButtonMoved(true);
    setNoButtonText(noButtonTexts[Math.floor(Math.random() * noButtonTexts.length)]);
  }, []);

  if (yesClicked) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-hero">
        <Celebration show={showCelebration} />
        <div className="text-center animate-scale-in z-10">
          <div className="text-6xl md:text-8xl mb-6 animate-bounce-soft">😍</div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 font-romantic">
            YAYYY!!!
          </h1>
          <p className="text-2xl md:text-3xl text-foreground mb-6">
            You just made my day 💕
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground font-romantic">
            I promise to make you smile every day 💖
          </p>
          <div className="mt-8 flex gap-4 justify-center text-4xl">
            <span className="animate-float" style={{ animationDelay: '0s' }}>💖</span>
            <span className="animate-float" style={{ animationDelay: '0.2s' }}>🌹</span>
            <span className="animate-float" style={{ animationDelay: '0.4s' }}>💕</span>
            <span className="animate-float" style={{ animationDelay: '0.6s' }}>✨</span>
            <span className="animate-float" style={{ animationDelay: '0.8s' }}>💗</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-hero overflow-hidden">
      <div className="text-center z-10 animate-fade-in-up">
        <div className="text-5xl md:text-7xl mb-4 animate-pulse-heart">💝</div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 font-romantic leading-tight">
          Hey ❤️ I have a question for you…
        </h1>
        <p className="text-xl md:text-3xl text-foreground mb-10 font-romantic">
          Will you be my Valentine? 🌹
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
          <Button
            variant="valentine"
            size="xl"
            onClick={handleYesClick}
            className="min-w-[160px] animate-pulse-heart"
          >
            YES 💖
          </Button>
          
          <Button
            variant="valentineNo"
            size="xl"
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="min-w-[160px] transition-all duration-300"
            style={{
              transform: noButtonMoved 
                ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` 
                : 'none',
              position: noButtonMoved ? 'absolute' : 'relative',
            }}
          >
            {noButtonText}
          </Button>
        </div>
        
        <p className="mt-8 text-muted-foreground text-sm animate-bounce-soft">
          ↓ Scroll for more surprises ↓
        </p>
      </div>
    </section>
  );
};
