import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/* هل يفضّل المستخدم تقليل الحركة؟ */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* مراقبة دخول العنصر لمجال الرؤية (مرة واحدة) */
export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* غلاف الانزلاق عند التمرير */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ "--rvd": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* عدّاد أرقام متصاعد */
export function Counter({
  value,
  suffix = "",
  duration = 1800,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className={className} dir="ltr">
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* عنوان قسم موحّد الهوية: نبضة + كلمة تمهيدية + عنوان كبير */
export function SectionHead({
  kicker,
  title,
  subtitle,
  dark = false,
  align = "start",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "start" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-2xl`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide ${
            dark ? "text-aqua" : "text-teal"
          }`}
        >
          <svg viewBox="0 0 60 12" className="w-12 h-3" fill="none" aria-hidden="true">
            <path
              d="M0 6h16l5-4 7 8 5-9 6 10 4-5h17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={`font-display font-bold leading-[1.15] mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={170}>
          <p className={`mt-4 text-base sm:text-lg leading-8 ${dark ? "text-paper/70" : "text-ink/65"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
