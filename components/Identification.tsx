export default function Identification() {
  return (
    <section className="mx-auto max-w-[820px] px-[clamp(18px,4vw,36px)] py-[clamp(56px,8vw,96px)] text-center">
      <div className="mb-4 text-[12.5px] font-bold uppercase tracking-[.08em] text-accent">
        Pra você que ama futebol
      </div>
      <h2
        className="mb-5 text-[clamp(26px,4.4vw,44px)] leading-[1.14] tracking-[-0.02em]"
        style={{ textWrap: "balance" }}
      >
        Você torce a vida inteira e nunca ganhou nada com isso.
      </h2>
      <p className="mx-auto max-w-[52ch] text-[clamp(16px,2vw,19px)] leading-[1.6] text-neutral-800">
        Compra a camisa, acorda cedo pra ver o jogo, sofre a cada gol sofrido e
        comemora como louco a cada gol marcado. Só que o placar nunca colocou um
        real no seu bolso.{" "}
        <strong className="text-text">Até agora.</strong>
      </p>
    </section>
  );
}
