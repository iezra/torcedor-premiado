"use client";

import { Check } from "lucide-react";

const benefits = [
  "R$100 em Vale Bônus ao se cadastrar",
  "+R$100 em Vale Bônus a cada gol",
  "iPhone 17 sorteado todo dia",
  "R$100 mil sorteados toda semana",
  "Carro BYD sorteado todo mês",
];

export default function Pricing() {
  const scrollToSelector = () => {
    const el = document.getElementById("selector");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
  };

  return (
    <section id="planos" className="bg-surface">
      <div className="mx-auto max-w-[1160px] px-[clamp(18px,4vw,36px)] py-[clamp(56px,8vw,96px)]">
        <div className="mx-auto mb-11 max-w-[600px] text-center">
          <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[.08em] text-accent">
            A oferta
          </div>
          <h2 className="text-[clamp(30px,4.6vw,46px)] leading-[1.08] tracking-[-0.025em]">
            Menos que um café. Prêmios milionários.
          </h2>
        </div>

        <div className="mx-auto max-w-[440px] rounded-[26px] border-2 border-accent bg-bg p-[clamp(28px,4vw,40px)] shadow-lg">
          <div className="mb-[18px] inline-flex rounded-full bg-accent-100 px-3.5 py-1.5 text-xs font-extrabold text-accent-700">
            Torcedor Premiado
          </div>
          <div className="mb-0.5 text-[15px] text-neutral-600 line-through">
            De R$9,90/mês
          </div>
          <div className="mb-1.5 flex items-baseline gap-2">
            <span className="font-heading text-[clamp(44px,7vw,60px)] font-extrabold tracking-[-0.03em]">
              R$1,99
            </span>
            <span className="text-[15px] text-neutral-700">/ 1º mês</span>
          </div>
          <p className="mb-6 text-sm text-neutral-800">
            Depois R$9,90/mês · cancele quando quiser
          </p>

          <div className="mb-7 flex flex-col gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 text-[14.5px]">
                <Check size={20} className="text-accent" strokeWidth={3} />
                {b}
              </div>
            ))}
          </div>

          <button
            onClick={scrollToSelector}
            className="w-full cursor-pointer rounded-full bg-accent py-[18px] font-heading text-[17px] font-extrabold text-white shadow-[0_10px_26px_rgba(236,48,19,.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-600"
          >
            Escolher meu time
          </button>
        </div>
      </div>
    </section>
  );
}
