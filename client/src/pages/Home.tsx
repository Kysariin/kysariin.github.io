import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/Layout";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const slideUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const dirs = [
  { label: "hardware", path: "/hardware" },
  { label: "audio",    path: "/audio"    },
  { label: "misc",     path: "/misc"     },
];

export default function Home() {
  return (
    <>
      <BackgroundCanvas />
      <div style={{ position: "relative", zIndex: 2 }}>
        <PageLayout
          title={
            <motion.span style={{ display: "block" }} {...slideUp(0.1)}>
              kate<br />harris
            </motion.span>
          }
        >
          <div className="space-y-4 font-mono text-[13px] text-primary/80">
            <motion.p {...slideUp(0.25)}>
              // status: bs in computer science, columbia university
            </motion.p>
            <motion.p {...slideUp(0.4)}>
              // a digital space for my projects, academic or otherwise.
            </motion.p>
          </div>

          <motion.div {...slideUp(0.55)} className="space-y-2 font-mono text-[13px]">
            <p className="text-white/30">// navigation</p>
            {dirs.map(({ label, path }) => (
              <div key={path}>
                <Link href={path}>
                  <a className="text-white/60 hover:text-white transition-colors duration-300">
                    {`> cd ${label}`}
                  </a>
                </Link>
              </div>
            ))}
          </motion.div>
        </PageLayout>
      </div>
    </>
  );
}
