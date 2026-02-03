import { Card } from '@/components/ui/card';

const memories = [
  {
    caption: "Ye moment thoda special tha ❤️",
    color: "from-chart-1/30 to-chart-2/30",
    image: "https://c.ndtvimg.com/2025-08/0o73f7i4_aneet-padda_625x300_30_August_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
  },
  {
    caption: "Still can't forget this 🥰",
    color: "from-chart-2/30 to-chart-3/30",
    image: "https://m.media-amazon.com/images/M/MV5BNTY5MDdjN2YtZTBmNy00NjI1LWJjMjctMDUxODE5ZDQzMjE4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    caption: "Tumhari woh smile 💕",
    color: "from-chart-3/30 to-chart-4/30",
    image: "https://etimg.etb2bimg.com/photo/123897799.cms",
  },
  {
    caption: "Best memory ever ✨",
    color: "from-chart-4/30 to-chart-1/30",
    image: "https://wikichronicle.com/wp-content/uploads/2025/07/Aneet-Padda.webp",
  },
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
          <p className="text-muted-foreground mt-2">
            Moments I'll treasure forever 💝
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-primary/10"
            >
              <div
                className={`aspect-square bg-gradient-to-br ${memory.color} relative overflow-hidden`}
              >
                <img
                  src={memory.image}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10" />
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
