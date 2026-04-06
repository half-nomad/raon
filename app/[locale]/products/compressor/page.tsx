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

// 대표 이미지 (상단 갤러리용) - compressor 폴더 전체 이미지
const heroImages = [
  { src: "/images/products/compressor/Turbo Compressor.jpg", alt: "Turbo Compressor" },
  { src: "/images/products/compressor/crosshead.png", alt: "Crosshead" },
  { src: "/images/products/compressor/cylinder-liner_2.jpg", alt: "Cylinder Liner" },
  { src: "/images/products/compressor/Oil-Scraper-Packing_3.jpg", alt: "Oil Scraper Packing" },
  { src: "/images/products/compressor/Packing-Cup&Packing-Ring_1.jpg", alt: "Packing Cup & Packing Ring" },
  { src: "/images/products/compressor/piston_1.jpg", alt: "Piston 1" },
  { src: "/images/products/compressor/piston_2.jpg", alt: "Piston 2" },
  { src: "/images/products/compressor/Piston-ring_2.jpg", alt: "Piston Ring" },
  { src: "/images/products/compressor/piston-rod_1.jpg", alt: "Piston Rod 1" },
  { src: "/images/products/compressor/piston-rod_2.jpg", alt: "Piston Rod 2" },
  { src: "/images/products/compressor/radial fans.jpg", alt: "Radial Fans" },
  { src: "/images/products/compressor/Rider-ring_2.jpg", alt: "Rider Ring" },
  { src: "/images/products/compressor/Valve-Assy&Internal-Parts_1.jpg", alt: "Valve Assembly & Internal Parts" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "new", label: "NEW COMPRESSOR" },
  { id: "spares", label: "SPARE PARTS" },
  { id: "troubleshooting", label: "TROUBLE SHOOTING" },
  { id: "maintenance", label: "MAINTENANCE & REPAIR" },
];

// SPARE PARTS 카테고리
const sparePartKeys = [
  { nameKey: "cylinderLiner", descKey: "cylinderLinerDesc", partner: "WTQ", image: "/images/products/compressor/cylinder-liner_2.jpg" },
  { nameKey: "piston", descKey: "pistonDesc", partner: "Castanet SA", image: "/images/products/compressor/piston_1.jpg" },
  { nameKey: "pistonRod", descKey: "pistonRodDesc", partner: "Castanet SA", image: "/images/products/compressor/piston-rod_1.jpg" },
  { nameKey: "crosshead", descKey: "crossheadDesc", partner: "-", image: "/images/products/compressor/crosshead.png" },
  { nameKey: "pistonRing", descKey: "pistonRingDesc", partner: "-", image: "/images/products/compressor/Piston-ring_2.jpg" },
  { nameKey: "packingOilScraper", descKey: "packingOilScraperDesc", partner: "-", image: "/images/products/compressor/Packing-Cup&Packing-Ring_1.jpg" },
  { nameKey: "valveAssembly", descKey: "valveAssemblyDesc", partner: "KB Delta", image: "/images/products/compressor/Valve-Assy&Internal-Parts_1.jpg" },
];

// FIMA 제품군
const fimaProducts = [
  "TURBO COMPRESSORS",
  "SPECIAL PURPOSE BLOWERS",
  "EXPLOSION PROOF BLOWERS",
  "HERMETICALLY ENCAPSULATED BLOWERS AND COMPRESSOR",
];

