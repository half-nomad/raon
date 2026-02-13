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

// 서브 네비게이션 정의 (2개)
const subNavItems = [
  { id: "solution", label: "Mixing Solution" },
  { id: "brands", label: "SPXFlow Mixer Brands" },
];

// Mixing Solution 적용 분야
const applicationAreas = [
  { title: "화학 공정", desc: "화학 반응, 용해, 분산" },
  { title: "수처리/폐수", desc: "응집, 침전, 소독" },
  { title: "석유화학", desc: "정유 및 플랜트 혼합" },
  { title: "바이오/제약", desc: "무균 환경 정밀 혼합" },
  { title: "식품/유제품", desc: "위생 설계 CIP 호환" },
];

// SPXFlow 4개 브랜드 (UUTECHNIC 제외)
const spxflowBrands = [
  {
    name: "LIGHTNIN",
    tagline: "첨단 기술 기반의 고효율 혼합 솔루션",
    description: "Lightnin은 까다로운 폐수 및 수처리, 화학, 바이오 연료, 제약 공정에서 가장 신뢰받는 브랜드입니다.",
    applications: "휴대용 유닛부터 대형 고정식 유닛까지의 믹서 포트폴리오.",
    coreValue: "독자적인 기어박스와 임펠러 기술을 통해 더 작고 강력하며, 전력 효율이 극대화된 솔루션을 제공합니다.",
    strength: "오염 방지(Anti-fouling) 메커니즘을 적용하여 장비 수명을 연장하고, 가동 중단 시간을 최소화하여 생산성을 높입니다.",
    images: [
      "/images/products/mixer/Lightnin/Mixer %26 Agitator_1.jpg",
      "/images/products/mixer/Lightnin/Mixer %26 Agitator_2.jpg",
      "/images/products/mixer/Lightnin/lightnin-series-10-w-stand-01.jpg",
      "/images/products/mixer/Lightnin/lightnin-series-10-w-stand-02.jpg",
      "/images/products/mixer/Lightnin/lightnin-980-series-02.jpg",
      "/images/products/mixer/Lightnin/lightnin-981-series-03.jpg",
      "/images/products/mixer/Lightnin/other-file-ico.jpg",
    ],
  },
  {
    name: "PLENTY",
    tagline: "70년 전통의 유체 역학 전문가",
    description: "Plenty는 석유, 가스 및 화학 산업에서 독보적인 엔지니어링 역량의 선두 주자입니다.",
    applications: "저장 탱크 내 액체 혼합 및 균질화, 슬러지 침전 방지",
    coreValue: "유체 역학에 대한 깊은 이해를 바탕으로 Fixed(고정각)/Swivel(가변각) 등 다양한 Side-Entry(측면 진입형) 믹서를 설계합니다.",
    strength: "탱크를 비우지 않고도 수리가 가능한 혁신적인 설계와 타사 노후 장비까지 최신 고성능 모델로 교체해 주는 경제적인 애프터마켓 프로그램을 운영합니다.",
    images: [
      "/images/products/mixer/Plenty_mixers/Mixer %26 Agitator_3.jpg",
      "/images/products/mixer/Plenty_mixers/other-file-ico.jpg",
      "/images/products/mixer/Plenty_mixers/other-file-ico1.jpg",
    ],
  },
  {
    name: "PHILADELPHIA",
    tagline: "혁신적인 R&D와 고객 맞춤형 설계",
    description: "2021년 SPX FLOW에 합류한 Philadelphia Mixing Solutions는 북미 시장을 선도하는 혁신 브랜드입니다.",
    applications: "화학 공정 및 일반 산업 전반의 특수 혼합 공정",
    coreValue: "65년의 경력과 Philadelphia Gear Corporation의 기술적 뿌리를 계승하여 최첨단 테스트와 공정 모델링을 수행합니다.",
    strength: "전 세계 주요 거점(미국, 영국, 인도)을 통해 신속한 현장 지원을 제공하며, 각 고객의 개별 요구사항에 100% 부합하는 고유한 솔루션을 구축합니다.",
    images: [
      "/images/products/mixer/Philadelphia/other-file-ico4.jpg",
      "/images/products/mixer/Philadelphia/philadelphia-pve-01-03-series-mixer-drive.jpg",
      "/images/products/mixer/Philadelphia/philadelphia-unifirst-4000-series-mixer-drive.jpg",
    ],
  },
  {
    name: "STELZER",
    tagline: "엄격한 위생과 정밀한 공정 노하우",
    description: "독일에 기반을 둔 Stelzer는 화학, 식품 및 제약 산업에서 요구하는 최고의 위생 표준을 충족합니다.",
    applications: "유제품 공정, 제약, 식품 제조 및 고도의 세척/연마 공정",
    coreValue: "DIN EN ISO 9001:2015 표준에 따른 검증된 안전성과 CFD(전산유체역학) 시뮬레이션 역량을 보유하고 있습니다.",
    strength: "1946년부터 축적된 위생 설계 기술을 바탕으로, 국제 표준을 준수하는 정밀한 차원의 프로젝트 맞춤형 교반기를 제작합니다.",
    images: [
      "/images/products/mixer/Stelzer/Mixer %26 Agitator_4.jpg",
      "/images/products/mixer/Stelzer/other-file-ico2.jpg",
      "/images/products/mixer/Stelzer/other-file-ico3.jpg",
    ],
  },
];

