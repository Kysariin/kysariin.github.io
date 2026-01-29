import React from "react";
import { Link } from "wouter";

interface ProjectEntryProps {
  slug: string;
  category: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export function ProjectEntry({ slug, category, title, date, description, tags, imageUrl }: ProjectEntryProps) {
  return (
    <div className="group space-y-4 border border-border/40 p-6 bg-card/20 hover:bg-card/40 transition-all">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-1">
          <h3 className="text-xl font-serif text-foreground/90 lowercase">{title}</h3>
          <p className="font-mono text-[11px] text-primary/60">{date}</p>
        </div>
        <div className="flex gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono border border-primary/20 px-2 py-0.5 text-primary/80 lowercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {imageUrl && (
        <div className="aspect-video overflow-hidden border border-border/40 grayscale hover:grayscale-0 transition-all duration-500">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <p className="text-sm leading-relaxed text-muted-foreground/90 font-sans">
        {description}
      </p>

      <div className="pt-2">
        <Link href={`/project/${category}/${slug}`}>
          <a className="text-[11px] font-mono text-primary hover:underline lowercase tracking-widest">
            view_details →
          </a>
        </Link>
      </div>
    </div>
  );
}
