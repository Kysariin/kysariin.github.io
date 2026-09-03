import React from "react";
import { Link } from "wouter";
import { Shell, RailMeta } from "@/components/Shell";
import { ENTRIES, findEntry, shortDate } from "@/data/entries";

export default function EntryPage({ slug }: { slug: string }) {
  const entry = findEntry(slug);

  if (!entry) {
    return (
      <Shell>
        <h1 className="text-[52px] leading-none">not found</h1>
        <p className="mt-4 text-[16px] leading-[1.85] text-muted">
          nothing at that address.{" "}
          <Link href="/" className="text-iris">
            back to the index
          </Link>
          .
        </p>
      </Shell>
    );
  }

  const isProject = entry.kind === "project";
  const i = ENTRIES.findIndex((e) => e.slug === entry.slug);
  const nearby = [ENTRIES[i - 1], ENTRIES[i + 1]].filter(Boolean);

  const rows: Array<{ label: string; value: React.ReactNode }> = [
    {
      label: "kind",
      value: (
        <span className={isProject ? "text-iris" : "text-moss"}>
          {isProject ? (entry.classwork ? "project · classwork" : "project") : "writing"}
        </span>
      ),
    },
    { label: "date", value: shortDate(entry.date) },
  ];

  if (entry.tags?.length) {
    rows.push({
      label: "made with",
      value: (
        <span className="flex flex-wrap gap-3">
          {entry.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </span>
      ),
    });
  }

  if (entry.source) {
    rows.push({
      label: "source",
      value: (
        <a href={entry.source} target="_blank" rel="noopener noreferrer">
          {entry.source.replace(/^https?:\/\//, "")}
        </a>
      ),
    });
  }

  if (nearby.length) {
    rows.push({ label: "nearby", value: nearby.map((e) => e!.title).join(" · ") });
  }

  const isVideo = entry.imageUrl?.endsWith(".mp4");

  return (
    <Shell meta={<RailMeta rows={rows} />}>
      <div className="flex flex-col gap-[34px]">
        <header className="flex flex-col gap-3.5">
          <span
            className={
              "font-mono text-[11px] tracking-[0.2em] uppercase " + (isProject ? "text-iris" : "text-moss")
            }
          >
            {isProject ? "project" : "writing"} · {shortDate(entry.date)}
          </span>
          <h1 className="text-[72px] leading-[1.02]">{entry.title}</h1>
          <p className="m-0 max-w-[616px] font-serif italic text-[23px] leading-[1.5] text-[#b8b4c8]">
            {entry.summary}
          </p>
        </header>

        {entry.imageUrl && (
          <figure className="m-0">
            <div className="bg-panel border border-rule-soft p-2.5">
              {isVideo ? (
                <video src={entry.imageUrl} autoPlay muted loop playsInline className="block w-full" />
              ) : (
                <img
                  src={entry.imageUrl}
                  alt={entry.title}
                  className="block w-full h-[360px] object-cover grayscale-[80%]"
                />
              )}
            </div>
          </figure>
        )}

        <div className="prose-site">{entry.content}</div>
      </div>
    </Shell>
  );
}
