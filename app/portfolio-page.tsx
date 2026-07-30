"use client";

import { useEffect } from "react";
import type { PortfolioContent } from "./content";

const CONTACT = {
  email: "ahmetahalbayrak@gmail.com",
  phoneDisplay: "+90 507 021 4264",
  phoneHref: "tel:+905070214264",
  linkedin: "https://www.linkedin.com/in/atalbayrak",
  github: "https://github.com/atalbayrak",
  resume: "/Ahmet-Taha-Albayrak-CV.pdf",
};

type PortfolioPageProps = {
  content: PortfolioContent;
};

function ProjectVisual({ variant }: { variant: "bit" | "rail" }) {
  if (variant === "bit") {
    return (
      <div className="project-visual project-visual-bit" aria-hidden="true">
        <div className="project-window-bar">
          <span />
          <span />
          <span />
          <small>LOCAL INFERENCE / WEBGPU</small>
        </div>
        <div className="bit-field">
          <span className="bit-ring bit-ring-one" />
          <span className="bit-ring bit-ring-two" />
          <span className="bit-ring bit-ring-three" />
          <div className="bit-core">
            <small>Q1</small>
            <strong>1</strong>
            <span>BIT</span>
          </div>
          <div className="bit-console">
            <span className="console-status">
              <i /> MODEL READY
            </span>
            <strong>Bonsai 1.7B</strong>
            <span className="console-stream">
              Generating locally<span />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-rail" aria-hidden="true">
      <div className="project-window-bar">
        <span />
        <span />
        <span />
        <small>OPENTTD / WEBASSEMBLY</small>
      </div>
      <div className="rail-field">
        <div className="rail-grid" />
        <span className="rail-building rail-building-one" />
        <span className="rail-building rail-building-two" />
        <span className="rail-building rail-building-three" />
        <span className="rail-tree rail-tree-one" />
        <span className="rail-tree rail-tree-two" />
        <div className="rail-line">
          <span className="rail-sleeper rail-sleeper-one" />
          <span className="rail-sleeper rail-sleeper-two" />
          <span className="rail-sleeper rail-sleeper-three" />
          <span className="rail-sleeper rail-sleeper-four" />
          <div className="rail-train">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="rail-hud">
          <span>BROWSER PORT</span>
          <strong>C++ → WASM</strong>
        </div>
      </div>
    </div>
  );
}

export function PortfolioPage({ content }: PortfolioPageProps) {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const handlePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    if (!reduceMotion) {
      window.addEventListener("pointermove", handlePointer, { passive: true });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <div className="cursor-glow" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ahmet Taha Albayrak home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="brand-name">
            Ahmet Taha <strong>Albayrak</strong>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#expertise">{content.nav.expertise}</a>
          <a href="#impact">{content.nav.impact}</a>
          <a href="#projects">{content.nav.projects}</a>
          <a href="#experience">{content.nav.experience}</a>
          <a href="#background">{content.nav.background}</a>
        </nav>

        <div className="header-actions">
          <a
            className="language-switch"
            href={content.switchHref}
            lang={content.locale === "en" ? "tr" : "en"}
            aria-label={`${content.locale === "en" ? "Türkçe" : "English"} version`}
          >
            {content.switchLabel}
          </a>
          <a className="header-cta" href={CONTACT.resume} download>
            {content.common.downloadCv}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-aurora hero-aurora-one" aria-hidden="true" />
        <div className="hero-aurora hero-aurora-two" aria-hidden="true" />

        <div className="hero-copy">
          <div className="eyebrow reveal">
            <span className="live-dot" />
            <strong className="hero-role">{content.hero.role}</strong>
            <span>{content.hero.eyebrow}</span>
          </div>

          <h1 className="reveal reveal-delay-1">
            {content.hero.titleLead}
            <br />
            {content.hero.titleMiddle}{" "}
            <em>{content.hero.titleAccent}</em>
          </h1>

          <p className="hero-lede reveal reveal-delay-2">
            {content.hero.summary}
          </p>

          <div className="hero-actions reveal reveal-delay-3">
            <a className="button button-primary" href="#experience">
              {content.common.viewExperience}
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-secondary" href={CONTACT.resume} download>
              {content.common.downloadCv}
              <span className="button-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>

          <div className="hero-proof reveal reveal-delay-4">
            {content.hero.proof.map((proof) => (
              <div key={proof.value}>
                <strong>{proof.value}</strong>
                <span>{proof.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-system reveal reveal-delay-2" aria-hidden="true">
          <div className="system-kicker">
            <span>ATA / AI CORE</span>
            <span className="system-status">ONLINE</span>
          </div>

          <div className="orbit orbit-outer">
            <div className="orbit-node node-vision">
              <span className="node-icon">◉</span>
              <span>{content.hero.systemLabels[0]}</span>
            </div>
            <div className="orbit-node node-language">
              <span className="node-icon">Aa</span>
              <span>{content.hero.systemLabels[1]}</span>
            </div>
            <div className="orbit-node node-voice">
              <span className="node-icon">⌁</span>
              <span>{content.hero.systemLabels[2]}</span>
            </div>
          </div>
          <div className="orbit orbit-middle" />
          <div className="orbit orbit-inner" />

          <div className="ai-core">
            <div className="core-rings">
              <span />
              <span />
              <span />
            </div>
            <strong>AI</strong>
            <small>{content.hero.coreLabel}</small>
          </div>

          <div className="data-pulse pulse-one" />
          <div className="data-pulse pulse-two" />
          <div className="data-pulse pulse-three" />

          <div className="signal-card">
            <span>LIVE / 30 FPS</span>
            <div className="signal-bars">
              {Array.from({ length: 8 }, (_, index) => (
                <i key={index} />
              ))}
            </div>
            <strong>{content.hero.signalLabel}</strong>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </section>

      <section className="marquee" aria-label="Artificial intelligence expertise">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div className="marquee-group" aria-hidden={group === 1} key={group}>
              {content.marquee.map((item) => (
                <span className="marquee-item" key={item}>
                  <span>{item}</span>
                  <i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section capabilities" id="expertise">
        <div className="section-heading reveal">
          <div>
            <span className="section-index">{content.expertise.index}</span>
            <h2>{content.expertise.title}</h2>
          </div>
          <p>{content.expertise.intro}</p>
        </div>

        <div className="capability-grid">
          {content.expertise.items.map((item, index) => (
            <article
              className={`capability-card reveal reveal-stagger-${(index % 3) + 1}`}
              key={item.title}
            >
              <div
                className={`card-glow card-glow-${item.accent}`}
                aria-hidden="true"
              />
              <div className="card-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span
                  className={`capability-orb orb-${item.accent}`}
                  aria-hidden="true"
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section intelligence" id="impact">
        <div className="intelligence-panel reveal">
          <div className="panel-grid" aria-hidden="true" />
          <div className="intelligence-copy">
            <span className="section-index light">{content.impact.index}</span>
            <h2>
              {content.impact.title} <em>{content.impact.accent}</em>
            </h2>
            <p>{content.impact.intro}</p>
            <a className="text-link" href="#experience">
              {content.common.viewExperience} <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="intelligence-stack">
            {content.impact.items.map((item, index) => (
              <article
                className={`stack-card stack-card-${["one", "two", "three"][index]}`}
                key={item.metric}
              >
                <span className="stack-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong className="impact-metric">{item.metric}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading reveal">
          <div>
            <span className="section-index">{content.projects.index}</span>
            <h2>{content.projects.title}</h2>
          </div>
          <p>{content.projects.intro}</p>
        </div>

        <div className="project-list">
          {content.projects.items.map((project, index) => (
            <article
              className={`project-card project-card-${project.variant} reveal`}
              key={project.title}
            >
              <div className="project-copy">
                <div className="project-kicker">
                  <span>{project.kicker}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.copy}</p>
                <div className="project-contribution">
                  <span>{content.projects.contributionLabel}</span>
                  <p>{project.contribution}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {content.projects.liveLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                    {content.projects.sourceLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <ProjectVisual variant={project.variant} />
              <span className="project-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading reveal">
          <div>
            <span className="section-index">{content.experience.index}</span>
            <h2>{content.experience.title}</h2>
          </div>
          <p>{content.experience.intro}</p>
        </div>

        <div className="experience-list">
          {content.experience.roles.map((role, index) => (
            <article className="experience-card reveal" key={role.company}>
              <div className="experience-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="experience-main">
                <div className="experience-title">
                  <div>
                    <h3>{role.company}</h3>
                    <p>{role.role}</p>
                  </div>
                  <div className="experience-meta">
                    <span>{role.period}</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                <p className="experience-summary">{role.summary}</p>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section background" id="background">
        <div className="section-heading reveal">
          <div>
            <span className="section-index">{content.background.index}</span>
            <h2>{content.background.title}</h2>
          </div>
          <p>{content.background.intro}</p>
        </div>

        <div className="background-grid">
          <article className="background-card background-card-education reveal">
            <span className="background-label">
              {content.background.educationTitle}
            </span>
            <div className="education-list">
              {content.background.education.map((item) => (
                <div className="education-item" key={item.school}>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                  </div>
                  <div className="education-meta">
                    <span>{item.period}</span>
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="background-card reveal">
            <span className="background-label">
              {content.background.publicationTitle}
            </span>
            <p className="publication-copy">{content.background.publication}</p>
          </article>

          <article className="background-card reveal">
            <span className="background-label">
              {content.background.awardsTitle}
            </span>
            <ul className="award-list">
              {content.background.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="skills-heading reveal">
          <span className="section-index light">{content.skills.index}</span>
          <h2>{content.skills.title}</h2>
        </div>
        <div className="skill-grid">
          {content.skills.groups.map((group, index) => (
            <article
              className={`skill-group reveal reveal-stagger-${(index % 3) + 1}`}
              key={group.label}
            >
              <span>{group.label}</span>
              <div>
                {group.items.map((item) => (
                  <strong key={item}>{item}</strong>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section manifesto">
        <div className="manifesto-inner reveal">
          <p>
            {content.manifesto.lead}
            <span> {content.manifesto.accent}</span>
          </p>
          <div className="manifesto-meta">
            <span>{content.manifesto.metaLeft}</span>
            <span>{content.manifesto.metaRight}</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orb" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="contact-grid" aria-hidden="true" />
        <div className="contact-inner reveal">
          <span className="section-index light">{content.contact.index}</span>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.intro}</p>
          <div className="contact-actions">
            <a
              className="button button-light"
              href={`mailto:${CONTACT.email}`}
            >
              {content.common.getInTouch}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-resume" href={CONTACT.resume} download>
              {content.common.downloadCv} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a
          className="brand footer-brand"
          href="#top"
          aria-label="Ahmet Taha Albayrak home"
        >
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>Ahmet Taha Albayrak</span>
        </a>

        <div className="footer-contact">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          <span>{content.contact.location}</span>
        </div>

        <div className="footer-links">
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Ahmet Taha Albayrak</span>
          <a href="#top">
            {content.common.backToTop} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
