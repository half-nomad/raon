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

// 대표 이미지 (상단 갤러리용) - 16장 전체
const heroImages = [
  // Lightnin (7)
  { src: "/images/products/mixer/Lightnin/Mixer %26 Agitator_1.jpg", alt: "Lightnin Mixer & Agitator 1" },
  { src: "/images/products/mixer/Lightnin/Mixer %26 Agitator_2.jpg", alt: "Lightnin Mixer & Agitator 2" },
  { src: "/images/products/mixer/Lightnin/lightnin-series-10-w-stand-01.jpg", alt: "Lightnin Series 10 Stand 01" },
  { src: "/images/products/mixer/Lightnin/lightnin-series-10-w-stand-02.jpg", alt: "Lightnin Series 10 Stand 02" },
  { src: "/images/products/mixer/Lightnin/lightnin-980-series-02.jpg", alt: "Lightnin 980 Series" },
  { src: "/images/products/mixer/Lightnin/lightnin-981-series-03.jpg", alt: "Lightnin 981 Series" },
  { src: "/images/products/mixer/Lightnin/other-file-ico.jpg", alt: "Lightnin Product" },
  // Plenty (3)
  { src: "/images/products/mixer/Plenty_mixers/Mixer %26 Agitator_3.jpg", alt: "Plenty Mixer & Agitator" },
  { src: "/images/products/mixer/Plenty_mixers/other-file-ico.jpg", alt: "Plenty Product 1" },
  { src: "/images/products/mixer/Plenty_mixers/other-file-ico1.jpg", alt: "Plenty Product 2" },
  // Stelzer (3)
  { src: "/images/products/mixer/Stelzer/Mixer %26 Agitator_4.jpg", alt: "Stelzer Mixer & Agitator" },
  { src: "/images/products/mixer/Stelzer/other-file-ico2.jpg", alt: "Stelzer Product 1" },
  { src: "/images/products/mixer/Stelzer/other-file-ico3.jpg", alt: "Stelzer Product 2" },
  // Philadelphia (3)
  { src: "/images/products/mixer/Philadelphia/other-file-ico4.jpg", alt: "Philadelphia Product" },
  { src: "/images/products/mixer/Philadelphia/philadelphia-pve-01-03-series-mixer-drive.jpg", alt: "Philadelphia PVE Series" },
  { src: "/images/products/mixer/Philadelphia/philadelphia-unifirst-4000-series-mixer-drive.jpg", alt: "Philadelphia Unifirst 4000" },
];

// 서브 네비게이션 ID 정의
const subNavIds = ["solution", "brands"] as const;

// 브랜드 이미지 데이터 (번역 불필요)
const brandImages: Record<string, string[]> = {
  LIGHTNIN: [
    "/images/products/mixer/Lightnin/Mixer %26 Agitator_1.jpg",
    "/images/products/mixer/Lightnin/Mixer %26 Agitator_2.jpg",
    "/images/products/mixer/Lightnin/lightnin-series-10-w-stand-01.jpg",
    "/images/products/mixer/Lightnin/lightnin-series-10-w-stand-02.jpg",
    "/images/products/mixer/Lightnin/lightnin-980-series-02.jpg",
    "/images/products/mixer/Lightnin/lightnin-981-series-03.jpg",
    "/images/products/mixer/Lightnin/other-file-ico.jpg",
  ],
  PLENTY: [
    "/images/products/mixer/Plenty_mixers/Mixer %26 Agitator_3.jpg",
    "/images/products/mixer/Plenty_mixers/other-file-ico.jpg",
    "/images/products/mixer/Plenty_mixers/other-file-ico1.jpg",
  ],
  PHILADELPHIA: [
    "/images/products/mixer/Philadelphia/other-file-ico4.jpg",
    "/images/products/mixer/Philadelphia/philadelphia-pve-01-03-series-mixer-drive.jpg",
    "/images/products/mixer/Philadelphia/philadelphia-unifirst-4000-series-mixer-drive.jpg",
  ],
  STELZER: [
    "/images/products/mixer/Stelzer/Mixer %26 Agitator_4.jpg",
    "/images/products/mixer/Stelzer/other-file-ico2.jpg",
    "/images/products/mixer/Stelzer/other-file-ico3.jpg",
  ],
};

