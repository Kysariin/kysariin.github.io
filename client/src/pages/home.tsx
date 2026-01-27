import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Portfolio. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}
