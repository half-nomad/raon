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

// 대표 이미지 (상단 갤러리용) - Motor 관련 이미지 필요 시 교체
const heroImages = [
  { src: "/images/products/motor/motor-main.jpg", alt: "Industrial Motor" },
  { src: "/images/products/motor/ldw-motor.jpg", alt: "LDW Motor" },
  { src: "/images/products/motor/nidec-motor.jpg", alt: "NIDEC Motor" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "spare-parts", label: "SPARE PARTS" },
  { id: "certification", label: "방폭인증서비스" },
  { id: "process", label: "인증 프로세스" },
  { id: "support", label: "기술 지원" },
];

// 파트너사 (원고 기반)
const partners = [
  {
    name: "LDW",
    fullName: "Lloyd Dynamowerke GmbH",
    country: "Germany",
    description: "대형 Synchronous 및 Induction Motor 제작사",
  },
  {
    name: "NIDEC",
    fullName: "舊 Ansaldo",
    country: "Italy",
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
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("spare-parts");

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

        {/* Section 1: SPARE PARTS - 네이비 배경 */}
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

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* 왼쪽: 파트너 정보 */}
              <div>
                <div className="space-y-6">
                  {partners.map((partner, idx) => (
                    <div key={idx} className="mb-8 p-6 bg-white/10 border border-white/20 rounded-xl hover:border-[#3B82F6]/50 hover:shadow-lg transition-all">
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
              </div>

              {/* 오른쪽: 서비스 특징 - 인포그래픽 스타일 */}
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
          </div>
        </section>

        {/* Section 2: 방폭인증서비스 - 흰색 배경 (반전) */}
        <section id="certification" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                방폭인증서비스
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-600 mt-4 max-w-2xl">
                국내 방폭 지역 설치 외산 수입 모터 → 국내 인증 필수.
                <span className="text-[#0A1628] font-semibold"> KOSHA/KTL/KGS</span> 인증 대응 서비스를 제공합니다.
              </p>
            </div>

            {/* 인증 기관 그리드 */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
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

            {/* 서비스 내용 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certificationServices.map((service, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0A1628] border border-slate-700 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl font-bold text-white/50">{String(idx + 1).padStart(2, '0')}</span>
                  <p className="text-white font-medium mt-2">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 인증 프로세스 - 네이비 배경 */}
        <section id="process" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                인증 프로세스
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-300 mt-4 max-w-2xl">
                30년간 축적된 현장 경험을 바탕으로 <span className="text-[#EF4444] font-semibold">체계적인 인증 절차</span>를 제공합니다.
              </p>
            </div>

            {/* 프로세스 - 인포그래픽 테이블 스타일 */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {certificationProcess.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 p-6 bg-white/10 border border-white/20 rounded-xl hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                >
                  <span className="text-4xl font-bold text-white/20">
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 프로세스 플로우 */}
            <div className="p-8 bg-white/10 border border-white/20 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-6">진행 순서</h4>
              <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                {certificationProcess.map((item, idx) => (
                  <div key={idx} className="flex-1 flex items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-medium text-white">{item.title}</span>
                    </div>
                    {idx < certificationProcess.length - 1 && <span className="hidden md:block flex-1 h-px bg-[#3B82F6]/30 mx-4" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 기술 지원 - 흰색 배경 */}
        <section id="support" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            {/* 섹션 헤더 */}
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">04</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                기술 지원
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-600 mt-4 max-w-2xl">
                국내 정유/석유화학 신설 프로젝트 다수 <span className="text-[#0A1628] font-semibold">방폭 기계 설치 경험</span> 보유.
                복잡한 인증 절차를 원활하게 진행하여 고객의 프로젝트 일정을 준수합니다.
              </p>
            </div>

            {/* 지원 서비스 그리드 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "기술 문서 지원", desc: "방폭 인증용 기술 문서 작성 지원" },
                { title: "현장 기술 지원", desc: "설치 및 시운전 기술 지원" },
                { title: "Supervisor 파견", desc: "해외 전문가 파견 서비스" },
                { title: "부품 수배", desc: "정품 부품 신속 수배" },
                { title: "정기 점검", desc: "예방 정비 프로그램" },
                { title: "긴급 대응", desc: "24시간 긴급 대응 체계" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#0A1628] border border-slate-700 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                >
                  <span className="text-3xl font-bold text-white/50">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-semibold text-white mt-2">{service.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* 핵심 강점 강조 */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#0A1628] to-[#1a2942] border border-[#3B82F6]/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <span className="text-4xl font-bold text-white">30+</span>
                  <p className="text-slate-400 mt-1">년 현장 경험</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">2</span>
                  <p className="text-slate-400 mt-1">글로벌 파트너</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">3</span>
                  <p className="text-slate-400 mt-1">인증 기관 대응</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
          <div className="section-container text-center">
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
