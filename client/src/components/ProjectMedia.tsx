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
            "group relative overflow-hidden border border-rule-soft bg-panel p-2.5",
            aspectClass,
            !isVideo && "cursor-zoom-in",
          )}
        >
          {isVideo ? (
            <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          ) : (
            <img
              src={src}
              alt={alt}
              className={cn("w-full h-full grayscale-[80%]", contain ? "object-contain" : "object-cover")}
            />
          )}

          {variant === "overlay" && caption && (
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 font-mono text-[11px] tracking-[0.06em] text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-bg/80">
              {caption}
            </figcaption>
          )}
        </div>
        {variant === "below" && caption && (
          <figcaption className="mt-[10px] font-mono text-[11px] tracking-[0.06em] text-dim">{caption}</figcaption>
        )}
      </figure>

      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-4 md:p-10 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
          <button className="absolute top-8 right-8 font-mono text-[10px] tracking-[0.2em] uppercase text-dim hover:text-iris transition-colors duration-150">
            close
          </button>
        </div>
      )}
    </>
  );
}
