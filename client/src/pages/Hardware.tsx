import React from "react";
import { PageLayout } from "@/components/Layout";
import { ProjectEntry } from "@/components/ProjectEntry";
import { PROJECTS } from "@/data/projects";

export default function Hardware() {
  return (
    <PageLayout title="hardware">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// directory: hardware</p>
      </div>
      <div className="pt-12 grid gap-6">
        {PROJECTS.hardware
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((p) => (
            <ProjectEntry
              key={p.slug}
              slug={p.slug}
              category="hardware"
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
