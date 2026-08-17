import { useEffect, useState } from "react";
import { testimonialsSection as t } from "../content";
import { Icon } from "../lib/icons";
import { Reveal, SectionHead, useReducedMotion } from "../lib/motion";

function Stars({ rating, className = "w-4.5 h-4.5" }: { rating: number; className?: string }) {
  return (
    <span className="inline-flex gap-1" dir="ltr" aria-label={`${rating} من 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon key={i} name="star" className={`${className} ${i <= rating ? "text-honey" : "text-honey/25"}`} />
      ))}
    </span>
  );
}

function initialsOf(name: string) {
  const parts = name.replace(/^(د|أ)\.\s*/, "").trim().split(/\s+/);
  return (parts[0][0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "");
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const count = t.items.length;

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setIndex((v) => (v + 1) % count), 6500);
    return () => clearInterval(id);
  }, [paused, reduced, count]);

  const prev = () => setIndex((v) => (v - 1 + count) % count);
  const next = () => setIndex((v) => (v + 1) % count);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-sand overflow-hidden">
      <div className="absolute top-10 left-10 text-honey/25 pointer-events-none" aria-hidden>
        <Icon name="quote" className="w-40 h-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead kicker={t.kicker} title={t.title} />

        <div className="grid lg:grid-cols-[340px_1fr] gap-8 mt-12 items-start">
          {/* ملخص التقييم */}
          <Reveal>
            <div className="bg-petrol text-white rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 dotted-bg-light opacity-60 pointer-events-none" />
              <div className="relative">
                <p className="font-display font-bold text-7xl text-aqua leading-none" dir="ltr">
                  {t.ratingSummary.score}
                </p>
                <Stars rating={t.ratingSummary.max} className="w-5.5 h-5.5" />
                <p className="text-paper/80 font-semibold mt-3">{t.ratingSummary.count}</p>
                <p className="text-paper/55 text-sm mt-1 flex items-center gap-2">
                  <Icon name="pin" className="w-4 h-4 text-aqua" />
                  {t.ratingSummary.source}
                </p>
                <div className="mt-7 pt-6 border-t border-white/15">
                  <p className="text-[13px] text-paper/65 leading-6">
                    نعتز بكل تقييم — الإيجابي يدفعنا، والملاحظات تصقل خدمتنا.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* الكاروسيل */}
          <Reveal delay={140}>
            <div
              className="bg-white rounded-xl shadow-[0_30px_70px_-30px_rgba(11,46,51,0.4)] border border-sand relative"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{ transform: `translateX(${index * 100}%)` }}
                >
                  {t.items.map((item) => (
                    <figure key={item.name} className="w-full shrink-0 p-8 sm:p-10">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <Stars rating={item.rating} />
                        <Icon name="quote" className="w-8 h-8 text-teal/25" />
                      </div>
                      <blockquote className="text-ink/85 text-lg sm:text-xl leading-9 sm:leading-10 mt-5 min-h-[7.5rem] sm:min-h-[6rem]">
                        “{item.text}”
                      </blockquote>
                      <figcaption className="flex items-center gap-4 mt-7 pt-6 border-t border-mist">
                        <span className="grid place-items-center w-14 h-14 shrink-0 rounded-full bg-petrol text-aqua font-display font-bold text-xl">
                          {initialsOf(item.name)}
                        </span>
                        <div>
                          <p className="font-display font-bold text-ink">{item.name}</p>
                          <p className="text-[13px] text-teal font-semibold mt-0.5">{item.case}</p>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              {/* أدوات التنقل */}
              <div className="flex items-center justify-between px-8 sm:px-10 pb-7">
                <div className="flex gap-2" role="tablist" aria-label="التنقل بين الآراء">
                  {t.items.map((item, i) => (
                    <button
                      key={item.name}
                      onClick={() => setIndex(i)}
                      aria-label={`عرض رأي ${item.name}`}
                      aria-selected={i === index}
                      role="tab"
                      className={`h-2 rounded-full transition-all duration-400 ${
                        i === index ? "w-8 bg-teal" : "w-2 bg-teal/25 hover:bg-teal/50"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2.5">
                  <button
                    onClick={prev}
                    aria-label={t.prevLabel}
                    className="grid place-items-center w-11 h-11 rounded-full border-2 border-teal/25 text-teal hover:bg-teal hover:text-white hover:border-teal transition-all duration-300 active:scale-90"
                  >
                    <Icon name="chevRight" className="w-4.5 h-4.5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label={t.nextLabel}
                    className="grid place-items-center w-11 h-11 rounded-full bg-teal text-white hover:bg-petrol transition-all duration-300 active:scale-90"
                  >
                    <Icon name="chevLeft" className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
