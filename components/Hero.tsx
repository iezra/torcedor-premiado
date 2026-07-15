"use client";

import Image from "next/image";
import { Smartphone, Banknote, Car, ArrowRight } from "lucide-react";
import { useTeam } from "@/lib/team-context";

export default function Hero() {
  const { selected, theme, ctaLabel } = useTeam();

  const scrollToSelector = () => {
    const el = document.getElementById("selector");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
  };

  const heroBadge = theme
    ? "Você + 180 mil torcedores"
    : "Apresentado por Marcos Mion";
  const heroLead = theme ? `${theme.cheer}, concorra a ` : "Torça e concorra a ";
  const heroSub = theme
    ? `A assinatura que faz o amor ${theme.of} finalmente valer a pena. Ganhe Vale Bônus, prêmios a cada gol ${theme.of} e concorra a um iPhone 17 por dia, R$125 mil por semana e um carro todo mês!`
    : "A assinatura que faz o amor pelo seu time finalmente valer a pena. Ganhe Vale Bônus, prêmios por gol e concorra a um iPhone 17 por dia, R$125 mil por semana, e um carro todo mês!";
  const golLabel = theme ? `GOOOL ${theme.of}! ⚽` : "GOOOL! ⚽";

  return (
    <section
      className="bg-bg"
      style={{
        background:
          "radial-gradient(1100px 560px at 78% -12%, var(--color-accent-100), transparent 70%), var(--color-bg)",
      }}
    >
      <div className="mx-auto grid max-w-[1160px] items-center gap-[clamp(36px,5vw,60px)] px-[clamp(18px,4vw,36px)] py-[clamp(44px,6vw,80px)] grid-cols-[repeat(auto-fit,minmax(330px,1fr))]">
        {/* Left column */}
        <div style={{ animation: "fadeUp .7s cubic-bezier(.2,.7,.2,1) both" }}>
          <div
            className="mb-[22px] inline-flex items-center gap-[9px] rounded-full bg-accent px-[15px] py-2 text-[12.5px] font-extrabold uppercase tracking-[.04em]"
            style={{ color: "var(--tp-on-accent, #fff)" }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-white" style={{ animation: "pulse 1.6s infinite" }} />
            {heroBadge}
          </div>

          <h1 className="mb-5 text-[clamp(38px,6vw,64px)] leading-none tracking-[-0.03em]">
            {heroLead}
            <span className="whitespace-nowrap text-accent">R$1 MILHÃO</span> em
            prêmios
          </h1>

          <p className="mb-[26px] max-w-[38ch] text-[clamp(16px,2vw,20px)] leading-[1.55] text-neutral-800">
            {heroSub}
          </p>

          <div className="mb-7 flex flex-wrap gap-[10px]">
            <PrizeCard icon={<Smartphone size={18} />} title="1 iPhone 17" sub="todo dia" />
            <PrizeCard icon={<Banknote size={18} />} title="R$100 mil" sub="toda semana" />
            <PrizeCard icon={<Car size={18} />} title="1 Carro BYD" sub="todo mês" />
          </div>

          <button
            onClick={scrollToSelector}
            className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-accent px-7 py-[17px] font-heading text-base font-extrabold shadow-[0_10px_28px_rgba(236,48,19,.34)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-600"
            style={{ color: "var(--tp-on-accent, #fff)" }}
          >
            {ctaLabel} <ArrowRight size={19} strokeWidth={2.4} />
          </button>

          <p className="mt-3.5 text-[12.5px] text-neutral-700">
            ✓ Cancele quando quiser · ✓ Sem fidelidade · ✓ Avisos no WhatsApp
          </p>
        </div>

        {/* Right column — Mion photo + WhatsApp mock */}
        <div
          className="relative mx-auto w-full max-w-[440px] justify-self-center"
          style={{ animation: "fadeUp .7s cubic-bezier(.2,.7,.2,1) .12s both" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-neutral-200 shadow-lg">
            <Image
              src="/marcos-mion.webp"
              alt="Marcos Mion — Apresentador do Torcedor Premiado"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 440px"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "linear-gradient(180deg,transparent 45%,rgba(32,30,29,.78))",
              }}
            />
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[rgba(243,242,242,.92)] px-[13px] py-[7px] text-xs font-extrabold">
              <span className="h-[7px] w-[7px] rounded-full bg-accent" />
              Apresentado por Marcos Mion
            </div>
            <div className="pointer-events-none absolute bottom-5 left-5 right-5 text-white">
              <p className="mb-1.5 text-[clamp(15px,2.4vw,18px)] font-bold leading-[1.4]" style={{ textWrap: "balance" }}>
                &ldquo;Agora torcer vale a pena de verdade. Escolhe teu time e
                bora!&rdquo;
              </p>
              <div className="text-[12.5px] font-semibold opacity-85">
                Marcos Mion
              </div>
            </div>
          </div>

          {/* WhatsApp mock */}
          <div
            className="absolute right-[-8px] top-[42%] w-[212px] max-w-[54%] overflow-hidden rounded-[14px] shadow-lg"
            style={{
              animation: "floatY 6s ease-in-out infinite",
              fontFamily: "-apple-system,'Segoe UI',Helvetica,Arial,sans-serif",
            }}
          >
            <div className="flex items-center gap-2 bg-[#075e54] px-[10px] py-2 text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
              <span className="grid h-[26px] w-[26px] flex-none place-items-center rounded-full bg-accent font-heading text-[10px] font-extrabold text-white">
                TP
              </span>
              <div className="min-w-0 leading-[1.2]">
                <div className="truncate text-[11px] font-semibold">Torcedor Premiado</div>
                <div className="text-[9px] opacity-85">online</div>
              </div>
            </div>
            <div
              className="flex flex-col gap-1.5 px-[9px] py-3"
              style={{
                background: "#e5ddd5",
                backgroundImage: "radial-gradient(rgba(184,169,153,.26) 1px,transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            >
              <div className="relative max-w-[88%] self-start rounded-lg rounded-bl-none bg-white px-[9px] pt-1.5 pb-[15px] text-[10.5px] leading-[1.4] shadow-[0_1px_1px_rgba(0,0,0,.12)]">
                <strong className="text-accent">{golLabel}</strong>
                <br />
                +R$100 em Vale Bônus.
                <span className="absolute bottom-1 right-2 text-[8px] text-[#8696a0]">09:12</span>
              </div>
              <div className="relative max-w-[88%] self-end rounded-lg rounded-br-none bg-[#dcf8c6] px-[9px] pt-1.5 pb-[15px] text-[10.5px] leading-[1.4] shadow-[0_1px_1px_rgba(0,0,0,.12)]">
                Eu amo esse time 🔥
                <span className="absolute bottom-1 right-2 flex items-center gap-0.5 text-[8px] text-[#8696a0]">
                  09:12
                  <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="#34b7f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 9.5 4 12l5.5-6" />
                    <path d="M8 12l1 1 5.5-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrizeCard({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-[10px] rounded-[14px] border border-neutral-200 bg-neutral-100 px-[15px] py-[11px]">
      <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-[10px] bg-accent-100 text-accent-700">
        {icon}
      </span>
      <div className="leading-[1.15]">
        <div className="font-heading text-[15px] font-extrabold">{title}</div>
        <div className="text-[11.5px] text-neutral-700">{sub}</div>
      </div>
    </div>
  );
}
