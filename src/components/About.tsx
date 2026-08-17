import { about } from "../content";
import { Icon } from "../lib/icons";
import { Reveal, SectionHead } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-paper overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-mist blur-3xl opacity-70 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* الصورة المركّبة */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <span className="absolute -top-5 -right-5 w-full h-full rounded-xl border-2 border-teal/25 dotted-bg pointer-events-none" />
            <div className="relative rounded-xl overflow-hidden shadow-[0_35px_70px_-25px_rgba(14,74,82,0.5)]">
              <img
                src={about.image}
                alt={about.imageAlt}
                loading="lazy"
                className="w-full h-[420px] sm:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* شارة الخبرة */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-honey text-ink rounded-full w-32 h-32 sm:w-36 sm:h-36 grid place-items-center text-center shadow-[0_20px_45px_-12px_rgba(227,162,60,0.8)] rotate-6 hover:rotate-0 transition-transform duration-500">
              <div>
                <p className="font-display font-bold text-3xl sm:text-4xl leading-none" dir="ltr">
                  {about.experienceBadge.value}
                </p>
                <p className="text-xs font-bold mt-1">{about.experienceBadge.unit}</p>
              </div>
            </div>
            {/* بطاقة الترخيص */}
            <div className="absolute top-6 -left-3 sm:-left-8 bg-petrol text-white rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-xl -rotate-2">
              <Icon name={about.licenseCard.icon} className="w-5 h-5 text-aqua" />
              <span className="text-[13px] font-semibold">{about.licenseCard.text}</span>
            </div>
          </div>
        </Reveal>

        {/* المحتوى */}
        <div className="order-1 lg:order-2">
          <SectionHead kicker={about.kicker} title={about.title} />
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={200 + i * 90}>
              <p className="text-ink/70 leading-8 mt-5 text-[15px] sm:text-base">{p}</p>
            </Reveal>
          ))}

          <div className="grid sm:grid-cols-2 gap-4 mt-9">
            {about.features.map((f, i) => (
              <Reveal key={f.title} delay={260 + i * 80}>
                <div className="group flex gap-3.5 bg-white rounded-xl p-4.5 border border-mist hover:border-teal/40 hover:shadow-[0_16px_35px_-18px_rgba(15,126,124,0.5)] hover:-translate-y-1 transition-all duration-300">
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-mist text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <Icon name={f.icon} className="w-5.5 h-5.5" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-[15px]">{f.title}</p>
                    <p className="text-[13px] text-ink/60 leading-6 mt-1">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={520}>
            <a
              href={about.cta.target}
              className="group inline-flex items-center gap-2.5 mt-9 font-display font-bold text-teal text-lg hover:text-petrol transition-colors"
            >
              {about.cta.label}
              <span className="grid place-items-center w-9 h-9 rounded-full bg-mist text-teal group-hover:bg-teal group-hover:text-white group-hover:-translate-x-1 transition-all duration-300">
                <Icon name={about.cta.icon} className="w-4.5 h-4.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
