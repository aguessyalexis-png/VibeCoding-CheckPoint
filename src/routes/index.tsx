import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexis Aguessy — Développeur créatif & designer" },
      {
        name: "description",
        content:
          "Portfolio de Alexis Aguessy, développeur créatif et designer. Interfaces cinétiques où mouvement, lumière et typographie se rencontrent.",
      },
      { property: "og:title", content: "Alexis Aguessy — Développeur créatif & designer" },
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
      <div className="hero-ambient pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="drift-slow absolute -top-[36%] right-[8%] h-[150%] w-px rotate-[24deg] bg-border" />
        <div className="drift-slow absolute -top-[18%] right-[24%] h-[140%] w-32 rotate-[24deg] border-x border-border bg-glass/20 backdrop-blur-sm" />
        <div className="drift-reverse absolute -bottom-[48%] right-[2%] size-[38rem] rotate-45 border border-primary/10" />
        <div className="drift-reverse absolute -bottom-[41%] right-[6%] size-[31rem] rotate-45 border border-accent/10" />
        <div className="absolute right-[8%] top-[18%] hidden size-2 bg-primary shadow-glow lg:block" />
      </div>

      <main className="relative z-10 flex min-h-screen items-center px-6 py-12 sm:px-12 sm:py-16 lg:px-20 xl:px-28">
        <div className="w-full max-w-[76rem]">
          <div
            className="hero-rise mb-7 flex items-center gap-4 sm:mb-10"
            style={{ animationDelay: "80ms" }}
          >
            <span className="h-px w-12 bg-primary shadow-glow sm:w-16" />
            <span className="text-[0.625rem] font-semibold uppercase tracking-[0.32em] text-primary sm:text-xs">
              Développeur créatif &amp; designer
            </span>
          </div>

          <h1
            className="hero-rise font-display text-[4.25rem] leading-[0.88] uppercase sm:text-[7rem] lg:text-[9.5rem] xl:text-[11rem]"
            style={{ animationDelay: "160ms" }}
          >
            <span className="block text-foreground sm:inline">ALEXIS</span>{" "}
            <span className="text-primary text-glow">AGUESSY</span>
          </h1>

          <p
            className="hero-rise mt-8 max-w-[37rem] border-l border-primary/40 pl-5 text-base leading-7 text-muted-foreground sm:mt-10 sm:pl-6 sm:text-lg sm:leading-8"
            style={{ animationDelay: "280ms" }}
          >
            Je crée des interfaces cinétiques et performantes où mouvement,
            lumière et typographie se rencontrent — pour transformer des
            projets ambitieux en expériences qui bougent.
          </p>

          <div
            className="hero-rise mt-9 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-7"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#projets"
              className="premium-cta group inline-flex h-14 items-center justify-center gap-5 rounded-md border border-primary/60 bg-primary px-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Voir mes projets
              <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </a>
            <span className="text-xs font-medium text-muted-foreground/60 sm:text-sm">
              Disponible en freelance &#183; 2026
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
