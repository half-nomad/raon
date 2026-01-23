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
  { src: "/images/products/compressor-parts/Valve-Assy&Internal-Parts_1.jpg", alt: "Compressor Valve Assembly" },
  { src: "/images/products/compressor-parts/piston_1.jpg", alt: "Piston" },
  { src: "/images/products/compressor-parts/cylinder-liner_1.jpg", alt: "Cylinder Liner" },
  { src: "/images/products/compressor-parts/piston-rod_1.jpg", alt: "Piston Rod" },
  { src: "/images/products/compressor-parts/Crosshead_1.jpg", alt: "Crosshead" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "new", label: "NEW COMPRESSOR" },
  { id: "spares", label: "SPARE PARTS" },
  { id: "troubleshooting", label: "TROUBLE SHOOTING" },
  { id: "maintenance", label: "M&R" },
];

// SPARE PARTS 카테고리
const sparePartsCategories = [
  {
    name: "Cylinder Liner",
    description: "피스톤 왕복 운동을 위한 교체 가능 슬리브",
    partner: "WTQ",
    image: "/images/products/compressor-parts/cylinder-liner_1.jpg",
  },
  {
    name: "Piston",
    description: "실린더 내 왕복 운동으로 가스 압축",
    partner: "Castanet SA",
    image: "/images/products/compressor-parts/piston_1.jpg",
  },
  {
    name: "Piston Rod",
    description: "피스톤과 크랭크샤프트 연결 부품",
    partner: "Castanet SA",
    image: "/images/products/compressor-parts/piston-rod_1.jpg",
  },
  {
    name: "Crosshead",
    description: "피스톤 왕복 운동 안정화 지지 부품",
    partner: "-",
    image: "/images/products/compressor-parts/Crosshead_1.jpg",
  },
  {
    name: "Piston Ring & Rider Ring",
    description: "기밀 유지 및 마찰 저감 소모품",
    partner: "-",
    image: "/images/products/compressor-parts/Piston-ring_1.jpg",
  },
  {
    name: "Packing & Oil Scraper",
    description: "고압 밀봉 및 오일 누출 방지",
    partner: "-",
    image: "/images/products/compressor-parts/Packing-Cup&Packing-Ring_1.jpg",
  },
  {
    name: "Valve Assembly",
    description: "가스 흐름 방향 제어 (흡기/배출)",
    partner: "KB Delta",
    image: "/images/products/compressor-parts/Valve-Assy&Internal-Parts_1.jpg",
  },
];

// FIMA 제품군
const fimaProducts = [
  "TURBO COMPRESSORS",
  "SPECIAL PURPOSE BLOWERS",
  "EXPLOSION PROOF BLOWERS",
  "HERMETICALLY ENCAPSULATED BLOWERS AND COMPRESSOR",
];

