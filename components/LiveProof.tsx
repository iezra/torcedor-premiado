export default function LiveProof() {
  return (
    <section className="overflow-hidden bg-text text-bg">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-x-7 gap-y-2 px-[clamp(18px,4vw,36px)] py-[22px] text-[13px] font-bold">
        <span className="text-[11px] uppercase tracking-[.08em] opacity-55">
          Ao vivo
        </span>
        <span>
          🏆 Marcos · SP ganhou um{" "}
          <span className="text-accent-400">iPhone 17</span>
        </span>
        <span className="opacity-35">•</span>
        <span>
          💸 Juliana · MG sacou{" "}
          <span className="text-accent-400">R$100 mil</span>
        </span>
        <span className="opacity-35">•</span>
        <span>
          🚗 Rafael · RS levou um{" "}
          <span className="text-accent-400">BYD 0km</span>
        </span>
      </div>
    </section>
  );
}