export default function CompressorPage() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("new");

  // SPARE PARTS 데이터 (번역 적용)
  const sparePartsCategories = sparePartKeys.map((part) => ({
    name: t(`products.compressorPage.spareParts.${part.nameKey}`),
    description: t(`products.compressorPage.spareParts.${part.descKey}`),
    partner: part.partner,
    image: part.image,
  }));

  // SPARE PARTS 캐러셀 상태
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalCards = sparePartsCategories.length;

  // 자동 슬라이드 (3초 간격, 1개씩 이동)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalCards);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalCards]);

  // 스크롤 위치에 따라 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // offset for sticky nav

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
      const offset = 140; // sticky nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
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
              { label: "COMPRESSOR" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            COMPRESSOR
          </h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
            {t("products.compressorPage.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Product Intro - 2컬럼 레이아웃 */}
      <ProductIntro
        title={t("products.compressorPage.introTitle")}
        description={t("products.compressorPage.introDescription")}
        images={heroImages}
        partners={[
          { name: "FIMA", country: t("products.compressorPage.countryGermany") },
          { name: "WTQ", country: t("products.compressorPage.countryChina") },
          { name: "Castanet SA", country: t("products.compressorPage.countryFrance") },
          { name: "KB Delta", country: t("products.compressorPage.countryUSA") },
        ]}
        highlights={[
          t("products.compressorPage.highlightTurbo"),
          t("products.compressorPage.highlightParts"),
          t("products.compressorPage.highlightTrackRecord"),
          t("products.compressorPage.highlightGlobalPartners"),
        ]}
      />

      {/* Sub Navigation - ProductIntro와 콘텐츠 섹션 사이, 스크롤 시 상단 고정 */}
      <nav className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200">
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

      {/* ========== 모든 섹션 세로 나열 (배경 교차: navy → white → navy → white) ========== */}

      {/* Section 1: NEW COMPRESSOR - 네이비 배경 */}
      <section id="new" className="py-16 md:py-24 bg-[#0A1628]">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              NEW COMPRESSOR
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* 왼쪽: 파트너 정보 */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-6 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    FIMA
                  </h3>
                  {/* FIMA 로고 이미지 박스 */}
                  <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                    <Image
                      src="/images/partners/fima.jpg"
                      alt="FIMA Logo"
                      width={80}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-[#3B82F6] font-medium">Germany</p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  {t("products.compressorPage.fimaDescription")}
                </p>
              </div>

              {/* 제품군 - 인포그래픽 스타일 */}
              <div className="space-y-3 flex-1 flex flex-col justify-end">
                {fimaProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-white/5 pl-4 py-3 pr-4"
                  >
                    <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-white font-medium">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: FIMA Turbo Compressor 이미지 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/compressor/Turbo Compressor.jpg"
                alt="FIMA Turbo Compressor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: SPARE PARTS - 흰색 배경 (반전) */}
      <section id="spares" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
              RECIPROCATING COMPRESSOR SPARE PARTS SOLUTION
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            <p className="text-slate-600 mt-4 max-w-2xl">
              {t("products.compressorPage.sparePartsDescription")}
            </p>
          </div>

          {/* 부품 캐러셀 */}
          <div className="relative">
            {/* 왼쪽 화살표 */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + totalCards) % totalCards)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-[#0A1628] text-white flex items-center justify-center hover:bg-[#3B82F6] transition-colors shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 캐러셀 컨테이너 */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 4)}%)` }}
              >
                {/* 무한 루프를 위해 카드 배열을 2번 반복 */}
                {[...sparePartsCategories, ...sparePartsCategories].map((part, idx) => (
                  <div
                    key={idx}
                    className="w-1/4 flex-shrink-0 px-2"
                  >
                    <div className="group relative rounded-xl overflow-hidden bg-[#0A1628] border border-[#0A1628]/20 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all">
                      <div className="aspect-square relative bg-white">
                        <Image
                          src={part.image}
                          alt={part.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          sizes="25vw"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white">{part.name}</h4>
                          {part.partner !== "-" && (
                            <span className="text-xs text-[#EF4444] font-medium">{part.partner}</span>
                          )}
                        </div>
                        <p className="text-sm text-slate-400">{part.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽 화살표 */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalCards)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-[#0A1628] text-white flex items-center justify-center hover:bg-[#3B82F6] transition-colors shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 인디케이터 dots - 7개 */}
          <div className="flex justify-center gap-2 mt-6">
            {sparePartsCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === idx ? 'bg-[#EF4444]' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: TROUBLE SHOOTING - 네이비 배경 (반전) */}
      <section id="troubleshooting" className="py-16 md:py-24 bg-[#0A1628]">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">03</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              TROUBLE SHOOTING
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            <p className="text-slate-300 mt-4 max-w-2xl" dangerouslySetInnerHTML={{ __html: t("products.compressorPage.troubleShootingDescription") }} />
          </div>

          {/* 문제 유형 - 2컬럼 레이아웃 (리스트 + 이미지) */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 왼쪽: 문제 유형 리스트 */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: t("products.compressorPage.tsVibrationTitle"), desc: t("products.compressorPage.tsVibrationDesc") },
                { title: t("products.compressorPage.tsTemperatureTitle"), desc: t("products.compressorPage.tsTemperatureDesc") },
                { title: t("products.compressorPage.tsPressureTitle"), desc: t("products.compressorPage.tsPressureDesc") },
                { title: t("products.compressorPage.tsEfficiencyTitle"), desc: t("products.compressorPage.tsEfficiencyDesc") },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 p-6 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-colors"
                >
                  <span className="text-4xl font-bold text-white/20">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 오른쪽: Trouble Shooting 이미지 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/compressor/radial fans.jpg"
                alt="Trouble Shooting Service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: M&R (Maintenance & Repair) - 흰색 배경 (반전) */}
      <section id="maintenance" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">04</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
              {t("products.compressorPage.maintenanceTitle")}
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            <p className="text-slate-600 mt-4 max-w-2xl" dangerouslySetInnerHTML={{ __html: t("products.compressorPage.maintenanceDescription") }} />
          </div>

          {/* 서비스 그리드 - 가로 레이아웃 카드 (Navy 배경 유지) */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: t("products.compressorPage.mrInspectionTitle"), desc: t("products.compressorPage.mrInspectionDesc"), image: "/images/services/compressor-mr/01-inspection.jpg" },
              { title: t("products.compressorPage.mrEmergencyTitle"), desc: t("products.compressorPage.mrEmergencyDesc"), image: "/images/services/compressor-mr/02-emergency-repair.png" },
              { title: t("products.compressorPage.mrOverhaulTitle"), desc: t("products.compressorPage.mrOverhaulDesc"), image: "/images/services/compressor-mr/03-overhaul.jpg" },
              { title: t("products.compressorPage.mrReplacementTitle"), desc: t("products.compressorPage.mrReplacementDesc"), image: "/images/services/compressor-mr/04-change.png" },
              { title: t("products.compressorPage.mrDiagnosticsTitle"), desc: t("products.compressorPage.mrDiagnosticsDesc"), image: "/images/services/compressor-mr/05-chek_point.png" },
              { title: t("products.compressorPage.mrTrainingTitle"), desc: t("products.compressorPage.mrTrainingDesc"), image: "/images/services/compressor-mr/06-lesson.png" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex rounded-xl overflow-hidden bg-[#0A1628] border border-[#0A1628]/20 hover:shadow-lg hover:border-[#3B82F6]/50 transition-all min-h-[160px]"
              >
                {/* 텍스트 영역 (좌측 50%) */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                  <span className="text-3xl font-bold text-white/10">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-semibold text-white text-lg mt-2">{service.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                </div>
                {/* 이미지 영역 (우측 50%, 패딩 없음) */}
                <div className="w-1/2 relative flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            {t("products.compressorPage.ctaTitle")}
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            {t("products.compressorPage.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EF4444] text-white rounded-full font-semibold hover:bg-[#DC2626] transition-colors"
            >
              {t("products.compressorPage.ctaConsultation")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {t("products.compressorPage.ctaQuote")}
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
