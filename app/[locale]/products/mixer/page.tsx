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
import { ArrowRight } from "lucide-react";

// 대표 이미지 (상단 갤러리용)
const heroImages = [
  { src: "/images/products/mixer/mixer-1.jpg", alt: "Industrial Mixer" },
  { src: "/images/products/mixer/mixer-2.jpg", alt: "Mixing Solution" },
  { src: "/images/products/mixer/mixer-3.jpg", alt: "Tank Mixer" },
  { src: "/images/products/mixer/mixer-4.jpg", alt: "Process Mixer" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "overview", label: "OVERVIEW" },
  { id: "brands", label: "BRANDS" },
  { id: "applications", label: "APPLICATIONS" },
  { id: "service", label: "SERVICE" },
];

// SPXFlow 5개 브랜드
const spxflowBrands = [
  {
    name: "LIGHTNIN",
    country: "USA",
    description: "산업용 믹서 분야의 글로벌 리더로, 100년 이상의 혁신 역사를 보유. 첨단 유체역학 기술을 기반으로 에너지 효율적인 혼합 솔루션을 제공합니다.",
    applications: ["폐수/수처리", "화학", "바이오 연료", "제약 공정"],
  },
  {
    name: "PLENTY",
    country: "UK",
    description: "Side-Entry 믹서를 전문으로 제조. 탱크를 비우지 않고도 유지보수가 가능한 혁신적인 설계로 정유 및 석유화학 산업에서 높은 신뢰를 받고 있습니다.",
    applications: ["저장 탱크 혼합", "슬러지 침전 방지", "원유 블렌딩"],
  },
  {
    name: "PHILADELPHIA",
    country: "USA",
    description: "65년 경력과 Philadelphia Gear Corporation 기술을 계승. 화학 공정 및 일반 산업 전반의 특수 혼합 공정을 담당합니다.",
    applications: ["화학 공정", "일반 산업", "특수 혼합 공정"],
  },
  {
    name: "STELZER",
    country: "Germany",
    description: "위생 설계(Hygienic Design)의 대명사. 유제품, 제약, 식품 산업에서 요구하는 엄격한 위생 기준을 충족합니다.",
    applications: ["유제품 공정", "제약", "식품 제조"],
  },
  {
    name: "UUTECHNIC",
    country: "Finland",
    description: "특수 공정에 최적화된 맞춤형 믹서 솔루션을 제공. 까다로운 혼합 과제를 해결합니다.",
    applications: ["특수 화학", "폴리머", "코팅/접착제"],
  },
];

// Mixing Solution 적용 분야
const applicationAreas = [
  { title: "화학 공정", desc: "화학 반응, 용해, 분산" },
  { title: "수처리/폐수", desc: "응집, 침전, 소독" },
  { title: "석유화학", desc: "정유 및 플랜트 혼합" },
  { title: "바이오/제약", desc: "무균 환경 정밀 혼합" },
  { title: "식품/유제품", desc: "위생 설계 CIP 호환" },
];

