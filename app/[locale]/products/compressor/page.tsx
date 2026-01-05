import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: 'Compressor Solutions | Industrial Compressor Specialist',
  description: 'Complete compressor solutions including new turbo compressors, spare parts, troubleshooting, and maintenance services. FIMA, NEUMAN & ESSER, WTQ, Castanet partnerships.',
  keywords: ['Compressor', 'Turbo Compressor', 'Spare Parts', 'Cylinder Liner', 'Piston', 'Valve', 'WTQ', 'Castanet', 'FIMA', 'NEUMAN & ESSER'],
  openGraph: {
    title: 'Compressor Solutions | Raon Total Solution',
    description: 'Complete compressor solutions: new equipment, spare parts, troubleshooting, and maintenance',
    images: ['/images/og/compressor-og.jpg'],
  },
};

// Section navigation items
const sectionNavItems = [
  { id: "new-compressor", labelKey: "newCompressor" },
  { id: "spare-parts", labelKey: "spareParts" },
  { id: "troubleshooting", labelKey: "troubleshooting" },
  { id: "maintenance", labelKey: "maintenance" },
];

export default async function CompressorPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Compressor Solutions"
        description="Complete compressor solutions including new turbo compressors, spare parts, troubleshooting, and maintenance services."
        category="Industrial Compressor"
        manufacturers={[
          { name: 'FIMA' },
          { name: 'NEUMAN & ESSER' },
          { name: 'WTQ' },
          { name: 'Castanet SA' },
          { name: 'KB Delta' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Compressor', url: '/products/compressor' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl">
            <BackButton href="/products" variant="dark" />

            <Breadcrumb variant="dark" items={[
              { label: "HOME", href: "/" },
              { label: "PRODUCTS", href: "/products" },
              { label: "Compressor" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              FIMA · NEUMAN & ESSER · WTQ · Castanet SA · KB Delta
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("products.compressor.hero.title")}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
              {t("products.compressorPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Submenu Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="flex overflow-x-auto scrollbar-hide">
            {sectionNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex-shrink-0 px-4 py-4 text-sm md:text-base font-medium text-slate-600 hover:text-[#3B82F6] hover:border-b-2 hover:border-[#3B82F6] transition-colors whitespace-nowrap"
              >
                {t(`products.compressorPage.nav.${item.labelKey}`)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: New Compressor Solution - Image Left */}
      <section id="new-compressor" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/industries/oil-refinery.PNG"
                  alt="FIMA Turbo Compressor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    FIMA Germany
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.compressorPage.sections.newCompressor.tag")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.compressorPage.sections.newCompressor.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.compressorPage.sections.newCompressor.description")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">TURBO COMPRESSORS</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">SPECIAL PURPOSE BLOWERS</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">EXPLOSION PROOF BLOWERS</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">HERMETICALLY ENCAPSULATED BLOWERS AND COMPRESSOR</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("products.compressorPage.sections.newCompressor.partnerLabel")}:</strong> FIMA (Germany) - {t("products.compressorPage.sections.newCompressor.partnerDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Spare Parts Solution - Image Right */}
      <section id="spare-parts" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.compressorPage.sections.spareParts.tag")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.compressorPage.sections.spareParts.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.compressorPage.sections.spareParts.description")}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">CYLINDER LINER</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">PISTON</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">PISTON ROD</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">PISTON RING & RIDER RING</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">STUFFING BOX & INTERNAL PARTS</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">OIL SCRAPER & INTERNAL PARTS</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200 col-span-2">
                  <span className="text-sm font-medium text-[#0A1628]">VALVE ASSY & INTERNAL PARTS (VALVE PLATE, SPRING, ETC)</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("products.compressorPage.sections.spareParts.partnerLabel")}:</strong> WTQ, Castanet SA (France), KB Delta (USA)
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/compressor-parts/piston_1.jpg"
                  alt="Compressor Spare Parts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Castanet SA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Troubleshooting - Image Left */}
      <section id="troubleshooting" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/compressor/troubleshooting.jpg"
                  alt="Troubleshooting Service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Global OEM Network
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.compressorPage.sections.troubleshooting.tag")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.compressorPage.sections.troubleshooting.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.compressorPage.sections.troubleshooting.description")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.compressorPage.sections.troubleshooting.steps.step1.title")}</h4>
                    <p className="text-sm text-slate-600">{t("products.compressorPage.sections.troubleshooting.steps.step1.desc")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.compressorPage.sections.troubleshooting.steps.step2.title")}</h4>
                    <p className="text-sm text-slate-600">{t("products.compressorPage.sections.troubleshooting.steps.step2.desc")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.compressorPage.sections.troubleshooting.steps.step3.title")}</h4>
                    <p className="text-sm text-slate-600">{t("products.compressorPage.sections.troubleshooting.steps.step3.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Maintenance & Repair - Image Right */}
      <section id="maintenance" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.compressorPage.sections.maintenance.tag")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.compressorPage.sections.maintenance.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.compressorPage.sections.maintenance.description")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.compressorPage.sections.maintenance.features.preventive.title")}</h4>
                  <p className="text-sm text-slate-600">{t("products.compressorPage.sections.maintenance.features.preventive.desc")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.compressorPage.sections.maintenance.features.emergency.title")}</h4>
                  <p className="text-sm text-slate-600">{t("products.compressorPage.sections.maintenance.features.emergency.desc")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.compressorPage.sections.maintenance.features.overhaul.title")}</h4>
                  <p className="text-sm text-slate-600">{t("products.compressorPage.sections.maintenance.features.overhaul.desc")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.compressorPage.sections.maintenance.features.local.title")}</h4>
                  <p className="text-sm text-slate-600">{t("products.compressorPage.sections.maintenance.features.local.desc")}</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/compressor/maintenance.jpg"
                  alt="Maintenance Service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Local Partnership
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t("products.compressor.cta.title")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t("products.compressor.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors text-sm md:text-base"
            >
              {t("products.compressor.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              {t("products.compressor.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
