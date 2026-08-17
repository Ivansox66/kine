import { useEffect } from "react";
import { meta, site, footer } from "./content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

/* حقن بيانات SEO و Schema Markup من ملف المحتوى */
function useSeo() {
  useEffect(() => {
    document.title = meta.title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", meta.description);
    setMeta("name", "keywords", meta.keywords);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:image", meta.ogImage);
    setMeta("property", "og:url", meta.url);

    /* Schema.org — MedicalBusiness / PhysicalTherapy */
    const schema = {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "PhysicalTherapy"],
      name: site.name,
      alternateName: site.nameEn,
      description: meta.description,
      url: meta.url,
      image: meta.ogImage,
      telephone: `+${site.phone}`,
      email: site.email,
      address: { "@type": "PostalAddress", streetAddress: site.address },
      openingHours: footer.hours.map((h) => `${h.days}: ${h.time}`),
      medicalSpecialty: "https://schema.org/Physiotherapy",
      priceRange: "$$",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "clinic-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.getElementById("clinic-schema")?.remove();
    };
  }, []);
}

export default function App() {
  useSeo();

  return (
    <div className="relative">
      {/* طبقة حبيبات خفيفة فوق كل الصفحة */}
      <div className="noise fixed inset-0 z-[60] pointer-events-none opacity-[0.035]" aria-hidden />

      <Header />

      <main>
        <Hero />
        <StatsStrip />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Team />
        <Testimonials />
        <Gallery />
        <Faq />
        <Booking />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
