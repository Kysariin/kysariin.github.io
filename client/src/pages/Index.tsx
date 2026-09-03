import React from "react";
import { Link, useSearch } from "wouter";
import { Shell } from "@/components/Shell";
import { Threshold } from "@/components/Threshold";
import { ENTRIES, COUNTS, shortDate, type Entry } from "@/data/entries";
import { cn } from "@/lib/utils";

export default function Index() {
  const search = useSearch();
  const kind = new URLSearchParams(search).get("kind");

  const shown = ENTRIES.filter((e) => (kind ? e.kind === kind : true));

  const enter = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("index")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Threshold line={`${COUNTS.project} projects so far. Writing and notes to come.`} onEnter={enter} />

      <div id="index">
        <Shell active={(kind as "project" | "writing" | null) ?? "all"}>
          <div className="flex items-baseline justify-between border-b border-rule pb-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-dim">index · newest first</span>
            <span className="font-jp text-[12px] tracking-[0.24em] text-label">全部</span>
          </div>

          <div className="flex flex-col">
            {shown.map((entry) => (
              <IndexRow key={entry.slug} entry={entry} />
            ))}
          </div>

          {shown.length === 0 && (
            <p className="py-10 font-mono text-[11px] tracking-[0.1em] text-faint">nothing here yet</p>
          )}
        </Shell>
      </div>
    </div>
  );
}

const KIND_LABEL: Record<Entry["kind"], string> = {
  project: "project",
  writing: "writing",
  note: "note",
};

const KIND_COLOR: Record<Entry["kind"], string> = {
  project: "text-iris",
  writing: "text-moss",
  note: "text-dimmer",
};

function IndexRow({ entry }: { entry: Entry }) {
  const href = `/${entry.kind === "project" ? "work" : "writing"}/${entry.slug}`;
  const thumbSrc = entry.imageUrl?.endsWith(".mp4") ? entry.thumbnailUrl : entry.imageUrl;

  return (
    <Link
      href={href}
      className="grid grid-cols-[88px_1fr_68px] gap-[22px] items-start py-5 border-b border-rule-soft hover:bg-panel transition-colors duration-150"
    >
      <span className={cn("font-mono text-[10px] tracking-[0.16em] uppercase pt-[7px]", KIND_COLOR[entry.kind])}>
        {KIND_LABEL[entry.kind]}
      </span>

      <span className="flex gap-[18px]">
        {thumbSrc && (
          <img
            src={thumbSrc}
            alt=""
            loading="lazy"
            className="w-[104px] h-16 object-cover grayscale contrast-[1.05] opacity-60 flex-none"
          />
        )}
        <span className="flex flex-col gap-1.5">
          <span className="font-serif text-[27px] leading-[1.2] text-ink">{entry.title}</span>
          <span className="text-[14px] leading-[1.7] text-muted line-clamp-2">{entry.short}</span>
        </span>
      </span>

      <span className="font-mono text-[11px] text-dim text-right pt-[7px]">{shortDate(entry.date)}</span>
    </Link>
  );
}
