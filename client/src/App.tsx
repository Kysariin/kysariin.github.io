// --- Project Data ---

export const PROJECTS = {
  embedded: [
    {
      slug: "g0ngsh1",
      title: "g0ngsh1",
      date: "2026-01-27",
      description: "Assignment for Creative Embedded Systems -- solder a 12-pin header and a bent brass rod to a protoboard.",
      tags: ["soldering", "sculpture", "components"],
      imageUrl: heroImage,
      content: (
        <>
          <h2>Concept</h2>
          <p>
          Last week in my Introduction to East Asian Art class, we briefly 
          discussed <a href="https://www.google.com/search?q=china+dolmens&client=opera-gx&hs=uqN&sca_esv=8a6b26e3cbe8377c&udm=2&biw=1875&bih=958&aic=0&sxsrf=ANbL-n6QNrVncjEA79mzOttbpWWxD6jBzw%3A1769658061185&ei=zdZ6aaT8CtCu5NoP7LS5yQE&ved=0ahUKEwjklvGA6q-SAxVQF1kFHWxaLhkQ4dUDCBI&uact=5&oq=china+dolmens&gs_lp=Egtnd3Mtd2l6LWltZyINY2hpbmEgZG9sbWVuczIGEAAYCBgeSIcEUL0BWL0BcAB4AJABAJgBoQGgAZICqgEDMC4yuAEDyAEA-AEBmAICoAKWApgDAIgGAZIHAzAuMqAHzAGyBwMwLjK4B5YCwgcDMS4xyAcCgAgA&sclient=gws-wiz-img" target="_blank">dolmens</a> in China, which led me to read more about them. 
          That research eventually brought me to <a href="https://en.wikipedia.org/wiki/Suiseki" target="_blank">suiseki</a>/<a href="https://en.wikipedia.org/wiki/Chinese_scholar%27s_rocks" target="_blank">gongshi,</a> or scholar’s 
          rocks (viewing stones). I thought it would be interesting to base this 
          technically modern project off of such a natural kind of art, which is 
          meant to echo the precarious, almost impossible balance often seen in 
          these formations.
          </p>
          <p>  
          The brass rod at the top of the sculpture follows two distinct paths. I 
          interpret these as people beginning in different places and moving through 
          unique journeys, yet ultimately arriving where they are meant to be. 
          The point at which the paths intersect represents this shared, 
          “destined” endpoint.
          </p>
          <p>
          The title g0ngsh1 references the Chinese term for scholar’s rocks. 
          Replacing the vowels with numbers serves as a nod to the technological 
          materials used in the piece, despite its inspiration's roots being in entirely 
          natural forms.
          </p>
          <h3>Hardware</h3>
          <ul>
            <li>Brass rod</li>
            <li>10-pin header</li>
            <li>Protoboard</li>
            <li>Soldering iron</li>
          </ul>
          
          <h3>Details</h3>
          <ProjectMedia 
            src={baseImage}
            alt="Bottom of the sculpture"
            caption="Bottom of the sculpture/protoboard. It was very difficult to get the brass to bend the way I wanted it to at the correct height (to reduce unevenness when it stood), hence the pretty messy brass rod paths."
            variant="below"
            aspect="video"
          />
          <ProjectMedia
            src={topImage}
            alt="Top of the sculpture"
            caption="Top of the sculpture/protoboard. The top was intended to look more flowing, which is why both paths have a similar, but different, curve."
            variant="below"
            aspect="video"
          />
          <ProjectMedia
            src={headerImage}
            alt="Pin header of the sculpture"
            caption="Pin header of the sculpture/protoboard. I had never soldered anything before, so this was definitely a learning curve!"
            variant="below"
            aspect="video"
          />
          <ProjectMedia
            src={solderBImage}
            alt="Soldering bottom of the sculpture"
            caption="Soldering bottom of the sculpture. Trying to hold the ends of the brass rod together made it pretty difficult, resulting in lots of solder being used here..."
            variant="below"
            aspect="video"
          />
          <ProjectMedia
            src={solderTImage}
            alt="Soldering top of the sculpture"
            caption="Soldering top of the sculpture. Similar issue, but a bit less egregious. The intent was for them to diverge on the same spot, but with the finickiness of the brass rod staying in place as I solder, I couldn't pull it off."
            variant="below"
          />
        </>
      ),
    },
  ],
  // Add other categories as needed
};
import React from "react";
import { Link, useLocation, Switch, Route } from "wouter";
import { cn } from "@/lib/utils";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Linkedin, Instagram } from "lucide-react";
import { FaSpotify } from "react-icons/fa";
import { ProjectEntry } from "@/components/ProjectEntry";
import { ProjectMedia } from "@/components/ProjectMedia";
import heroImage from "@/assets/g0ngsh1/g0ngsh1_hero.png";
import baseImage from "@/assets/g0ngsh1/g0ngsh1_base.png";
import topImage from "@/assets/g0ngsh1/g0ngsh1_top.png";
import headerImage from "@/assets/g0ngsh1/g0ngsh1_pinheader.png";
import solderBImage from "@/assets/g0ngsh1/g0ngsh1_solder_bottom.png";
import solderTImage from "@/assets/g0ngsh1/g0ngsh1_solder_top.png";

