"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));

    if (!("IntersectionObserver" in window) || typeof window === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
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
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }
    );
    els.forEach((el) => obs.observe(el));

    // Safety net: anything still hidden after 1.2s becomes visible,
    // e.g. when the browser restores scroll before IO had a chance to fire.
    const t = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 1200);

    return () => {
      obs.disconnect();
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
