"use client";
import { useEffect, useState } from "react";

export function CountdownStrip() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      const diff = end.getTime() - now.getTime();
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const cell = (v: number, label: string) => (
    <div className="flex flex-col items-center">
      <div className="min-w-[46px] rounded-lg bg-[var(--color-ink-900)] text-white font-display font-semibold text-xl md:text-2xl py-1.5 px-2 text-center tabular-nums">
        {v.toString().padStart(2, "0")}
      </div>
      <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-500)] mt-1">{label}</div>
    </div>
  );

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-ink-500)]">Ends in</span>
      <div className="flex items-center gap-2">
        {cell(time.h, "Hours")}
        <span className="font-display text-xl text-[var(--color-ink-400)]">:</span>
        {cell(time.m, "Min")}
        <span className="font-display text-xl text-[var(--color-ink-400)]">:</span>
        {cell(time.s, "Sec")}
      </div>
    </div>
  );
}
