import React from "react";
import { Link } from "wouter";
import { COUNTS } from "@/data/entries";

const LINKS = [
  { label: "github", href: "https://github.com/kysariin" },
  { label: "linkedin", href: "https://www.linkedin.com/in/kate-harris-/" },
  { label: "instagram", href: "https://www.instagram.com/accio.kate" },
  { label: "spotify", href: "https://open.spotify.com/user/qwrr744ji1ksssoqcw60wyb39" },
];

const NOW = [
  { label: "hearing", value: "—" },
  { label: "reading", value: "—" },
  { label: "watching", value: "—" },
];

export function Shell({
  active,
  meta,
  children,
}: {
  active?: "all" | "project" | "writing";
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-wrap items-start">
      <aside className="w-full border-b border-rule-soft box-border p-8 flex flex-col justify-between gap-10 min-[861px]:w-[268px] min-[861px]:flex-none min-[861px]:border-b-0 min-[861px]:border-r min-[861px]:px-9 min-[861px]:py-14 min-[861px]:min-h-screen min-[861px]:sticky min-[861px]:top-0">
        <div className="flex flex-col gap-[34px]">
          <Link href="/" className="font-serif text-[34px] leading-[1.05] text-ink lowercase w-fit">
            kate
            <br />
            harris
          </Link>

          {meta ?? (
            <nav className="flex flex-col gap-2.5 font-mono text-[11px]">
              <span className="text-label tracking-[0.18em] uppercase">show</span>
              <FilterLink href="/" label="everything" count={COUNTS.all} active={!active || active === "all"} />
              <FilterLink href="/?kind=project" label="projects" count={COUNTS.project} active={active === "project"} />
              <FilterLink href="/?kind=writing" label="writing" count={COUNTS.writing} active={active === "writing"} />
            </nav>
          )}

          <div className="border-t border-rule-soft pt-[22px] flex flex-col gap-3.5">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-label">now</span>
            <div className="flex flex-col gap-1.5 text-[13px] leading-[1.5] text-[#a8a4b8]">
              {NOW.map((line) => (
                <span key={line.label}>
                  <span className="text-dimmer">{line.label} · </span>
                  {line.value}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-rule-soft pt-[22px] font-mono text-[11px]">
            <Link href="/about" className="text-dim hover:text-ink transition-colors duration-150 w-fit">
              about
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 font-mono text-[11px] text-dimmer pt-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-iris transition-colors duration-150 w-fit"
            >
              {l.label}
            </a>
          ))}
          <span className="pt-1.5 text-faint">© {new Date().getFullYear()}</span>
        </div>
      </aside>

      <main className="flex-1 w-full min-w-0 box-border p-8 max-w-[1000px] min-[861px]:px-[64px] min-[861px]:pt-[56px] min-[861px]:pb-[88px]">
        {children}
      </main>
    </div>
  );
}

function FilterLink({ href, label, count, active }: { href: string; label: string; count: number; active?: boolean }) {
  return (
    <Link
      href={href}
      className={active ? "text-ink w-fit" : "text-dim hover:text-ink transition-colors duration-150 w-fit"}
    >
      {label} · {count}
    </Link>
  );
}

export function RailMeta({ rows }: { rows: Array<{ label: string; value: React.ReactNode }> }) {
  return (
    <div className="flex flex-col gap-[18px] font-mono text-[11px] text-dim">
      <Link href="/" className="text-iris tracking-[0.12em] w-fit">
        ← index
      </Link>
      {rows.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-1">
          <span className="text-label tracking-[0.18em] uppercase">{label}</span>
          <span className="leading-[1.7]">{value}</span>
        </div>
      ))}
    </div>
  );
}
