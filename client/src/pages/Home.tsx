import React from "react";
import { PageLayout } from "@/components/Layout";

export default function Home() {
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