export default function MixerPage() {
  const [activeSection, setActiveSection] = useState("solution");
  const [brandImageIndex, setBrandImageIndex] = useState<Record<string, number>>({
    LIGHTNIN: 0,
    PLENTY: 0,
    PHILADELPHIA: 0,
    STELZER: 0,
  });

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
              SPXFLOW 4개 글로벌 브랜드 Mixing Solution
            </p>
          </div>
        </section>

        {/* Product Intro - 2컬럼 레이아웃 (16장 타일형 갤러리) */}
        <ProductIntro
          title="Mixing Solution 전문"
          description="RTS는 30년간 회전기계 분야에서 축적한 경험을 바탕으로, SPXFLOW의 국내 마스터 대리점으로써 다양한 혼합 공정에 필요한 MIXER를 설계 제작하여 공급합니다. 생산성 향상, 에너지 절감 및 비용 절감을 위한 고객 맞춤형 MIXING SOLUTION을 제공합니다."
          images={heroImages}
          partners={[
            { name: "LIGHTNIN", country: "미국" },
            { name: "PLENTY", country: "영국" },
            { name: "PHILADELPHIA", country: "미국" },
            { name: "STELZER", country: "독일" },
          ]}
          highlights={[
            "SPXFLOW Master Distributor",
            "4개 글로벌 브랜드",
            "100년 이상 역사",
            "맞춤형 솔루션 설계",
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
                    RTS는 SPXFLOW의 국내 마스터 대리점으로써 현대 산업 전반에 걸쳐
                    중요한 제조 라인인 다양한 혼합 공정에 필요한 MIXER를 설계 제작하여
                    공급하고 있으며 생산성 향상, 에너지 절감 및 비용 절감을 위한 고객
                    맞춤형 MIXING SOLUTION을 제공하고 있습니다.
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
                <h4 className="text-lg font-bold text-white mb-6">핵심 특징</h4>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "생산성 향상", desc: "Process 속도 향상 및 생산량 증가" },
                    { num: "02", title: "에너지 절감", desc: "고효율 설계로 운영 비용 절감" },
                    { num: "03", title: "맞춤형 설계", desc: "고객 공정에 최적화된 솔루션" },
                    { num: "04", title: "글로벌 품질", desc: "4개 브랜드의 검증된 기술력" },
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
                  <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">서비스 프로세스</h4>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-0">
                    {["설계 컨설팅", "브랜드 선정", "설계 검토", "제작/납품", "A/S 지원"].map((step, idx) => (
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
                세계적인 4개 브랜드를 통해 산업별 최적의 Mixing Solution을 제안합니다.
              </p>
            </div>

            {/* 브랜드 카드 2열 그리드 */}
            <div className="grid md:grid-cols-2 gap-6">
              {spxflowBrands.map((brand) => {
                const currentIndex = brandImageIndex[brand.name] ?? 0;
                const totalImages = brand.images.length;

                return (
                  <div
                    key={brand.name}
                    className="rounded-2xl overflow-hidden bg-[#0A1628] border border-slate-800 flex flex-col"
                  >
                    {/* 카드 상단: 캐러셀 */}
                    <div className="relative aspect-[4/3] bg-white">
                      {/* 현재 이미지 */}
                      <div className="relative w-full h-full">
                        <Image
                          src={brand.images[currentIndex]}
                          alt={`${brand.name} product ${currentIndex + 1}`}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* 좌측 화살표 */}
                      {totalImages > 1 && (
                        <>
                          <button
                            onClick={() => goToPrevImage(brand.name, totalImages)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                            aria-label={`${brand.name} 이전 이미지`}
                          >
                            <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
                          </button>

                          {/* 우측 화살표 */}
                          <button
                            onClick={() => goToNextImage(brand.name, totalImages)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                            aria-label={`${brand.name} 다음 이미지`}
                          >
                            <ChevronRight className="w-5 h-5 text-[#0A1628]" />
                          </button>

                          {/* 하단 dot indicators */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {brand.images.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => goToImage(brand.name, dotIdx)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  dotIdx === currentIndex
                                    ? "bg-white w-4"
                                    : "bg-white/50 hover:bg-white/80"
                                }`}
                                aria-label={`${brand.name} 이미지 ${dotIdx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* 카드 하단: 텍스트 */}
                    <div className="p-6 flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {brand.name}
                      </h3>
                      <p className="text-[#3B82F6] font-medium text-sm mb-4">
                        {brand.tagline}
                      </p>
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {brand.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">주요 용도</p>
                          <p className="text-base text-white">{brand.applications}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">핵심 가치</p>
                          <p className="text-base text-slate-300">{brand.coreValue}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">강점</p>
                          <p className="text-base text-slate-300">{brand.strength}</p>
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
              최적의 Mixing Solution이 필요하신가요?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              30년 경력의 전문가가 최적의 솔루션을 제안해 드립니다
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
