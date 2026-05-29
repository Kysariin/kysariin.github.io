import React from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

const DIRECTORIES = [
  { label: "hardware", path: "/hardware" },
  { label: "audio",    path: "/audio"    },
  { label: "misc",     path: "/misc"     },
];

export default function SubpageNav() {
  const [location] = useLocation();

  // Only render on subpages
  if (location === "/") return null;

  const segments = location.split("/").filter(Boolean);
  const directory = segments[0] ?? null;
  const project   = segments[1] ?? null;

  const lateralLinks = DIRECTORIES.filter((d) => d.label !== directory);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 flex items-center justify-between bg-transparent"
    >
      {/* Left: breadcrumb */}
      <nav className="flex items-center gap-1 font-mono text-[13px] text-white/60">
        <span className="text-white/30 mr-1">kate@portfolio:</span>

        <Link href="/">
          <a className="hover:text-white transition-colors duration-300">home</a>
        </Link>

        {directory && (
          <>
            <span className="text-white/30 mx-1">/</span>
            <Link href={`/${directory}`}>
              <a className="hover:text-white transition-colors duration-300">
                {directory}
              </a>
            </Link>
          </>
        )}

        {project && (
          <>
            <span className="text-white/30 mx-1">/</span>
            <Link href={`/${directory}/${project}`}>
              <a className="hover:text-white transition-colors duration-300">
                {project}
              </a>
            </Link>
          </>
        )}
      </nav>

      {/* Right: lateral directory links */}
      <nav className="flex items-center gap-6 font-mono text-[13px]">
        {lateralLinks.map((dir) => (
          <Link key={dir.path} href={dir.path}>
            <a className="text-white/40 hover:text-white transition-colors duration-300">
              {dir.label}
            </a>
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
