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
  Droplets,
  Shield,
  Zap,
  AlertTriangle,
  ArrowRight,
  Phone,
  CheckCircle,
  Building2,
  Factory,
  Beaker,
  FlaskConical,
  Wrench,
  Clock,
  Award,
  Target,
} from "lucide-react";

// 대표 이미지 (상단 갤러리용)
const heroImages = [
  { src: "/images/products/pump/pump_1.jpg", alt: "Magnetic Driven Pump" },
  { src: "/images/products/pump/pump_2.jpg", alt: "CP Pump Solution" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "solution", label: "PUMP SOLUTION" },
  { id: "troubleshooting", label: "TROUBLE SHOOTING" },
  { id: "partner", label: "파트너" },
  { id: "contact", label: "문의하기" },
];

// Magnetic Driven Pump 제품군
const magneticPumps = [
  { model: "MKP", desc: "Metal(SS, Hastelloy) Chemical Process Pump", type: "Metal" },
  { model: "MKPL", desc: "PFA Lined Chemical Process Pump", type: "PFA Lined" },
  { model: "MKP-Bio", desc: "Stainless Steel Biotech Process Pump", type: "Biotech" },
  { model: "MSKS", desc: "Self Priming Solid PTFE Chemical Process Pump", type: "PTFE" },
  { model: "MSKP", desc: "Solid PTFE Chemical Process Pump", type: "PTFE" },
  { model: "MSKPP", desc: "Solid PTFE Chemical Process Peripheral Pump", type: "PTFE" },
  { model: "MKTP", desc: "Stainless Steel Chemical Process Sump Pump", type: "Metal" },
  { model: "MKP-S", desc: "Stainless Steel Self Priming Chemical Process Pump", type: "Metal" },
  { model: "MKPL-S", desc: "PFA Lined Self Priming Chemical Process Pump", type: "PFA Lined" },
  { model: "SZMK", desc: "Stainless Steel In-Line Chemical Process Pump", type: "Metal" },
  { model: "MKPP", desc: "Stainless Steel In-Line Chemical Process Peripheral", type: "Metal" },
];

// Double Mechanical Seal Pump 제품군
const mechanicalPumps = [
  { model: "ZMP", desc: "Stainless Steel Chemical Process Crushing Pump" },
  { model: "ET", desc: "Ceramic-Lined Chemical Process Pump" },
  { model: "EB", desc: "PFA-Lined Chemical Process Pump" },
];

// Trouble Shooting 문제/해결
const troubleShootingItems = [
  {
    problem: "혹독한 부식성(황산) 유체",
    solution: "PFA Lined Pump",
    icon: FlaskConical,
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/30",
  },
  {
    problem: "Slurry(이물질)로 인한 부품 손상",
    solution: "특수재질(Hastelloy C22) PUMP",
    icon: Shield,
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
  },
  {
    problem: "이물질에 Magnetic Pump 사용 불가?",
    solution: "CP Pump 특허 기술로 해결! (이물질 30%까지 이송 가능)",
    icon: Target,
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/30",
    highlight: true,
  },
];

// 핵심 장점
const advantages = [
  { icon: Shield, title: "완전 밀폐", desc: "Sealless 설계로 누설 제로" },
  { icon: Droplets, title: "내화학성", desc: "부식성 유체 안전 이송" },
  { icon: Zap, title: "고효율", desc: "에너지 비용 절감" },
  { icon: Wrench, title: "저유지보수", desc: "씰 교체 불필요, TCO 절감" },
];

// 적용 분야
const applications = [
  { name: "정유/석유화학", icon: Factory },
  { name: "바이오/제약", icon: Beaker },
  { name: "F&B (식품)", icon: FlaskConical },
  { name: "수처리", icon: Droplets },
];

// 통계 데이터
const stats = [
  { value: "50+", label: "년 스위스 기술" },
  { value: "30%", label: "이물질 이송" },
  { value: "100%", label: "누설 방지" },
  { value: "24/7", label: "기술 지원" },
];

