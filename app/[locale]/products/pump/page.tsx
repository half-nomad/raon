import Link from "next/link";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { ImageGallery } from "@/components/ui/image-gallery";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: 'Pump | CP Pumpen Magnetic Drive Pump',
  description: 'CP Pumpen 마그네틱 드라이브 펌프 전문. MKP, MKPL, MKP-Bio, MSKS, MSKP 등 다양한 모델로 부식성 유체, Slurry 문제 해결.',
  keywords: ['Pump', '펌프', 'CP Pumpen', 'Magnetic Drive Pump', 'Chemical Pump', '마그네틱 펌프'],
  openGraph: {
    title: 'Pump | 라온토탈솔루션',
    description: 'CP Pumpen 마그네틱 드라이브 펌프. 부식성 유체, Slurry 문제 해결',
    images: ['/images/og/pump-og.jpg'],
  },
};

// Section navigation items
const sectionNavItems = [
  { id: "pump-solution", labelKey: "pumpSolution" },
  { id: "trouble-shooting", labelKey: "troubleShooting" },
];

// Pump product gallery images
const pumpGalleryImages = [
  { src: "/images/products/pump/pump_2-1.PNG", alt: "CP Pump MKP Series - Magnetic Drive Metal Chemical Process Pump" },
  { src: "/images/products/pump/pump_2-2.PNG", alt: "CP Pump MKPL Series - Magnetic Drive PFA Lined Chemical Process Pump" },
  { src: "/images/products/pump/pump_3.png", alt: "CP Pump Product Range - Various Magnetic Drive Pump Models" },
];

export default async function PumpPage() {
  const t = await getTranslations("products.pump");

  const lineupItems = t.raw("pumpSolution.lineup.items") as string[];
  const featureItems = t.raw("pumpSolution.features.items") as string[];
  const problemItems = t.raw("troubleShooting.problems.items") as string[];
  const solutionItems = t.raw("troubleShooting.solutions.items") as string[];

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Pump (CP Pumpen Magnetic Drive Pump)"
        description="CP Pumpen 마그네틱 드라이브 펌프 전문. MKP, MKPL, MKP-Bio, MSKS, MSKP 등 다양한 모델로 부식성 유체, Slurry 문제 해결."
        category="펌프"
        manufacturers={[{ name: 'CP Pumpen' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Pump', url: '/products/pump' },
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
              { label: "Pump" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              CP Pumpen
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pump
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
              {t("hero.description")}
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
                {t(`submenu.${item.labelKey}`)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: PUMP SOLUTION - Image Left */}
      <section id="pump-solution" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Gallery */}
            <div className="order-2 lg:order-1">
              <ImageGallery
                images={pumpGalleryImages}
                aspectRatio="4/3"
                brandLabel="CP Pumpen"
                objectFit="cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                PUMP SOLUTION
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("pumpSolution.subtitle")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("pumpSolution.description")}
              </p>

              {/* Product Lineup */}
              <div className="space-y-4 mb-8">
                {lineupItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("pumpSolution.features.title")}:</strong>
                </p>
                <ul className="mt-2 space-y-1">
                  {featureItems.map((item, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start">
                      <span className="text-[#3B82F6] mr-2">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: TROUBLE SHOOTING - Image Right */}
      <section id="trouble-shooting" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#EF4444]/10 text-[#EF4444] text-sm font-medium rounded-full mb-4">
                {t("troubleShooting.title")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("troubleShooting.subtitle")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("troubleShooting.description")}
              </p>

              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-xl p-5 mb-8 text-white">
                <h3 className="text-lg font-bold mb-2">
                  {t("troubleShooting.highlight")}
                </h3>
                <p className="text-white/90 text-sm">
                  {t("troubleShooting.highlightDescription")}
                </p>
              </div>

              {/* Problems & Solutions Grid */}
              <div className="grid grid-cols-2 gap-3">
                {problemItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="text-sm font-medium text-[#0A1628]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("troubleShooting.solutions.title")}:</strong>
                </p>
                <ul className="mt-2 space-y-1">
                  {solutionItems.map((item, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start">
                      <span className="text-[#3B82F6] mr-2">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div>
              <ImageGallery
                images={[{ src: "/images/products/pump/pump_2-2.PNG", alt: "CP Pump Trouble Shooting" }]}
                aspectRatio="4/3"
                brandLabel="Trouble Shooting"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors text-sm md:text-base"
            >
              {t("cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              {t("cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
