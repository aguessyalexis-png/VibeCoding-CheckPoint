import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Léo Marchand — Développeur créatif & designer" },
      {
        name: "description",
        content:
          "Portfolio de Léo Marchand, développeur créatif et designer. Interfaces cinétiques où mouvement, lumière et typographie se rencontrent.",
      },
      { property: "og:title", content: "Léo Marchand — Développeur créatif & designer" },
      {
        property: "og:description",
        content:
          "Interfaces cinétiques où mouvement, lumière et typographie se rencontrent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-feathered relative min-h-screen w-full overflow-hidden font-body text-foreground antialiased">
      {/* Cool gradient light */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="drift-a absolute -top-40 -left-24 h-[70vh] w-[70vh] rounded-full bg-primary/10 blur-[140px]" />
        <div className="drift-b absolute top-1/3 -right-24 h-[60vh] w-[60vh] rounded-full bg-glow-blue/10 blur-[150px]" />
        <div className="drift-a absolute bottom-[-10%] left-1/4 h-[50vh] w-[50vh] rounded-full bg-glow-pink/5 blur-[140px]" />
      </div>

      {/* Kinetic frosted-glass panels */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="drift-b absolute -top-1/4 right-[6%] h-[150%] w-44 rotate-[24deg] border border-white/[0.06] bg-glass/60 shadow-[0_0_80px_rgba(47,224,192,0.07)] backdrop-blur-md" />
        <div className="drift-a absolute top-[10%] right-[24%] h-[130%] w-24 rotate-[24deg] border border-primary/10 bg-glass/40 backdrop-blur-sm" />
        <div className="drift-b absolute -top-1/4 left-[30%] h-[150%] w-32 rotate-[24deg] border border-white/[0.05] bg-glass/40 backdrop-blur-md" />
        <div className="drift-a absolute top-[20%] left-[6%] h-[120%] w-16 rotate-[24deg] border border-white/[0.05] bg-glass/40 backdrop-blur-sm" />
      </div>

      {/* Hero */}
      <main className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-16 sm:px-12 lg:px-20">
        <div className="max-w-5xl">
          <div
            className="hero-rise mb-12 flex items-center gap-3"
            style={{ animationDelay: "80ms" }}
          >
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Développeur créatif &amp; designer
            </span>
          </div>

          <h1
            className="hero-rise font-display text-[16vw] leading-[0.95] tracking-tight text-foreground sm:text-[13vw] lg:text-[9.5rem]"
            style={{ animationDelay: "160ms" }}
          >
            LÉO{" "}
            <span className="text-primary">MARCHAND</span>
          </h1>

          <p
            className="hero-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ animationDelay: "280ms" }}
          >
            Je crée des interfaces cinétiques et performantes où mouvement,
            lumière et typographie se rencontrent — pour transformer des
            projets ambitieux en expériences qui bougent.
          </p>

          <div
            className="hero-rise mt-12 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#projets"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              Voir mes projets
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </a>
            <span className="text-sm font-medium text-muted-foreground/60">
              Disponible en freelance &#183; 2026
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
