import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Image fallback */}
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/10" />

      {/* Foreground (this MUST be full-height so absolute children can pin to bottom) */}
      <div className="relative z-20 min-h-screen">
        {/* Header / Nav */}
        <div className="mx-auto max-w-[1400px] px-10">
          <header className="flex items-start justify-between pt-10">
            <div className="font-serif text-base lowercase tracking-wide text-white/80">
              vivian yao
            </div>

            <nav className="font-serif flex gap-10 text-sm tracking-wide text-white/80">
              <Link
                href="/"
                className="text-white/90 underline underline-offset-[10px] decoration-white/60"
              >
                home
              </Link>

              <Link href="/my-journey" className="hover:text-white/95 transition">
                my journey
              </Link>

              <Link href="/projects" className="hover:text-white/95 transition">
                projects
              </Link>
            </nav>
          </header>
        </div>

        {/* Hero text */}
        <section className="absolute left-10 top-[170px] z-20 max-w-[720px]">
          <p className="font-serif max-w-3xl text-[clamp(2.25rem,2.5vw,2.75rem)] leading-[1.25] text-white">
            strategy & finance professional solving complex problems in growing
            companies, with a focus on learning fast and building thoughtfully
          </p>

          <div className="mt-10">
            <Link
              href="/my-journey"
              className="inline-flex items-center rounded-full bg-white/75 px-12 py-4 font-serif text-sm text-neutral-800 shadow-sm backdrop-blur hover:bg-white/85 transition"
            >
              my journey
            </Link>
          </div>
        </section>

        {/* Scrolling words pinned to bottom */}
        <div className="absolute bottom-10 left-0 z-10 w-full marquee-wrapper">
          <div className="animate-marquee whitespace-nowrap text-white/90 text-[clamp(3rem,10vw,8rem)] leading-none tracking-wide">
            <span className="mr-16">learning fast &amp; building smart</span>
            <span className="mr-16">learning fast &amp; building smart</span>
          </div>
        </div>
      </div>
    </main>
  );
}
