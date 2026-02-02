import { Card } from '@/components/ui/card';

const gifts = [
  { emoji: '🍫', name: 'Chocolates', message: 'Tumhare liye sweetness 💝' },
  { emoji: '🧸', name: 'Teddy Bear', message: 'Hugs jab main paas nahi 🤗' },
  { emoji: '🌹', name: 'Red Roses', message: 'My love for you 💕' },
  { emoji: '💎', name: 'Something Special', message: 'Kyunki tum special ho ✨' },
  { emoji: '💌', name: 'Love Letters', message: 'Dil ki baatein 💗' },
  { emoji: '🎁', name: 'Surprise', message: 'Wait and see 🎉' },
];

export const GiftsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl">🎁</span>
          <h2 className="text-3xl md:text-4xl font-romantic text-primary mt-2">
            Gifts For You
          </h2>
          <p className="text-muted-foreground mt-2">Ye sab tumhare liye 💝</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gifts.map((gift, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-card hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group border-primary/10 bg-card"
            >
              <div className="text-5xl md:text-6xl mb-4 group-hover:animate-wiggle">
                {gift.emoji}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{gift.name}</h3>
              <p className="text-sm text-muted-foreground font-romantic">
                {gift.message}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
