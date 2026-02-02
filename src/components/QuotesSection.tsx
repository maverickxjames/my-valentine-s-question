import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const quotes = [
  "Pyaar perfect nahi hota, par tum ho 💖",
  "Tumse milke zindagi badal gayi meri ✨",
  "Tum meri favourite notification ho 📱💕",
  "Tumhare bina WiFi bhi weak lagta hai 🙈",
  "Dil maange more... tumhe 💗",
  "Tum ho toh sab kuch hai 🌹",
  "Main pagal nahi, sirf tumhara deewana hoon 😌",
];

export const QuotesSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl">💬</span>
          <h2 className="text-3xl md:text-4xl font-romantic text-primary mt-2">
            Dil Ki Baatein
          </h2>
        </div>
        
        <Card className="p-8 md:p-12 shadow-card bg-card border-primary/20 min-h-[200px] flex items-center justify-center">
          <div
            key={currentQuote}
            className="text-center animate-fade-in-up"
          >
            <p className="text-2xl md:text-3xl font-romantic text-foreground leading-relaxed">
              "{quotes[currentQuote]}"
            </p>
          </div>
        </Card>
        
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? 'bg-primary w-6'
                  : 'bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
