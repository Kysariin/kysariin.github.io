import React from "react";
import { PageLayout } from "@/components/Layout";

export default function Research() {
  return (
    <PageLayout title="research">
      <div className="space-y-4 font-mono text-[13px] text-primary/80">
        <p>// directory: research</p>
      </div>
      <p className="text-lg font-serif italic text-foreground">
        For whatever else I feel like putting here.
      </p>
      <div className="pt-8 text-sm leading-loose max-w-xl text-foreground/90">
        to be added: STEM livestream info, quizlet gravity game dupe, link to previous relevant + shareable classwork (minimal), etc
      </div>
    </PageLayout>
  );
}
