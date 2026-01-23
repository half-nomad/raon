"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductIntro } from "@/components/products/product-intro";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

// 대표 이미지 (상단 갤러리용)
const heroImages = [
  { src: "/images/products/pump/pump_1.jpg", alt: "CP Pump MKP Series" },
  { src: "/images/products/pump/pump_2.jpg", alt: "Magnetic Driven Pump" },
  { src: "/images/products/pump/pump_3.jpg", alt: "PFA Lined Pump" },
  { src: "/images/products/pump/pump_4.jpg", alt: "Chemical Process Pump" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "solution", label: "PUMP SOLUTION" },
  { id: "products", label: "제품 라인업" },
  { id: "troubleshooting", label: "TROUBLE SHOOTING" },
  { id: "partner", label: "CP PUMP" },
];

// Magnetic Driven Pump 제품군
const magneticPumps = [
  { model: "MKP", desc: "Metal(SS, Hastelloy) Chemical Process Pump", type: "Metal" },
  { model: "MKPL", desc: "PFA Lined Chemical Process Pump", type: "PFA Lined" },
  { model: "MKP-Bio", desc: "Stainless Steel Biotech Process Pump", type: "Biotech" },
  { model: "MSKS", desc: "Self Priming Solid PTFE Chemical Process Pump", type: "PTFE" },
  { model: "MSKP", desc: "Solid PTFE Chemical Process Pump", type: "PTFE" },
  { model: "MKTP", desc: "Stainless Steel Chemical Process Sump Pump", type: "Metal" },
];

// Double Mechanical Seal Pump 제품군
const mechanicalPumps = [
  { model: "ZMP", desc: "Stainless Steel Chemical Process Crushing Pump" },
  { model: "ET", desc: "Ceramic-Lined Chemical Process Pump" },
  { model: "EB", desc: "PFA-Lined Chemical Process Pump" },
];

// Trouble Shooting 항목
const troubleShootingItems = [
  {
    problem: "혹독한 부식성(황산) 유체",
    solution: "PFA Lined Pump",
  },
  {
    problem: "Slurry(이물질)로 인한 부품 손상",
    solution: "특수재질(Hastelloy C22) PUMP",
  },
  {
    problem: "이물질에 Magnetic Pump 사용 불가?",
    solution: "CP Pump 특허 기술로 해결! (이물질 30%까지 이송 가능)",
    highlight: true,
  },
];

