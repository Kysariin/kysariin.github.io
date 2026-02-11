import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/Layout";

export default function NotFound() {
  return (
    <PageLayout title="error">
      <p className="font-mono text-[13px] text-primary/80">// status: 404_not_found</p>
      <Link href="/">
        <a className="mt-8 inline-block text-primary hover:text-primary/80 hover:underline font-mono text-xs tracking-widest uppercase">
          return_to_home
        </a>
      </Link>
    </PageLayout>
  );
}