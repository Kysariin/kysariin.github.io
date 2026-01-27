import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="scanline" />
      <Navigation />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="border-2 border-primary/20 p-8 md:p-12 bg-card/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-primary/40">v1.0.42_CORE</div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 glitch-text">System<br/>Output</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-mono">
            // INITIALIZING INTERFACE...<br/>
            // LOADING PROJECT_FILES...<br/>
            Creative technologist exploring the fringe of embedded systems and computational sound.
          </p>
          <div className="mt-12 flex gap-4">
            <div className="h-1 w-12 bg-primary" />
            <div className="h-1 w-4 bg-secondary" />
            <div className="h-1 w-2 bg-muted" />
          </div>
        </div>
      </main>
    </div>
  );
}
