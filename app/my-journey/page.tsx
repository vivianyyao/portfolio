"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

type Stop = {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  image?: string;
  artifactImage?: string;
};

export default function MyJourneyPage() {
  const stops: Stop[] = useMemo(
    () => [
      {
        id: "brown",
        year: "Aug 2019 - May 2023",
        title: "Brown University",
        subtitle: "B.S. in Biology and Business Economics",
        bullets: [
          "peer mental health advocate @ project LETS",
          "vp public relations @ panhellenic",
          "associate member @ women in business",
          "public relations & marketing chair @ brown mahjong club",
          "health advocate @ hasbro children's hospital",
        ],
        image: "/images/brown-logo.jpg",
      },
      {
        id: "google",
        year: "Completed March 2022",
        title: "Google Data Analytics Certificate",
        bullets: [
          "completed hands-on case studies in data cleaning, visualization, and analysis",
        ],
        image: "/images/google_logo.png",
      },
      {
        id: "oracle",
        year: "2022",
        title: "Oracle Analytics",
        subtitle: "Product Marketing Intern",
        bullets: [
          "Owned internal tools with minimal ramp-up",
          "Wrote high-performing social content",
          "Built credibility quickly across teams",
        ],
        image: "/images/oracle-logo.png",
        artifactImage: "/images/oracle-internship.jpeg",
      },
      {
        id: "svb",
        year: "Sept 2023 - Aug 2024",
        title: "Silicon Valley Bank",
        subtitle: "Associate Development Program",
        bullets: [
          "Underwrote venture debt deals",
          "Built financial models for venture debt underwriting",
          "Developed covenant frameworks and downside scenarios",
        ],
        image: "/images/svb-logo.jpg",
      },
      {
        id: "svb2",
        year: "Aug 2024 - Now",
        title: "Silicon Valley Bank",
        subtitle: "Commercial Banking Associate",
        bullets: [
          "Manage venture and startup client portfolio",
          "Work across Asia + U.S.",
          "Operate in fast-moving ambiguity",
        ],
        image: "/images/svb-logo.jpg",
      },
      {
        id: "next",
        year: "Next",
        title: "Strategy & Ops (GTM / AI)",
        subtitle: "Building thoughtfully, learning fast",
        bullets: [
          "Looking for GTM / strategy roles",
          "Love messy problems with measurable outcomes",
          "Excited by AI + systems thinking",
        ],
        image: "/images/stealth-logo.jpg",
      },
    ],
    []
  );

  const [openId, setOpenId] = useState("");
  const [visited, setVisited] = useState<Set<string>>(() => new Set());

  const selected = stops.find((s) => s.id === openId);
  const isPanelOpen = openId !== "";

  const progressPct = Math.round((visited.size / stops.length) * 100);

  function openStop(id: string) {
    setOpenId((prev) => (prev === id ? "" : id));

    setVisited((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxSrc(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen text-[#4a3324]">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 bg-ambient" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="fixed inset-0 -z-10 bg-noise" />

      <div className="mx-auto max-w-[1560px] px-6 py-6 sm:px-10 sm:py-10">
        <div className="canvas-panel px-8 py-10 sm:px-12 sm:py-12">
          {/* Header */}
          <header className="flex items-start justify-between">
            <div className="text-sm lowercase tracking-wide text-[#2b2118]/70">
              <Link href="/">vivian yao</Link>
            </div>

            <nav className="flex gap-10 text-sm tracking-wide text-[#2b2118]/65">
              <Link href="/">home</Link>
              <Link
                href="/my-journey"
                className="text-[#2b2118] underline underline-offset-[10px]"
              >
                my journey
              </Link>
              <Link href="/projects">projects</Link>
            </nav>
          </header>

          {/* Title */}
          <section className="py-16 text-center">
            <h1 className="text-[clamp(2.8rem,4.8vw,4rem)]">my journey</h1>
            <p className="mt-6 text-[#6b4a37]/80">
              a living record of where i’ve learned, worked, and built
            </p>
          </section>

        {/* Progress bar */}
        <div className="mx-auto mt-2 max-w-[980px] mb-14">
          <div className="relative h-12 overflow-hidden rounded-full bg-[#c9c3cf] p-1">
            {/* Fill */}
            <div
              className="absolute inset-y-1 left-1 rounded-full bg-[#6b4a37]/25 transition-[width] duration-500"
              style={{ width: `${progressPct}%` }}
              aria-hidden="true"
            />

            {/* Left badge */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f4efe8]/95 px-3 py-1 text-sm text-[#5a3b2a] shadow-sm">
                {progressPct}%
                <span className="text-[#6b4a37]/70">
                  ({visited.size}/{stops.length})
                </span>
              </div>
            </div>

            {/* Right badge */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="inline-flex items-center rounded-full bg-[#f4efe8]/95 px-3 py-1 text-sm text-[#5a3b2a] shadow-sm">
                chapters explored
              </div>
            </div>
          </div>
        </div>

          {/* Layout */}
          <div
            className={[
              "grid gap-12 transition-all duration-500",
              isPanelOpen ? "lg:grid-cols-[1.25fr_0.85fr]" : "lg:grid-cols-1",
            ].join(" ")}
          >
            {/* Timeline */}
            <section className="relative">
              <div className="rounded-[2rem] border border-black/10 bg-white/30 p-6 backdrop-blur">
                <div className="relative">

                  {/* vertical rail */}
                  <div className="absolute left-[26px] top-3 bottom-3 w-[2px] rounded-full bg-[#6b4a37]/18" />
                  <ul className="space-y-6">
                    {stops.map((stop) => {
                      const active = stop.id === openId;

                      return (
                        <li key={stop.id} className="relative pl-16">
                          {/* node */}
                          <div className="absolute left-[18px] top-[28px] h-5 w-5 rounded-full border border-black/10 bg-white shadow-sm">
                          <div
                            className={[
                              "absolute inset-[4px] rounded-full transition",
                              active
                                ? "bg-[#6b4a37] shadow-[0_0_0_6px_rgba(107,74,55,0.10)]"
                                : "bg-[#b18c73]",
                            ].join(" ")}
                          />
                        </div>

                          <button
                            onClick={() => openStop(stop.id)}
                            className={[
                              "w-full rounded-3xl border border-black/10 bg-white/60 p-5 text-left shadow-sm transition",
                              active
                                ? "bg-white/80 ring-1 ring-[#6b4a37]/20"
                                : "hover:bg-white/70",
                            ].join(" ")}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className="text-xs uppercase text-[#6b4a37]/70">
                                  {stop.year}
                                </div>

                                <div className="mt-1 text-lg">
                                  {stop.title}
                                </div>

                                {stop.subtitle && (
                                  <div className="text-sm text-[#6b4a37]/80">
                                    {stop.subtitle}
                                  </div>
                                )}
                              </div>

                              {stop.image && (
                                <div className="h-12 w-12 overflow-hidden rounded-full border bg-white">
                                  <img
                                    src={stop.image}
                                    className="h-full w-full object-contain p-1"
                                  />
                                </div>
                              )}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>

            {/* Right panel */}
            <aside
              className={[
                "self-start transition-all duration-500",
                "lg:sticky lg:top-10",
                isPanelOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-6 pointer-events-none lg:hidden",
              ].join(" ")}
            >
              {selected && (
                <div className="rounded-[2rem] border border-black/10 bg-white/35 p-8 shadow-lg backdrop-blur">
                  <div className="text-sm text-[#6b4a37]/80">featured</div>

                  <div className="mt-4 text-3xl">{selected.title}</div>

                  <div className="mt-2 text-sm text-[#6b4a37]/80">
                    {selected.year}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm">
                    {selected.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>

                  {selected.artifactImage && (
                    <div className="mt-8">
                      <button
                        onClick={() => setLightboxSrc(selected.artifactImage!)}
                      >
                        <img
                          src={selected.artifactImage}
                          className="rounded-3xl shadow-lg"
                        />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-6"
          onClick={() => setLightboxSrc(null)}
        >
          <img
            src={lightboxSrc}
            className="max-h-[90vh] rounded-3xl shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}