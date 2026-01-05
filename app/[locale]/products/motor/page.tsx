import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import {
  Settings,
  Wrench,
  Users,
  Package,
  Shield,
  FileCheck,
  CheckCircle,
  Award,
  Building2,
  Globe
} from "lucide-react";
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

// Hero 이미지 데이터
const heroImages = [
  { src: "/images/products/motor/motor_2.png", alt: "Industrial Motor" },
  { src: "/images/products/motor/motor_3.webp", alt: "Motor Parts" },
];

export default function MotorPage() {
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
      <MotorContent />
    </div>
  );
}

async function MotorContent() {
  const t = await getTranslations();

  return (
    <>
      {/* Hero Section with Mosaic */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Mosaic Images */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8] flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-3xl md:text-4xl font-bold">30+</p>
                      <p className="text-sm md:text-base text-white/80">{t("products.motor.hero.yearsExperience")}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-700/50 flex items-center justify-center">
                    <div className="text-center p-4">
                      <Globe className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 text-[#3B82F6]" />
                      <p className="text-sm md:text-base font-medium">{t("products.motor.hero.globalPartners")}</p>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={heroImages[1].src}
                      alt={heroImages[1].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <BackButton href="/products" variant="dark" />

              <Breadcrumb variant="dark" items={[
                { label: "HOME", href: "/" },
                { label: "PRODUCTS", href: "/products" },
                { label: "Motor" }
              ]} />

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                  LDW (Germany)
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                  NIDEC (Italy)
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Motor Solution
              </h1>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                {t("products.motor.hero.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#spare-parts"
                  className="inline-flex items-center px-5 py-2.5 bg-white text-[#0A1628] rounded-full font-medium hover:bg-slate-100 transition-colors text-sm"
                >
                  {t("products.motor.hero.sparePartsBtn")}
                </a>
                <a
                  href="#certification"
                  className="inline-flex items-center px-5 py-2.5 border border-white/50 text-white rounded-full font-medium hover:bg-white/10 transition-colors text-sm"
                >
                  {t("products.motor.hero.certificationBtn")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submenu Bar */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="flex overflow-x-auto scrollbar-hide">
            <a
              href="#spare-parts"
              className="flex-shrink-0 px-6 py-4 text-sm font-medium text-slate-600 hover:text-[#0A1628] border-b-2 border-transparent hover:border-[#3B82F6] transition-colors whitespace-nowrap"
            >
              MOTOR SPARE PARTS
            </a>
            <a
              href="#certification"
              className="flex-shrink-0 px-6 py-4 text-sm font-medium text-slate-600 hover:text-[#0A1628] border-b-2 border-transparent hover:border-[#3B82F6] transition-colors whitespace-nowrap"
            >
              Explosion Proof Certification
            </a>
          </div>
        </div>
      </nav>

      {/* Motor Spare Parts Solution Section */}
      <section id="spare-parts" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
              MOTOR SPARE PARTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("products.motor.spareParts.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t("products.motor.spareParts.description")}
            </p>
          </div>

          {/* Partner Brands */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* LDW Germany */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-[#0A1628]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1628]">LDW</h3>
                  <p className="text-sm text-slate-500">{t("products.motor.spareParts.ldw.country")}</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                {t("products.motor.spareParts.ldw.description")}
              </p>
              <div className="flex items-center text-sm text-[#3B82F6] font-medium">
                <Award className="w-4 h-4 mr-2" />
                {t("products.motor.spareParts.ldw.status")}
              </div>
            </div>

            {/* NIDEC Italy */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-[#0A1628]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1628]">NIDEC</h3>
                  <p className="text-sm text-slate-500">{t("products.motor.spareParts.nidec.country")}</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                {t("products.motor.spareParts.nidec.description")}
              </p>
              <div className="flex items-center text-sm text-[#3B82F6] font-medium">
                <Award className="w-4 h-4 mr-2" />
                {t("products.motor.spareParts.nidec.status")}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-10">
            <h3 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">
              {t("products.motor.spareParts.servicesTitle")}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Technical Support */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <Settings className="w-10 h-10 text-[#3B82F6] mb-4" />
                <h4 className="text-lg font-bold text-[#0A1628] mb-2">
                  {t("products.motor.spareParts.services.technical.title")}
                </h4>
                <p className="text-slate-600 text-sm">
                  {t("products.motor.spareParts.services.technical.description")}
                </p>
              </div>

              {/* Supervisor Dispatch */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <Users className="w-10 h-10 text-[#3B82F6] mb-4" />
                <h4 className="text-lg font-bold text-[#0A1628] mb-2">
                  {t("products.motor.spareParts.services.supervisor.title")}
                </h4>
                <p className="text-slate-600 text-sm">
                  {t("products.motor.spareParts.services.supervisor.description")}
                </p>
              </div>

              {/* Parts Supply */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <Package className="w-10 h-10 text-[#3B82F6] mb-4" />
                <h4 className="text-lg font-bold text-[#0A1628] mb-2">
                  {t("products.motor.spareParts.services.parts.title")}
                </h4>
                <p className="text-slate-600 text-sm">
                  {t("products.motor.spareParts.services.parts.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explosion Proof Certification Section */}
      <section id="certification" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#EF4444]/10 text-[#EF4444] text-sm font-medium rounded-full mb-4">
              EXPLOSION PROOF CERTIFICATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("products.motor.certification.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t("products.motor.certification.description")}
            </p>
          </div>

          {/* Certification Bodies */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* KOSHA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-[#3B82F6] transition-all">
              <div className="w-16 h-16 bg-[#0A1628] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-2">KOSHA</h3>
              <p className="text-slate-600 text-sm">
                {t("products.motor.certification.kosha.description")}
              </p>
            </div>

            {/* KTL */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-[#3B82F6] transition-all">
              <div className="w-16 h-16 bg-[#0A1628] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-2">KTL</h3>
              <p className="text-slate-600 text-sm">
                {t("products.motor.certification.ktl.description")}
              </p>
            </div>

            {/* KGS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-[#3B82F6] transition-all">
              <div className="w-16 h-16 bg-[#0A1628] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-2">KGS</h3>
              <p className="text-slate-600 text-sm">
                {t("products.motor.certification.kgs.description")}
              </p>
            </div>
          </div>

          {/* Consulting Services */}
          <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {t("products.motor.certification.consulting.title")}
                </h3>
                <p className="text-slate-300 mb-6">
                  {t("products.motor.certification.consulting.description")}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#3B82F6] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t("products.motor.certification.consulting.items.review")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#3B82F6] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t("products.motor.certification.consulting.items.documentation")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#3B82F6] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t("products.motor.certification.consulting.items.testing")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#3B82F6] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t("products.motor.certification.consulting.items.support")}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 md:p-8">
                <Wrench className="w-12 h-12 text-[#3B82F6] mb-4" />
                <h4 className="text-xl font-bold mb-3">
                  {t("products.motor.certification.consulting.processTitle")}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-slate-300">{t("products.motor.certification.consulting.process.step1")}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-slate-300">{t("products.motor.certification.consulting.process.step2")}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-slate-300">{t("products.motor.certification.consulting.process.step3")}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-slate-300">{t("products.motor.certification.consulting.process.step4")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("products.motor.cta.title")}
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {t("products.motor.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              {t("products.motor.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {t("products.motor.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
