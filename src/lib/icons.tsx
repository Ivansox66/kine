import type { ReactNode, SVGProps } from "react";

/* أيقونات SVG مرسومة يدوياً لهذا القالب — بخط واحد متناسق */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<string, ReactNode> = {
  pulse: <path {...stroke} d="M2.5 12h4l2.2-5.5 3.4 10.5 2.4-7 1.4 2h5.6" />,
  phone: (
    <path {...stroke} d="M5.5 3.5h3l1.6 4.2-1.9 1.6a12.5 12.5 0 0 0 6.5 6.5l1.6-1.9 4.2 1.6v3a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 3.5 5.6a2 2 0 0 1 2-2.1z" />
  ),
  whatsapp: (
    <>
      <path {...stroke} d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.6-1.2A8.8 8.8 0 1 0 12 3.2z" />
      <path
        fill="currentColor"
        d="M9.1 7.9c.3-.7 1.4-.8 1.8-.1l.6 1.2c.2.4.1.9-.2 1.2l-.4.4c.5 1 1.3 1.8 2.3 2.3l.4-.4c.3-.3.8-.4 1.2-.2l1.2.6c.7.4.6 1.5-.1 1.8-3.3 1.5-8.3-3.5-6.8-6.8z"
      />
    </>
  ),
  clock: (
    <>
      <circle {...stroke} cx="12" cy="12" r="8.5" />
      <path {...stroke} d="M12 7v5.2l3.4 2" />
    </>
  ),
  pin: (
    <>
      <path {...stroke} d="M12 21.5s-7-5.8-7-11.3a7 7 0 0 1 14 0c0 5.5-7 11.3-7 11.3z" />
      <circle {...stroke} cx="12" cy="10" r="2.6" />
    </>
  ),
  mail: (
    <>
      <rect {...stroke} x="3" y="5" width="18" height="14" rx="2.5" />
      <path {...stroke} d="m3.5 7.5 8.5 6 8.5-6" />
    </>
  ),
  star: <path fill="currentColor" d="M12 2.8l2.8 5.7 6.3.9-4.6 4.4 1.1 6.3L12 17.2 6.4 20.1l1.1-6.3L2.9 9.4l6.3-.9z" />,
  quote: <path fill="currentColor" d="M5 6h5v5c0 3.9-1.7 6.1-5 7.2v-3.4c1.4-.5 2-1.6 2-3.8H5zm9 0h5v5c0 3.9-1.7 6.1-5 7.2v-3.4c1.4-.5 2-1.6 2-3.8h-2z" />,
  check: <path {...stroke} strokeWidth={2.4} d="m4.5 12.5 5 5L19.5 6.5" />,
  chevRight: <path {...stroke} strokeWidth={2.2} d="m9 5 7 7-7 7" />,
  chevLeft: <path {...stroke} strokeWidth={2.2} d="m15 5-7 7 7 7" />,
  arrowLeft: <path {...stroke} strokeWidth={2} d="M20 12H4m0 0 6-6m-6 6 6 6" />,
  menu: <path {...stroke} strokeWidth={2.2} d="M4 6.5h16M4 12h16M4 17.5h10" />,
  close: <path {...stroke} strokeWidth={2.2} d="m6 6 12 12M18 6 6 18" />,
  plus: <path {...stroke} strokeWidth={2.2} d="M12 5v14M5 12h14" />,
  send: <path {...stroke} d="M20.5 3.5 3.5 10l6.5 2.5L12.5 19l8-15.5zM10 12.5l3.5-3.5" />,
  shield: (
    <>
      <path {...stroke} d="M12 3 5 5.8v5.4c0 4.8 3 8.1 7 9.8 4-1.7 7-5 7-9.8V5.8z" />
      <path {...stroke} d="m8.8 11.8 2.2 2.2 4.2-4.5" />
    </>
  ),
  award: (
    <>
      <circle {...stroke} cx="12" cy="9" r="5.5" />
      <path {...stroke} d="m8.8 13.5-1.6 7 4.8-2.6 4.8 2.6-1.6-7M12 6.5l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2L9.1 8.6l2-.3z" />
    </>
  ),
  users: (
    <>
      <circle {...stroke} cx="9" cy="8.5" r="3.2" />
      <path {...stroke} d="M3.5 19.5c.6-3.4 2.8-5.2 5.5-5.2s4.9 1.8 5.5 5.2M15.5 5.8a3.2 3.2 0 0 1 0 5.4M17.5 14.6c1.7.7 2.7 2.3 3 4.9" />
    </>
  ),
  grad: (
    <>
      <path {...stroke} d="m12 4 10 4.5L12 13 2 8.5z" />
      <path {...stroke} d="M6.5 10.8v4.7c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4.7M22 8.5v5" />
    </>
  ),
  spine: (
    <>
      <path {...stroke} d="M12 2.5c-2 2 2 4 0 6s2 4 0 6 2 4 0 6" />
      <path {...stroke} d="M8.5 5.5h7M8.5 11.5h7M8.5 17.5h7" />
    </>
  ),
  sport: <path {...stroke} strokeWidth={2} d="M7 7.5v9M17 7.5v9M3.5 9.5v5M20.5 9.5v5M7 12h10M2 12h1.5M20.5 12H22" />,
  surgery: (
    <>
      <path {...stroke} d="M12 3.5 5.5 6v5c0 4.6 3 7.8 6.5 9.5 3.5-1.7 6.5-4.9 6.5-9.5V6z" />
      <path {...stroke} d="M12 8v5.5M9.2 10.7h5.6" />
    </>
  ),
  hands: (
    <>
      <path {...stroke} d="M7.5 4.5a6.5 6.5 0 0 1 9.8 3.2M16.5 19.5a6.5 6.5 0 0 1-9.8-3.2" />
      <path {...stroke} d="m17.8 4.5-.5 3.4-3.4-.5M6.2 19.5l.5-3.4 3.4.5" />
      <circle {...stroke} cx="12" cy="12" r="1.6" />
    </>
  ),
  elder: (
    <>
      <circle {...stroke} cx="10" cy="4.8" r="2.3" />
      <path {...stroke} d="M10 7.5c-2.3 1.6-2.8 4.3-1.5 7.3l-1.8 6.7M10.8 11.5l2.7 2 .8 7.5M10 14.8l3 1.2" />
      <path {...stroke} d="M17 10.2c1.2-.3 2 .4 2 1.6v9.7" />
    </>
  ),
  manual: (
    <>
      <path {...stroke} d="M8.2 5.8A7.2 7.2 0 0 1 18 11M15.8 18.2A7.2 7.2 0 0 1 6 13" />
      <path {...stroke} d="m18 7.5.2 3.6-3.6-.3M6 16.5l-.2-3.6 3.6.3" />
      <path {...stroke} d="M9.5 12h5" />
    </>
  ),
  clipboard: (
    <>
      <rect {...stroke} x="5" y="4.5" width="14" height="16" rx="2" />
      <path {...stroke} d="M9 4.5V3h6v1.5M9 9.5h6M9 13h6M9 16.5h3.5" />
    </>
  ),
  target: (
    <>
      <circle {...stroke} cx="12" cy="12" r="8.5" />
      <circle {...stroke} cx="12" cy="12" r="4.5" />
      <circle fill="currentColor" cx="12" cy="12" r="1.4" />
    </>
  ),
  chart: (
    <>
      <path {...stroke} d="M4 4v16h16" />
      <path {...stroke} d="m7.5 15 3.5-4 2.8 2.2L18.5 8" />
      <path {...stroke} d="m16 7.5 2.5.5.3 2.5" />
    </>
  ),
  calendar: (
    <>
      <rect {...stroke} x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path {...stroke} d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path fill="currentColor" d="M8 13h2.5v2.5H8zM13.5 13H16v2.5h-2.5z" />
    </>
  ),
  facebook: <path fill="currentColor" d="M13.5 21v-7h2.6l.5-3h-3.1V9c0-.9.3-1.6 1.7-1.6h1.5V4.6c-.3 0-1.2-.1-2.3-.1-2.4 0-4 1.4-4 4.1V11H7.8v3h2.6v7z" />,
  instagram: (
    <>
      <rect {...stroke} x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle {...stroke} cx="12" cy="12" r="4" />
      <circle fill="currentColor" cx="17.2" cy="6.8" r="1.2" />
    </>
  ),
  xsocial: <path fill="currentColor" d="M17.8 3.5h3l-6.6 7.6 7.8 9.4h-6.1l-4.8-5.8-5.5 5.8h-3l7.1-8.1L2.2 3.5h6.3l4.3 5.3zm-1.1 15.2h1.7L7.7 5.2H5.9z" />,
  youtube: (
    <>
      <path {...stroke} d="M3 12c0-2.4.2-4.1.4-5a2.3 2.3 0 0 1 1.7-1.7C6.6 5 9 4.9 12 4.9s5.4.1 6.9.4A2.3 2.3 0 0 1 20.6 7c.2.9.4 2.6.4 5s-.2 4.1-.4 5a2.3 2.3 0 0 1-1.7 1.7c-1.5.3-3.9.4-6.9.4s-5.4-.1-6.9-.4A2.3 2.3 0 0 1 3.4 17c-.2-.9-.4-2.6-.4-5z" />
      <path fill="currentColor" d="M10.2 9.2 15 12l-4.8 2.8z" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, className, ...rest }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? "w-5 h-5"} aria-hidden="true" {...rest}>
      {paths[name] ?? paths.pulse}
    </svg>
  );
}

/* خط تخطيط القلب المتحرك — يُستخدم في الـ Hero وكعناوين الأقسام */
export function EcgLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 60" fill="none" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 30h130l18-14 22 26 16-38 20 44 14-26 10 8h120l16-12 20 24 14-32 18 38 12-22 8 6h162"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 30h130l18-14 22 26 16-38 20 44 14-26 10 8h120l16-12 20 24 14-32 18 38 12-22 8 6h162"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={600}
        className="ecg-run"
      />
    </svg>
  );
}
