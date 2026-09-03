import React from "react";
import { Shell, RailMeta } from "@/components/Shell";

const CARDS = ["reading", "re-reading", "watching", "hearing", "building"];

export default function About() {
  return (
    <Shell meta={<RailMeta rows={[{ label: "elsewhere", value: "github · linkedin · instagram · spotify" }]} />}>
      <div className="flex flex-col gap-10">
        <h1 className="text-[52px] leading-[1.05]">about</h1>

        <div className="prose-site">
          <p>
            i studied computer science at columbia. i write web applications for work. the projects on the index
            are coursework from creative embedded systems and computational sound, and they're labelled as such.
          </p>
          <p>
            this page is where the personal material goes. the cards below are the shape of it, not the content:
            each one is a mono label and a single sentence, edited by hand.
          </p>
        </div>

        <div className="flex flex-col gap-[18px] max-w-[760px]">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-label">currently</span>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px]">
            {CARDS.map((label) => (
              <div key={label} className="border border-rule bg-panel p-[18px] flex flex-col gap-2.5">
                <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-label">{label}</span>
                <span className="text-[14px] leading-[1.7] text-body">—</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
