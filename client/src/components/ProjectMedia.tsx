import React, { useState } from "react";
import { cn } from "@/lib/utils";

type ProjectMediaVariant = "overlay" | "below";

interface ProjectMediaProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  variant?: ProjectMediaVariant;
  className?: string;
  aspect?: "video" | "square" | "portrait";
  contain?: boolean; // Keep this for your schematic control
}

export function ProjectMedia({
  src,
  alt,
  caption,
  variant = "below",
  className,
  aspect = "video",
  contain = true, // Default to true to keep those schematics visible
}: ProjectMediaProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  const aspectClass =
    aspect === "square" ? "aspect-square" : aspect === "portrait" ? "aspect-[3/4]" : "aspect-video";

  return (
    <>
      <figure className={cn("my-8 max-w-xl mx-auto", className)}>
        <div 
          onClick={() => !isVideo && setIsZoomed(true)}
          className={cn(
            "relative overflow-hidden border border-border/40 rounded-md bg-card/30 group", 
            aspectClass,
            !isVideo && "cursor-zoom-in"
          )}
        >
          {isVideo ? (
            <video 
              src={src} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover" 
            />
          ) : (
            <img 
              src={src} 
              alt={alt} 
              className={cn(
                "w-full h-full transition-transform duration-500 group-hover:scale-105", 
                contain ? "object-contain" : "object-cover"
              )} 
            />
          )}
          
          {variant === "overlay" && caption && (
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-[12px] font-mono tracking-widest text-foreground/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-background/80 to-transparent">
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

      {/* Fullscreen Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in duration-300"
          />
          <button className="absolute top-8 right-8 text-primary font-mono text-[10px] tracking-[0.2em] uppercase hover:underline">
            [ close_view ]
          </button>
        </div>
      )}
    </>
  );
}