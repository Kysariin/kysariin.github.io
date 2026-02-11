import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram } from "lucide-react";
import { FaSpotify } from "react-icons/fa";

function Navigation() {
  const [location] = useLocation();
  const navItems = [
    { name: "home", href: "/" },
    { name: "systems", href: "/systems" },
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
                  "text-sm md:text-base font-semibold lowercase tracking-[0.2em] transition-colors relative py-1",
                  location === item.href 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-primary"
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

export function PageLayout({ title, children }: { title: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      <div className="paper-texture" />
      <Navigation />
      <main className="container mx-auto px-4 py-32 max-w-3xl">
        <article className="space-y-12">
          <header className="space-y-4">
            <div className="h-px w-8 bg-primary/60 mb-8" />
            <h1 className="text-5xl md:text-7xl font-serif text-foreground lowercase leading-none">
              {title}
            </h1>
          </header>
          
          <div className="prose prose-invert prose-base md:prose-lg max-w-none text-foreground/90 leading-relaxed font-sans space-y-6">
            {children}
          </div>

          <footer className="pt-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
             <div className="h-px w-full bg-border" />
             <div className="flex justify-between items-center py-6 text-xs md:text-sm font-mono tracking-widest uppercase text-muted-foreground">
               <span>© {new Date().getFullYear()} portfolio</span>
               <div className="flex gap-6">
                 <a
                   href="https://www.linkedin.com/in/kate-harris-/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-primary transition-colors flex items-center gap-2"
                 >
                   <Linkedin size={14} strokeWidth={1.5} />
                   <span className="hidden sm:inline">linkedin</span>
                 </a>
                 <a
                   href="https://www.instagram.com/accio.kate"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-primary transition-colors flex items-center gap-2"
                 >
                   <Instagram size={14} strokeWidth={1.5} />
                   <span className="hidden sm:inline">instagram</span>
                 </a>
                 <a
                   href="https://open.spotify.com/user/qwrr744ji1ksssoqcw60wyb39?si=e6efd20285d04d73"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-primary transition-colors flex items-center gap-2"
                 >
                   <FaSpotify size={14} />
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