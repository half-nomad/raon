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

// 대표 이미지 (상단 갤러리 + 캐러셀 공용)
const heroImages = [
  { src: "/images/products/motor/definitepurpose.webp", alt: "Definite Purpose Motor" },
  { src: "/images/products/motor/FRACTIONAL.webp", alt: "Fractional Motor" },
  { src: "/images/products/motor/iecmotor.webp", alt: "IEC Motor" },
  { src: "/images/products/motor/WPII.webp", alt: "WPII Motor" },
  { src: "/images/products/motor/Capacitorstartmotor.webp", alt: "Capacitor Start Motor" },
  { src: "/images/products/motor/splitphase.webp", alt: "Split Phase Motor" },
  { src: "/images/products/motor/severeduty.webp", alt: "Severe Duty Motor" },
  { src: "/images/products/motor/AGDutySinglephase_edit.webp", alt: "AG Duty Single Phase Motor" },
];

// 서브 네비게이션 정의 (2개)
const subNavItems = [
  { id: "spare-parts", label: "MOTOR SPARE PARTS" },
  { id: "certification", label: "방폭인증서비스" },
];

// 파트너사 (원고 기반)
const partners = [
  {
    name: "LDW",
    fullName: "Lloyd Dynamowerke GmbH",
    country: "Germany",
    logo: "/images/partners/ldw_logo.png",
    description: "대형 Synchronous 및 Induction Motor 제작사",
  },
  {
    name: "NIDEC",
    fullName: "舊 Ansaldo",
    country: "Italy",
    logo: "/images/partners/nidec.webp",
    description: "대형 Synchronous 및 Induction Motor 제작사",
  },
];

// 서비스 특징
const sparePartsServices = [
  "LDW/NIDEC Motor 기술지원",
  "Supervisor 파견 서비스",
  "정품 Spare Parts 공급",
  "현장 기술 인력 파견",
];

// 방폭 인증 기관 (원고 기반)
const certificationAgencies = [
  {
    code: "KOSHA",
    name: "한국산업안전보건공단",
    desc: "산업안전 및 방폭 인증 총괄 기관",
  },
  {
    code: "KTL",
    name: "한국산업기술시험원",
    desc: "산업기술 시험 및 인증 전문 기관",
  },
  {
    code: "KGS",
    name: "한국가스안전공사",
    desc: "가스 관련 방폭 설비 인증 기관",
  },
];

// 인증 서비스 내용
const certificationServices = [
  "방폭 인증 필요 유무 판단",
  "인증 절차 컨설팅",
  "기술 문서 작성 지원",
  "인증 기관 대응",
];

// 인증 프로세스
const certificationProcess = [
  { step: 1, title: "사전 검토", desc: "기존 장비 현황 및 요구사항 분석" },
  { step: 2, title: "인증 계획", desc: "적합한 인증 기관 및 절차 수립" },
  { step: 3, title: "서류 준비", desc: "기술 문서 및 시험 자료 준비" },
  { step: 4, title: "인증 취득", desc: "심사 대응 및 인증서 발급" },
];

