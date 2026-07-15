import { Banknote, Flame, Smartphone, Wallet, Car } from "lucide-react";
import { stackItems } from "@/lib/data";

const iconMap = {
  banknote: Banknote,
  flame: Flame,
  smartphone: Smartphone,
  wallet: Wallet,
  car: Car,
} as const;

export default function ValueStack() {
  return (
    <section className="mx-auto max-w-[900px] px-[clamp(18px,4vw,36px)] py-[clamp(56px,8vw,96px)]">
      <div className="mx-auto mb-[42px] max-w-[600px] text-center">
        <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[.08em] text-accent">
          Tudo que você recebe
        </div>
        <h2 className="text-[clamp(30px,4.6vw,46px)] leading-[1.08] tracking-[-0.025em]">
          Uma assinatura, cinco formas de ganhar
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
        {stackItems.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={i}
              className="flex items-center gap-4 border-b border-neutral-200 px-6 py-5"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent-100 text-accent-700">
                <Icon size={22} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-heading text-base font-extrabold">
                  {item.title}
                </div>
                <div className="text-[13px] text-neutral-700">{item.desc}</div>
              </div>
              <span className="whitespace-nowrap font-heading text-sm font-extrabold text-accent-700">
                {item.value}
              </span>
            </div>
          );
        })}

        {/* Footer bar */}
        <div className="flex items-center justify-between gap-4 bg-text px-6 py-[22px] text-bg">
          <div>
            <div className="text-xs uppercase tracking-[.06em] opacity-60">
              Valor real todo mês
            </div>
            <div className="font-heading text-[22px] font-extrabold">
              Mais de R$300 + prêmios milionários
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs opacity-60">Você paga</div>
            <div className="font-heading text-[30px] font-extrabold text-accent-400">
              R$1,99
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
