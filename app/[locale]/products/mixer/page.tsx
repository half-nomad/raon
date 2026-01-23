"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductIntro } from "@/components/products/product-intro";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import {
  Beaker,
  Factory,
  Droplets,
  FlaskConical,
  Pill,
  ArrowRight,
  Phone,
  CheckCircle,
  Building2,
  Zap,
  Settings,
  Clock,
  Award,
  Globe,
  Cog,
  Gauge,
  Shield,
} from "lucide-react";

// 대표 이미지 (상단 갤러리용)
const heroImages = [
  { src: "/images/products/mixer/mixer_1.jpg", alt: "Industrial Mixer" },
  { src: "/images/products/mixer/mixer_2.jpg", alt: "SPXFLOW Mixer" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "solutions", label: "MIXING SOLUTION" },
  { id: "brands", label: "5대 브랜드" },
  { id: "why", label: "WHY SPXFLOW" },
  { id: "contact", label: "문의하기" },
];

// Mixing Solution 적용 분야
const mixingSolutions = [
  { icon: Beaker, title: "화학 공정", desc: "화학 반응, 용해, 분산" },
  { icon: Droplets, title: "수처리/폐수", desc: "응집, 침전, 소독" },
  { icon: Factory, title: "석유화학", desc: "정유 및 플랜트 혼합" },
  { icon: FlaskConical, title: "바이오/제약", desc: "무균 환경 정밀 혼합" },
  { icon: Pill, title: "식품/유제품", desc: "위생 설계 CIP 호환" },
];

// SPXFlow 5개 브랜드
const spxflowBrands = [
  {
    id: "lightnin",
    name: "LIGHTNIN",
    tagline: "첨단 기술 기반의 고효율 혼합 솔루션",
    desc: "산업용 믹서 분야의 글로벌 리더로, 100년 이상의 혁신 역사를 보유. 첨단 유체역학 기술을 기반으로 에너지 효율적인 혼합 솔루션을 제공합니다.",
    applications: ["폐수/수처리", "화학", "바이오 연료", "제약 공정"],
    features: ["독자적 기어박스와 임펠러 기술", "Anti-fouling 메커니즘", "전력 효율 극대화"],
    color: "blue",
  },
  {
    id: "plenty",
    name: "PLENTY",
    tagline: "70년 전통의 유체 역학 전문가",
    desc: "Side-Entry 믹서를 전문으로 제조해온 브랜드입니다. 탱크를 비우지 않고도 유지보수가 가능한 혁신적인 설계로 정유 및 석유화학 산업에서 높은 신뢰를 받고 있습니다.",
    applications: ["저장 탱크 혼합/균질화", "슬러지 침전 방지", "원유 블렌딩"],
    features: ["Fixed/Swivel Side-Entry 설계", "탱크 미배출 수리 가능", "낮은 유지보수 비용"],
    color: "green",
  },
  {
    id: "philadelphia",
    name: "PHILADELPHIA",
    tagline: "혁신적인 R&D와 고객 맞춤형 설계",
    desc: "2021년 SPX FLOW에 합류했으며, 65년 경력과 Philadelphia Gear Corporation 기술을 계승. 화학 공정 및 일반 산업 전반의 특수 혼합 공정을 담당합니다.",
    applications: ["화학 공정", "일반 산업", "특수 혼합 공정"],
    features: ["65년 경력 기술 축적", "전 세계 거점(미국, 영국, 인도)", "신속한 현장 지원"],
    color: "purple",
  },
  {
    id: "stelzer",
    name: "STELZER",
    tagline: "엄격한 위생과 정밀한 공정 노하우 (독일)",
    desc: "독일에서 제조되며 위생 설계(Hygienic Design)의 대명사입니다. 유제품, 제약, 식품 산업에서 요구하는 엄격한 위생 기준을 충족합니다.",
    applications: ["유제품 공정", "제약", "식품 제조", "고도의 세척/연마 공정"],
    features: ["DIN EN ISO 9001:2015 준수", "CFD 시뮬레이션 역량", "1946년부터 축적된 위생 설계"],
    color: "amber",
  },
  {
    id: "uutechnic",
    name: "UUTECHNIC",
    tagline: "특수 공정용 맞춤 솔루션",
    desc: "특수 공정에 최적화된 맞춤형 믹서 솔루션을 제공합니다. 고객의 특정 요구사항에 맞춘 엔지니어링 설계로 까다로운 혼합 과제를 해결합니다.",
    applications: ["특수 화학", "폴리머", "코팅/접착제", "배터리 소재"],
    features: ["맞춤형 설계", "고점도 대응", "파일럿 테스트 지원"],
    color: "cyan",
  },
];

// Why SPXFLOW 데이터
const whySpxflowItems = [
  { title: "생산성 향상", desc: "Process 속도 향상 및 생산량 증가" },
  { title: "에너지 절감", desc: "고효율 설계로 운영 비용 절감" },
  { title: "맞춤형 설계", desc: "고객 공정에 최적화된 솔루션" },
  { title: "글로벌 품질", desc: "5개 브랜드의 검증된 기술력" },
];