export default function MixerPage() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("overview");

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
              SPXFLOW 5개 글로벌 브랜드 Mixing Solution
            </p>
          </div>
        </section>

        {/* Product Intro - 2컬럼 레이아웃 */}
        <ProductIntro
          title="Mixing Solution 전문"
          description="RTS는 30년간 회전기계 분야에서 축적한 경험을 바탕으로, SPXFLOW의 국내 마스터 대리점으로써 다양한 혼합 공정에 필요한 MIXER를 설계 제작하여 공급합니다. 생산성 향상, 에너지 절감 및 비용 절감을 위한 고객 맞춤형 MIXING SOLUTION을 제공합니다."
          images={heroImages}
          partners={[
            { name: "LIGHTNIN", country: "미국" },
            { name: "PLENTY", country: "영국" },
            { name: "PHILADELPHIA", country: "미국" },
            { name: "STELZER", country: "독일" },
            { name: "UUTECHNIC", country: "핀란드" },
          ]}
          highlights={[
            "SPXFLOW Master Distributor",
            "5개 글로벌 브랜드",
            "100년 이상 역사",
            "맞춤형 솔루션 설계",
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

        {/* ========== 모든 섹션 세로 나열 (배경 교차: white → navy → white → navy) ========== */}

        {/* Section 1: OVERVIEW - 네이비 배경 */}
        <section id="overview" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                MIXING SOLUTION
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* 왼쪽: 파트너 정보 */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    SPXFLOW
                  </h3>
                  <p className="text-[#3B82F6] font-medium">Global Master Partner</p>
                  <p className="text-slate-300 mt-4 leading-relaxed">
                    SPXFLOW는 세계적인 믹서 제조사로, 5개 글로벌 브랜드를 통해
                    다양한 산업 분야에 최적화된 Mixing Solution을 제공합니다.
                    RTS는 국내 마스터 대리점으로서 설계, 공급, A/S를 담당합니다.
                  </p>
                </div>

                {/* 적용 분야 - 인포그래픽 스타일 */}
                <div className="space-y-3">
                  {applicationAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-white/10 pl-4 py-3 pr-4 hover:shadow-md transition-all"
                    >
                      <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <span className="text-white font-medium">{area.title}</span>
                        <span className="text-slate-400 text-sm ml-2">{area.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 핵심 특징 - 인포그래픽 */}
              <div className="bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-white mb-6">핵심 특징</h4>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "생산성 향상", desc: "Process 속도 향상 및 생산량 증가" },
                    { num: "02", title: "에너지 절감", desc: "고효율 설계로 운영 비용 절감" },
                    { num: "03", title: "맞춤형 설계", desc: "고객 공정에 최적화된 솔루션" },
                    { num: "04", title: "글로벌 품질", desc: "5개 브랜드의 검증된 기술력" },
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
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: BRANDS - 흰색 배경 */}
        <section id="brands" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                5개 글로벌 브랜드
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-600 mt-4 max-w-2xl">
                세계적인 믹서 브랜드를 국내에 공급합니다.
                각 브랜드의 전문 분야에 맞춰 최적의 솔루션을 제안합니다.
              </p>
            </div>

            {/* 브랜드 그리드 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {spxflowBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-xl bg-[#0A1628] border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">{brand.name}</h4>
                    <span className="text-xs text-[#EF4444] font-medium">{brand.country}</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3">{brand.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {brand.applications.map((app, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-white/10 text-slate-300 rounded"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: APPLICATIONS - 네이비 배경 */}
        <section id="applications" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                주요 적용 분야
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-300 mt-4 max-w-2xl">
                다양한 산업 분야에서 <span className="text-[#EF4444] font-semibold">최적화된 Mixing Solution</span>을 제공합니다.
              </p>
            </div>

            {/* 적용 분야 - 인포그래픽 테이블 스타일 */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "정유/석유화학", desc: "원유 블렌딩, 저장 탱크 혼합, 슬러지 방지" },
                { title: "화학 공정", desc: "화학 반응, 용해, 분산, 균질화" },
                { title: "수처리/폐수", desc: "응집제 혼합, 침전 방지, 소독" },
                { title: "식품/제약", desc: "위생 설계, 무균 환경, CIP 호환" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 p-6 bg-white/10 rounded-xl border border-white/10 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                >
                  <span className="text-4xl font-bold text-white/50">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 선정 프로세스 */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#3B82F6]/10 to-[#3B82F6]/5 rounded-2xl border border-[#3B82F6]/20">
              <h4 className="text-lg font-bold text-white mb-6">솔루션 선정 프로세스</h4>
              <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                {["요구사항 분석", "브랜드 선정", "설계 검토", "제작/납품", "A/S 지원"].map((step, idx) => (
                  <div key={idx} className="flex-1 flex items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-medium text-white">{step}</span>
                    </div>
                    {idx < 4 && <span className="hidden md:block flex-1 h-px bg-[#3B82F6]/30 mx-4" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: SERVICE - 흰색 배경 */}
        <section id="service" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">04</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                SERVICE & SUPPORT
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-600 mt-4 max-w-2xl">
                설계부터 A/S까지, <span className="text-[#0A1628] font-semibold">One-Stop 서비스</span>를 제공합니다.
              </p>
            </div>

            {/* 서비스 그리드 - 인포그래픽 스타일 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "설계 컨설팅", desc: "공정 분석 및 최적 솔루션 제안" },
                { title: "제작/납품", desc: "글로벌 브랜드 직수입 공급" },
                { title: "설치 지원", desc: "현장 설치 및 시운전 지원" },
                { title: "정기 점검", desc: "예방 정비 프로그램 운영" },
                { title: "부품 공급", desc: "순정 부품 신속 공급" },
                { title: "기술 교육", desc: "운전자 대상 교육 프로그램" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#0A1628] border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                >
                  <span className="text-3xl font-bold text-white/50">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-semibold text-white mt-2">{service.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* 파트너 네트워크 강조 */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <span className="text-4xl font-bold text-[#0A1628]">5</span>
                  <p className="text-slate-500 mt-1">글로벌 브랜드</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-[#0A1628]">100+</span>
                  <p className="text-slate-500 mt-1">년 역사</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-[#0A1628]">30+</span>
                  <p className="text-slate-500 mt-1">년 국내 경험</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-[#0A1628]">24/7</span>
                  <p className="text-slate-500 mt-1">기술 지원</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              최적의 Mixing Solution이 필요하신가요?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              30년 경력의 전문가가 최적의 솔루션을 제안해 드립니다.
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
