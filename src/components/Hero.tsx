import { hero, telLink, waLink, site } from "../content";
import { Icon } from "../lib/icons";
import { EcgLine } from "../lib/icons";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-petrol">
      {/* خلفية تتنفس */}
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="absolute inset-0 w-full h-full object-cover kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-ink/95 via-petrol/75 to-petrol/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-8 pt-36 pb-44">
        <div className="max-w-2xl">
          {/* شارة الثقة */}
          <div className="hero-rise" style={{ animationDelay: "0.05s" }}>
            <span className="inline-flex items-center gap-2.5 border border-aqua/45 bg-petrol/50 text-aqua text-[13px] sm:text-sm font-medium rounded-full px-4 py-2">
              <Icon name={hero.badge.icon} className="w-4.5 h-4.5" />
              {hero.badge.text}
            </span>
          </div>

          {/* العنوان */}
          <h1
            className="hero-rise font-display font-bold text-white text-[2.9rem] leading-[1.12] sm:text-6xl lg:text-7xl mt-7"
            style={{ animationDelay: "0.18s" }}
          >
            {hero.titleLine1.replace(hero.highlight, "").trim().length > 0 &&
              hero.titleLine1.split(hero.highlight)[0]}
            <span className="relative inline-block text-aqua">
              {hero.highlight}
              <svg
                viewBox="0 0 120 12"
                className="absolute -bottom-2 right-0 w-full h-3 text-honey"
                fill="none"
                aria-hidden="true"
              >
                <path d="M3 9c25-6 65-6 114-3" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            {hero.titleLine1.split(hero.highlight)[1]}
            <br />
            <span className="text-white">{hero.titleLine2}</span>
          </h1>

          {/* الوصف */}
          <p
            className="hero-rise text-white/85 text-base sm:text-lg leading-9 max-w-xl mt-7"
            style={{ animationDelay: "0.32s" }}
          >
            {hero.description}
          </p>

          {/* أزرار الإجراء */}
          <div className="hero-rise flex flex-wrap items-center gap-4 mt-9" style={{ animationDelay: "0.45s" }}>
            <a
              href={telLink}
              className="inline-flex items-center gap-2.5 bg-honey text-ink font-bold rounded-xl px-7 py-3.5 shadow-[0_18px_40px_-12px_rgba(227,162,60,0.9)] hover:bg-honeydark hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Icon name={hero.ctas.call.icon} className="w-5 h-5" />
              {hero.ctas.call.label}
            </a>
            <a
              href={waLink(hero.ctas.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-wa text-white font-bold rounded-xl px-7 py-3.5 shadow-[0_18px_40px_-12px_rgba(31,170,85,0.85)] hover:brightness-110 hover:-translate-y-1 transition-all duration-300"
            >
              <Icon name={hero.ctas.whatsapp.icon} className="w-5 h-5" />
              {hero.ctas.whatsapp.label}
            </a>
            <a
              href={hero.ctas.book.target}
              className="inline-flex items-center gap-2.5 border-2 border-white/35 text-white font-bold rounded-xl px-7 py-3.5 hover:bg-white/10 hover:border-aqua hover:text-aqua transition-all duration-300"
            >
              {hero.ctas.book.label}
              <Icon name="chevLeft" className="w-4.5 h-4.5" />
            </a>
          </div>

          <p className="hero-rise text-white/50 text-xs mt-6" style={{ animationDelay: "0.58s" }}>
            {site.license}
          </p>
        </div>
      </div>

      {/* بطاقة عائمة */}
      <div
        className="hero-rise hidden lg:block absolute z-10 left-14 bottom-36 floaty"
        style={{ animationDelay: "0.7s" }}
      >
        <div className="bg-paper text-ink rounded-xl p-5 w-72 shadow-[0_30px_60px_-20px_rgba(11,46,51,0.7)] -rotate-2 border-t-4 border-teal">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-mist text-teal">
              <Icon name={hero.floatingCard.icon} className="w-5.5 h-5.5" />
            </span>
            <div>
              <p className="font-display font-bold text-lg leading-tight">{hero.floatingCard.title}</p>
              <p className="text-[13px] text-ink/60">{hero.floatingCard.text}</p>
            </div>
          </div>
          <span className="inline-block mt-4 bg-sand text-honeydark text-xs font-bold rounded-full px-3.5 py-1.5">
            {hero.floatingCard.chip}
          </span>
        </div>
      </div>

      {/* خط النبض أسفل القسم */}
      <div
        className="absolute bottom-28 inset-x-0 z-10 text-aqua opacity-70 pointer-events-none"
        style={{ maskImage: "linear-gradient(to left, transparent, black 12%, black 88%, transparent)" }}
      >
        <EcgLine className="w-full h-12" />
      </div>
    </section>
  );
}