export default function PumpPage() {
  const [activeSection, setActiveSection] = useState("solution");

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
                { label: "PUMP" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              PUMP
            </h1>
            <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
              Magnetic Driven(Sealless) Pump 전문 솔루션
            </p>
          </div>
        </section>

        {/* Product Intro - 2컬럼 레이아웃 */}
        <ProductIntro
          title="펌프 전문 솔루션"
          description="스위스에 소재한 CP Pump의 국내대리점으로써 Magnetic Driven(Sealless) Pump 전문 업체로 Metal 및 PFA Lined PUMP SOLUTION을 제공하고 있습니다. 정유, 석유화학, 바이오, F&B 등 모든 산업 분야에 최적의 PUMP를 공급합니다."
          images={heroImages}
          partners={[
            { name: "CP PUMP", country: "스위스" },
          ]}
          highlights={[
            "Magnetic Driven(Sealless) Pump 전문",
            "Metal 및 PFA Lined PUMP",
            "이물질 30%까지 이송 가능",
            "누설 제로, TCO 절감",
          ]}
        />

        {/* ========== 섹션 교차: white → navy → white → navy ========== */}

        {/* Section 1: PUMP SOLUTION - 흰색 배경 */}
        <section id="solution" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                PUMP SOLUTION
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* 왼쪽: 핵심 장점 */}
              <div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-6">
                  Magnetic Driven Pump 핵심 장점
                </h3>
                <div className="space-y-4">
                  {[
                    { num: "01", title: "완전 밀폐", desc: "Sealless 설계로 누설 제로" },
                    { num: "02", title: "내화학성", desc: "부식성 유체 안전 이송" },
                    { num: "03", title: "고효율", desc: "에너지 비용 절감" },
                    { num: "04", title: "저유지보수", desc: "씰 교체 불필요, TCO 절감" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4">
                      <span className="text-[#3B82F6] font-bold text-lg">{item.num}</span>
                      <div>
                        <h4 className="font-semibold text-[#0A1628]">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 적용 분야 */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-[#0A1628] mb-6">적용 분야</h4>
                <div className="grid grid-cols-2 gap-4">
                  {["정유/석유화학", "바이오/제약", "F&B (식품)", "수처리"].map((app, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-lg border border-slate-200">
                      <span className="text-3xl font-bold text-[#3B82F6]/20">{String(idx + 1).padStart(2, '0')}</span>
                      <p className="font-medium text-[#0A1628] mt-2">{app}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 제품 라인업 - 네이비 배경 */}
        <section id="products" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                제품 라인업
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            {/* Magnetic Driven Pump */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Magnetic Driven Pump (Sealless)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {magneticPumps.map((pump, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold rounded">
                        {pump.model}
                      </span>
                      <span className="text-xs text-slate-500">{pump.type}</span>
                    </div>
                    <p className="text-sm text-slate-400">{pump.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Double Mechanical Seal Pump */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Double Mechanical Seal Pump
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {mechanicalPumps.map((pump, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <span className="px-3 py-1 bg-slate-600 text-white text-xs font-bold rounded">
                      {pump.model}
                    </span>
                    <p className="text-sm text-slate-400 mt-3">{pump.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: TROUBLE SHOOTING - 흰색 배경 */}
        <section id="troubleshooting" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                TROUBLE SHOOTING
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-600 mt-4 max-w-2xl">
                혹독한 부식성 유체와 Slurry로 인한 부품 손상 문제를 해결합니다
              </p>
            </div>

            {/* 문제/해결 카드 */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {troubleShootingItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl bg-slate-50 ${item.highlight ? 'ring-2 ring-[#3B82F6]' : ''}`}
                >
                  {item.highlight && (
                    <span className="inline-block px-2 py-1 bg-[#3B82F6] text-white text-xs font-bold rounded mb-4">
                      특허 기술
                    </span>
                  )}
                  <span className="text-4xl font-bold text-[#0A1628]/10">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">문제</p>
                    <h4 className="font-semibold text-[#0A1628] mb-4">{item.problem}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">해결</p>
                    <p className="text-sm text-[#3B82F6] font-medium">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 일반 펌프 문제 */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-[#0A1628] mb-6">일반적인 펌프 문제 & CP Pump 솔루션</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { problem: "펌프 누설", solution: "Magnetic Drive 방식으로 완전 밀폐" },
                  { problem: "과도한 진동/소음", solution: "정밀 밸런싱 임펠러와 고품질 베어링" },
                  { problem: "유량/압력 저하", solution: "내마모성 소재와 최적화된 임펠러 설계" },
                  { problem: "잦은 유지보수", solution: "Sealless 설계로 씰 관련 유지보수 불필요" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg">
                    <span className="text-2xl font-bold text-slate-200">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <h5 className="font-semibold text-[#0A1628] mb-1">{item.problem}</h5>
                      <p className="text-sm text-slate-600">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: CP PUMP 파트너 - 네이비 배경 */}
        <section id="partner" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">04</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                CP PUMP
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 왼쪽: 파트너 정보 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  CP PUMP
                </h3>
                <p className="text-[#3B82F6] font-medium mb-6">Switzerland</p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  스위스에 소재한 CP Pump는 50년 이상의 역사를 가진 Magnetic Driven Pump 전문 제조사입니다.
                  고객 만족을 최우선으로 Trouble Shooting을 통한 최적의 PUMP를 공급합니다.
                </p>

                <div className="space-y-3">
                  {[
                    "Magnetic Driven Pump 전문 제조사",
                    "50년+ 스위스 기술력 보유",
                    "독자적 베어링 특허 디자인",
                    "이물질 30% 함유 유체 이송 가능",
                    "Metal & PFA Lined 제품군 완비",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 통계 */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "년 스위스 기술" },
                  { value: "30%", label: "이물질 이송 가능" },
                  { value: "100%", label: "누설 방지" },
                  { value: "24/7", label: "기술 지원" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                    <p className="text-sm text-slate-400 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              펌프 전문가와 상담하세요
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              30년 경력의 전문가가 귀사의 공정에 최적화된 펌프 솔루션을 제안해 드립니다
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
