import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Embedded", href: "/embedded" },
  { name: "Sound", href: "/sound" },
  { name: "Misc", href: "/misc" },
];

export function Navigation() {
  const [location] = useLocation();

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
