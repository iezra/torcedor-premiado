const steps = [
  {
    num: "1",
    title: "Escolha seu time",
    desc: "12 clubes no ar. Toque no seu escudo para começar.",
  },
  {
    num: "2",
    title: "Assine por R$1,99",
    desc: "Pagamento rápido e seguro, direto pelo WhatsApp.",
  },
  {
    num: "3",
    title: "Ganhe todo mês",
    desc: "Vale Bônus, prêmios por gol e sorteios automáticos.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1160px] px-[clamp(18px,4vw,36px)] py-[clamp(56px,8vw,96px)]">
        <div className="mx-auto mb-11 max-w-[600px] text-center">
          <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[.08em] text-accent">
            Comece em 30 segundos
          </div>
          <h2 className="text-[clamp(30px,4.6vw,46px)] leading-[1.08] tracking-[-0.025em]">
            Três passos e pronto
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[18px]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col gap-3.5 rounded-[20px] border border-neutral-200 bg-bg p-[30px]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent font-heading text-base font-extrabold text-white">
                {step.num}
              </span>
              <h3 className="text-[19px]">{step.title}</h3>
              <p className="text-sm text-neutral-800">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
