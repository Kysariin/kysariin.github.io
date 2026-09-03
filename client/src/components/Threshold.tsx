import React from "react";

export function Threshold({
  name = "kate harris",
  line,
  onEnter,
}: {
  name?: string;
  line?: string;
  onEnter?: (e: React.MouseEvent) => void;
}) {
  return (
    <section className="min-h-screen box-border px-8 py-[56px] min-[861px]:px-[64px] flex flex-col justify-between gap-10">
      <span />

      <div className="flex flex-col gap-[22px]">
        <h1 className="text-[76px] leading-none">{name}</h1>
        {line && <p className="m-0 max-w-[460px] text-[16px] leading-[1.7] text-muted">{line}</p>}
      </div>

      <div className="flex items-baseline justify-between border-t border-rule-soft pt-[18px]">
        <a
          href="#index"
          onClick={onEnter}
          className="font-mono text-[13px] tracking-[0.18em] uppercase text-dim hover:text-ink transition-colors duration-150"
        >
          index ↓
        </a>
        <span className="font-mono text-[13px] text-faint">© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
