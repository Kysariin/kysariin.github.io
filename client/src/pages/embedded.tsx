import { Navigation } from "@/components/Navigation";

export default function Embedded() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Creative Embedded Systems</h1>
        <p className="text-muted-foreground">Projects and exploration in the field of creative embedded systems.</p>
      </main>
    </div>
  );
}
