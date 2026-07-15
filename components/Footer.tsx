export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-5 px-[clamp(18px,4vw,36px)] pt-9 pb-[100px]">
        <div className="flex items-center gap-[9px] font-heading text-base font-extrabold">
          <span className="grid h-6 w-6 place-items-center rounded-[7px] bg-accent text-[11px] text-white">
            TP
          </span>
          Torcedor <span className="text-accent">Premiado</span>
        </div>
        <div className="max-w-[52ch] text-xs text-neutral-600">
          Clube de benefícios e recompensas para torcedores. Assinatura
          recorrente, cancele quando quiser. Prêmios sujeitos a regulamento.
        </div>
      </div>
    </footer>
  );
}
