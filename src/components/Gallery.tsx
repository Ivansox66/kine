import { gallerySection } from "../content";
import { Reveal, SectionHead } from "../lib/motion";

const spans = ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-1"];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-paper overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          kicker={gallerySection.kicker}
          title={gallerySection.title}
          subtitle={gallerySection.subtitle}
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[170px] sm:auto-rows-[210px] gap-4 mt-14">
          {gallerySection.items.map((item, i) => (
            <Reveal key={item.src + i} delay={i * 110} className={spans[i % spans.length]}>
              <figure className="group relative w-full h-full rounded-xl overflow-hidden shadow-[0_18px_40px_-22px_rgba(11,46,51,0.5)]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent px-5 pb-4 pt-14 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-display font-bold text-base">{item.caption}</p>
                  <span className="block h-0.5 w-10 bg-honey mt-2 rounded-full" />
                </figcaption>
                <span className="absolute top-3 left-3 grid place-items-center w-9 h-9 rounded-full bg-paper/15 text-white opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-500">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.8-3.8M8.5 11h5M11 8.5v5" />
                  </svg>
                </span>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
