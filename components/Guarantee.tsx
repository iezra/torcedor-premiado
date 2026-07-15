import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="mx-auto max-w-[760px] px-[clamp(18px,4vw,36px)] pt-[clamp(20px,3vw,32px)] pb-[clamp(56px,8vw,80px)]">
      <div className="flex items-center gap-5 rounded-[20px] border border-neutral-200 bg-neutral-100 p-[clamp(24px,3vw,36px)]">
        <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-accent-100 text-accent-700">
          <ShieldCheck size={30} />
        </span>
        <div>
          <h3 className="mb-1.5 text-xl">Zero risco pra você</h3>
          <p className="text-[14.5px] leading-[1.55] text-neutral-800">
            Sem fidelidade, sem multa, sem letra miúda. Você entra por R$1,99,
            testa tudo e cancela quando quiser direto no WhatsApp. Simples
            assim.
          </p>
        </div>
      </div>
    </section>
  );
}
