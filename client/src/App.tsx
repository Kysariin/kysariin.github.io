import React from "react";
import { Link, useLocation, Switch, Route } from "wouter";
import { cn } from "@/lib/utils";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Linkedin, Instagram, Music2 } from "lucide-react";
import { ProjectEntry } from "@/components/ProjectEntry";

// --- Types ---

interface Project {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  content: React.ReactNode;
}

// --- Project Data (Add your entries here) ---

const PROJECTS: Record<string, Project[]> = {
  embedded: [
    {
      slug: "monolith-01",
      title: "Monolith-01",
      date: "2025.10",
      description: "A standalone granular synthesizer built around the Teensy 4.1 platform. Features a custom laser-cut acrylic chassis and high-resolution touch-sensitive sliders for spatial manipulation.",
      tags: ["teensy", "c++", "synthesis"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      content: (
        <div className="space-y-4">
          <p>The Monolith-01 is an exploration into tactile synthesis. By using 14-bit resolution capacitive touch sliders, the player can manipulate granular parameters with extreme precision.</p>
          <p>Key Features:</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Teensy 4.1 Core</li>
            <li>8-voice polyphony</li>
            <li>Custom DSP library written in C++</li>
          </ul>
        </div>
      )
    },
    {
      slug: "kinetic-loom",
      title: "Kinetic Loom",
      date: "2025.04",
      description: "An interactive weaving interface that translates mechanical tension into MIDI control data. Exploring the intersection of traditional craft and digital signal processing.",
      tags: ["arduino", "sensors", "midi"],
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      content: (
        <p>The Kinetic Loom treats the act of weaving as a performance. Strain gauges integrated into the loom's frame detect the tension of the warp threads, converting physical effort into expressive modulation.</p>
      )
    }
  ],
  sound: [],
  misc: []
};

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
             <div className="flex justify-between items-center py-6 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
               <span>© {new Date().getFullYear()} portfolio</span>
               <div className="flex gap-6">
                 <a href="https://www.linkedin.com/in/kate-harris-/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                   <Linkedin size={14} strokeWidth={1.5} />
                   <span className="hidden sm:inline">linkedin</span>
                 </a>
                 <a href="https://www.instagram.com/accio.kate" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                   <Instagram size={14} strokeWidth={1.5} />
                   <span className="hidden sm:inline">instagram</span>
                 </a>
                 <a href="https://open.spotify.com/user/qwrr744ji1ksssoqcw60wyb39?si=e6efd20285d04d73" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                   <Music2 size={14} strokeWidth={1.5} />
                   <span className="hidden sm:inline">spotify</span>
                 </a>
               </div>
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
  const projects = PROJECTS.embedded;
  return (
    <PageLayout title="embedded">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: hardware_research</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">Tactile computation and physical logic.</p>
      
      <div className="space-y-8 pt-8">
        {projects.map(project => (
          <ProjectEntry 
            key={project.slug}
            slug={project.slug}
            category="embedded"
            title={project.title}
            date={project.date}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </PageLayout>
  );
}

function Sound() {
  const projects = PROJECTS.sound;
  return (
    <PageLayout title="sound">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: audio_synthesis</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">Algorithmic composition and digital decay.</p>
      
      <div className="space-y-8 pt-8">
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectEntry 
              key={project.slug}
              slug={project.slug}
              category="sound"
              title={project.title}
              date={project.date}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))
        ) : (
          <p className="text-sm italic opacity-50">// archive_empty</p>
        )}
      </div>
    </PageLayout>
  );
}

function Misc() {
  const projects = PROJECTS.misc;
  return (
    <PageLayout title="misc">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: peripheral_archive</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">Fragments and ephemeral data.</p>
      
      <div className="space-y-8 pt-8">
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectEntry 
              key={project.slug}
              slug={project.slug}
              category="misc"
              title={project.title}
              date={project.date}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))
        ) : (
          <p className="text-sm italic opacity-50">// archive_empty</p>
        )}
      </div>
    </PageLayout>
  );
}

function ProjectDetail({ params }: { params: { category: string, slug: string } }) {
  const categoryProjects = PROJECTS[params.category] || [];
  const project = categoryProjects.find(p => p.slug === params.slug);

  if (!project) return <NotFound />;

  return (
    <PageLayout title={project.title}>
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// category: {params.category}</p>
        <p>// date: {project.date}</p>
      </div>
      
      {project.imageUrl && (
        <div className="aspect-video overflow-hidden border border-border/40 grayscale hover:grayscale-0 transition-all duration-700 my-8">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="pt-8 text-foreground/90 leading-loose">
        {project.content}
      </div>

      <div className="pt-12">
        <Link href={`/${params.category}`}>
          <a className="text-[11px] font-mono text-primary hover:underline lowercase tracking-widest">
            ← back_to_{params.category}
          </a>
        </Link>
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
        <Route path="/project/:category/:slug" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </QueryClientProvider>
  );
}
