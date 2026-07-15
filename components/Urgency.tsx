"use client";

import { useState, useEffect } from "react";

function getCountdown() {
  const now = new Date();
  const next = new Date(now);
  next.setHours(24, 0, 0, 0);
  let s = Math.max(0, Math.floor((next.getTime() - now.getTime()) / 1000));
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${ss}`;
}

export default function Urgency() {
  const [countdown, setCountdown] = useState("23:59:59");

  useEffect(() => {
    setCountdown(getCountdown());
    const id = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToSelector = () => {
    const el = document.getElementById("selector");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
  };

  return (
    <section className="mx-auto max-w-[1160px] px-[clamp(18px,4vw,36px)] py-[clamp(44px,6vw,72px)]">
      <div
        className="flex flex-wrap items-center justify-between gap-6 rounded-3xl p-[clamp(28px,4vw,44px)] text-white"
        style={{
          background: "linear-gradient(150deg, var(--color-accent), var(--color-accent-700))",
        }}
      >
        <div>
          <div className="mb-2 text-xs font-extrabold uppercase tracking-[.08em] opacity-85">
            Não perca o sorteio de hoje
          </div>
          <h3 className="max-w-[20ch] text-[clamp(22px,3.4vw,32px)] leading-[1.1]">
            O iPhone 17 de hoje é sorteado em{" "}
            <span style={{ fontVariantNumeric: "tabular-nums" }}>
              {countdown}
            </span>
          </h3>
          <p className="mt-2 text-sm opacity-90">
            Assine antes do fim do dia e já entra no sorteio de hoje.
          </p>
        </div>
        <button
          onClick={scrollToSelector}
          className="cursor-pointer whitespace-nowrap rounded-full bg-white px-7 py-[17px] font-heading text-base font-extrabold text-accent-700 transition-all duration-200 hover:-translate-y-0.5"
        >
          Quero participar hoje
        </button>
      </div>
    </section>
  );
}
