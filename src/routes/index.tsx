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
        <div className="orbital orbital-one" />
        <div className="orbital orbital-two" />
        <div className="prism drift-slow" />
        <span className="particle particle-one" />
        <span className="particle particle-two" />
        <span className="particle particle-three" />
        <span className="particle particle-four" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[90rem] items-center px-6 py-8 sm:px-12 sm:py-12 lg:px-16">
        <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col justify-between border-y border-border py-4 sm:min-h-[calc(100vh-6rem)] sm:py-9">
          <div className="hero-rise flex items-center justify-between" style={{ animationDelay: "60ms" }}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-primary shadow-glow sm:w-16" />
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-primary sm:text-[0.65rem]">
              Développeur créatif &amp; designer
              </span>
            </div>
            <span className="hidden size-2 border border-primary/70 sm:block" aria-hidden="true" />
          </div>

          <div className="relative py-8 sm:py-16 lg:py-8">
            <h1
              className="hero-rise relative z-10 flex flex-col font-display text-[3.3rem] font-extrabold leading-[0.76] uppercase sm:text-[6.8rem] lg:text-[8.8rem] xl:text-[10.5rem]"
              style={{ animationDelay: "140ms" }}
            >
              <span className="text-foreground">ALEXIS</span>
              <span className="text-glow ml-[4%] text-primary sm:ml-[10%] lg:ml-[14%]">AGUESSY</span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:mt-16 sm:gap-9 lg:flex-row lg:items-end lg:justify-between">
              <p
                className="hero-rise max-w-[36rem] border-l border-primary/50 pl-5 text-sm leading-7 text-muted-foreground sm:pl-6 sm:text-base sm:leading-8"
                style={{ animationDelay: "260ms" }}
              >
                Je crée des interfaces cinétiques et performantes où mouvement,
                lumière et typographie se rencontrent — pour transformer des
                projets ambitieux en expériences qui bougent.
              </p>

              <div
                className="hero-rise flex flex-col items-start gap-5 lg:items-end"
                style={{ animationDelay: "380ms" }}
              >
                <a
                  href="#projets"
                  className="premium-cta group relative inline-flex h-14 min-w-56 items-center justify-between overflow-hidden rounded-none border border-primary/60 px-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <span className="cta-fill absolute inset-0 translate-y-full bg-primary transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative z-10">Voir mes projets</span>
                  <span aria-hidden="true" className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1">
                    &#8594;
                  </span>
                </a>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground/60">
                  Disponible en freelance &#183; 2026
                </span>
              </div>
            </div>
          </div>

          <div className="hero-rise flex items-center gap-3" style={{ animationDelay: "460ms" }} aria-hidden="true">
            <span className="h-px flex-1 bg-border" />
            <span className="size-1 bg-accent" />
            <span className="h-px w-8 bg-primary/60" />
          </div>
        </div>
      </main>
    </div>
  );
}
