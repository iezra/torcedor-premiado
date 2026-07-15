"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[800px] px-[clamp(18px,4vw,36px)] pt-[clamp(20px,3vw,40px)] pb-[clamp(56px,8vw,96px)]"
    >
      <div className="mx-auto mb-10 text-center">
        <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[.08em] text-accent">
          Dúvidas frequentes
        </div>
        <h2 className="text-[clamp(28px,4.2vw,42px)] leading-[1.1] tracking-[-0.025em]">
          Ainda com dúvida? A gente resolve
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center gap-4 border-none bg-transparent px-5 py-[18px] text-left font-heading text-[clamp(15px,1.9vw,17px)] font-extrabold text-text"
              >
                <span className="flex-1">{item.q}</span>
                <span className="grid h-[26px] w-[26px] flex-none place-items-center rounded-lg bg-accent-100 text-base text-accent-700">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-[14.5px] leading-[1.6] text-neutral-800">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