export default function PumpPage() {
  const [activeSection, setActiveSection] = useState("solution");

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
              스위스 CP Pump의 Magnetic Driven Pump 전문 솔루션
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-[#EF4444]">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Intro */}
        <ProductIntro
          title="PUMP 전문 솔루션"
          description="스위스 CP Pump의 국내 대리점으로써 Magnetic Driven(Sealless) Pump 전문 업체로 Metal 및 PFA Lined PUMP SOLUTION을 제공하고 있습니다. 정유, 석유화학, 바이오, F&B 등 모든 산업 분야의 혹독한 부식성 유체와 Slurry 이송 문제를 해결합니다."
          images={heroImages}
          partners={[{ name: "CP PUMP", country: "스위스" }]}
          highlights={[
            "Magnetic Driven(Sealless) 설계",
            "이물질 30%까지 이송 가능 (특허 기술)",
            "Metal & PFA Lined 제품군 완비",
            "24/7 기술 지원",
          ]}
        />

        {/* Section 1: PUMP SOLUTION */}
        <section id="solution" className="py-16 md:py-20 border-b border-slate-200">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#EF4444] font-bold text-sm">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
                PUMP SOLUTION
              </h2>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Magnetic Driven Pump 제품군으로 다양한 산업 분야의 펌프 솔루션을 제공합니다.
            </p>

            {/* Advantages */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {advantages.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="text-center p-6 rounded-xl bg-white border border-slate-200 hover:border-[#3B82F6]/30 hover:shadow-md transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-[#0A1628] font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Magnetic Driven Pump Products */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#0A1628] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-[#3B82F6]" />
                </div>
                Magnetic Driven Pump (Sealless)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {magneticPumps.map((pump, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-[#EF4444] text-white text-xs font-bold rounded">
                        {pump.model}
                      </span>
                      <span className="text-xs text-slate-400">{pump.type}</span>
                    </div>
                    <p className="text-sm text-slate-600">{pump.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Double Mechanical Seal Pump */}
            <div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-slate-500" />
                </div>
                Double Mechanical Seal Pump
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {mechanicalPumps.map((pump, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
                  >
                    <span className="px-3 py-1 bg-slate-600 text-white text-xs font-bold rounded">
                      {pump.model}
                    </span>
                    <p className="text-sm text-slate-600 mt-3">{pump.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: TROUBLE SHOOTING */}
        <section id="troubleshooting" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#EF4444] font-bold text-sm">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
                TROUBLE SHOOTING
              </h2>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl">
              혹독한 부식성 유체와 Slurry로 인한 부품 손상 문제를 해결합니다.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {troubleShootingItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} ${item.highlight ? "ring-2 ring-[#EF4444]/30" : ""}`}
                  >
                    {item.highlight && (
                      <div className="absolute -top-3 left-6 px-3 py-1 bg-[#EF4444] text-white text-xs font-bold rounded-full">
                        ★ 특허 기술
                      </div>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0A1628]" />
                    </div>
                    <div className="mb-4">
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">문제</div>
                      <h3 className="text-lg font-semibold text-[#0A1628]">{item.problem}</h3>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-white/80 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">해결</div>
                        <p className="text-sm text-slate-700">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* General Problems */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0A1628] mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                일반적인 펌프 문제와 CP Pump 솔루션
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    problem: "펌프 누설",
                    causes: "씰 마모, 개스킷 손상",
                    solution: "Magnetic Drive 방식으로 완전 밀폐, 누설 원천 차단",
                  },
                  {
                    problem: "과도한 진동/소음",
                    causes: "캐비테이션, 베어링 마모",
                    solution: "정밀 밸런싱 임펠러와 고품질 베어링으로 진동 최소화",
                  },
                  {
                    problem: "유량/압력 저하",
                    causes: "임펠러 마모, 에어 유입",
                    solution: "내마모성 소재와 최적화된 임펠러 설계로 성능 유지",
                  },
                  {
                    problem: "잦은 유지보수",
                    causes: "씰 교체, 부품 마모",
                    solution: "Sealless 설계로 씰 관련 유지보수 불필요, TCO 절감",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0A1628] mb-1">{item.problem}</h4>
                        <p className="text-xs text-slate-500 mb-2">
                          원인: {item.causes}
                        </p>
                        <div className="flex items-start gap-2 p-2 bg-[#EF4444]/5 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-700">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Partner */}
        <section id="partner" className="py-16 md:py-20 border-b border-slate-200">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#EF4444] font-bold text-sm">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
                GLOBAL PARTNER
              </h2>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl">
              50년 이상의 역사를 가진 스위스 Magnetic Driven Pump 전문 제조사
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                {/* Partner Badge */}
                <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-[#EF4444]/5 border border-[#EF4444]/20">
                  <div className="w-14 h-14 rounded-lg bg-[#EF4444]/10 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-[#EF4444]" />
                  </div>
                  <div>
                    <div className="text-[#0A1628] font-bold text-xl">CP PUMP</div>
                    <div className="text-slate-500 text-sm">Switzerland Partner</div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
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
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-4">적용 분야</h3>
                <div className="grid grid-cols-2 gap-4">
                  {applications.map((app, index) => {
                    const Icon = app.icon;
                    return (
                      <div
                        key={index}
                        className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-md transition-all"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-[#3B82F6]" />
                        </div>
                        <span className="text-[#0A1628] font-semibold">{app.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: CTA */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-gradient-to-br from-[#EF4444] to-[#DC2626] text-white"
        >
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              펌프 전문가와 상담하세요
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              30년 이상의 경험을 바탕으로 귀사의 공정에 최적화된 펌프 솔루션을 제안해 드립니다.
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
