import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface FallingHeart {
  id: number;
  left: number;
  top: number;
  emoji: string;
}

const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💘', '💝'];

export const LoveMeterGame = () => {
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const maxScore = 100;

  const spawnHeart = useCallback(() => {
    const newHeart: FallingHeart = {
      id: Date.now() + Math.random(),
      left: Math.random() * 80 + 10,
      top: Math.random() * 60 + 10,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
    };
    setHearts((prev) => [...prev.slice(-8), newHeart]);
  }, []);

  useEffect(() => {
    if (gameStarted && !gameWon) {
      const interval = setInterval(spawnHeart, 800);
      return () => clearInterval(interval);
    }
  }, [gameStarted, gameWon, spawnHeart]);

  useEffect(() => {
    if (score >= maxScore) {
      setGameWon(true);
    }
  }, [score]);

  const catchHeart = (heartId: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== heartId));
    setScore((prev) => Math.min(prev + 10, maxScore));
  };

  const startGame = () => {
    setScore(0);
    setHearts([]);
    setGameStarted(true);
    setGameWon(false);
  };

  const resetGame = () => {
    setScore(0);
    setHearts([]);
    setGameStarted(false);
    setGameWon(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-4xl">🎮</span>
          <h2 className="text-3xl md:text-4xl font-romantic text-primary mt-2">
            Catch My Love
          </h2>
          <p className="text-muted-foreground mt-2">Fill the love meter! 💕</p>
        </div>
        
        <Card className="p-6 shadow-card bg-card/80 backdrop-blur-sm border-primary/20">
          {/* Love Meter */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Love Meter 💕</span>
              <span className="text-sm font-medium text-primary">{score}%</span>
            </div>
            <Progress value={score} className="h-4 bg-secondary" />
          </div>
          
          {/* Game Area */}
          <div className="relative bg-secondary/30 rounded-xl h-[300px] overflow-hidden">
            {!gameStarted && !gameWon && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="valentine" size="xl" onClick={startGame}>
                  Start Game 💖
                </Button>
              </div>
            )}
            
            {gameWon && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/10 backdrop-blur-sm animate-scale-in">
                <div className="text-5xl mb-4 animate-bounce-soft">🎉</div>
                <h3 className="text-2xl font-romantic text-primary mb-2">
                  You won my heart!
                </h3>
                <p className="text-foreground mb-4">Forever and always ❤️</p>
                <Button variant="valentine" onClick={resetGame}>
                  Play Again 💕
                </Button>
              </div>
            )}
            
            {gameStarted && !gameWon && (
              <>
                {hearts.map((heart) => (
                  <button
                    key={heart.id}
                    onClick={() => catchHeart(heart.id)}
                    className="absolute text-3xl cursor-pointer hover:scale-150 transition-transform animate-pulse-heart"
                    style={{
                      left: `${heart.left}%`,
                      top: `${heart.top}%`,
                    }}
                  >
                    {heart.emoji}
                  </button>
                ))}
              </>
            )}
          </div>
          
          {gameStarted && !gameWon && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Click the hearts to fill the love meter! 💝
            </p>
          )}
        </Card>
      </div>
    </section>
  );
};
