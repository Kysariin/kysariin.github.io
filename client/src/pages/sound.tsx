import { Navigation } from "@/components/Navigation";

export default function Sound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Computational Sound</h1>
        <p className="text-muted-foreground">Exploring the intersection of algorithms and audio.</p>
      </main>
    </div>
  );
}
