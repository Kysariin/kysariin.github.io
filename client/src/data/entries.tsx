import React from "react";
import { PROJECTS } from "@/data/projects";
import heartStill from "@/assets/heArt/stillLight.png";

export type EntryKind = "project" | "writing" | "note";

export interface Entry {
  kind: EntryKind;
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-05-11" */
  date: string;
  /** index-row line, under 50 characters */
  short: string;
  /** full description, used as the entry standfirst */
  summary: string;
  imageUrl?: string;
  /** used in the index row when imageUrl is a video */
  thumbnailUrl?: string;
  tags?: string[];
  source?: string;
  classwork?: boolean;
  content?: React.ReactNode;
}

const SHORT: Record<string, string> = {
  rotom: "two-player Pokémon battles over ESP-NOW",
  "mta-pachinko": "a pachinko machine that fights back",
  sprawl: "a capacitive touch instrument for cyberspace",
  disorder: "Unknown Pleasures, redrawn on an ESP32",
  heart: "a heart-shaped PCB with a 555 timer",
  g0ngsh1: "a brass rod balanced on a protoboard",
  utagoe: "formant synthesis that sings Japanese syllables",
  seance: "Markov chains trained on twenty goth MIDI files",
  babel: "a babbling brook and an R2D2 engine in WebAudio",
  "multi-mode-synth": "additive, AM, and FM modes on the keyboard",
  "colorful-keyboard": "a polyphonic synth that maps pitch to color",
};

const SOURCE: Record<string, string> = {
  rotom: "https://github.com/Kysariin/pokemonbattle",
  sprawl: "https://github.com/Kysariin/neuromancer",
  disorder: "https://github.com/Kysariin/-dis-order",
  heart: "https://github.com/Kysariin/COMS3930_PCB",
  utagoe: "https://github.com/Kysariin/utagoe_synthesizer",
  seance: "https://github.com/Kysariin/seance",
  babel: "https://github.com/Kysariin/lab3_compsound",
  "multi-mode-synth": "https://github.com/Kysariin/colorful-keyboard-with-synth",
  "colorful-keyboard": "https://github.com/kysariin/colorful-keyboard",
};

const THUMBNAIL: Record<string, string> = {
  heart: heartStill,
};

const projectEntries: Entry[] = (Object.values(PROJECTS).flat() as any[]).map((p) => ({
  kind: "project" as const,
  slug: p.slug,
  title: p.title,
  date: p.date,
  short: SHORT[p.slug] ?? p.description,
  summary: p.description,
  imageUrl: p.imageUrl,
  thumbnailUrl: THUMBNAIL[p.slug],
  tags: p.tags,
  source: SOURCE[p.slug],
  classwork: true,
  content: p.content,
}));

/** Writing lives here once there's a real post. */
export const WRITING: Entry[] = [];

export const ENTRIES: Entry[] = [...projectEntries, ...WRITING].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const COUNTS = {
  all: ENTRIES.length,
  project: ENTRIES.filter((e) => e.kind === "project").length,
  writing: ENTRIES.filter((e) => e.kind === "writing").length,
  note: ENTRIES.filter((e) => e.kind === "note").length,
};

export const findEntry = (slug: string) => ENTRIES.find((e) => e.slug === slug);

/** 2026-05-11 -> 05.11 */
export const shortDate = (iso: string) => iso.slice(5).replace("-", ".");
