import { footer, nav, site, telLink, waLink } from "../content";
import { Icon } from "../lib/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-paper/75 overflow-hidden">
      <div className="absolute inset-0 dotted-bg-light opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* الهوية */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-aqua/10 text-aqua border border-aqua/30">
                <Icon name="pulse" className="w-6 h-6" />
              </span>
              <span className="leading-none">
                <span className="block font-display font-bold text-xl text-white">{site.name}</span>
                <span className="block text-[11px] mt-1 text-paper/50">{site.tagline}</span>
              </span>
            </a>
            <p className="text-sm leading-7 mt-5 text-paper/60">{footer.blurb}</p>
            <div className="flex gap-2.5 mt-6">
              {site.socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid place-items-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-paper/70 hover:bg-teal hover:text-white hover:border-teal hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon name={s.icon} className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="font-display font-bold text-lg text-white">{footer.quickTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="group inline-flex items-center gap-2 hover:text-aqua transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-honey/70 group-hover:bg-aqua group-hover:w-3 transition-all duration-300" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* التواصل */}
          <div>
            <h3 className="font-display font-bold text-lg text-white">{footer.contactTitle}</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="pin" className="w-5 h-5 text-aqua shrink-0 mt-0.5" />
                <span className="leading-6">{site.address}</span>
              </li>
              <li>
                <a href={telLink} className="flex items-center gap-3 hover:text-aqua transition-colors">
                  <Icon name="phone" className="w-5 h-5 text-aqua shrink-0" />
                  <span dir="ltr">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-aqua transition-colors">
                  <Icon name="whatsapp" className="w-5 h-5 text-aqua shrink-0" />
                  <span dir="ltr">+{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-aqua transition-colors">
                  <Icon name="mail" className="w-5 h-5 text-aqua shrink-0" />
                  <span dir="ltr">{site.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* أوقات العمل */}
          <div>
            <h3 className="font-display font-bold text-lg text-white">{footer.hoursTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footer.hours.map((h) => (
                <li
                  key={h.days}
                  className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:border-aqua/30 transition-colors"
                >
                  <span className="font-semibold text-paper/85">{h.days}</span>
                  <span className="text-aqua font-medium" dir="ltr">{h.time}</span>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-2 text-[12px] text-paper/50 mt-4">
              <Icon name="shield" className="w-4 h-4 text-tealsoft" />
              {site.license}
            </span>
          </div>
        </div>

        {/* الخريطة */}
        <div className="mt-14">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2.5">
              <Icon name="pin" className="w-5 h-5 text-honey" />
              {footer.mapTitle}
            </h3>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-aqua font-bold inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
            >
              {footer.directions}
              <Icon name="chevLeft" className="w-4 h-4" />
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/15 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.8)]">
            <iframe
              src={site.mapEmbed}
              title={footer.mapTitle}
              loading="lazy"
              className="w-full h-72 border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-paper/45">
          <p>
            © {year} {site.name} — {footer.copyright}
          </p>
          <p className="flex items-center gap-2">
            <Icon name="pulse" className="w-4 h-4 text-tealsoft" />
            {footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
