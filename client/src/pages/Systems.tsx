import React from "react";
import { PageLayout } from "@/components/Layout";
import { ProjectEntry } from "@/components/ProjectEntry";
import { PROJECTS } from "@/data/projects";

export default function Systems() {
  return (
    <PageLayout title="creative embedded systems">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// module: creative_embedded_systems</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">COMS3930 with Prof. Mark Santolucito</p>
      <div className="pt-12 grid gap-6">
        {PROJECTS.systems
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sorts newest first
            .map((p) => (
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