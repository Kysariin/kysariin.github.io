import React from "react";
import { PageLayout } from "@/components/Layout";
import { ProjectEntry } from "@/components/ProjectEntry";
import { PROJECTS } from "@/data/projects";

export default function Sound() {
  return (
    <PageLayout title="computational sound">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: computational_sound</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">COMS3430 with Prof. Mark Santolucito</p>
      <div className="pt-12 grid gap-6">
        {PROJECTS.sound.map((p) => (
          <ProjectEntry
            key={p.slug}
            slug={p.slug}
            category="sound"
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