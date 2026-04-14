"use client";
import { useState } from "react";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="flex rounded-full bg-white/5 border border-white/15 focus-within:border-[var(--color-brand-300)] overflow-hidden"
    >
      <input
        type="email"
        required
        placeholder="you@somewhere.bh"
        className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-white/40 text-white"
      />
      <button className="btn btn-brand !rounded-none !rounded-r-full !py-3 !px-6">
        {sent ? "✓ Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}
