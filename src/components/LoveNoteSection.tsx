import { Card } from '@/components/ui/card';

export const LoveNoteSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-4xl">💌</span>
          <h2 className="text-3xl md:text-4xl font-romantic text-primary mt-2">
            A Little Love Note
          </h2>
        </div>
        
        <Card className="p-8 md:p-12 shadow-card bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="text-center space-y-6">
            <p className="text-xl md:text-2xl font-romantic text-foreground leading-relaxed">
              Tumhari ek smile meri poori duniya bright kar deti hai ✨
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-romantic">
              Jab tum paas hoti ho, sab kuch perfect lagta hai 💫
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-romantic">
              Tumhare bina din adhoora lagta hai 🌙
            </p>
            <div className="pt-4 flex justify-center gap-3 text-2xl">
              <span className="animate-float" style={{ animationDelay: '0s' }}>💖</span>
              <span className="animate-float" style={{ animationDelay: '0.3s' }}>💕</span>
              <span className="animate-float" style={{ animationDelay: '0.6s' }}>💗</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
