import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: 'Motor Spare Parts & Explosion Proof Certification | 모터 부품 및 방폭 인증',
  description: '30년 왕복동압축기 공급 실적. LDW(독일), NIDEC(이탈리아) 국내 대리점. 외산 모터 부품 공급 및 KOSHA/KTL/KGS 방폭 인증 솔루션.',
  keywords: ['Motor', '모터 부품', 'LDW', 'NIDEC', '방폭 인증', 'KOSHA', 'KTL', 'KGS', 'Explosion Proof'],
  openGraph: {
    title: 'Motor Spare Parts & Explosion Proof Certification | 라온토탈솔루션',
    description: '30년 왕복동압축기 공급 실적. 외산 모터 부품 공급 및 국내 방폭 인증 솔루션',
    images: ['/images/og/motor-og.jpg'],
  },
};

// Section navigation items
const sectionNavItems = [
  { id: "spare-parts", labelKey: "spareParts" },
  { id: "certification", labelKey: "certification" },
];

export default async function MotorPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Motor Spare Parts & Explosion Proof Certification"
        description="30년 왕복동압축기 공급 실적. LDW(독일), NIDEC(이탈리아) 국내 대리점. 외산 모터 부품 공급 및 KOSHA/KTL/KGS 방폭 인증 솔루션."
        category="모터 부품 및 인증"
        manufacturers={[
          { name: 'LDW (Germany)' },
          { name: 'NIDEC (Italy)' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Motor', url: '/products/motor' },
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
              { label: "Motor" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              LDW (Germany) · NIDEC (Italy)
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Motor Solution
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
              {t("products.motor.hero.description")}
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
                {item.labelKey === "spareParts" ? "MOTOR SPARE PARTS" : "EXPLOSION PROOF CERTIFICATION"}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: Motor Spare Parts - Image Left */}
      <section id="spare-parts" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/motor/motor_2.png"
                  alt="Industrial Motor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    LDW Germany
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                MOTOR SPARE PARTS
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.motor.spareParts.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.motor.spareParts.description")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">LDW (Germany) - {t("products.motor.spareParts.ldw.status")}</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">NIDEC (Italy) - {t("products.motor.spareParts.nidec.status")}</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">30+ {t("products.motor.hero.yearsExperience")}</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{t("products.motor.hero.globalPartners")}</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("products.motor.spareParts.servicesTitle")}:</strong> {t("products.motor.spareParts.services.technical.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Partner Services - Image Right */}
      <section className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.motor.spareParts.servicesTitle")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.motor.spareParts.servicesTitle")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.motor.spareParts.ldw.description")}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">{t("products.motor.spareParts.services.technical.title")}</span>
                  <p className="text-xs text-slate-500 mt-1">{t("products.motor.spareParts.services.technical.description")}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <span className="text-sm font-medium text-[#0A1628]">{t("products.motor.spareParts.services.supervisor.title")}</span>
                  <p className="text-xs text-slate-500 mt-1">{t("products.motor.spareParts.services.supervisor.description")}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200 col-span-2">
                  <span className="text-sm font-medium text-[#0A1628]">{t("products.motor.spareParts.services.parts.title")}</span>
                  <p className="text-xs text-slate-500 mt-1">{t("products.motor.spareParts.services.parts.description")}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">NIDEC:</strong> {t("products.motor.spareParts.nidec.description")}
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/motor/motor_3.webp"
                  alt="Motor Parts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    NIDEC Italy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Explosion Proof Certification - Image Left */}
      <section id="certification" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#0A1628] to-[#1a2942]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">KOSHA</span>
                    </div>
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">KTL</span>
                    </div>
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">KGS</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-center">Explosion Proof Certification</p>
                  <p className="text-slate-300 text-center mt-2">Korea Safety & Certification</p>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Korea Certification
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#EF4444]/10 text-[#EF4444] text-sm font-medium rounded-full mb-4">
                EXPLOSION PROOF CERTIFICATION
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.motor.certification.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.motor.certification.description")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">KOSHA</h4>
                    <p className="text-sm text-slate-600">{t("products.motor.certification.kosha.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">KTL</h4>
                    <p className="text-sm text-slate-600">{t("products.motor.certification.ktl.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">KGS</h4>
                    <p className="text-sm text-slate-600">{t("products.motor.certification.kgs.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Consulting Services - Image Right */}
      <section className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                {t("products.motor.certification.consulting.title")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.motor.certification.consulting.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.motor.certification.consulting.description")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.motor.certification.consulting.process.step1")}</h4>
                  <p className="text-sm text-slate-600">{t("products.motor.certification.consulting.items.review")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.motor.certification.consulting.process.step2")}</h4>
                  <p className="text-sm text-slate-600">{t("products.motor.certification.consulting.items.documentation")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.motor.certification.consulting.process.step3")}</h4>
                  <p className="text-sm text-slate-600">{t("products.motor.certification.consulting.items.testing")}</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.motor.certification.consulting.process.step4")}</h4>
                  <p className="text-sm text-slate-600">{t("products.motor.certification.consulting.items.support")}</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-center">Consulting Service</p>
                  <p className="text-white/80 text-center mt-2">{t("products.motor.certification.consulting.processTitle")}</p>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Full Support
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
            {t("products.motor.cta.title")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t("products.motor.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors text-sm md:text-base"
            >
              {t("products.motor.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              {t("products.motor.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
