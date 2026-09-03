import React from "react";
import { Shell, RailMeta } from "@/components/Shell";

const CARDS = [
  { label: "reading", value: "The Dispossessed by Ursula K Le Guin" },
  //{ label: "re-reading", value: "—" },
  { label: "watching", value: "Daemons of the Shadow Realm" },
  { label: "hearing", value: "everything. but probably Radiohead" },
  { label: "working on", value: "palette town!" },
];

export default function About() {
  return (
    <Shell meta={<RailMeta rows={[{ label: "elsewhere", value: "github · linkedin · instagram · spotify" }]} />}>
      <div className="flex flex-col gap-10">
        <h1 className="text-[52px] leading-[1.05]">about</h1>

        <div className="prose-site">
          <p>
            hi! i'm kate, and i studied computer science at columbia. i currently am a full-stack developer for work. academically related 
            projects are from barnard college's creative embedded systems and computational sound classes.
          </p>
          <p>
            here's some things i'm engaging with recently:
          </p>
        </div>

        <div className="flex flex-col gap-[18px] max-w-[760px]">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-label">currently</span>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px]">
            {CARDS.map((card) => (
              <div key={card.label} className="border border-rule bg-panel p-[18px] flex flex-col gap-2.5">
                <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-label">{card.label}</span>
                <span className="text-[14px] leading-[1.7] text-body">{card.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
