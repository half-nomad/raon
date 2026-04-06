"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductIntro } from "@/components/products/product-intro";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// 대표 이미지 (상단 갤러리용)
const heroImages = [
  // Bearing (4)
  { src: "/images/products/bearing/bearing_TILTING%20PAD%20THRUST%20BEARING.png", alt: "Tilting Pad Thrust Bearing" },
  { src: "/images/products/bearing/bearing_JOURNAL%20%26%20THRUST%20COMBINED%20BEARING.png", alt: "Journal & Thrust Combined Bearing" },
  { src: "/images/products/bearing/bearing_VERTICAL%20BEARING.png", alt: "Vertical Bearing" },
  { src: "/images/products/bearing/bearing_FIXED%20PROFILE%20BEARING.png", alt: "Fixed Profile Bearing" },
  // Oil Purifier (6)
  { src: "/images/products/oil-purifier/p1-01.png", alt: "Oil Purifier System" },
  { src: "/images/products/oil-purifier/p1-02.png", alt: "Oil Purifier Unit" },
  { src: "/images/products/oil-purifier/p1-03.png", alt: "Oil Purifier Rental" },
  { src: "/images/products/oil-purifier/p1-04.png", alt: "Oil Flushing System" },
  { src: "/images/products/oil-purifier/p1-05.png", alt: "Oil Purifier Product 5" },
  { src: "/images/products/oil-purifier/p1-06.png", alt: "Oil Purifier Product 6" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "bearing", label: "BEARING SOLUTION" },
  { id: "lubrication", label: "LUBRICATION SOLUTION" },
];

// Bearing 이미지 (캐러셀용)
const bearingImages = [
  { src: "/images/products/bearing/bearing_TILTING%20PAD%20THRUST%20BEARING.png", alt: "Tilting Pad Thrust Bearing" },
  { src: "/images/products/bearing/bearing_JOURNAL%20%26%20THRUST%20COMBINED%20BEARING.png", alt: "Journal & Thrust Combined Bearing" },
  { src: "/images/products/bearing/bearing_VERTICAL%20BEARING.png", alt: "Vertical Bearing" },
  { src: "/images/products/bearing/bearing_FIXED%20PROFILE%20BEARING.png", alt: "Fixed Profile Bearing" },
];

// Lubrication 이미지 (캐러셀용)
const lubricationImages = [
  { src: "/images/products/oil-purifier/p1-01.png", alt: "Oil Purifier System 1" },
  { src: "/images/products/oil-purifier/p1-02.png", alt: "Oil Purifier System 2" },
  { src: "/images/products/oil-purifier/p1-03.png", alt: "Oil Purifier System 3" },
  { src: "/images/products/oil-purifier/p1-04.png", alt: "Oil Purifier System 4" },
  { src: "/images/products/oil-purifier/p1-05.png", alt: "Oil Purifier System 5" },
  { src: "/images/products/oil-purifier/p1-06.png", alt: "Oil Purifier System 6" },
];

// Bearing 서비스 키 목록
const bearingServiceKeys = ["repair", "reverseEngineering", "troubleShooting"] as const;

