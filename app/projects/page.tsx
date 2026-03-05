"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { projects as projectsData } from "./projectsData";

export default function ProjectsPage() {
  const projects = useMemo(() => projectsData, []);
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  // Lock scroll when modal is open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  // ESC to close
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

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
              <Link href="/" className="hover:text-[#2b2118] transition">
                home
              </Link>
              <Link href="/my-journey" className="hover:text-[#2b2118] transition">
                my journey
              </Link>
              <Link
                href="/projects"
                className="text-[#2b2118] underline underline-offset-[10px] decoration-[#2b2118]/30"
              >
                projects
              </Link>
            </nav>
          </header>

          {/* Title */}
          <section className="mt-20 max-w-2xl">
            <h1 className="text-5xl tracking-tight">Projects</h1>
            <p className="mt-4 text-lg text-[#2b2118]/70 leading-relaxed">
              click for preview, read full for the deep dive
            </p>
          </section>

          {/* Cards */}
          <section className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                className="text-left rounded-[28px] border border-black/10 bg-white/60 p-8 shadow-sm transition hover:-translate-y-1 hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl">{p.title}</h2>
                  <span className="mt-1 inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-[#2b2118]/70">
                    view
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#2b2118]/70">{p.subtitle}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-[#2b2118]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </section>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
          {/* Click-outside overlay */}
          <button
            type="button"
            aria-label="Close modal"
            onClick={() => setActiveId(null)}
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
          />

          {/* Modal panel */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-black/10 bg-[#f3ede4] shadow-[0_30px_90px_rgba(0,0,0,0.35)] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-6 border-b border-black/10 px-7 py-6">
                <div>
                  <div className="text-2xl tracking-tight">
                    {active.title}
                  </div>
                  <div className="mt-1 text-sm text-[#2b2118]/70">
                    {active.subtitle}
                  </div>
                </div>

                <Link
                  href={`/projects/${active.slug}`}
                  className="rounded-full bg-[#2b2118] px-5 py-2 text-sm text-white hover:opacity-90 transition"
                >
                  read full →
                </Link>
              </div>

              <div className="max-h-[78vh] overflow-y-auto px-7 py-7">
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-[#2b2118]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-8">
                  {(active.previewSections ?? active.sections).map((s, idx) => (
                    <section key={idx}>
                      <h3 className="text-xl">{s.title}</h3>

                      {s.type === "text" && (
                        <p className="mt-3 text-sm leading-relaxed text-[#2b2118]/75">
                          {s.body}
                        </p>
                      )}

                      {s.type === "bullets" && (
                        <ul className="mt-4 space-y-3 text-sm text-[#2b2118]/75">
                          {s.items.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-[9px] h-[4px] w-[4px] flex-none rounded-full bg-[#2b2118]/40" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {s.type === "metrics" && (
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {s.items.map((m) =>
                            m.href ? (
                              <a
                                key={m.label}
                                href={m.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-2xl border border-black/10 bg-white/60 px-5 py-4 transition hover:bg-white/80 hover:shadow-md hover:-translate-y-[1px]"
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <div className="text-xs uppercase tracking-wide text-[#2b2118]/50">
                                      {m.label}
                                    </div>
                                    <div className="mt-1 text-sm font-medium text-[#2b2118]/80">
                                      {m.value}
                                    </div>
                                  </div>
                                  <span className="text-[#2b2118]/35 transition group-hover:text-[#2b2118]/55">
                                    ↗
                                  </span>
                                </div>
                              </a>
                            ) : (
                              <div
                                key={m.label}
                                className="rounded-2xl border border-black/10 bg-white/60 px-5 py-4"
                              >
                                <div className="text-xs uppercase tracking-wide text-[#2b2118]/50">
                                  {m.label}
                                </div>
                                <div className="mt-1 text-sm font-medium text-[#2b2118]/80">
                                  {m.value}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {s.type === "links" && (
                        <div className="mt-4 flex flex-col gap-2">
                          {s.items.map((l) => (
                            <a
                              key={l.label}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-5 py-4 text-sm text-[#2b2118]/75 hover:bg-white/80 transition"
                            >
                              <span>{l.label}</span>
                              <span className="text-[#2b2118]/40">↗</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}