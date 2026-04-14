"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showAll = () =>
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => el.classList.add("is-visible"));

    if (prefersReduced || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

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
        // Fire when the element is ~12% past the bottom of the viewport,
        // so the user sees it animate as they scroll toward it.
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => obs.observe(el));
    };
    observeAll();

    // Re-observe on tab visibility restore — handles cases where the browser
    // threw away the observer (rare, but cheap insurance).
    const onVisibility = () => { if (!document.hidden) observeAll(); };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      obs.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [pathname]);

  return null;
}
