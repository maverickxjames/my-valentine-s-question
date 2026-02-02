import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  color: string;
  emoji?: string;
  type: 'confetti' | 'heart' | 'sparkle';
}

const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💘', '💝', '😍', '🥰', '💑'];
const colors = ['#e91e63', '#f06292', '#ff80ab', '#ff4081', '#c2185b', '#ad1457', '#ffc107', '#ffeb3b'];

export const Celebration = ({ show }: { show: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (show) {
      const newParticles: Particle[] = [];
      
      // Confetti
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: 'confetti',
        });
      }
      
      // Hearts
      for (let i = 50; i < 80; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          color: '',
          emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
          type: 'heart',
        });
      }
      
      setParticles(newParticles);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            top: '-50px',
          }}
        >
          {particle.type === 'confetti' ? (
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: particle.color }}
            />
          ) : (
            <span className="text-2xl">{particle.emoji}</span>
          )}
        </div>
      ))}
    </div>
  );
};
