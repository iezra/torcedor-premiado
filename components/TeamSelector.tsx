"use client";

import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useTeam } from "@/lib/team-context";
import { teams, themes } from "@/lib/data";

// TODO: Replace with official WhatsApp number
const WA_NUMBER = "";

export default function TeamSelector() {
  const { selected, choose, theme } = useTeam();

  const waText = encodeURIComponent(
    `Quero ser Torcedor Premiado ${theme ? theme.of : "do meu time"}! Vou começar por R$1,99.`
  );
  const waHref = WA_NUMBER
    ? `https://wa.me/${WA_NUMBER}?text=${waText}`
    : `https://wa.me/?text=${waText}`;

  return (
    <section
      id="selector"
      className="mx-auto max-w-[1160px] px-[clamp(18px,4vw,36px)] pt-[clamp(20px,3vw,32px)] pb-[clamp(56px,8vw,96px)]"
    >
      <div className="mx-auto mb-10 max-w-[600px] text-center">
        <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[.08em] text-accent">
          Comece agora
        </div>
        <h2 className="mb-3 text-[clamp(30px,4.6vw,46px)] leading-[1.08] tracking-[-0.025em]">
          Qual time você vai escolher?
        </h2>
        <p className="text-base text-neutral-800">
          Toque no seu clube e continue no WhatsApp para assinar por R$1,99.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1020px] grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
        {teams.map((team) => {
          const isSelected = selected === team.name;
          return (
            <button
              key={team.abbr}
              onClick={() => !team.soon && choose(team.name)}
              disabled={team.soon}
              className={`relative flex cursor-pointer flex-col items-center gap-3 rounded-2xl border px-3 py-6 text-center transition-all duration-200 ${
                isSelected
                  ? "border-accent bg-accent-100 shadow-md"
                  : "border-neutral-200 bg-neutral-100 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              } ${team.soon ? "cursor-default opacity-60" : ""}`}
            >
              <Image
                src={team.crest}
                alt={team.name}
                width={96}
                height={96}
                className="h-24 w-24 object-contain"
              />
              <span className="text-[12.5px] font-semibold leading-[1.2]">
                {team.name}
              </span>
              {team.soon && (
                <span className="absolute right-2 top-2 rounded-md bg-neutral-200 px-1.5 py-0.5 text-[8.5px] font-extrabold uppercase tracking-[.08em] text-neutral-700">
                  Em breve
                </span>
              )}
              {isSelected && (
                <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-accent text-white">
                  <Check size={12} strokeWidth={3.5} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {selected && (
        <div
          className="mx-auto mt-6 flex max-w-[640px] flex-wrap items-center gap-[18px] rounded-[20px] border border-accent bg-accent-100 p-6"
          style={{ animation: "fadeUp .4s both" }}
        >
          <div className="min-w-[180px] flex-1">
            <div className="mb-1 text-xs font-bold uppercase tracking-[.06em] text-accent-700">
              Você escolheu
            </div>
            <div className="font-heading text-[clamp(22px,4vw,30px)] font-extrabold tracking-[-0.02em]">
              {selected}
            </div>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 font-heading text-[15px] font-extrabold shadow-[0_8px_22px_rgba(236,48,19,.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-600"
            style={{ color: "var(--tp-on-accent, #fff)" }}
          >
            Assinar no WhatsApp <MessageCircle size={17} strokeWidth={2.2} />
          </a>
        </div>
      )}
    </section>
  );
}
