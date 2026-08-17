import { servicesSection } from "../content";
import { Icon } from "../lib/icons";
import { Reveal, SectionHead } from "../lib/motion";

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-mist dotted-bg overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-aqua/25 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            kicker={servicesSection.kicker}
            title={servicesSection.title}
            subtitle={servicesSection.subtitle}
          />
          <Reveal delay={250}>
            <span className="inline-flex items-center gap-2 bg-white text-petrol font-bold text-sm rounded-full px-5 py-2.5 border border-teal/20 shadow-sm">
              <Icon name="hands" className="w-4.5 h-4.5 text-teal" />
              {servicesSection.items.length} خدمات متخصصة
            </span>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {servicesSection.items.map((s, i) => {
            const featured = s.featured;
            return (
              <Reveal key={s.title} delay={(i % 3) * 110} className="h-full">
                <article
                  className={`group relative h-full flex flex-col rounded-xl p-7 border transition-all duration-400 ${
                    featured
                      ? "bg-petrol text-white border-petrol shadow-[0_30px_60px_-22px_rgba(14,74,82,0.7)]"
                      : "bg-white border-teal/10 hover:border-teal/35 hover:-translate-y-2 hover:shadow-[0_28px_55px_-25px_rgba(14,74,82,0.5)]"
                  }`}
                >
                  {featured && s.featuredLabel && (
                    <span className="absolute -top-3.5 left-6 bg-honey text-ink text-xs font-bold rounded-full px-3.5 py-1.5 shadow-md">
                      {s.featuredLabel}
                    </span>
                  )}

                  <span
                    className={`grid place-items-center w-14 h-14 rounded-xl transition-colors duration-300 ${
                      featured
                        ? "bg-aqua/15 text-aqua group-hover:bg-aqua group-hover:text-petrol"
                        : "bg-mist text-teal group-hover:bg-teal group-hover:text-white"
                    }`}
                  >
                    <Icon name={s.icon} className="w-7 h-7" />
                  </span>

                  <h3
                    className={`font-display font-bold text-xl mt-5 ${
                      featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-7 mt-2.5 ${featured ? "text-white/75" : "text-ink/65"}`}>
                    {s.text}
                  </p>

                  <ul className={`mt-5 space-y-2.5 text-[13px] font-medium ${featured ? "text-white/85" : "text-ink/75"}`}>
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Icon
                          name="check"
                          className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? "text-aqua" : "text-teal"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-auto pt-6 flex items-center justify-between border-t ${
                      featured ? "border-white/15" : "border-mist"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center gap-2 text-xs font-bold rounded-full px-3 py-1.5 ${
                        featured ? "bg-white/10 text-aqua" : "bg-sand/70 text-honeydark"
                      }`}
                    >
                      <Icon name="clock" className="w-3.5 h-3.5" />
                      {s.duration}
                    </span>
                    <a
                      href="#booking"
                      className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 ${
                        featured
                          ? "text-honey hover:gap-3"
                          : "text-teal hover:gap-3 group-hover:text-petrol"
                      }`}
                    >
                      {servicesSection.cardCta}
                      <Icon name="chevLeft" className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