export default function BearingLubricationPage() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("bearing");
  const [bearingImageIdx, setBearingImageIdx] = useState(0);
  const [lubricationImageIdx, setLubricationImageIdx] = useState(0);

  // 번역 적용된 서비스 목록
  const bearingServiceList = bearingServiceKeys.map(
    (key) => t(`products.bearingPage.bearingServices.${key}`)
  );

  // 스크롤 위치에 따라 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(subNavItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 부드러운 스크롤 이동
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // 캐러셀 네비게이션
  const goToPrev = (current: number, total: number, setter: (v: number) => void) => {
    setter((current - 1 + total) % total);
  };
  const goToNext = (current: number, total: number, setter: (v: number) => void) => {
    setter((current + 1) % total);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-[172px] pb-24 bg-gradient-to-br from-[#0A1628] via-[#0f1d32] to-[#1a2942] text-white">
          <div className="section-container">
            <BackButton href="/products" variant="dark" />
            <Breadcrumb
              variant="dark"
              items={[
                { label: "HOME", href: "/" },
                { label: "PRODUCTS", href: "/products" },
                { label: "BEARING & LUBRICATION" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              BEARING & LUBRICATION
            </h1>
            <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
              {t("products.bearingPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Product Intro - 2컬럼 레이아웃 */}
        <ProductIntro
          title={t("products.bearingPage.introTitle")}
          description={t("products.bearingPage.introDescription")}
          images={heroImages}
          partners={[
            { name: t("products.bearingPage.partnerTurbolink"), country: t("products.bearingPage.countryKorea") },
            { name: t("products.bearingPage.partnerSamyoung"), country: t("products.bearingPage.countryKorea") },
          ]}
          highlights={[
            t("products.bearingPage.highlightUltraHighSpeed"),
            t("products.bearingPage.highlightHeavyLoad"),
            t("products.bearingPage.highlightDomesticPartner"),
            t("products.bearingPage.highlightFastDelivery"),
          ]}
        />

        {/* Sticky Sub Navigation */}
        <nav className="sticky top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200">
          <div className="section-container">
            <div className="flex overflow-x-auto scrollbar-hide">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-6 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors
                    ${activeSection === item.id
                      ? "text-[#0A1628]"
                      : "text-slate-500 hover:text-[#0A1628]"
                    }
                  `}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#EF4444]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ========== Section 01: BEARING SOLUTION - 네이비 배경 ========== */}
        <section id="bearing" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                BEARING SOLUTION
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            {/* 2-col: 좌(텍스트) / 우(캐러셀) */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
              {/* 좌측: 설명 영역 */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {t("products.bearingPage.turbolinkName")}
                  </h3>
                  <p className="text-[#3B82F6] font-medium">Korea</p>
                  <p className="text-slate-300 mt-4 leading-relaxed">
                    {t("products.bearingPage.turbolinkDescription")}
                  </p>
                </div>

                {/* 서비스 목록 */}
                <div className="space-y-3 mb-8">
                  {bearingServiceList.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-white/10 pl-4 py-3 pr-4">
                      <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-white font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                {/* 핵심 특징 */}
                <div className="space-y-4">
                  {(["ultraHighSpeed", "heavyLoadSupport", "customDesign"] as const).map((key, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-[#3B82F6] font-bold">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <h5 className="font-semibold text-white">{t(`products.bearingPage.bearingFeatures.${key}.title`)}</h5>
                        <p className="text-sm text-slate-400">{t(`products.bearingPage.bearingFeatures.${key}.desc`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 우측: 이미지 캐러셀 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                <Image
                  src={bearingImages[bearingImageIdx].src}
                  alt={bearingImages[bearingImageIdx].alt}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* 좌측 화살표 */}
                <button
                  onClick={() => goToPrev(bearingImageIdx, bearingImages.length, setBearingImageIdx)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label={t("products.bearingPage.ariaPrevBearing")}
                >
                  <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
                </button>

                {/* 우측 화살표 */}
                <button
                  onClick={() => goToNext(bearingImageIdx, bearingImages.length, setBearingImageIdx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label={t("products.bearingPage.ariaNextBearing")}
                >
                  <ChevronRight className="w-5 h-5 text-[#0A1628]" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {bearingImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setBearingImageIdx(dotIdx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        dotIdx === bearingImageIdx
                          ? "bg-[#0A1628] w-4"
                          : "bg-[#0A1628]/30 hover:bg-[#0A1628]/60"
                      }`}
                      aria-label={t("products.bearingPage.ariaBearingImage", { index: dotIdx + 1 })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Section 02: LUBRICATION SOLUTION - 흰색 배경 ========== */}
        <section id="lubrication" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                LUBRICATION SOLUTION
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            {/* 2-col: 좌(캐러셀) / 우(텍스트) — 지그재그 */}
            <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
              {/* 텍스트 (모바일 first, 데스크톱에서 우측) */}
              <div className="flex flex-col lg:order-last">
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-1">
                    {t("products.bearingPage.samyoungName")}
                  </h3>
                  <p className="text-[#3B82F6] font-medium">Korea</p>
                  <p className="text-slate-600 mt-4 leading-relaxed">
                    {t("products.bearingPage.samyoungDescription")}
                  </p>
                </div>

                {/* 특허 기술 리스트 */}
                <div className="space-y-3 mb-8">
                  {(["dualVacuum", "electricFilter", "varnishRemoval", "bearingLifeExtension"] as const).map((key, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4">
                      <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-[#0A1628] font-medium">{t(`products.bearingPage.lubricationTech.${key}`)}</span>
                    </div>
                  ))}
                </div>

                {/* 도입 효과 */}
                <div className="space-y-4">
                  {(["oilLifeExtension", "bearingProtection", "costReduction"] as const).map((key, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-[#3B82F6] font-bold">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <h5 className="font-semibold text-[#0A1628]">{t(`products.bearingPage.lubricationBenefits.${key}.title`)}</h5>
                        <p className="text-sm text-slate-500">{t(`products.bearingPage.lubricationBenefits.${key}.desc`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 캐러셀 (모바일 second, 데스크톱에서 좌측) */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 lg:order-first">
                <Image
                  src={lubricationImages[lubricationImageIdx].src}
                  alt={lubricationImages[lubricationImageIdx].alt}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* 좌측 화살표 */}
                <button
                  onClick={() => goToPrev(lubricationImageIdx, lubricationImages.length, setLubricationImageIdx)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label={t("products.bearingPage.ariaPrevLubrication")}
                >
                  <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
                </button>

                {/* 우측 화살표 */}
                <button
                  onClick={() => goToNext(lubricationImageIdx, lubricationImages.length, setLubricationImageIdx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label={t("products.bearingPage.ariaNextLubrication")}
                >
                  <ChevronRight className="w-5 h-5 text-[#0A1628]" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {lubricationImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setLubricationImageIdx(dotIdx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        dotIdx === lubricationImageIdx
                          ? "bg-[#0A1628] w-4"
                          : "bg-[#0A1628]/30 hover:bg-[#0A1628]/60"
                      }`}
                      aria-label={t("products.bearingPage.ariaLubricationImage", { index: dotIdx + 1 })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-[#0A1628] via-[#1A2D47] to-[#0A1628] text-white py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          <div className="section-container text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("products.bearingPage.ctaTitle")}
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              {t("products.bearingPage.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EF4444] text-white rounded-full font-semibold hover:bg-[#DC2626] transition-colors"
              >
                {t("products.bearingPage.ctaConsultation")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {t("products.bearingPage.ctaViewProducts")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
