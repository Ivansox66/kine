import { useState, type FormEvent } from "react";
import { booking, servicesSection, site, telLink, waLink } from "../content";
import { Icon } from "../lib/icons";
import { Reveal, SectionHead } from "../lib/motion";

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", notes: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (form.name.trim().length < 3) errs.name = booking.form.requiredName;
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) errs.phone = booking.form.requiredPhone;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const message = booking.whatsappTemplate(form.name.trim(), form.phone.trim(), form.service, form.notes.trim());
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const reset = () => {
    setForm({ name: "", phone: "", service: "", notes: "" });
    setErrors({});
    setSent(false);
  };

  return (
    <section id="booking" className="relative py-24 lg:py-32 bg-petrol overflow-hidden">
      <div className="absolute inset-0 dotted-bg-light opacity-70 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-teal/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 right-0 w-96 h-96 rounded-full bg-honey/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* الدعوة والمزايا */}
        <div>
          <SectionHead kicker={booking.kicker} title={booking.title} subtitle={booking.subtitle} dark />

          <ul className="mt-9 grid sm:grid-cols-2 gap-4">
            {booking.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 90}>
                <li className="flex items-center gap-3 bg-white/5 border border-aqua/20 rounded-xl px-4 py-3.5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
                  <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-aqua/15 text-aqua">
                    <Icon name="check" className="w-4 h-4" />
                  </span>
                  <span className="text-paper/85 text-sm font-medium">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={380}>
            <div className="mt-10">
              <p className="text-paper/60 text-sm font-semibold">{booking.directTitle}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={telLink}
                  className="inline-flex items-center gap-3 bg-white/5 border border-aqua/25 text-white font-bold rounded-xl px-6 py-3.5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-aqua/15 text-aqua">
                    <Icon name="phone" className="w-5 h-5" />
                  </span>
                  <span className="text-right">
                    <span className="block text-[11px] text-paper/55 font-medium">{site.name}</span>
                    <span dir="ltr" className="block tracking-wide">{site.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-wa/15 border border-wa/40 text-white font-bold rounded-xl px-6 py-3.5 hover:bg-wa/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-wa text-white">
                    <Icon name="whatsapp" className="w-5 h-5" />
                  </span>
                  واتساب
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* النموذج */}
        <Reveal delay={200}>
          <div className="bg-paper text-ink rounded-xl p-7 sm:p-9 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] border-t-4 border-honey relative">
            {sent ? (
              <div className="text-center py-10">
                <span className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-teal/10 text-teal">
                  <Icon name="check" className="w-10 h-10" />
                </span>
                <h3 className="font-display font-bold text-2xl mt-6">{booking.form.successTitle}</h3>
                <p className="text-ink/65 leading-8 mt-3 max-w-sm mx-auto text-sm sm:text-base">
                  {booking.form.successText}
                </p>
                <button
                  onClick={reset}
                  className="mt-7 inline-flex items-center gap-2 text-teal font-bold border-2 border-teal/30 rounded-xl px-6 py-2.5 hover:bg-teal hover:text-white transition-all duration-300"
                >
                  {booking.form.again}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="font-display font-bold text-2xl flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-mist text-teal">
                    <Icon name="calendar" className="w-5.5 h-5.5" />
                  </span>
                  {booking.form.title}
                </h3>

                <div className="mt-7 space-y-5">
                  <div>
                    <label htmlFor="bk-name" className="block text-sm font-bold mb-2">
                      {booking.form.name.label} <span className="text-clay">*</span>
                    </label>
                    <input
                      id="bk-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={booking.form.name.placeholder}
                      className={`field ${errors.name ? "!border-clay" : ""}`}
                    />
                    {errors.name && <p className="text-clay text-xs font-semibold mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="bk-phone" className="block text-sm font-bold mb-2">
                      {booking.form.phone.label} <span className="text-clay">*</span>
                    </label>
                    <input
                      id="bk-phone"
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={booking.form.phone.placeholder}
                      className={`field text-left ${errors.phone ? "!border-clay" : ""}`}
                    />
                    {errors.phone && <p className="text-clay text-xs font-semibold mt-1.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="bk-service" className="block text-sm font-bold mb-2">
                      {booking.form.service.label}
                    </label>
                    <select
                      id="bk-service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="field appearance-none bg-no-repeat bg-[left_0.9rem_center]"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230f7e7c' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                        backgroundSize: "1.1rem",
                      }}
                    >
                      <option value="">{booking.form.service.placeholder}</option>
                      {servicesSection.items.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bk-notes" className="block text-sm font-bold mb-2">
                      {booking.form.notes.label}
                    </label>
                    <textarea
                      id="bk-notes"
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder={booking.form.notes.placeholder}
                      className="field resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 w-full inline-flex justify-center items-center gap-2.5 bg-honey text-ink font-bold rounded-xl px-7 py-4 shadow-[0_18px_40px_-14px_rgba(227,162,60,0.8)] hover:bg-honeydark hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Icon name="send" className="w-5 h-5" />
                  {booking.form.submit}
                </button>
                <p className="flex items-center justify-center gap-2 text-[12px] text-ink/50 mt-4">
                  <Icon name="shield" className="w-4 h-4 text-teal" />
                  {booking.form.privacyNote}
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