export default function MotorPage() {
  const [activeSection, setActiveSection] = useState("spare-parts");
  const [sparePartsImageIdx, setSparePartsImageIdx] = useState(0);

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
                { label: "MOTOR" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              MOTOR
            </h1>
            <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
              외산 모터 부품 공급 및 방폭 인증 솔루션
            </p>
          </div>
        </section>

        {/* Product Intro - 2컬럼 레이아웃 */}
        <ProductIntro
          title="모터 전문 솔루션"
          description="RTS는 정유, 석유화학에 30년의 왕복동압축기 공급 실적으로 현장에 설치된 외산 모터에 대한 부품 공급 및 방폭 인증(KOSHA/KGS/KTL)에 대한 SOLUTION을 제공하고 있습니다."
          images={heroImages}
          partners={[
            { name: "LDW", country: "독일" },
            { name: "NIDEC", country: "이탈리아" },
          ]}
          highlights={[
            "대형 Synchronous/Induction Motor",
            "방폭 인증 컨설팅",
            "정유/석유화학 30년 실적",
            "글로벌 파트너 네트워크",
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

        {/* ========== Section 01: MOTOR SPARE PARTS - Navy bg, 7:3 ========== */}
        <section id="spare-parts" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                MOTOR SPARE PARTS
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-300 mt-4 max-w-2xl">
                해외 OEM 왕복동압축기에 동력원으로 공급되는 외산 Motor의 Aftermarket 국내대리점
              </p>
            </div>

            {/* 2-col: 좌(텍스트 70%) / 우(캐러셀 30%) */}
            <div className="grid lg:grid-cols-[7fr_3fr] gap-12 lg:gap-16 items-start">
              {/* 좌측: 파트너 소개 + 서비스 목록 */}
              <div className="flex flex-col">
                {/* 파트너 카드 */}
                <div className="space-y-6 mb-8">
                  {partners.map((partner, idx) => (
                    <div key={idx} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={40}
                        className="object-contain mb-3"
                      />
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {partner.name}
                      </h3>
                      <p className="text-slate-400 text-sm mb-1">{partner.fullName}</p>
                      <p className="text-[#3B82F6] font-medium">{partner.country}</p>
                      <p className="text-slate-300 mt-4 leading-relaxed">
                        {partner.description}
                      </p>
                      <p className="text-sm text-slate-400 mt-2">
                        국내 정유/석유화학 공장 설치, 기술지원/Supervisor/부품 공급
                      </p>
                    </div>
                  ))}
                </div>

                {/* 서비스 목록 */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">서비스 내용</h4>
                  <div className="space-y-3">
                    {sparePartsServices.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-white/5 pl-4 py-3 pr-4"
                      >
                        <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="text-white font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 우측: 이미지 캐러셀 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                <Image
                  src={heroImages[sparePartsImageIdx].src}
                  alt={heroImages[sparePartsImageIdx].alt}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />

                {/* 좌측 화살표 */}
                <button
                  onClick={() => goToPrev(sparePartsImageIdx, heroImages.length, setSparePartsImageIdx)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label="이전 모터 이미지"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
                </button>

                {/* 우측 화살표 */}
                <button
                  onClick={() => goToNext(sparePartsImageIdx, heroImages.length, setSparePartsImageIdx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label="다음 모터 이미지"
                >
                  <ChevronRight className="w-5 h-5 text-[#0A1628]" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {heroImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setSparePartsImageIdx(dotIdx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        dotIdx === sparePartsImageIdx
                          ? "bg-[#0A1628] w-4"
                          : "bg-[#0A1628]/30 hover:bg-[#0A1628]/60"
                      }`}
                      aria-label={`모터 이미지 ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Section 02: 방폭인증서비스 - White bg, 풀 너비 세로 스택 ========== */}
        <section id="certification" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                방폭인증서비스
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            {/* 설명 */}
            <div className="mb-8">
              <p className="text-slate-600 leading-relaxed">
                국내 방폭 지역 설치 외산 수입 모터 → 국내 인증 필수.
                <span className="text-[#0A1628] font-semibold"> KOSHA/KTL/KGS</span> 인증 대응 서비스를 제공합니다.
              </p>
            </div>

            {/* 인증 기관 3개 카드 */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {certificationAgencies.map((agency, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-xl bg-[#0A1628] border border-slate-700 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                >
                  <span className="text-3xl font-bold text-white/20">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-bold text-white text-xl mt-2">{agency.code}</h4>
                  <p className="text-slate-300 font-medium mt-1">{agency.name}</p>
                  <p className="text-sm text-slate-400 mt-2">{agency.desc}</p>
                </div>
              ))}
            </div>

            {/* 인증 프로세스 4단계 */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-[#0A1628] mb-4">인증 프로세스</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {certificationProcess.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4"
                  >
                    <span className="text-[#3B82F6] font-bold text-lg">{String(item.step).padStart(2, '0')}</span>
                    <div>
                      <h5 className="font-semibold text-[#0A1628]">{item.title}</h5>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 서비스 내용 */}
            <div>
              <h4 className="text-lg font-bold text-[#0A1628] mb-4">서비스 내용</h4>
              <div className="space-y-3">
                {certificationServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4"
                  >
                    <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-[#0A1628] font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with SVG background pattern */}
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
              모터 솔루션이 필요하신가요?
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
