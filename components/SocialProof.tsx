const stats = [
  { value: "+180 mil", label: "torcedores" },
  { value: "R$2,4 mi", label: "em prêmios pagos" },
  { value: "38 mil", label: "gols recompensados" },
  { value: "12", label: "clubes" },
];

const testimonials = [
  {
    quote:
      "Assinei pelo meu time e no terceiro dia ganhei o iPhone. Ainda não acreditei.",
    name: "Marcos",
    detail: "Corinthians · iPhone",
  },
  {
    quote:
      "O bônus por gol já paga a assinatura. Depois ganhei o carro do mês. Surreal.",
    name: "Juliana",
    detail: "Atlético-MG · Carro",
  },
  {
    quote:
      "Melhor R$1,99 que gastei. Torço, ganho e ainda concorro toda semana.",
    name: "Rafael",
    detail: "Grêmio · R$5.000",
  },
];

export default function SocialProof() {
  return (
    <section className="mx-auto max-w-[1160px] px-[clamp(18px,4vw,36px)] py-[clamp(56px,8vw,96px)]">
      <div className="mx-auto mb-9 max-w-[600px] text-center">
        <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[.08em] text-accent">
          Quem assinou, ganhou
        </div>
        <h2 className="text-[clamp(28px,4.2vw,42px)] leading-[1.1] tracking-[-0.025em]">
          Prova de verdade, não promessa
        </h2>
      </div>

      {/* Stats grid */}
      <div className="mb-[26px] grid grid-cols-2 gap-[18px] sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[18px] border border-neutral-200 bg-neutral-100 px-6 py-6 text-center"
          >
            <div className="font-heading text-[clamp(24px,3.2vw,36px)] font-extrabold tracking-[-0.02em] text-accent">
              {stat.value}
            </div>
            <div className="mt-1 text-[12.5px] text-neutral-800">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-4 rounded-[20px] border border-neutral-200 bg-neutral-100 p-[26px]"
          >
            <p className="flex-1 text-[15px] leading-[1.55]">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-neutral-300" />
              <div className="text-[13px]">
                <strong>{t.name}</strong>
                <br />
                <span className="text-neutral-600">{t.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-[11px] text-neutral-600">
        Números e depoimentos ilustrativos de lançamento. Espaço reservado para
        fotos e vídeos reais de ganhadores.
      </p>
    </section>
  );
}
