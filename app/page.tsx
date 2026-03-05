"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [waveOpen, setWaveOpen] = useState(false);

  useEffect(() => {
    if (!waveOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setWaveOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [waveOpen]);

  return (
    <main className="min-h-screen text-[#2b2118]">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 bg-ambient" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="fixed inset-0 -z-10 bg-noise" />

      {/* Page padding */}
      <div className="mx-auto max-w-[1560px] px-6 py-6 sm:px-10 sm:py-10">
        {/* Canvas panel */}
        <div className="canvas-panel px-8 py-8 sm:px-12 sm:py-12">
          {/* Header */}
          <header className="flex items-start justify-between">
            <div className="text-sm lowercase tracking-wide text-[#2b2118]/70">
              vivian yao
            </div>

            <nav className="flex gap-10 text-sm tracking-wide text-[#2b2118]/65">
              <Link
                href="/"
                className="text-[#2b2118] underline underline-offset-[10px] decoration-[#2b2118]/30"
              >
                home
              </Link>
              <Link href="/my-journey" className="hover:text-[#2b2118] transition">
                my journey
              </Link>
              <Link href="/projects" className="hover:text-[#2b2118] transition">
                projects
              </Link>
            </nav>
          </header>

          {/* Hero */}
          <section className="mt-20 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left */}
            <div className="max-w-[680px]">
              <h1 className="text-[clamp(3rem,5vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.02em]">
              hi, i'm vivian.<br></br>
              </h1>

              <div className="mt-8 text-sm tracking-wide text-[#2b2118]/55">
                startup strategy <span className="px-2">|</span> finance{" "}
                <span className="px-2">|</span> operations
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#2b2118] px-7 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                >
                  view projects <span className="ml-2">→</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setWaveOpen(true)}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-7 py-4 text-sm font-medium text-[#2b2118] shadow-sm transition hover:bg-white"
                >
                  say hi <span className="ml-2">👋</span>
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[560px]">
                <div className="overflow-hidden rounded-[44px] border border-black/10 bg-white/40 shadow-md hover:-translate-y-1 transition-all duration-300">
                  <img
                    src="/images/vivian-headshot.jpg"
                    alt="Vivian Yao headshot"
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

        {/* Wave modal */}
        {waveOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
            onClick={() => setWaveOpen(false)} // outside click closes
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />

            {/* Panel */}
            <div
              className="relative w-full max-w-[980px] overflow-hidden rounded-[40px] border border-white/15 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
              onClick={(e) => e.stopPropagation()} // inside click does NOT close
            >
              <div className="relative aspect-[16/10] w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              <div className="flex items-center justify-between px-6 py-5 text-white">
                <div className="text-sm text-white/80">
                  hi! (esc to close)
                </div>

                {/* optional explicit close button */}
                <button
                  type="button"
                  onClick={() => setWaveOpen(false)}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        )}
    </main>
  );
}