const brandNames = ["LIGHTNIN", "PLENTY", "PHILADELPHIA", "STELZER"] as const;

export default function MixerPage() {
  const t = useTranslations("products.mixerPage");
  const [activeSection, setActiveSection] = useState("solution");
  const [brandImageIndex, setBrandImageIndex] = useState<Record<string, number>>({
    LIGHTNIN: 0,
    PLENTY: 0,
    PHILADELPHIA: 0,
    STELZER: 0,
  });

  const subNavItems = subNavIds.map((id) => ({
    id,
    label: t(`subNav.${id}`),
  }));

  const applicationAreas = [
    { title: t("applications.chemical.title"), desc: t("applications.chemical.desc") },
    { title: t("applications.waterTreatment.title"), desc: t("applications.waterTreatment.desc") },
    { title: t("applications.petrochemical.title"), desc: t("applications.petrochemical.desc") },
    { title: t("applications.bioPharm.title"), desc: t("applications.bioPharm.desc") },
    { title: t("applications.foodDairy.title"), desc: t("applications.foodDairy.desc") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavIds.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(subNavIds[i]);
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

  // 브랜드별 캐러셀 네비게이션
  const goToPrevImage = (brandName: string, totalImages: number) => {
    setBrandImageIndex(prev => ({
      ...prev,
      [brandName]: (prev[brandName] - 1 + totalImages) % totalImages,
    }));
  };

  const goToNextImage = (brandName: string, totalImages: number) => {
    setBrandImageIndex(prev => ({
      ...prev,
      [brandName]: (prev[brandName] + 1) % totalImages,
    }));
  };

  const goToImage = (brandName: string, index: number) => {
    setBrandImageIndex(prev => ({
      ...prev,
      [brandName]: index,
    }));
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
                { label: "MIXER" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              MIXER
            </h1>
            <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
              {t("heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Product Intro - 2컬럼 레이아웃 (16장 타일형 갤러리) */}
        <ProductIntro
          title={t("intro.title")}
          description={t("intro.description")}
          images={heroImages}
          partners={[
            { name: "LIGHTNIN", country: t("intro.partners.lightnin.country") },
            { name: "PLENTY", country: t("intro.partners.plenty.country") },
            { name: "PHILADELPHIA", country: t("intro.partners.philadelphia.country") },
            { name: "STELZER", country: t("intro.partners.stelzer.country") },
          ]}
          highlights={[
            t("intro.highlights.masterDistributor"),
            t("intro.highlights.globalBrands"),
            t("intro.highlights.history"),
            t("intro.highlights.customSolution"),
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

        {/* ========== Section 01: Mixing Solution - Navy ========== */}
        <section id="solution" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                MIXING SOLUTION
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            {/* SPXFLOW 소개: 좌측 텍스트 + 우측 이미지(로고 카드) */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-16">
              {/* 왼쪽: SPXFLOW 파트너 정보 */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <div className="flex items-center gap-6 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      SPXFLOW
                    </h3>
                    {/* SPXFLOW 로고 이미지 박스 */}
                    <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                      <Image
                        src="/images/partners/spx-flow.jpg"
                        alt="SPXFLOW Logo"
                        width={80}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-[#3B82F6] font-medium">Global Master Partner</p>
                  <p className="text-slate-300 mt-4 leading-relaxed">
                    {t("solution.spxflowDescription")}
                  </p>
                </div>

                {/* 적용 분야 */}
                <div className="space-y-3 flex-1 flex flex-col justify-end">
                  {applicationAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-white/5 pl-4 py-3 pr-4"
                    >
                      <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, "0")}</span>
                      <div>
                        <span className="text-white font-medium">{area.title}</span>
                        <span className="text-slate-400 text-sm ml-2">{area.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 핵심 특징 인포그래픽 */}
              <div className="bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-white mb-6">{t("solution.coreFeatures.title")}</h4>
                <div className="space-y-6">
                  {[
                    { num: "01", title: t("solution.coreFeatures.productivity.title"), desc: t("solution.coreFeatures.productivity.desc") },
                    { num: "02", title: t("solution.coreFeatures.energySaving.title"), desc: t("solution.coreFeatures.energySaving.desc") },
                    { num: "03", title: t("solution.coreFeatures.customDesign.title"), desc: t("solution.coreFeatures.customDesign.desc") },
                    { num: "04", title: t("solution.coreFeatures.globalQuality.title"), desc: t("solution.coreFeatures.globalQuality.desc") },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="text-3xl font-bold text-[#3B82F6]/50">{item.num}</span>
                      <div>
                        <h5 className="font-semibold text-white">{item.title}</h5>
                        <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 서비스 프로세스 */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{t("solution.serviceProcess.title")}</h4>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-0">
                    {[t("solution.serviceProcess.step1"), t("solution.serviceProcess.step2"), t("solution.serviceProcess.step3"), t("solution.serviceProcess.step4"), t("solution.serviceProcess.step5")].map((step, idx) => (
                      <div key={idx} className="flex-1 flex items-center">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-medium text-white whitespace-nowrap">{step}</span>
                        </div>
                        {idx < 4 && <span className="hidden md:block flex-1 h-px bg-[#3B82F6]/30 mx-2" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Section 02: SPXFlow Mixer Brands - White ========== */}
        <section id="brands" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                SPXFlow Mixer Brands
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-600 mt-4 max-w-2xl">
                {t("brands.description")}
              </p>
            </div>

            {/* 브랜드 카드 2열 그리드 */}
            <div className="grid md:grid-cols-2 gap-6">
              {brandNames.map((brandName) => {
                const brandKey = brandName.toLowerCase();
                const images = brandImages[brandName];
                const currentIndex = brandImageIndex[brandName] ?? 0;
                const totalImages = images.length;

                return (
                  <div
                    key={brandName}
                    className="rounded-2xl overflow-hidden bg-[#0A1628] border border-slate-800 flex flex-col"
                  >
                    {/* 카드 상단: 캐러셀 */}
                    <div className="relative aspect-[4/3] bg-white">
                      <div className="relative w-full h-full">
                        <Image
                          src={images[currentIndex]}
                          alt={`${brandName} product ${currentIndex + 1}`}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {totalImages > 1 && (
                        <>
                          <button
                            onClick={() => goToPrevImage(brandName, totalImages)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                            aria-label={t("brands.prevImage", { brand: brandName })}
                          >
                            <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
                          </button>

                          <button
                            onClick={() => goToNextImage(brandName, totalImages)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                            aria-label={t("brands.nextImage", { brand: brandName })}
                          >
                            <ChevronRight className="w-5 h-5 text-[#0A1628]" />
                          </button>

                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {images.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => goToImage(brandName, dotIdx)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  dotIdx === currentIndex
                                    ? "bg-white w-4"
                                    : "bg-white/50 hover:bg-white/80"
                                }`}
                                aria-label={t("brands.imageIndicator", { brand: brandName, index: dotIdx + 1 })}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* 카드 하단: 텍스트 */}
                    <div className="p-6 flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {brandName}
                      </h3>
                      <p className="text-[#3B82F6] font-medium text-sm mb-4">
                        {t(`brands.${brandKey}.tagline`)}
                      </p>
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {t(`brands.${brandKey}.description`)}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{t("brands.labels.applications")}</p>
                          <p className="text-base text-white">{t(`brands.${brandKey}.applications`)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{t("brands.labels.coreValue")}</p>
                          <p className="text-base text-slate-300">{t(`brands.${brandKey}.coreValue`)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{t("brands.labels.strength")}</p>
                          <p className="text-base text-slate-300">{t(`brands.${brandKey}.strength`)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section (Pump 패턴 동일 - SVG 배경 패턴) */}
        <section className="relative bg-gradient-to-br from-[#0A1628] via-[#1A2D47] to-[#0A1628] text-white py-12 md:py-16 overflow-hidden">
          {/* Background Pattern */}
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
              {t("cta.title")}
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EF4444] text-white rounded-full font-semibold hover:bg-[#DC2626] transition-colors"
              >
                {t("cta.requestConsultation")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {t("cta.viewOtherProducts")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
