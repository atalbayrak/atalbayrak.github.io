"use client";

import { useEffect, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

type SiteInteractionsProps = {
  closeLabel: string;
  email: string;
  emailLabel: string;
  menuLabel: string;
  navigation: NavigationItem[];
};

export function SiteInteractions({
  closeLabel,
  email,
  emailLabel,
  menuLabel,
  navigation,
}: SiteInteractionsProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const handlePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <button
        className="mobile-menu-button"
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? closeLabel : menuLabel}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <div
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav aria-label={menuLabel}>
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="mobile-navigation-email"
            href={`mailto:${email}`}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            {emailLabel}
          </a>
        </nav>
      </div>
    </>
  );
}
