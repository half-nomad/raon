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
  { src: "/images/products/pump/pump.png", alt: "CP Pump Overview" },
  { src: "/images/products/pump/MKP_Gross_neuer_Schatten_Rand.png", alt: "MKP Metal Chemical Process Pump" },
  { src: "/images/products/pump/PIC_MKP-S_MB_001_300dpi_TBS_neuer_Schatten.png", alt: "MKP-S Pump" },
  { src: "/images/products/pump/PIC_MKPL_MB_001_gross_TBS_retuschiert_neuer_Schatten.png", alt: "MKPL PFA Lined Pump" },
  { src: "/images/products/pump/PIC_MKP-Bio_Pumpe_004_300dpi_TBS_neuer_Schatten.png", alt: "MKP-Bio Biotech Pump" },
  { src: "/images/products/pump/PIC_MSKS_Pumpe_001_300dpi_TBS_neuer_Schatten.png", alt: "MSKS PTFE Pump" },
  { src: "/images/products/pump/PIC_ZMP_Pumpe_003_ohne_Sperrdruckgefaess_300dpi_TBS_neuer_Schatten.png", alt: "ZMP Crushing Pump" },
  { src: "/images/products/pump/PIC_EB-Pumpe_ohne_Fuesse_ohne_Sperrdruckgefaess_011_gross_neuer_Schatten_2020.png", alt: "EB PFA-Lined Pump" },
  { src: "/images/products/pump/PIC_MSKPP_Lagerstuhl_003_300dpi_TBS_neuer_Schatten.png", alt: "MSKPP PTFE Pump" },
  { src: "/images/products/pump/PIC_MKPP_Pumpe_001_300dpi_original_Schmid_neuer_Schatten.png", alt: "MKPP Chemical Process Pump" },
  { src: "/images/products/pump/PIC_MKPL-S_Pumpe_015_300dpi_TBS_neuer_Schatten.png", alt: "MKPL-S Self-Priming Pump" },
  { src: "/images/products/pump/PIC_SZMK_Pumpe_001_300dpi_original_Schmid_neuer_Schatten.png", alt: "SZMK Multi-Stage Pump" },
  { src: "/images/products/pump/PIC_MKP_ANSI_Pumpe_001_gross_TBS_retuschiert_neuer_Schatten.png", alt: "MKP ANSI Pump" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "solution", label: "PUMP SOLUTION" },
  { id: "troubleshooting", label: "TROUBLE SHOOTING" },
];

// Magnetic Driven Pump 제품군
const magneticPumps = [
  { model: "MKP", desc: "Metal(SS, Hastelloy) Chemical Process Pump", type: "Metal", image: "/images/products/pump/MKP_Gross_neuer_Schatten_Rand.png" },
  { model: "MKPL", desc: "PFA Lined Chemical Process Pump", type: "PFA Lined", image: "/images/products/pump/PIC_MKPL_MB_001_gross_TBS_retuschiert_neuer_Schatten.png" },
  { model: "MKP-Bio", desc: "Stainless Steel Biotech Process Pump", type: "Biotech", image: "/images/products/pump/PIC_MKP-Bio_Pumpe_004_300dpi_TBS_neuer_Schatten.png" },
  { model: "MSKS", desc: "Self Priming Solid PTFE Chemical Process Pump", type: "PTFE", image: "/images/products/pump/PIC_MSKS_Pumpe_001_300dpi_TBS_neuer_Schatten.png" },
  { model: "MSKP", desc: "Solid PTFE Chemical Process Pump", type: "PTFE", image: "/images/products/pump/PIC_MSKP_Lagerstuhl_001_300dpi_TBS_neuer_Schatten.png" },
  { model: "MKTP", desc: "Stainless Steel Chemical Process Sump Pump", type: "Metal", image: "/images/products/pump/CP-MKTP-Magnetic-Drive-Chemical-Process-Sump-Pump.jpg" },
  { model: "MSKPP", desc: "Solid PTFE Chemical Process Pump", type: "PTFE", image: "/images/products/pump/PIC_MSKPP_Lagerstuhl_003_300dpi_TBS_neuer_Schatten.png" },
  { model: "MKPP", desc: "Metallic Mag-Drive Chemical Process Pump", type: "Metal", image: "/images/products/pump/PIC_MKPP_Pumpe_001_300dpi_original_Schmid_neuer_Schatten.png" },
  { model: "MKP-S", desc: "Metallic Mag-Drive Self-Priming Pump", type: "Metal", image: "/images/products/pump/PIC_MKP-S_MB_001_300dpi_TBS_neuer_Schatten.png" },
  { model: "MKPL-S", desc: "PFA Lined Self-Priming Chemical Process Pump", type: "PFA Lined", image: "/images/products/pump/PIC_MKPL-S_Pumpe_015_300dpi_TBS_neuer_Schatten.png" },
  { model: "SZMK", desc: "Metallic Mag-Drive Multi-Stage Pump", type: "Metal", image: "/images/products/pump/PIC_SZMK_Pumpe_001_300dpi_original_Schmid_neuer_Schatten.png" },
];

