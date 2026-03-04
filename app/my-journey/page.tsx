"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

type Stop = {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  image?: string;           // logo
  artifactImage?: string;   // feedback screenshot
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
          "health advocate @ hasbro children's hospital"
        ],
        image: "/images/brown-logo.jpg",
      },

      {
        id: "google",
        year: "Completed March 2022",
        title: "Google Data Analytics Certificate",
        subtitle: "",
        bullets: [
          "completed hands-on case studies in data cleaning, visualization, and analysis, with a focus on turning raw data into clear business insights.",
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
          "Underwrote venture debt deals to help extend cash runway for VC-backed startups",
          "Built financial models to evaluate company performance and repayment capacity in venture debt transactions.",
          "Developed covenant frameworks and downside scenarios used in credit approval processes",
        ],
        image: "/images/svb-logo.jpg",
      },
      {
        id: "svb2",
        year: "August 2024 - Now",
        title: "Silicon Valley Bank",
        subtitle: "Commercial Banking Associate",
        bullets: [
          "Managed a portfolio of venture, PE, and startup clients",
          "Worked across Asia + U.S. and navigated ambiguity fast",
          "Built relationships and executed under pressure",
        ],
        image: "/images/svb-logo.jpg",
      },
      {
        id: "next",
        year: "Next",
        title: "Strategy & Ops (GTM / AI)",
        subtitle: "Building thoughtfully, learning fast",
        bullets: [
          "Seeking roles at fast-growing teams",
          "Love messy problems with measurable outcomes",
          "Excited by AI + go-to-market + systems",
        ],
        image: "/images/stealth-logo.jpg",
      },
    ],
    []
  );

  // Start with nothing open => full-width timeline
  const [openId, setOpenId] = useState<string>("");

  // Progress: stops you’ve opened at least once
  const [visited, setVisited] = useState<Set<string>>(() => new Set());

  const totalStops = stops.length;
  const visitedCount = visited.size;
  const progressPct =
    totalStops === 0 ? 0 : Math.round((visitedCount / totalStops) * 100);

  const isPanelOpen = openId !== "";
  const selected = stops.find((s) => s.id === openId);

    // Lightbox: fullscreen expanded image
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  // Close lightbox with Escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxSrc(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function openStop(id: string) {
    setOpenId((prev) => (prev === id ? "" : id));
    setVisited((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  return (
    <main className="min-h-screen bg-[#e9e3db] text-[#4a3324]">
      {/* Top hero image */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src="/images/journey-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-10">
          <header className="flex items-start justify-between pt-8">
            <div className="text-base lowercase tracking-wide text-white/85">
              <Link href="/" className="hover:text-white transition">
                vivian yao
              </Link>
            </div>

            <nav className="font-sans flex gap-10 text-sm tracking-widest text-white/85">
              <Link href="/" className="hover:text-white transition">
                home
              </Link>
              <Link
                href="/my-journey"
                className="text-white underline underline-offset-[10px] decoration-white/60"
              >
                my journey
              </Link>
              <Link href="/projects" className="hover:text-white transition">
                projects
              </Link>
            </nav>
          </header>
        </div>
      </div>

      {/* Title + progress */}
      <div className="mx-auto max-w-[1400px] px-10">
        <section className="py-16 text-center">
          <h1 className="text-[clamp(2.8rem,4.8vw,4rem)] leading-[1.05] text-[#5a3b2a]">
            my journey
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[#6b4a37]/80 leading-relaxed">
            a living record of where i’ve learned, worked, and built
          </p>
        </section>

        {/* Progress bar */}
        <div className="mx-auto mt-2 max-w-[980px]">
          <div className="relative overflow-hidden rounded-full bg-[#c9c3cf] px-4 py-4">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[#6b4a37]/25 transition-[width] duration-500"
              style={{ width: `${progressPct}%` }}
              aria-hidden="true"
            />
            <div className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[#e9e3db] px-3 py-1 text-sm text-[#5a3b2a] shadow-sm">
              {progressPct}%
              <span className="text-[#6b4a37]/70">
                ({visitedCount}/{totalStops})
              </span>
            </div>
            <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#e9e3db] px-3 py-1 text-sm text-[#5a3b2a] shadow-sm">
              chapters explored
            </div>
          </div>
        </div>

        {/* big breathing room before timeline */}
        <div className="h-16" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-[1400px] px-10 pb-24">
        <div
          className={[
            "grid gap-12 transition-all duration-500 ease-out",
            isPanelOpen ? "lg:grid-cols-[1.25fr_0.85fr]" : "lg:grid-cols-1",
          ].join(" ")}
        >
          {/* LEFT: Timeline */}
          <section className="relative">
            <div className="rounded-[2rem] border border-black/10 bg-white/35 p-8 backdrop-blur">
              <div className="relative">
                {/* Wavy path */}
                <div className="pointer-events-none absolute left-3 top-0 h-full w-14 opacity-70">
                  <svg
                    viewBox="0 0 60 1200"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M30 0
                        C 10 80, 50 160, 30 240
                        C 10 320, 50 400, 30 480
                        C 10 560, 50 640, 30 720
                        C 10 800, 50 880, 30 960
                        C 10 1040, 50 1120, 30 1200"
                      fill="none"
                      stroke="rgba(74,51,36,0.22)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <ul className="space-y-10">
                  {stops.map((stop) => {
                    const isOpen = stop.id === openId;

                    return (
                      <li key={stop.id} className="relative pl-16">
                        {/* Dot */}
                        <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/55 shadow-sm backdrop-blur">
                          <span
                            className={`h-3 w-3 rounded-full ${
                              isOpen ? "bg-[#6b4a37]" : "bg-[#b18c73]"
                            }`}
                          />
                        </div>

                        {/* Card (click anywhere) */}
                        <button
                          type="button"
                          onClick={() => openStop(stop.id)}
                          className={[
                            "w-full text-left rounded-3xl border border-black/10 bg-white/50 p-6",
                            "shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition",
                            isOpen ? "bg-white/70" : "hover:bg-white/65",
                          ].join(" ")}
                          aria-expanded={isOpen}
                        >
                          {/* Header row: year + optional logo */}
                          <div className="flex items-center justify-between gap-4">
                            <div className="text-sm tracking-wide text-[#6b4a37]/80">
                              {stop.year}
                            </div>

                            {stop.image ? (
                              <div className="h-18 w-18 shrink-0 overflow-hidden rounded-full border border-black/10 bg-white/80 shadow-sm">
                                <img
                                  src={stop.image}
                                  alt=""
                                  className="h-full w-full object-contain p-2 opacity-90"
                                />
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-2">
                            <div className="text-xl text-[#4a3324]">
                              {stop.title}
                            </div>
                            {stop.subtitle ? (
                              <div className="mt-1 text-[#6b4a37]/80">
                                {stop.subtitle}
                              </div>
                            ) : null}
                          </div>

                          {/* Only show bullets when open */}
                          {isOpen ? (
                            <div className="mt-4 text-[#4a3324]/85 leading-relaxed">
                              <ul className="list-disc pl-5 space-y-1">
                                {stop.bullets.map((b) => (
                                  <li key={b}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>

          {/* RIGHT: Panel (only appears when a card is open) */}
          <aside
            className={[
              "self-start transition-all duration-500 ease-out",
              "lg:sticky lg:top-10",
              isPanelOpen
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-6 pointer-events-none lg:hidden",
            ].join(" ")}
          >
{selected ? (
  <div className="rounded-[2rem] border border-black/10 bg-white/35 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur">
    <div className="text-sm tracking-wide text-[#6b4a37]/80">featured</div>

    {/* Title row (ONLY this is horizontal) */}
    <div className="mt-4 flex items-start justify-between gap-6">
      <div className="min-w-0">
        <div className="text-3xl leading-[1.05] text-[#4a3324]">
          {selected.title}
        </div>

        <div className="mt-3 text-sm tracking-wide text-[#6b4a37]/80">
          {selected.year}
        </div>

        {selected.subtitle ? (
          <div className="mt-2 text-[#6b4a37]/85">{selected.subtitle}</div>
        ) : null}
      </div>

      {selected.image ? (
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-black/10 bg-white/85 shadow-sm">
          <img
            src={selected.image}
            alt={`${selected.title} logo`}
            className="h-full w-full object-contain p-2"
          />
        </div>
      ) : null}
    </div>

    {/* Bullets */}
    <div className="mt-8">
      <ul className="list-disc space-y-3 pl-6 text-[#4a3324]/85 leading-relaxed">
        {selected.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>

    {/* Feedback artifact (BIG, below bullets) */}
    {selected.artifactImage ? (
      <div className="mt-10">
        <div className="mb-4 text-xs tracking-wide uppercase text-[#6b4a37]/60">
          feedback
        </div>

            <button
      type="button"
      onClick={() => setLightboxSrc(selected.artifactImage!)}
      className="group block w-full"
      aria-label="Open feedback image"
    >
      <img
        src={selected.artifactImage}
        alt={`${selected.title} feedback`}
        className="w-full rounded-3xl border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.16)]"
      />
    </button>

      </div>
    ) : null}
  </div>
) : null}
          </aside>
        </div>
      </div>
            {/* Fullscreen lightbox */}
      {lightboxSrc ? (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div
              className="relative max-h-[92vh] w-[min(1100px,92vw)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxSrc(null)}
                className="absolute -top-4 -right-4 rounded-full bg-white/90 px-3 py-2 text-sm text-[#4a3324] shadow-md hover:bg-white"
              >
                close
              </button>

              <img
                src={lightboxSrc}
                alt="Expanded feedback"
                className="max-h-[92vh] w-full rounded-3xl object-contain shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </div>
      ) : null}

    </main>
  );
}
