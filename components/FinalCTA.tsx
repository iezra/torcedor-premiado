"use client";

import { ArrowRight } from "lucide-react";
import { useTeam } from "@/lib/team-context";

export default function FinalCTA() {
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
    <section className="mx-auto max-w-[1160px] px-[clamp(18px,4vw,36px)] pb-[clamp(56px,8vw,90px)]">
      <div
        className="rounded-[32px] px-[clamp(28px,5vw,64px)] py-[clamp(48px,7vw,88px)] text-center shadow-lg"
        style={{
          background: "linear-gradient(150deg, var(--color-accent), var(--color-accent-700))",
          color: "var(--tp-on-accent, #fff)",
        }}
      >
        <h2 className="mx-auto mb-[18px] max-w-[16ch] text-[clamp(32px,5.4vw,60px)] leading-[1.04] tracking-[-0.03em]">
          Agora torcer vale a pena
        </h2>
        <p className="mx-auto mb-[34px] max-w-[40ch] text-[clamp(16px,2vw,20px)] leading-[1.5] opacity-[.92]">
          R$1,99 no primeiro mês. Sua única dúvida vai ser: qual time escolher?
        </p>
        <button
          onClick={scrollToSelector}
          className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-[34px] py-[18px] font-heading text-[17px] font-extrabold text-accent-700 transition-all duration-200 hover:-translate-y-0.5"
        >
          {ctaLabel} <ArrowRight size={19} strokeWidth={2.4} />
        </button>
      </div>
    </section>
  );
}
