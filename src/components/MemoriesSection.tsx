import { Card } from '@/components/ui/card';

const memories = [
  { caption: "Ye moment thoda special tha ❤️", color: "from-chart-1/30 to-chart-2/30" },
  { caption: "Still can't forget this 🥰", color: "from-chart-2/30 to-chart-3/30" },
  { caption: "Tumhari woh smile 💕", color: "from-chart-3/30 to-chart-4/30" },
  { caption: "Best memory ever ✨", color: "from-chart-4/30 to-chart-1/30" },
];

export const MemoriesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl">📸</span>
          <h2 className="text-3xl md:text-4xl font-romantic text-primary mt-2">
            Our Special Memories
          </h2>
          <p className="text-muted-foreground mt-2">Moments I'll treasure forever 💝</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-primary/10"
            >
              <div className={`aspect-square bg-gradient-to-br ${memory.color} flex items-center justify-center`}>
                <div className="text-center p-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? '💑' : index === 1 ? '🌹' : index === 2 ? '💕' : '✨'}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Add your photo here
                  </p>
                </div>
              </div>
              <div className="p-4 bg-card">
                <p className="text-center font-romantic text-foreground text-lg">
                  {memory.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
