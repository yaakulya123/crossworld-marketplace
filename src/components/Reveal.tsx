"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        }
      },
      {
        // Fire when the element is actually in view (12% in from the bottom),
        // so the animation plays as the user scrolls into each section.
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      }
    );
    els.forEach((el) => obs.observe(el));

    // Safety net for elements that never intersect (e.g. hidden by layout quirks
    // or under the fold of a very short page). 6s is long enough that normal
    // scrolling will trigger the animation first.
    const t = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 6000);

    return () => {
      obs.disconnect();
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
