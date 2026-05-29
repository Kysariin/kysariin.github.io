import React from "react";
import { Link, useLocation } from "wouter";
import { PageLayout } from "@/components/Layout";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

const isVideo = (path: string) => path.endsWith(".mp4") || path.endsWith(".webm");

export default function ProjectDetail({ category, slug }: { category: string; slug: string }) {
  const [isHeroZoomed, setIsHeroZoomed] = React.useState(false); // so you can expand the hero as well
  const [, setLocation] = useLocation();
  const categoryToProjects: Record<string, Array<any>> = {
    hardware: PROJECTS.hardware,
    audio:    PROJECTS.audio,
    research: PROJECTS.research,
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
        <Link href="/hardware">
          <a className="mt-8 inline-block text-primary hover:underline font-mono text-xs tracking-widest uppercase">
            return_to_hardware
          </a>
        </Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={<span className="normal-case">{project.title}</span>}>
      <div className="not-prose space-y-8">
        <div>
          <button
            onClick={() => {
              const fallback =
                category === "hardware" ? "/hardware" :
                category === "audio"    ? "/audio"    :
                category === "research" ? "/research" : "/";
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
          <>
            <div 
              onClick={() => !isVideo((project as any).imageUrl) && setIsHeroZoomed(true)}
              className={cn(
                "aspect-video overflow-hidden border border-border/40 rounded-md grayscale hover:grayscale-0 transition-all duration-500 bg-card/30",
                !isVideo((project as any).imageUrl) && "cursor-zoom-in"
              )}
            >
              {isVideo((project as any).imageUrl) ? (
                <video 
                  src={(project as any).imageUrl} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <img 
                  src={(project as any).imageUrl} 
                  alt={project.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover" 
                />
              )}
            </div>

            {/* Fullscreen Hero Overlay (Images only) */}
            {isHeroZoomed && (
              <div 
                className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-300"
                onClick={() => setIsHeroZoomed(false)}
              >
                <img 
                  src={(project as any).imageUrl} 
                  alt={project.title} 
                  className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in duration-300"
                />
                <button className="absolute top-8 right-8 text-primary font-mono text-[10px] tracking-[0.2em] uppercase hover:underline">
                  [ close_hero ]
                </button>
              </div>
            )}
          </>
        )}

        <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-serif">
          {project.description}
        </p>

        <article className="project-content prose prose-invert prose-lg max-w-none
          prose-headings:font-serif prose-headings:normal-case prose-headings:text-foreground
          prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:font-semibold prose-h2:leading-tight prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/40
          prose-h3:text-3xl md:prose-h3:text-4xl prose-h3:font-semibold prose-h3:leading-snug prose-h3:mt-10 prose-h3:mb-4
          
          prose-h4:text-2xl md:prose-h4:text-3xl prose-h4:font-medium prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-foreground/90

          prose-p:my-6 prose-p:leading-relaxed prose-p:text-foreground/90
          prose-ul:my-5 prose-li:my-1.5">
          {project.content}
        </article>
      </div>
    </PageLayout>
  );
}