// --- Components ---

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
                  "text-xs font-semibold lowercase tracking-[0.2em] transition-colors relative py-1",
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

function PageLayout({ title, children }: { title: React.ReactNode, children: React.ReactNode }) {
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
             <div className="flex justify-between items-center py-6 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
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

// --- Pages ---

function Home() {
  return (
    <PageLayout title={<>kate<br/>harris</>}>
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// current_status: senior at columbia university</p>
        <p>// active_courses: creative_embedded_systems, computational_sound</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">
        A "portfolio" for my creative embedded systems and computational sound projects.
      </p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        Website may change over time as I add more or expand its contents.
      </div>
    </PageLayout>
  );
}

function Systems() {
  return (
    <PageLayout title="creative embedded systems">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: creative_embedded_systems</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">COMS3930 with Prof. Mark Santolucito</p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        
      </div>

      <div className="pt-12 grid gap-6">
        {PROJECTS.embedded.map((p) => (
          <ProjectEntry
            key={p.slug}
            slug={p.slug}
            category="systems"
            title={p.title}
            date={p.date}
            description={p.description}
            tags={p.tags}
            imageUrl={"imageUrl" in p ? (p as any).imageUrl : undefined}
          />
        ))}
      </div>
    </PageLayout>
  );
}

function Sound() {
  return (
    <PageLayout title="computational sound">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: computational_sound</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">COMS3430 with Prof. Mark Santolucito</p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        TBD
      </div>
    </PageLayout>
  );
}

function Misc() {
  return (
    <PageLayout title="misc">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: miscellaneous_projects</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">For whatever else I feel like putting here.</p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        TBD
      </div>
    </PageLayout>
  );
}

// --- Project Detail Page ---
function ProjectPage({ category, slug }: { category: string; slug: string }) {
  const [, setLocation] = useLocation();
  const categoryToProjects: Record<string, Array<any>> = {
    systems: PROJECTS.embedded,
    // sound: PROJECTS.sound,
    // misc: PROJECTS.misc,
  };

  const fromCategory = categoryToProjects[category] ?? [];
  let project = fromCategory.find((p) => p.slug === slug);
  if (!project) {
    const all = Object.values(PROJECTS).flat() as Array<any>;
    project = all.find((p) => p.slug === slug);
  }

  if (!project) {
    return (
      <PageLayout title="project not found">
        <p className="font-mono text-[13px] text-primary/80">// status: 404_not_found</p>
        <Link href="/systems">
          <a className="mt-8 inline-block text-primary hover:underline font-mono text-xs tracking-widest uppercase">
            return_to_systems
          </a>
        </Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={project.title}>
      <div className="not-prose space-y-8">
        <div>
          <button
            onClick={() => {
              const fallback =
                category === "systems" ? "/systems" :
                category === "sound" ? "/sound" :
                category === "misc" ? "/misc" : "/";
              if (window.history.length > 1) {
                window.history.back();
              } else {
                setLocation(fallback);
              }
            }}
            className="text-[11px] font-mono text-primary hover:underline lowercase tracking-widest"
          >
            ← back
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-primary/70">{project.date}</span>
          <div className="flex gap-2">
            {project.tags?.map((tag: string) => (
              <span key={tag} className="text-[10px] font-mono border border-primary/20 px-2 py-0.5 text-primary/80 lowercase">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {("imageUrl" in project) && (project as any).imageUrl && (
          <div className="aspect-video overflow-hidden border border-border/40 rounded-md grayscale hover:grayscale-0 transition-all duration-500">
            <img src={(project as any).imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-serif">
          {project.description}
        </p>

        <article className="project-content prose prose-invert prose-lg max-w-none
          prose-headings:font-serif prose-headings:normal-case prose-headings:text-foreground
          prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:font-semibold prose-h2:leading-tight prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/40
          prose-h3:text-3xl md:prose-h3:text-4xl prose-h3:font-semibold prose-h3:leading-snug prose-h3:mt-10 prose-h3:mb-4
          prose-p:my-6 prose-p:leading-relaxed prose-p:text-foreground/90
          prose-ul:my-5 prose-li:my-1.5">
          {project.content}
        </article>
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
        <Route path="/systems" component={Systems} />
        <Route path="/sound" component={Sound} />
        <Route path="/misc" component={Misc} />
        <Route path="/project/:category/:slug">
          {(params) => <ProjectPage category={params.category} slug={params.slug} />}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </QueryClientProvider>
  );
}
