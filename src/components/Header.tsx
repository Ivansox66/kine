import { useEffect, useState } from "react";
import { nav, headerCta, site, telLink } from "../content";
import { Icon } from "../lib/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const linkCls = solid
    ? "text-ink/75 hover:text-teal"
    : "text-white/85 hover:text-white";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "bg-paper/95 backdrop-blur-md shadow-[0_10px_40px_-18px_rgba(11,46,51,0.35)]" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* الشعار */}
        <a href="#home" className="flex items-center gap-3 group" aria-label={site.name}>
          <span
            className={`grid place-items-center w-11 h-11 rounded-xl transition-colors duration-500 ${
              solid ? "bg-petrol text-aqua" : "bg-aqua/15 text-aqua border border-aqua/40"
            } group-hover:bg-teal group-hover:text-white`}
          >
            <Icon name="pulse" className="w-6 h-6" />
          </span>
          <span className="leading-none">
            <span className={`block font-display font-bold text-xl ${solid ? "text-ink" : "text-white"}`}>
              {site.name}
            </span>
            <span className={`block text-[11px] mt-1 ${solid ? "text-ink/55" : "text-white/65"}`}>
              {site.tagline}
            </span>
          </span>
        </a>

        {/* الروابط */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="التنقل الرئيسي">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:right-0 after:h-0.5 after:w-0 after:bg-honey after:transition-all after:duration-300 hover:after:w-full ${linkCls}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={telLink}
            className={`hidden xl:inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              solid ? "text-teal hover:text-petrol" : "text-aqua hover:text-white"
            }`}
            dir="ltr"
          >
            <Icon name="phone" className="w-4.5 h-4.5" />
            {site.phoneDisplay}
          </a>
          <a
            href={headerCta.target}
            className="hidden md:inline-flex items-center gap-2 bg-honey text-ink font-bold text-sm rounded-xl px-5 py-2.5 shadow-[0_10px_25px_-10px_rgba(227,162,60,0.8)] hover:bg-honeydark hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            <Icon name="calendar" className="w-4.5 h-4.5" />
            {headerCta.label}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid place-items-center w-11 h-11 rounded-xl border transition-colors ${
              solid ? "border-teal/25 text-ink" : "border-white/30 text-white"
            }`}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="w-5.5 h-5.5" />
          </button>
        </div>
      </div>

      {/* شريط تقدم القراءة */}
      <div className="h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-l from-honey to-tealsoft transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* قائمة الجوال */}
      <div className={`lg:hidden acc-body ${open ? "open" : ""} ${solid ? "" : "bg-petrol/95 backdrop-blur-md"}`}>
        <div>
          <nav className="px-5 py-4 flex flex-col bg-paper border-t border-mist" aria-label="قائمة الجوال">
            {nav.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="py-3.5 px-2 text-ink/80 font-medium border-b border-mist last:border-0 hover:text-teal hover:pr-4 transition-all duration-300"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 py-4">
              <a
                href={headerCta.target}
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex justify-center items-center gap-2 bg-honey text-ink font-bold rounded-xl px-5 py-3"
              >
                <Icon name="calendar" className="w-5 h-5" />
                {headerCta.label}
              </a>
              <a
                href={telLink}
                className="inline-flex justify-center items-center gap-2 bg-petrol text-white font-bold rounded-xl px-5 py-3"
              >
                <Icon name="phone" className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
