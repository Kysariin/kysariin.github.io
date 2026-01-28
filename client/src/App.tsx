import { Link, useLocation, Switch, Route } from "wouter";
import { cn } from "@/lib/utils";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

// --- Components ---

function Navigation() {
  const [location] = useLocation();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Embedded", href: "/embedded" },
    { name: "Sound", href: "/sound" },
    { name: "Misc", href: "/misc" },
  ];

  return (
    <header className="border-b-2 border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "px-4 py-2 text-xs font-black uppercase tracking-widest transition-all hover:bg-primary hover:text-white relative group overflow-hidden",
                  location === item.href 
                    ? "bg-primary/10 text-primary border-l-2 border-primary" 
                    : "text-muted-foreground"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0" />
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function PageLayout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="scanline" />
      <Navigation />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="border-2 border-primary/20 p-8 md:p-12 bg-card/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-primary/40">v1.0.42_CORE</div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 glitch-text">{title}</h1>
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed font-mono">
            {children}
          </div>
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

// --- Pages ---

function Home() {
  return (
    <PageLayout title={<>System<br/>Output</> as any}>
      <p>// INITIALIZING INTERFACE...</p>
      <p>// LOADING PROJECT_FILES...</p>
      <p className="mt-4">Creative technologist exploring the fringe of embedded systems and computational sound.</p>
    </PageLayout>
  );
}

function Embedded() {
  return (
    <PageLayout title="Embedded">
      <p>// ACCESSING HARDWARE_REPORTS...</p>
      <p className="mt-4">Projects and exploration in the field of creative embedded systems.</p>
    </PageLayout>
  );
}

function Sound() {
  return (
    <PageLayout title="Sound">
      <p>// STREAMING AUDIO_DATA...</p>
      <p className="mt-4">Exploring the intersection of algorithms and audio.</p>
    </PageLayout>
  );
}

function Misc() {
  return (
    <PageLayout title="Misc">
      <p>// RETRIEVING ARCHIVE...</p>
      <p className="mt-4">Various other projects and experiments.</p>
    </PageLayout>
  );
}

function NotFound() {
  return (
    <PageLayout title="404">
      <p>// ERROR: PAGE_NOT_FOUND</p>
      <Link href="/"><a className="mt-4 inline-block text-primary hover:underline">Return to Home</a></Link>
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
