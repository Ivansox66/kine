import { floatingWhatsApp, waLink } from "../content";
import { Icon } from "../lib/icons";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      <span className="absolute inset-0 rounded-full bg-wa wa-ping pointer-events-none" aria-hidden />
      <span
        className="absolute bottom-1/2 translate-y-1/2 right-full mr-3 whitespace-nowrap bg-ink text-white text-[13px] font-bold rounded-lg px-3.5 py-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg"
        aria-hidden
      >
        {floatingWhatsApp.tooltip}
      </span>
      <a
        href={waLink(floatingWhatsApp.message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={floatingWhatsApp.ariaLabel}
        className="relative grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-wa text-white shadow-[0_18px_45px_-10px_rgba(31,170,85,0.85)] hover:scale-110 hover:brightness-110 active:scale-95 transition-transform duration-300"
      >
        <Icon name="whatsapp" className="w-7 h-7" />
      </a>
    </div>
  );
}
