import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

const emojis = ['❤️', '💕', '💖', '💗', '💓', '💘', '💝', '🌹', '✨', '💫'];

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 4 + Math.random() * 4,
          size: 16 + Math.random() * 24,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        });
      }
      setHearts(newHearts);
    };

    createHearts();
    const interval = setInterval(createHearts, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};
