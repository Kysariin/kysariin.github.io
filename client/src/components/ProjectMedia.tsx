import React from "react";
import { cn } from "@/lib/utils";

type ProjectMediaVariant = "overlay" | "below";

interface ProjectMediaProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  variant?: ProjectMediaVariant;
  className?: string;
  aspect?: "video" | "square" | "portrait";
}

export function ProjectMedia({
  src,
  alt,
  caption,
  variant = "below",
  className,
  aspect = "video",
}: ProjectMediaProps) {
  const aspectClass =
    aspect === "square" ? "aspect-square" : aspect === "portrait" ? "aspect-[3/4]" : "aspect-video";

  return (
    <figure className={cn("my-8 max-w-xl mx-auto", className)}>
      <div className={cn("relative overflow-hidden border border-border/40 rounded-md bg-card/30 group", aspectClass)}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        {variant === "overlay" && caption && (
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-[12px] font-mono tracking-widest text-foreground/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/80 to-transparent">
            {caption}
          </figcaption>
        )}
      </div>
      {variant === "below" && caption && (
        <figcaption className="mt-2 text-[12px] font-mono tracking-widest text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

