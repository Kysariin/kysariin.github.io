import { Navigation } from "@/components/Navigation";

export default function Misc() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Misc</h1>
        <p className="text-muted-foreground">Various other projects and experiments.</p>
      </main>
    </div>
  );
}
