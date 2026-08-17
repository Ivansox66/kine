import { stats } from "../content";
import { Icon } from "../lib/icons";
import { Counter, Reveal } from "../lib/motion";

export default function StatsStrip() {
  return (
    <section id="stats" className="relative z-20 -mt-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="bg-white rounded-xl shadow-[0_30px_70px_-25px_rgba(11,46,51,0.45)] border border-mist grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 lg:p-7 flex items-center gap-4 ${
                  i === 1 ? "border-r border-mist" : ""
                } ${i === 2 ? "border-t border-mist lg:border-t-0 lg:border-r" : ""} ${
                  i === 3 ? "border-r border-t border-mist lg:border-t-0" : ""
                }`}
              >
                <span className="hidden sm:grid place-items-center w-12 h-12 rounded-lg bg-mist text-teal shrink-0">
                  <Icon name={s.icon} className="w-6 h-6" />
                </span>
                <div>
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display font-bold text-2xl lg:text-[2rem] text-petrol leading-none"
                  />
                  <p className="text-[13px] text-ink/60 mt-1.5 font-medium">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
