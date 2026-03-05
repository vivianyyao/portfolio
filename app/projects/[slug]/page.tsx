"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "../projectsData";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug;

  // slug can be string | string[]
  const slugStr = Array.isArray(slug) ? slug[0] : slug;

  const project = projects.find((p) => p.slug === slugStr);

  if (!slugStr) {
    return (
      <main className="min-h-screen bg-[#e9e1d6] text-[#2b2118]">
        <div className="mx-auto max-w-[900px] px-10 py-20">
          <p className="text-sm text-[#2b2118]/70">Missing slug.</p>
          <Link href="/projects" className="mt-6 inline-block underline">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#e9e1d6] text-[#2b2118]">
        <div className="mx-auto max-w-[900px] px-10 py-20">
          <p className="text-sm text-[#2b2118]/70">Case study not found.</p>
          <p className="mt-2 text-xs text-[#2b2118]/50">slug: {slugStr}</p>
          <Link href="/projects" className="mt-6 inline-block underline">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#e9e1d6] text-[#2b2118]">
      <div className="mx-auto max-w-[900px] px-10 py-16">
        {/* NAV */}
        <header className="flex items-start justify-between">
          <div className="font-sans text-base lowercase tracking-wide text-[#2b2118]/80">
            vivian yao
          </div>

          <nav className="font-sans flex gap-10 text-sm tracking-wide text-[#2b2118]/70">
            <Link href="/" className="hover:text-[#2b2118] transition">
              home
            </Link>
            <Link href="/my-journey" className="hover:text-[#2b2118] transition">
              my journey
            </Link>
            <Link
              href="/projects"
              className="text-[#2b2118] underline underline-offset-[10px] decoration-[#2b2118]/40"
            >
              projects
            </Link>
          </nav>
        </header>

        {/* HEADER */}
        <div className="mt-16">
          <Link
            href="/projects"
            className="text-sm text-[#2b2118]/60 hover:text-[#2b2118] transition"
          >
            ← back
          </Link>

          <h1 className="mt-6 font-sans text-5xl tracking-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-[#2b2118]/70 leading-relaxed">
            {project.subtitle}
          </p>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-[#2b2118]/70"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CONTENT */}
          <div className="mt-12 space-y-10">
            {project.sections.map((s, idx) => (
              <section key={idx}>
                <h2 className="font-sans text-2xl">{s.title}</h2>

                {s.type === "text" && (
                  <p className="mt-4 text-base leading-relaxed text-[#2b2118]/75">
                    {s.body}
                  </p>
                )}

                {s.type === "bullets" && (
                  <ul className="mt-5 space-y-3 text-base text-[#2b2118]/75">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[10px] h-[5px] w-[5px] flex-none rounded-full bg-[#2b2118]/35" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.type === "metrics" && (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {s.items.map((m) =>
                        m.href ? (
                            <a
                            key={m.label}
                            href={m.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-3xl border border-black/10 bg-white/60 px-6 py-5 transition hover:bg-white/80 hover:shadow-md hover:-translate-y-[1px]"
                            >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                <div className="text-xs uppercase tracking-wide text-[#2b2118]/50">
                                    {m.label}
                                </div>
                                <div className="mt-1 text-base font-medium text-[#2b2118]/80">
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
                            className="rounded-3xl border border-black/10 bg-white/60 px-6 py-5"
                            >
                            <div className="text-xs uppercase tracking-wide text-[#2b2118]/50">
                                {m.label}
                            </div>
                            <div className="mt-1 text-base font-medium text-[#2b2118]/80">
                                {m.value}
                            </div>
                            </div>
                        )
                        )}
                    </div>
                    )}

                {s.type === "links" && (
                  <div className="mt-5 flex flex-col gap-3">
                    {s.items.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between rounded-3xl border border-black/10 bg-white/60 px-6 py-5 text-base text-[#2b2118]/75 hover:bg-white/80 transition"
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
    </main>
  );
}