export default function CompressorPage() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("new");

  // 스크롤 위치에 따라 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // offset for sticky nav

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
      const offset = 140; // sticky nav height
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
        {/* Fixed Sub Navigation - 태산 스타일 (Header 바로 아래 고정) */}
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
              { label: "COMPRESSOR" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            COMPRESSOR
          </h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
            왕복동 압축기 부품 및 Turbo Compressor 솔루션
          </p>
        </div>
      </section>

      {/* Product Intro - 2컬럼 레이아웃 */}
      <ProductIntro
        title="압축기 전문 솔루션"
        description="RTS는 30년 경력의 해외 제작사와 영업 기술 지원에 대한 경험을 바탕으로 왕복동압축기 부품, Turbo Compressor(원심 및 블로워) 신규 기계 공급 및 부품에 대한 SOLUTION을 제공하고 있습니다."
        images={heroImages}
        partners={[
          { name: "FIMA", country: "독일" },
          { name: "WTQ", country: "중국" },
          { name: "Castanet SA", country: "프랑스" },
          { name: "KB Delta", country: "미국" },
        ]}
        highlights={[
          "Turbo Compressor 신규 공급",
          "왕복동 압축기 전 부품",
          "정유/석유화학 30년 실적",
          "글로벌 파트너 네트워크",
        ]}
      />

      {/* ========== 모든 섹션 세로 나열 (배경 교차: white → navy → white → navy) ========== */}

      {/* Section 1: NEW COMPRESSOR - 흰색 배경 */}
      <section id="new" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
              NEW COMPRESSOR
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* 왼쪽: 파트너 정보 */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-1">
                  FIMA
                </h3>
                <p className="text-[#3B82F6] font-medium">Germany</p>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  독일 소재 Turbo Compressor 및 Blower 전문 제조사로,
                  고효율 원심 압축기 및 특수 목적 블로워를 공급합니다.
                </p>
              </div>

              {/* 제품군 - 인포그래픽 스타일 */}
              <div className="space-y-3">
                {fimaProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4"
                  >
                    <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-slate-700 font-medium">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 핵심 특징 - 인포그래픽 */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-[#0A1628] mb-6">핵심 특징</h4>
              <div className="space-y-6">
                {[
                  { num: "01", title: "고효율", desc: "최적화된 에너지 효율로 운영비 절감" },
                  { num: "02", title: "방폭 인증", desc: "위험지역 설치 가능한 방폭 사양" },
                  { num: "03", title: "맞춤 설계", desc: "공정 요구사항에 맞춘 설계" },
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

      {/* Section 2: SPARE PARTS - 네이비 배경 (반전) */}
      <section id="spares" className="py-16 md:py-24 bg-[#0A1628]">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              SPARE PARTS
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            <p className="text-slate-300 mt-4 max-w-2xl">
              모든 브랜드의 왕복동 압축기 부품을 공급합니다.
              Modification과 Upgrade, Reverse Engineering을 통한 부품 제작도 가능합니다.
            </p>
          </div>

          {/* 부품 그리드 - 클린한 카드 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sparePartsCategories.map((part, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
              >
                {/* 이미지 */}
                <div className="aspect-square relative bg-white/5">
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                {/* 정보 */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-white">{part.name}</h4>
                    {part.partner !== "-" && (
                      <span className="text-xs text-[#EF4444] font-medium">{part.partner}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400">{part.description}</p>
                </div>
              </div>
            ))}
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
              30년간 축적된 현장 경험을 바탕으로 압축기 운전 중 발생하는
              다양한 문제에 대한 <span className="text-[#EF4444] font-semibold">체계적인 진단 및 해결 방안</span>을 제공합니다.
            </p>
          </div>

          {/* 문제 유형 - 인포그래픽 테이블 스타일 */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "진동 및 소음 문제", desc: "베어링 마모, 정렬 불량, 임펠러 손상 등 진단" },
              { title: "온도 이상", desc: "냉각 시스템, 윤활유, 씰 상태 점검" },
              { title: "압력 불균형", desc: "밸브 누설, 씰링 불량, 가스켓 손상 확인" },
              { title: "효율 저하", desc: "내부 마모, 밸브 타이밍, 제어 시스템 최적화" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-5 p-6 bg-slate-50 rounded-xl"
              >
                <span className="text-4xl font-bold text-[#0A1628]/10">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 해결 프로세스 */}
          <div className="mt-12 p-8 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl">
            <h4 className="text-lg font-bold text-[#0A1628] mb-6">해결 프로세스</h4>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0">
              {["문제 접수", "현장 진단", "솔루션 제안", "부품 수배", "작업 완료"].map((step, idx) => (
                <div key={idx} className="flex-1 flex items-center">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-medium text-[#0A1628]">{step}</span>
                  </div>
                  {idx < 4 && <span className="hidden md:block flex-1 h-px bg-[#3B82F6]/30 mx-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: M&R (Maintenance & Repair) - 네이비 배경 */}
      <section id="maintenance" className="py-16 md:py-24 bg-[#0A1628]">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">04</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              M&R (유지보수 & 정비)
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            <p className="text-slate-300 mt-4 max-w-2xl">
              예방 정비부터 긴급 수리까지, 압축기 수명 연장과
              <span className="text-white font-semibold"> 안정적인 운전</span>을 위한 종합 서비스를 제공합니다.
            </p>
          </div>

          {/* 서비스 그리드 - 인포그래픽 스타일 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "정기 점검", desc: "계획된 예방 정비 프로그램" },
              { title: "긴급 수리", desc: "24시간 긴급 대응 체계" },
              { title: "오버홀", desc: "분해 점검 및 전면 정비" },
              { title: "부품 교체", desc: "순정 부품 공급 및 설치" },
              { title: "성능 진단", desc: "효율 측정 및 최적화 제안" },
              { title: "기술 교육", desc: "운전자 대상 교육 프로그램" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl font-bold text-white/10">{String(idx + 1).padStart(2, '0')}</span>
                <h4 className="font-semibold text-white mt-2">{service.title}</h4>
                <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* 파트너 네트워크 강조 */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#3B82F6]/10 to-[#3B82F6]/5 border border-[#3B82F6]/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="text-4xl font-bold text-white">30+</span>
                <p className="text-slate-400 mt-1">년 현장 경험</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-white">24/7</span>
                <p className="text-slate-400 mt-1">긴급 대응</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-white">Global</span>
                <p className="text-slate-400 mt-1">파트너 네트워크</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            압축기 솔루션이 필요하신가요?
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
