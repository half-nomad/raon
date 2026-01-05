import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: 'Bearing & Lubrication | 베어링 및 윤활 솔루션',
  description: '터보링크 고성능 베어링 및 삼영필텍 윤활 솔루션 전문 공급. Tilting Pad Journal/Thrust Bearing, Vertical Guide, Oil Purifier, Flushing Service 제공.',
  keywords: ['Bearing', '베어링', '터보링크', 'Tilting Pad', 'Thrust Bearing', 'Journal Bearing', 'Oil Purifier', '오일 정화기', '삼영필텍', '윤활'],
  openGraph: {
    title: 'Bearing & Lubrication | 라온토탈솔루션',
    description: '터보링크 고성능 베어링 및 삼영필텍 윤활 솔루션 전문 공급',
    images: ['/images/og/bearing-og.jpg'],
  },
};

// Section navigation items
const sectionNavItems = [
  { id: "bearing-solution", labelKey: "bearingSolution" },
  { id: "lubrication-solution", labelKey: "lubricationSolution" },
];

export default async function BearingPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Bearing & Lubrication (베어링 및 윤활 솔루션)"
        description="터보링크 고성능 베어링 및 삼영필텍 윤활 솔루션. Tilting Pad Journal/Thrust Bearing, Vertical Guide, Oil Purifier, Flushing Service 제공."
        category="베어링 및 윤활"
        manufacturers={[{ name: '터보링크' }, { name: '삼영필텍' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Bearing & Lubrication', url: '/products/bearing' },
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
              { label: "Bearing & Lubrication" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              {t("products.bearingPage.hero.partners")}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Bearing & Lubrication
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
              {t("products.bearingPage.hero.description")}
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
                {item.labelKey === "bearingSolution" ? "BEARING SOLUTION" : "LUBRICATION SOLUTION"}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: BEARING SOLUTION - Image Left */}
      <section id="bearing-solution" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/bearing/bearing_TILTING PAD THRUST BEARING.png"
                  alt="Tilting Pad Thrust Bearing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Turbolink
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.bearingPage.bearing.partner")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                BEARING SOLUTION
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.bearingPage.bearing.sectionDescription")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">TILTING PAD JOURNAL BEARING</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">TILTING PAD THRUST BEARING</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">JOURNAL & THRUST COMBINED BEARING</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">VERTICAL GUIDE & THRUST BEARING</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("products.bearingPage.bearing.partnerBrand")}:</strong> {t("products.bearingPage.bearing.turbolinkName")} - {t("products.bearingPage.bearing.turbolinkDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bearing Services - Image Right */}
      <section className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.bearingPage.bearing.servicesTitle")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.bearingPage.bearing.servicesTitle")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.bearingPage.bearing.overviewDescription")}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">REPAIR</span>
                  <p className="text-xs text-slate-500 mt-1">{t("products.bearingPage.bearing.services.repair")}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">RETROFIT</span>
                  <p className="text-xs text-slate-500 mt-1">{t("products.bearingPage.bearing.services.retrofit")}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200 col-span-2">
                  <span className="text-sm font-medium text-[#0A1628]">REPLACEMENT</span>
                  <p className="text-xs text-slate-500 mt-1">{t("products.bearingPage.bearing.services.replacement")}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("products.bearingPage.bearing.overviewTitle")}:</strong> {t("products.bearingPage.bearing.overviewDescription")}
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/bearing/bearing_VERTICAL BEARING.png"
                  alt="Bearing Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Vertical Bearing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: LUBRICATION SOLUTION - Image Left */}
      <section id="lubrication-solution" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/oil-purifier/Oil Purifier_1.png"
                  alt="Oil Purifier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Samyoung Filtec
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.bearingPage.lubrication.partner")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                LUBRICATION SOLUTION
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.bearingPage.lubrication.sectionDescription")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">Oil Purifier</h4>
                    <p className="text-sm text-slate-600">{t("products.bearingPage.lubrication.products.purifier.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">Rental Service</h4>
                    <p className="text-sm text-slate-600">{t("products.bearingPage.lubrication.products.rental.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">Flushing Service</h4>
                    <p className="text-sm text-slate-600">{t("products.bearingPage.lubrication.products.flushing.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Lubrication Features - Image Right */}
      <section className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.bearingPage.lubrication.featuresTitle")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.bearingPage.lubrication.featuresTitle")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.bearingPage.lubrication.overviewDescription")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.bearingPage.lubrication.features.moisture.title")}</h4>
                  <p className="text-sm text-slate-600">{t("products.bearingPage.lubrication.features.moisture.description")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.bearingPage.lubrication.features.impurity.title")}</h4>
                  <p className="text-sm text-slate-600">{t("products.bearingPage.lubrication.features.impurity.description")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.bearingPage.lubrication.features.lifeExtension.title")}</h4>
                  <p className="text-sm text-slate-600">{t("products.bearingPage.lubrication.features.lifeExtension.description")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.bearingPage.lubrication.features.domestic.title")}</h4>
                  <p className="text-sm text-slate-600">{t("products.bearingPage.lubrication.features.domestic.description")}</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/oil-purifier/Oil Purifier_2.png"
                  alt="Lubrication Features"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Oil Purifier System
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
            {t("products.bearingPage.cta.title")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t("products.bearingPage.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors text-sm md:text-base"
            >
              {t("products.bearingPage.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              {t("products.bearingPage.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
