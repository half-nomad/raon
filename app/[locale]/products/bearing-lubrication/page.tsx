"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductIntro } from "@/components/products/product-intro";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

// 대표 이미지 (상단 갤러리용)
const heroImages = [
  { src: "/images/products/bearing-lubrication/bearing-1.jpg", alt: "Tilting Pad Bearing" },
  { src: "/images/products/bearing-lubrication/bearing-2.jpg", alt: "Journal Bearing" },
  { src: "/images/products/bearing-lubrication/oil-purifier.jpg", alt: "Oil Purifier" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "bearing", label: "BEARING SOLUTION" },
  { id: "lubrication", label: "LUBRICATION SOLUTION" },
  { id: "services", label: "SERVICES" },
];

// Bearing 제품군
const bearingProducts = [
  {
    name: "Tilting Pad Journal Bearing",
    description: "고속 회전 장비에 최적화된 틸팅 패드 저널 베어링",
    features: ["고속 회전 대응", "저진동 설계", "자동 조심 기능"],
  },
  {
    name: "Tilting Pad Thrust Bearing",
    description: "축방향 하중을 지지하는 틸팅 패드 스러스트 베어링",
    features: ["높은 하중 용량", "균일한 압력 분포", "긴 수명"],
  },
  {
    name: "Journal & Thrust Combined",
    description: "저널과 스러스트 기능을 통합한 복합 베어링",
    features: ["통합 설계", "공간 절약", "설치 용이"],
  },
  {
    name: "Vertical Guide & Thrust",
    description: "수직형 펌프 및 회전기계용 가이드 베어링",
    features: ["수직 축 지지", "정밀 정렬", "내마모성"],
  },
  {
    name: "Fixed Profile Bearing",
    description: "안정적인 성능과 경제적인 유지보수 제공",
    features: ["안정적 성능", "경제적", "유지보수 용이"],
  },
  {
    name: "Repair / Retrofit / Replacement",
    description: "기존 베어링의 수리, 개조, 교체 서비스",
    features: ["현장 수리", "성능 개선", "비용 절감"],
  },
];

// Lubrication 서비스
const lubricationServices = [
  {
    name: "Oil Purifier",
    description: "오염된 오일에서 수분, 가스, 미립자를 제거하여 오일 수명 연장",
    features: ["수분 제거", "미립자 여과", "가스 제거"],
  },
  {
    name: "Oil Purifier Rental Service",
    description: "단기 프로젝트나 정비 기간 동안 장비 임대 서비스",
    features: ["단기 임대", "장비 운송", "기술 지원"],
  },
  {
    name: "Oil Flushing Service",
    description: "배관 및 윤활 시스템의 오염물질 제거 전문 서비스",
    features: ["배관 세척", "오염물 제거", "품질 검증"],
  },
];

// Bearing 서비스
const bearingServiceList = [
  "BEARING REPAIR - 손상된 베어링 수리 및 복원",
  "REVERSE ENGINEERING - 역설계를 통한 베어링 신규 공급",
  "TROUBLE SHOOTING - NEW DESIGN 개선 베어링 공급",
];

