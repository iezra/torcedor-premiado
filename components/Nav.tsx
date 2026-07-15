"use client";

import Image from "next/image";
import { RefreshCw } from "lucide-react";
import { useTeam } from "@/lib/team-context";

export default function Nav() {
  const { selected, crestPath, openSplash, ctaLabel } = useTeam();

  const scrollToSelector = () => {
    const el = document.getElementById("selector");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
  };

  return (
    <nav className="sticky top-0 z-70 border-b border-neutral-200 bg-[color-mix(in_srgb,var(--color-bg)_82%,transparent)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1160px] items-center gap-2 px-[clamp(18px,4vw,36px)] py-3.5 sm:gap-6">
        <div className="mr-auto flex items-center gap-[9px] font-heading text-lg font-extrabold tracking-tight">
          <span className="grid h-[26px] w-[26px] place-items-center rounded-lg bg-accent text-xs" style={{ color: "var(--tp-on-accent, #fff)" }}>
            TP
          </span>
          Torcedor{" "}
          <span className="text-accent">Premiado</span>
          {selected && crestPath && (
            <Image
              src={crestPath}
              alt={selected}
              width={36}
              height={36}
              className="ml-0.5 h-9 w-9 rounded-full object-contain"
            />
          )}
        </div>

        {selected && (
          <button
            onClick={openSplash}
            className="inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[13px] font-semibold text-neutral-800 hover:text-accent"
          >
            <RefreshCw size={15} />
            <span className="hidden sm:inline">Trocar time · {selected}</span>
          </button>
        )}

        <button
          onClick={scrollToSelector}
          className="cursor-pointer rounded-full bg-accent px-3 py-2 font-heading text-xs font-extrabold shadow-[0_6px_18px_rgba(236,48,19,.3)] transition-all duration-200 hover:-translate-y-px hover:bg-accent-600 sm:px-5 sm:py-[11px] sm:text-[13.5px]"
          style={{ color: "var(--tp-on-accent, #fff)" }}
        >
          Quero participar
        </button>
      </div>
    </nav>
  );
}
