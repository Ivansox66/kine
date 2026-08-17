import { useState } from "react";
import { faqSection, waLink } from "../content";
import { Icon } from "../lib/icons";
import { Reveal, SectionHead } from "../lib/motion";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-mist dotted-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-14 items-start">
        {/* العمود الجانبي اللاصق */}
        <div className="lg:sticky lg:top-28">
          <SectionHead kicker={faqSection.kicker} title={faqSection.title} />
          <Reveal delay={220}>
            <div className="mt-9 bg-petrol text-white rounded-xl p-7 relative overflow-hidden">
              <div className="absolute -bottom-8 -left-8 text-aqua/10" aria-hidden>
                <Icon name="whatsapp" className="w-36 h-36" />
              </div>
              <h3 className="font-display font-bold text-xl relative">{faqSection.sideNote.title}</h3>
              <p className="text-paper/75 text-sm leading-7 mt-2 relative">{faqSection.sideNote.text}</p>
              <a
                href={waLink(faqSection.sideNote.cta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-5 inline-flex items-center gap-2.5 bg-wa text-white font-bold text-sm rounded-xl px-5 py-3 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon name="whatsapp" className="w-4.5 h-4.5" />
                {faqSection.sideNote.cta.label}
              </a>
            </div>
          </Reveal>
        </div>

        {/* الأكورديون */}
        <div>
          {faqSection.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 70}>
                <div
                  className={`bg-white rounded-xl border mb-4 transition-all duration-300 ${
                    isOpen ? "border-teal/40 shadow-[0_18px_40px_-22px_rgba(15,126,124,0.5)]" : "border-mist hover:border-teal/25"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-right px-6 py-5"
                  >
                    <span className={`font-display font-bold text-base sm:text-lg transition-colors ${isOpen ? "text-teal" : "text-ink"}`}>
                      {item.q}
                    </span>
                    <span
                      className={`grid place-items-center w-9 h-9 shrink-0 rounded-full transition-all duration-400 ${
                        isOpen ? "bg-teal text-white rotate-45" : "bg-mist text-teal"
                      }`}
                    >
                      <Icon name="plus" className="w-4 h-4" />
                    </span>
                  </button>
                  <div className={`acc-body ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="px-6 pb-6 text-sm sm:text-[15px] text-ink/70 leading-8 border-t border-mist pt-4 mx-0">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
