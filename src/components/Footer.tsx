export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-romantic relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="flex justify-center gap-4 text-3xl mb-6">
          <span className="animate-float" style={{ animationDelay: '0s' }}>💖</span>
          <span className="animate-float" style={{ animationDelay: '0.2s' }}>💕</span>
          <span className="animate-float" style={{ animationDelay: '0.4s' }}>💗</span>
          <span className="animate-float" style={{ animationDelay: '0.6s' }}>💓</span>
          <span className="animate-float" style={{ animationDelay: '0.8s' }}>💖</span>
        </div>
        
        <p className="text-xl md:text-2xl font-romantic text-primary mb-4">
          No matter what, you'll always be special to me 💖
        </p>
        
        <p className="text-muted-foreground">
          Made with lots of ❤️ just for you
        </p>
        
        <div className="mt-8 text-4xl animate-pulse-heart">
          💝
        </div>
      </div>
      
      {/* Floating hearts in footer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute text-xl opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {['❤️', '💕', '💖', '💗'][Math.floor(Math.random() * 4)]}
          </span>
        ))}
      </div>
    </footer>
  );
};