// Double Mechanical Seal Pump 제품군
const mechanicalPumps = [
  { model: "ZMP", desc: "Stainless Steel Chemical Process Crushing Pump", image: "/images/products/pump/PIC_ZMP_Pumpe_003_ohne_Sperrdruckgefaess_300dpi_TBS_neuer_Schatten.png" },
  { model: "ET", desc: "Ceramic-Lined Chemical Process Pump", image: "/images/products/pump/PIC_ET-Pumpe_ohne_Fuesse_und_Sperrdruckgefaess_001_300dpi_neuer_Schatten.png" },
  { model: "EB", desc: "PFA-Lined Chemical Process Pump", image: "/images/products/pump/PIC_EB-Pumpe_ohne_Fuesse_ohne_Sperrdruckgefaess_011_gross_neuer_Schatten_2020.png" },
];

// Trouble Shooting 항목 (translated in component)

export default function PumpPage() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("solution");

  const troubleShootingItems = [
    {
      problem: t("products.pumpPage.troubleItem1Problem"),
      solution: t("products.pumpPage.troubleItem1Solution"),
    },
    {
      problem: t("products.pumpPage.troubleItem2Problem"),
      solution: t("products.pumpPage.troubleItem2Solution"),
    },
    {
      problem: t("products.pumpPage.troubleItem3Problem"),
      solution: t("products.pumpPage.troubleItem3Solution"),
      highlight: true,
    },
  ];

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
                { label: "PUMP" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              PUMP
            </h1>
            <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
              {t("products.pumpPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Product Intro - 2컬럼 레이아웃 */}
        <ProductIntro
          title={t("products.pumpPage.introTitle")}
          description={t("products.pumpPage.introDescription")}
          images={heroImages}
          partners={[
            { name: "CP PUMP", country: t("products.pumpPage.partnerCountry") },
          ]}
          highlights={[
            t("products.pumpPage.highlight1"),
            t("products.pumpPage.highlight2"),
            t("products.pumpPage.highlight3"),
            t("products.pumpPage.highlight4"),
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

        {/* ========== Section 01: PUMP SOLUTION - 네이비 배경 ========== */}
        <section id="solution" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                PUMP SOLUTION
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            {/* CP Pump 소개: 좌측 텍스트 + 우측 이미지 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-16">
              {/* 왼쪽: CP Pump 파트너 정보 */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <div className="flex items-center gap-6 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      CP PUMP
                    </h3>
                    {/* CP PUMP 로고 이미지 박스 */}
                    <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                      <Image
                        src="/images/partners/cp-pump-systems.png"
                        alt="CP PUMP Logo"
                        width={80}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-[#3B82F6] font-medium">Switzerland</p>
                  <p className="text-slate-300 mt-4 leading-relaxed">
                    {t("products.pumpPage.cpPumpDescription")}
                  </p>
                </div>

                {/* 핵심 장점 리스트 */}
                <div className="space-y-3 flex-1 flex flex-col justify-end">
                  {[
                    { num: "01", title: t("products.pumpPage.advantage1Title"), desc: t("products.pumpPage.advantage1Desc") },
                    { num: "02", title: t("products.pumpPage.advantage2Title"), desc: t("products.pumpPage.advantage2Desc") },
                    { num: "03", title: t("products.pumpPage.advantage3Title"), desc: t("products.pumpPage.advantage3Desc") },
                    { num: "04", title: t("products.pumpPage.advantage4Title"), desc: t("products.pumpPage.advantage4Desc") },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 border-l-4 border-[#3B82F6] bg-white/5 pl-4 py-3 pr-4">
                      <span className="text-[#3B82F6] font-bold text-lg">{item.num}</span>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: CP Pump 이미지 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/pump/pump.png"
                  alt="CP Pump MKP Series"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* 제품 라인업 */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Magnetic Driven Pump (Sealless)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {magneticPumps.map((pump, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden bg-white/10 border border-white/10 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                  >
                    {/* 이미지 영역 */}
                    <div className="aspect-square relative bg-white">
                      <Image
                        src={pump.image}
                        alt={pump.model}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    {/* 텍스트 영역 */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold rounded">
                          {pump.model}
                        </span>
                        <span className="text-xs text-slate-400">{pump.type}</span>
                      </div>
                      <p className="text-sm text-slate-300">{pump.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Double Mechanical Seal Pump */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Double Mechanical Seal Pump
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mechanicalPumps.map((pump, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden bg-white/10 border border-white/10 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                  >
                    {/* 이미지 영역 */}
                    <div className="aspect-square relative bg-white">
                      <Image
                        src={pump.image}
                        alt={pump.model}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                    </div>
                    {/* 텍스트 영역 */}
                    <div className="p-4">
                      <span className="px-3 py-1 bg-slate-600 text-white text-xs font-bold rounded">
                        {pump.model}
                      </span>
                      <p className="text-sm text-slate-300 mt-3">{pump.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== Section 02: TROUBLE SHOOTING - 흰색 배경 ========== */}
        <section id="troubleshooting" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                TROUBLE SHOOTING
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-600 mt-4 max-w-2xl">
                {t("products.pumpPage.troubleDescription")}
              </p>
            </div>

            {/* 문제/해결 카드 */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {troubleShootingItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl bg-[#0A1628] border border-[#0A1628]/20 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all ${item.highlight ? 'ring-2 ring-[#3B82F6]' : ''}`}
                >
                  {item.highlight && (
                    <span className="inline-block px-2 py-1 bg-[#3B82F6] text-white text-xs font-bold rounded mb-4">
                      {t("products.pumpPage.patentedTech")}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-white/30">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{t("products.pumpPage.problemLabel")}</p>
                    <h4 className="font-semibold text-white mb-4">{item.problem}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{t("products.pumpPage.solutionLabel")}</p>
                    <p className="text-sm text-[#3B82F6] font-medium">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 일반 펌프 문제 & CP Pump 솔루션 */}
            <div className="bg-[#0A1628] rounded-2xl p-8">
              <h4 className="text-lg font-bold text-white mb-6">{t("products.pumpPage.commonProblemsTitle")}</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { problem: t("products.pumpPage.commonProblem1"), solution: t("products.pumpPage.commonSolution1") },
                  { problem: t("products.pumpPage.commonProblem2"), solution: t("products.pumpPage.commonSolution2") },
                  { problem: t("products.pumpPage.commonProblem3"), solution: t("products.pumpPage.commonSolution3") },
                  { problem: t("products.pumpPage.commonProblem4"), solution: t("products.pumpPage.commonSolution4") },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white/10 rounded-lg border border-white/10 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all">
                    <span className="text-2xl font-bold text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{item.problem}</h5>
                      <p className="text-sm text-slate-300">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              {t("products.pumpPage.ctaTitle")}
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              {t("products.pumpPage.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EF4444] text-white rounded-full font-semibold hover:bg-[#DC2626] transition-colors"
              >
                {t("products.pumpPage.ctaConsultation")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {t("products.pumpPage.ctaOtherProducts")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
