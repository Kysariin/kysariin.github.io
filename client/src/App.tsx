import React from "react";
import { Link, useLocation, Switch, Route } from "wouter";
import { cn } from "@/lib/utils";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

// --- Components ---

function Navigation() {
  const [location] = useLocation();
  const navItems = [
    { name: "home", href: "/" },
    { name: "embedded", href: "/embedded" },
    { name: "sound", href: "/sound" },
    { name: "misc", href: "/misc" },
  ];

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "text-xs font-semibold lowercase tracking-[0.2em] transition-colors relative py-1",
                  location === item.href 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function PageLayout({ title, children }: { title: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      <div className="paper-texture" />
      <Navigation />
      <main className="container mx-auto px-4 py-32 max-w-3xl">
        <article className="space-y-12">
          <header className="space-y-4">
            <div className="h-[1px] w-8 bg-primary/60 mb-8" />
            <h1 className="text-5xl md:text-7xl font-serif text-foreground lowercase leading-none">
              {title}
            </h1>
          </header>
          
          <div className="prose prose-invert prose-sm max-w-none text-foreground/90 leading-relaxed font-sans space-y-6">
            {children}
          </div>

          <footer className="pt-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
             <div className="h-[1px] w-full bg-border" />
             <div className="flex justify-between py-4 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
               <span>loc: 37.7749° N, 122.4194° W</span>
               <span>id: 0x42_sys_output</span>
             </div>
          </footer>
        </article>
      </main>
    </div>
  );
}

// --- Pages ---

function Home() {
  return (
    <PageLayout title={<>system<br/>output</>}>
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// current_status: exploration</p>
        <p>// active_threads: embedded_systems, computational_audio</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">
        Creative technologist exploring the fringe of embedded systems and computational sound.
      </p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        A practice at the intersection of material hardware and digital abstraction. 
        Focusing on tactile interfaces, generative audio algorithms, and the poetic potential of "obsolete" technology.
      </div>
    </PageLayout>
  );
}

function Embedded() {
  return (
    <PageLayout title="embedded">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: hardware_research</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">Tactile computation and physical logic.</p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        Projects and exploration in the field of creative embedded systems. Designing custom PCB interfaces and bespoke hardware for performance and installation.
      </div>
    </PageLayout>
  );
}

function Sound() {
  return (
    <PageLayout title="sound">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: audio_synthesis</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">Algorithmic composition and digital decay.</p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        Exploring the intersection of mathematical structures and human perception. Real-time synthesis, granular manipulation, and procedural soundscapes.
      </div>
    </PageLayout>
  );
}

function Misc() {
  return (
    <PageLayout title="misc">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: peripheral_archive</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">Fragments and ephemeral data.</p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        Various other projects, experiments, and visual studies that don't fit into primary categories.
      </div>
    </PageLayout>
  );
}

function NotFound() {
  return (
    <PageLayout title="error">
      <p className="font-mono text-[13px] text-primary/80">// status: 404_not_found</p>
      <Link href="/"><a className="mt-8 inline-block text-primary hover:text-primary/80 hover:underline font-mono text-xs tracking-widest uppercase">return_to_home</a></Link>
    </PageLayout>
  );
}

// --- Main App ---

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/embedded" component={Embedded} />
        <Route path="/sound" component={Sound} />
        <Route path="/misc" component={Misc} />
        <Route component={NotFound} />
      </Switch>
    </QueryClientProvider>
  );
}
