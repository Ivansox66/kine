import { teamSection } from "../content";
import { Icon } from "../lib/icons";
import { Reveal, SectionHead } from "../lib/motion";

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-petrol overflow-hidden">
      <div className="absolute inset-0 dotted-bg-light pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[30rem] h-[30rem] rounded-full bg-teal/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            kicker={teamSection.kicker}
            title={teamSection.title}
            subtitle={teamSection.subtitle}
            dark
          />
          <Reveal delay={220}>
            <div className="flex items-center gap-3 bg-white/5 border border-aqua/25 rounded-xl px-5 py-3.5">
              <Icon name="grad" className="w-6 h-6 text-aqua" />
              <p className="text-sm text-paper/80 font-medium leading-6">
                جميع الأخصائيين مسجّلون لدى
                <span className="text-aqua font-bold"> نقابة العلاج الطبيعي</span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {teamSection.members.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 110} className="h-full">
              <article className="group h-full flex flex-col bg-ink/40 border border-white/10 rounded-xl overflow-hidden hover:border-aqua/40 hover:-translate-y-2 transition-all duration-400 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={m.photo}
                    alt={`صورة ${m.name} — ${m.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 left-3 bg-honey text-ink text-[11px] font-bold rounded-full px-3 py-1 shadow-md">
                    {m.years}
                  </span>
                  <div className="absolute bottom-3 right-3 flex flex-wrap gap-1.5">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-aqua/20 text-aqua backdrop-blur-sm text-[11px] font-semibold rounded-full px-2.5 py-1 border border-aqua/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-white">{m.name}</h3>
                  <p className="text-aqua text-[13px] font-semibold mt-0.5">{m.role}</p>
                  <ul className="mt-4 space-y-2 text-[12.5px] text-paper/65 leading-5">
                    {m.quals.map((q) => (
                      <li key={q} className="flex items-start gap-2">
                        <Icon name="grad" className="w-3.5 h-3.5 mt-0.5 shrink-0 text-tealsoft" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
