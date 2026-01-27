import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Home</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Welcome to my portfolio. Use the navigation above to explore my work in embedded systems, sound, and other miscellaneous projects.
        </p>
      </main>
    </div>
  );
}
