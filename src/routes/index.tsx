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
    <div id="accueil" className="studio-canvas relative min-h-screen overflow-hidden font-body text-foreground antialiased">
      <div className="studio-light pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="motion-line motion-line-one" aria-hidden="true" />
      <div className="motion-line motion-line-two" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-6 py-7 sm:px-10 lg:px-16 lg:py-10">
        <header className="hero-rise flex items-start justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="size-1.5 bg-primary shadow-glow" aria-hidden="true" />
            <span className="text-[0.56rem] font-semibold uppercase tracking-[0.28em] text-primary sm:text-[0.62rem]">
              Développeur créatif &amp; designer
            </span>
          </div>
          <nav aria-label="Navigation principale" className="hidden md:block">
            <ul className="flex gap-8 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <li><a className="nav-link text-foreground" href="#accueil">Accueil</a></li>
              <li><a className="nav-link" href="#projets">Projets</a></li>
              <li><a className="nav-link" href="#a-propos">À propos</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
          <section className="relative z-10">
            <p className="hero-rise mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-accent sm:mb-7" style={{ animationDelay: "80ms" }}>
              Code <span className="mx-2 text-border">/</span> Design <span className="mx-2 text-border">/</span> Motion
            </p>
            <h1 className="hero-rise flex flex-col font-display text-[3.6rem] font-extrabold leading-[0.82] uppercase sm:text-[6rem] lg:text-[7.4rem] xl:text-[8.5rem]" style={{ animationDelay: "140ms" }}>
              <span className="text-foreground">ALEXIS</span>
              <span className="name-gradient">AGUESSY</span>
            </h1>
            <p className="hero-rise mt-8 max-w-[35rem] border-l border-primary/60 pl-5 text-sm leading-7 text-muted-foreground sm:mt-10 sm:pl-6 sm:text-base sm:leading-8" style={{ animationDelay: "220ms" }}>
              Je crée des interfaces cinétiques et performantes où mouvement,
              lumière et typographie se rencontrent — pour transformer des
              projets ambitieux en expériences qui bougent.
            </p>
            <a id="projets" href="#projets" className="premium-cta hero-rise group mt-8 inline-flex h-14 min-w-60 items-center justify-between overflow-hidden border border-primary/60 px-6 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-foreground sm:mt-10" style={{ animationDelay: "300ms" }}>
              <span className="cta-fill absolute inset-0" />
              <span className="relative z-10">Voir mes projets</span>
              <span className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&#8594;</span>
            </a>
          </section>

          <div className="hero-rise relative mx-auto hidden aspect-square w-full max-w-[35rem] lg:block" style={{ animationDelay: "220ms" }} aria-label="Composition abstraite représentant le code, le design et le mouvement">
            <div className="visual-orbit" aria-hidden="true" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /></div>
              <div className="code-body" aria-hidden="true">
                <span className="code-row w-2/3" /><span className="code-row ml-5 w-4/5" />
                <span className="code-row ml-5 w-1/2" /><span className="code-row w-3/4" />
                <span className="code-row ml-5 w-3/5" />
              </div>
              <span className="code-symbol" aria-hidden="true">&lt;/&gt;</span>
            </div>
            <div className="ui-panel ui-panel-top" aria-hidden="true"><span /><span /><span /></div>
            <div className="ui-panel ui-panel-bottom" aria-hidden="true"><span /><span /></div>
            <span className="visual-node visual-node-one" aria-hidden="true" />
            <span className="visual-node visual-node-two" aria-hidden="true" />
          </div>
        </div>

        <footer id="contact" className="hero-rise flex items-center justify-between border-t border-border pt-5" style={{ animationDelay: "380ms" }}>
          <span className="flex items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary shadow-glow" aria-hidden="true" /> Disponible en freelance
          </span>
          <div className="flex items-center gap-4" aria-label="Réseaux sociaux">
            <a className="social-link" href="#contact" aria-label="LinkedIn">in</a>
            <a className="social-link" href="#contact" aria-label="GitHub">gh</a>
            <a className="social-link" href="#contact" aria-label="Dribbble">dr</a>
          </div>
        </footer>
        <span id="a-propos" className="sr-only">À propos</span>
      </main>
    </div>
  );
}
