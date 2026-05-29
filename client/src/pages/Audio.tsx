import React from "react";
import { PageLayout } from "@/components/Layout";
import { ProjectEntry } from "@/components/ProjectEntry";
import { PROJECTS } from "@/data/projects";

export default function Audio() {
  return (
    <PageLayout title="audio">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// directory: audio</p>
      </div>
      <div className="pt-12 grid gap-6">
        {PROJECTS.audio
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((p) => (
            <ProjectEntry
              key={p.slug}
              slug={p.slug}
              category="audio"
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