// 통계 데이터
const stats = [
  { value: "5", label: "글로벌 브랜드" },
  { value: "100+", label: "년 역사" },
  { value: "30+", label: "년 국내 경험" },
  { value: "24/7", label: "기술 지원" },
];

// 색상 유틸리티
const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; light: string }> = {
    blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
    green: { bg: "bg-green-500", text: "text-green-600", border: "border-green-200", light: "bg-green-50" },
    purple: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-200", light: "bg-purple-50" },
    amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
    cyan: { bg: "bg-cyan-500", text: "text-cyan-600", border: "border-cyan-200", light: "bg-cyan-50" },
  };
  return colors[color] || colors.blue;
};

export default function MixerPage() {
  const [activeSection, setActiveSection] = useState("solutions");

  // 스크롤 위치에 따라 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map((item) => document.getElementById(item.id));
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
        {/* Fixed Sub Navigation - 태산 스타일 */}
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
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#10B981]" />
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
                { label: "MIXER" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              MIXER
            </h1>
            <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
              SPXFLOW 5개 글로벌 브랜드의 Mixing Solution
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-[#10B981]">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Intro */}
        <ProductIntro
          title="MIXER 전문 솔루션"
          description="SPXFLOW의 국내 마스터 대리점으로써 현대 산업 전반에 걸쳐 중요한 제조 라인인 다양한 혼합 공정에 필요한 MIXER를 설계 제작하여 공급하고 있으며 생산성 향상, 에너지 절감 및 비용 절감을 위한 고객 맞춤형 MIXING SOLUTION을 제공하고 있습니다."
          images={heroImages}
          partners={[{ name: "SPXFLOW", country: "미국" }]}
          highlights={[
            "5개 글로벌 브랜드 통합 솔루션",
            "100년+ 역사의 믹싱 기술",
            "맞춤형 설계 및 CFD 시뮬레이션",
            "24/7 기술 지원",
          ]}
        />

        {/* Section 1: MIXING SOLUTION */}
        <section id="solutions" className="py-16 md:py-20 border-b border-slate-200">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#10B981] font-bold text-sm">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
                MIXING SOLUTION
              </h2>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl">
              다양한 산업 분야의 혼합 공정에 최적화된 솔루션을 제공합니다.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {mixingSolutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="text-center p-6 rounded-xl bg-white border border-slate-200 hover:border-[#10B981]/50 hover:shadow-md transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#10B981]" />
                    </div>
                    <h3 className="text-[#0A1628] font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: 5대 브랜드 */}
        <section id="brands" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#10B981] font-bold text-sm">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
                SPXFLOW MIXER BRANDS
              </h2>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl">
              세계적인 5개 믹서 브랜드를 국내에 공급합니다.
            </p>

            <div className="space-y-6">
              {spxflowBrands.map((brand, index) => {
                const colorClasses = getColorClasses(brand.color);
                return (
                  <div
                    key={brand.id}
                    id={brand.id}
                    className={`p-6 md:p-8 rounded-2xl bg-white border ${colorClasses.border} hover:shadow-lg transition-all`}
                  >
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* 브랜드 헤더 */}
                      <div>
                        <div className={`w-12 h-12 rounded-xl ${colorClasses.light} flex items-center justify-center mb-4`}>
                          <span className={`font-bold text-xl ${colorClasses.text}`}>
                            {brand.name.charAt(0)}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-1">
                          {brand.name}
                        </h3>
                        <p className={`${colorClasses.text} font-medium text-sm mb-3`}>
                          {brand.tagline}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {brand.desc}
                        </p>
                      </div>

                      {/* 적용 분야 */}
                      <div>
                        <h4 className="text-xs text-slate-400 uppercase tracking-wider mb-3">
                          주요 적용 분야
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {brand.applications.map((app, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-lg"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 주요 특징 */}
                      <div>
                        <h4 className="text-xs text-slate-400 uppercase tracking-wider mb-3">
                          주요 특징
                        </h4>
                        <div className="space-y-2">
                          {brand.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <CheckCircle className={`w-4 h-4 ${colorClasses.text} flex-shrink-0`} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Why SPXFLOW */}
        <section id="why" className="py-16 md:py-20 border-b border-slate-200">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#10B981] font-bold text-sm">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
                WHY SPXFLOW
              </h2>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl">
              수세기의 경험을 기반으로 맞춤형 Mixing Solution을 개발 공급합니다.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whySpxflowItems.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#10B981]/50 hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-[#10B981] mb-3" />
                  <h3 className="text-[#0A1628] font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: CTA */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"
        >
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              최적의 Mixing Solution이 필요하신가요?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              30년 이상의 경험을 바탕으로 고객의 공정에 최적화된 믹서 솔루션을 제안해 드립니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-[#0A1628] font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                기술 상담 신청
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-all"
              >
                다른 제품 보기
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
