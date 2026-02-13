"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

// Bearing 서비스
const bearingServiceList = [
  "BEARING REPAIR - 손상된 베어링 수리 및 복원",
  "REVERSE ENGINEERING - 역설계를 통한 베어링 신규 공급",
  "TROUBLE SHOOTING - NEW DESIGN 개선 베어링 공급",
];

export default function BearingLubricationPage() {
  const [activeSection, setActiveSection] = useState("bearing");
  const [bearingImageIdx, setBearingImageIdx] = useState(0);
  const [lubricationImageIdx, setLubricationImageIdx] = useState(0);

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
              유체윤활베어링 및 윤활유 청정 솔루션
            </p>
          </div>
        </section>

        {/* Product Intro - 2컬럼 레이아웃 */}
        <ProductIntro
          title="베어링 & 윤활 전문 솔루션"
          description="RTS는 30년간 회전기계 분야에서 축적한 경험을 바탕으로, 국내 BEARING 제작사 터보링크와 윤활 정제기 제작사 삼영필텍의 영업대리점으로써 BEARING과 LUBRICATION에 대한 SOLUTION을 제공합니다. 65,000rpm급 초고속 터보압축기 베어링부터 수백톤 고하중 터빈 발전기 베어링까지 폭넓은 제품군을 보유하고 있습니다."
          images={heroImages}
          partners={[
            { name: "터보링크 (TURBOLINK)", country: "한국" },
            { name: "삼영필텍 (SAMYOUNG FILTECH)", country: "한국" },
          ]}
          highlights={[
            "65,000rpm 초고속 대응",
            "수백톤 고하중 대응",
            "국내 제작사 협력",
            "빠른 납기 실현",
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
                    터보링크 (TURBOLINK)
                  </h3>
                  <p className="text-[#3B82F6] font-medium">Korea</p>
                  <p className="text-slate-300 mt-4 leading-relaxed">
                    고속 고하중 회전기계의 유체윤활베어링 설계 및 제조 전문 기업으로,
                    65,000rpm급 초고속 터보압축기 베어링부터 축 하중 수백톤 고하중 터빈 발전기 베어링까지 공급합니다.
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
                  {[
                    { title: "초고속 대응", desc: "65,000rpm급 고속 회전 최적화" },
                    { title: "고하중 지지", desc: "수백톤 축하중 견고한 구조" },
                    { title: "맞춤 설계", desc: "고객 요구사항 커스텀 설계" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-[#3B82F6] font-bold">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <h5 className="font-semibold text-white">{item.title}</h5>
                        <p className="text-sm text-slate-400">{item.desc}</p>
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
                  aria-label="이전 베어링 이미지"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
                </button>

                {/* 우측 화살표 */}
                <button
                  onClick={() => goToNext(bearingImageIdx, bearingImages.length, setBearingImageIdx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label="다음 베어링 이미지"
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
                      aria-label={`베어링 이미지 ${dotIdx + 1}`}
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
                    삼영필텍 (SAMYOUNG FILTECH)
                  </h3>
                  <p className="text-[#3B82F6] font-medium">Korea</p>
                  <p className="text-slate-600 mt-4 leading-relaxed">
                    윤활유 청정도 유지 전문 기업으로, 국내 특허 기술인 이중 진공 시스템과 전기 필터를 통해
                    수분 제거 및 바니쉬 신속 제거가 가능합니다.
                  </p>
                </div>

                {/* 특허 기술 리스트 */}
                <div className="space-y-3 mb-8">
                  {[
                    "이중 진공 시스템 - 효율적인 수분 제거",
                    "전기 필터 - 미세 입자 완벽 여과",
                    "바니쉬 신속 제거 - 윤활유 수명 연장",
                    "베어링 수명 반영구적 연장",
                  ].map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4">
                      <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-[#0A1628] font-medium">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* 도입 효과 */}
                <div className="space-y-4">
                  {[
                    { title: "윤활유 수명 연장", desc: "오염물질 제거로 오일 교체 주기 연장" },
                    { title: "베어링 보호", desc: "청정 윤활유로 베어링 마모 최소화" },
                    { title: "비용 절감", desc: "오일 비용 및 정비 비용 절감" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-[#3B82F6] font-bold">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <h5 className="font-semibold text-[#0A1628]">{item.title}</h5>
                        <p className="text-sm text-slate-500">{item.desc}</p>
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
                  aria-label="이전 윤활 이미지"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
                </button>

                {/* 우측 화살표 */}
                <button
                  onClick={() => goToNext(lubricationImageIdx, lubricationImages.length, setLubricationImageIdx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label="다음 윤활 이미지"
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
                      aria-label={`윤활 이미지 ${dotIdx + 1}`}
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
              베어링 & 윤활 솔루션이 필요하신가요?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              국내 전문 제작사와의 협력으로 빠른 납기와 맞춤 설계를 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EF4444] text-white rounded-full font-semibold hover:bg-[#DC2626] transition-colors"
              >
                기술 상담 신청
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                다른 제품 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
