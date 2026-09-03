import React from "react";
import { Link } from "wouter";
import { Shell } from "@/components/Shell";

export default function NotFound() {
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