export default function BearingLubricationPage() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("bearing");

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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Fixed Sub Navigation */}
        <nav className="fixed top-[72px] left-0 right-0 z-40 bg-[#0A1628] border-b border-white/10">
          <div className="section-container">
            <div className="flex overflow-x-auto scrollbar-hide">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-6 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors
                    ${activeSection === item.id
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
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
          description="RTS는 국내 BEARING 제작사 터보링크와 윤활 정제기 제작사 삼영필텍의 영업대리점으로써 BEARING과 LUBRICATION에 대한 SOLUTION을 제공하고 있습니다. 65,000rpm급 초고속 터보압축기 베어링부터 수백톤 고하중 터빈 발전기 베어링까지 폭넓은 제품군을 보유하고 있습니다."
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

        {/* ========== 모든 섹션 세로 나열 (배경 교차: white → navy → white) ========== */}

        {/* Section 1: BEARING SOLUTION - 흰색 배경 */}
        <section id="bearing" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                BEARING SOLUTION
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* 왼쪽: 파트너 정보 */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-1">
                    터보링크 (TURBOLINK)
                  </h3>
                  <p className="text-[#3B82F6] font-medium">Korea</p>
                  <p className="text-slate-600 mt-4 leading-relaxed">
                    고속 고하중 회전기계의 유체윤활베어링 설계 및 제조 전문 기업으로,
                    65,000rpm급 초고속 터보압축기 베어링부터 축 하중 수백톤 고하중 터빈 발전기 베어링까지 공급합니다.
                  </p>
                </div>

                {/* 서비스 - 인포그래픽 스타일 */}
                <div className="space-y-3">
                  {bearingServiceList.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4"
                    >
                      <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-slate-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 핵심 특징 - 인포그래픽 */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-[#0A1628] mb-6">핵심 특징</h4>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "초고속 대응", desc: "65,000rpm급 고속 회전에 최적화된 설계" },
                    { num: "02", title: "고하중 지지", desc: "수백톤 축하중 지지 가능한 견고한 구조" },
                    { num: "03", title: "맞춤 설계", desc: "고객 요구사항에 맞춘 커스텀 베어링 설계" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="text-3xl font-bold text-[#3B82F6]/20">{item.num}</span>
                      <div>
                        <h5 className="font-semibold text-[#0A1628]">{item.title}</h5>
                        <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: BEARING PRODUCTS - 네이비 배경 */}
        <section className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                BEARING PRODUCTS
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-300 mt-4 max-w-2xl">
                다양한 유체윤활베어링 제품군을 공급합니다.
                고객의 요구사항에 맞춘 맞춤 설계 및 역설계를 통한 신규 제작도 가능합니다.
              </p>
            </div>

            {/* 베어링 제품 그리드 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bearingProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#3B82F6] font-bold">{String(idx + 1).padStart(2, '0')}</span>
                    <h4 className="font-semibold text-white">{product.name}</h4>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((f, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#3B82F6]/10 rounded text-[#3B82F6]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: LUBRICATION SOLUTION - 흰색 배경 */}
        <section id="lubrication" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                LUBRICATION SOLUTION
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-600 mt-4 max-w-2xl">
                <span className="text-[#EF4444] font-semibold">삼영필텍</span>의 특허 기술인 이중 진공 시스템과 전기 필터를 통해
                수분 제거 및 바니쉬 신속 제거가 가능합니다.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* 왼쪽: 파트너 정보 */}
              <div>
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

                {/* 특허 기술 - 인포그래픽 스타일 */}
                <div className="space-y-3">
                  {[
                    "이중 진공 시스템 - 효율적인 수분 제거",
                    "전기 필터 - 미세 입자 완벽 여과",
                    "바니쉬 신속 제거 - 윤활유 수명 연장",
                    "베어링 수명 반영구적 연장",
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4"
                    >
                      <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-slate-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 핵심 혜택 */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-[#0A1628] mb-6">도입 효과</h4>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "윤활유 수명 연장", desc: "오염물질 제거로 오일 교체 주기 연장" },
                    { num: "02", title: "베어링 보호", desc: "청정 윤활유로 베어링 마모 최소화" },
                    { num: "03", title: "비용 절감", desc: "오일 비용 및 정비 비용 절감" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="text-3xl font-bold text-[#3B82F6]/20">{item.num}</span>
                      <div>
                        <h5 className="font-semibold text-[#0A1628]">{item.title}</h5>
                        <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: SERVICES - 네이비 배경 */}
        <section id="services" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">04</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                SERVICES
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-300 mt-4 max-w-2xl">
                Oil Purifier 판매부터 임대 서비스, Oil Flushing 서비스까지
                <span className="text-white font-semibold"> 윤활 시스템 전반에 대한 종합 서비스</span>를 제공합니다.
              </p>
            </div>

            {/* 서비스 그리드 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lubricationServices.map((service, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="text-3xl font-bold text-white/10">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-semibold text-white mt-2">{service.name}</h4>
                  <p className="text-sm text-slate-400 mt-1 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((f, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#3B82F6]/10 rounded text-[#3B82F6]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 파트너 네트워크 강조 */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#3B82F6]/10 to-[#3B82F6]/5 border border-[#3B82F6]/20">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <span className="text-4xl font-bold text-white">65K</span>
                  <p className="text-slate-400 mt-1">rpm 고속 대응</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">100+</span>
                  <p className="text-slate-400 mt-1">톤 고하중 대응</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">2</span>
                  <p className="text-slate-400 mt-1">국내 전문 파트너</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">24/7</span>
                  <p className="text-slate-400 mt-1">기술 지원</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
          <div className="section-container text-center">
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
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                견적 요청
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
