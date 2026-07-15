"use client";

import Image from "next/image";
import { useTeam } from "@/lib/team-context";
import { teams } from "@/lib/data";

export default function Splash() {
  const { splashOpen, choose, dismissSplash } = useTeam();

  if (!splashOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-[rgba(32,30,29,.72)] px-4 py-[clamp(16px,4vw,48px)] backdrop-blur-[6px]">
      <div
        className="w-full max-w-[1020px] overflow-hidden rounded-3xl bg-bg shadow-lg"
        style={{ animation: "fadeUp .4s cubic-bezier(.2,.7,.2,1) both" }}
      >
        {/* Header */}
        <div className="border-b border-neutral-200 px-[clamp(20px,4vw,36px)] pt-[clamp(24px,4vw,36px)] pb-[clamp(16px,2vw,22px)] text-center">
          <div className="mb-3.5 inline-flex items-center gap-2 font-heading text-base font-extrabold">
            <span className="grid h-6 w-6 place-items-center rounded-[7px] bg-accent text-[11px] text-white">
              TP
            </span>
            Torcedor <span className="text-accent">Premiado</span>
          </div>
          <h2 className="mb-2 text-[clamp(24px,4.4vw,38px)] leading-[1.08] tracking-[-0.025em]">
            Qual é o seu time?
          </h2>
          <p className="mx-auto max-w-[44ch] text-[14.5px] text-neutral-800">
            Escolha seu clube para ver a página feita pra você — com as cores e
            os prêmios da sua torcida.
          </p>
        </div>

        {/* Team grid */}
        <div className="max-h-[52vh] overflow-y-auto p-[clamp(18px,3vw,26px)]">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
            {teams.map((team) => (
              <button
                key={team.abbr}
                onClick={() => !team.soon && choose(team.name)}
                disabled={team.soon}
                className={`relative flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-100 px-3 py-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md ${
                  team.soon ? "cursor-default opacity-60" : ""
                }`}
              >
                <Image
                  src={team.crest}
                  alt={team.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 object-contain"
                />
                <span className="text-[11.5px] font-semibold leading-[1.2]">
                  {team.name}
                </span>
                {team.soon && (
                  <span className="absolute right-1.5 top-1.5 rounded-[5px] bg-neutral-200 px-[5px] py-0.5 text-[8px] font-extrabold uppercase tracking-[.06em] text-neutral-700">
                    Em breve
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-200 px-[clamp(20px,4vw,36px)] py-[clamp(16px,3vw,22px)] text-center">
          <button
            onClick={dismissSplash}
            className="cursor-pointer border-none bg-transparent text-sm font-semibold text-neutral-700 underline underline-offset-[3px] hover:text-text"
          >
            Não desejo selecionar um time agora
          </button>
        </div>
      </div>
    </div>
  );
}
