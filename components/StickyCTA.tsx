"use client";

import { ArrowRight } from "lucide-react";
import { useTeam } from "@/lib/team-context";

export default function StickyCTA() {
  const { ctaLabel } = useTeam();

  const scrollToSelector = () => {
    const el = document.getElementById("selector");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
  };

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 right-4 z-60 flex justify-center">
      <div className="pointer-events-auto flex w-full max-w-[520px] items-center gap-4 rounded-full bg-text py-[10px] pr-[10px] pl-[22px] text-bg shadow-lg">
        <div className="min-w-0 leading-[1.15]">
          <div className="whitespace-nowrap font-heading text-sm font-extrabold">
            R$1,99 no 1º mês
          </div>
          <div className="truncate text-[11px] opacity-60">
            depois R$9,90/mês
          </div>
        </div>
        <button
          onClick={scrollToSelector}
          className="ml-auto inline-flex cursor-pointer items-center gap-[10px] whitespace-nowrap rounded-full bg-accent px-5 py-[13px] font-heading text-sm font-extrabold transition-all duration-200 hover:bg-accent-600"
          style={{ color: "var(--tp-on-accent, #fff)" }}
        >
          {ctaLabel} <ArrowRight size={15} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
