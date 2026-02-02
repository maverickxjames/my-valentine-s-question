import { Card } from '@/components/ui/card';

const songs = [
  { title: "Tum Hi Ho", artist: "Arijit Singh", emoji: "🎵" },
  { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", emoji: "💫" },
  { title: "Raabta", artist: "Arijit Singh", emoji: "🌙" },
  { title: "Tere Sang Yaara", artist: "Atif Aslam", emoji: "💕" },
];

export const MusicSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl">🎶</span>
          <h2 className="text-3xl md:text-4xl font-romantic text-primary mt-2">
            Songs That Remind Me of You
          </h2>
          <p className="text-muted-foreground mt-2">Our playlist 🎧</p>
        </div>
        
        <Card className="p-6 shadow-card bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            {songs.map((song, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
              >
                <div className="text-2xl group-hover:scale-125 transition-transform">
                  {song.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{song.title}</h3>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </div>
                <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶️
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground font-romantic">
              Every song makes me think of you 💖
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
