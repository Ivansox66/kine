import { processSection } from "../content";
import { Icon } from "../lib/icons";
import { Reveal, SectionHead, useInView } from "../lib/motion";

export default function Process() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-paper overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-sand blur-3xl opacity-80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          kicker={processSection.kicker}
          title={processSection.title}
          subtitle={processSection.subtitle}
          align="center"
        />

        <div ref={ref} className="relative mt-16 max-w-3xl mx-auto">
          {/* الخط الزمني */}
          <span className="absolute right-[27px] sm:right-[31px] top-3 bottom-3 w-[3px] bg-mist rounded-full overflow-hidden">
            <span
              className={`block w-full h-full bg-gradient-to-b from-teal to-aqua rounded-full ${
                inView ? "line-draw" : "scale-y-0"
              }`}
            />
          </span>

          <ol className="space-y-10">
            {processSection.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 140}>
                  <div className="relative flex gap-6 sm:gap-8 group">
                    {/* العقدة المرقمة */}
                    <span className="relative z-10 shrink-0 grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-petrol text-aqua border-4 border-paper shadow-[0_10px_25px_-10px_rgba(14,74,82,0.6)] group-hover:bg-teal group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon name={step.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
                      <span className="absolute -top-1.5 -left-1.5 grid place-items-center w-6 h-6 rounded-full bg-honey text-ink font-display font-bold text-xs shadow">
                        {i + 1}
                      </span>
                    </span>

                    <div className="bg-white rounded-xl border border-mist p-6 flex-1 group-hover:border-teal/35 group-hover:shadow-[0_20px_45px_-22px_rgba(15,126,124,0.45)] group-hover:-translate-y-1 transition-all duration-300">
                      <p className="text-xs font-bold text-honeydark tracking-wide">
                        الخطوة {["الأولى", "الثانية", "الثالثة", "الرابعة"][i]}
                      </p>
                      <h3 className="font-display font-bold text-xl mt-1.5 text-ink">{step.title}</h3>
                      <p className="text-sm text-ink/65 leading-7 mt-2">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
