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
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// 대표 이미지 (상단 갤러리용) - compressor 폴더 전체 이미지
const heroImages = [
  { src: "/images/products/compressor/Turbo Compressor.jpg", alt: "Turbo Compressor" },
  { src: "/images/products/compressor/crosshead.png", alt: "Crosshead" },
  { src: "/images/products/compressor/cylinder-liner_2.jpg", alt: "Cylinder Liner" },
  { src: "/images/products/compressor/Oil-Scraper-Packing_3.jpg", alt: "Oil Scraper Packing" },
  { src: "/images/products/compressor/Packing-Cup&Packing-Ring_1.jpg", alt: "Packing Cup & Packing Ring" },
  { src: "/images/products/compressor/piston_1.jpg", alt: "Piston 1" },
  { src: "/images/products/compressor/piston_2.jpg", alt: "Piston 2" },
  { src: "/images/products/compressor/Piston-ring_2.jpg", alt: "Piston Ring" },
  { src: "/images/products/compressor/piston-rod_1.jpg", alt: "Piston Rod 1" },
  { src: "/images/products/compressor/piston-rod_2.jpg", alt: "Piston Rod 2" },
  { src: "/images/products/compressor/radial fans.jpg", alt: "Radial Fans" },
  { src: "/images/products/compressor/Rider-ring_2.jpg", alt: "Rider Ring" },
  { src: "/images/products/compressor/Valve-Assy&Internal-Parts_1.jpg", alt: "Valve Assembly & Internal Parts" },
];

// 서브 네비게이션 정의
const subNavItems = [
  { id: "new", label: "NEW COMPRESSOR" },
  { id: "spares", label: "SPARE PARTS" },
  { id: "troubleshooting", label: "TROUBLE SHOOTING" },
  { id: "maintenance", label: "MAINTENANCE & REPAIR" },
];

// SPARE PARTS 카테고리
const sparePartsCategories = [
  {
    name: "Cylinder Liner",
    description: "피스톤 왕복 운동을 위한 교체 가능 슬리브",
    partner: "WTQ",
    image: "/images/products/compressor/cylinder-liner_2.jpg",
  },
  {
    name: "Piston",
    description: "실린더 내 왕복 운동으로 가스 압축",
    partner: "Castanet SA",
    image: "/images/products/compressor/piston_1.jpg",
  },
  {
    name: "Piston Rod",
    description: "피스톤과 크랭크샤프트 연결 부품",
    partner: "Castanet SA",
    image: "/images/products/compressor/piston-rod_1.jpg",
  },
  {
    name: "Crosshead",
    description: "피스톤 왕복 운동 안정화 지지 부품",
    partner: "-",
    image: "/images/products/compressor/crosshead.png",
  },
  {
    name: "Piston Ring & Rider Ring",
    description: "기밀 유지 및 마찰 저감 소모품",
    partner: "-",
    image: "/images/products/compressor/Piston-ring_2.jpg",
  },
  {
    name: "Packing & Oil Scraper",
    description: "고압 밀봉 및 오일 누출 방지",
    partner: "-",
    image: "/images/products/compressor/Packing-Cup&Packing-Ring_1.jpg",
  },
  {
    name: "Valve Assembly",
    description: "가스 흐름 방향 제어 (흡기/배출)",
    partner: "KB Delta",
    image: "/images/products/compressor/Valve-Assy&Internal-Parts_1.jpg",
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

  // SPARE PARTS 캐러셀 상태
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalCards = sparePartsCategories.length; // 7개

  // 자동 슬라이드 (3초 간격, 1개씩 이동)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalCards);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalCards]);

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

      {/* Section 1: NEW COMPRESSOR - 네이비 배경 */}
      <section id="new" className="py-16 md:py-24 bg-[#0A1628]">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              NEW COMPRESSOR
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* 왼쪽: 파트너 정보 */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-6 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    FIMA
                  </h3>
                  {/* FIMA 로고 이미지 박스 */}
                  <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                    <Image
                      src="/images/partners/fima.jpg"
                      alt="FIMA Logo"
                      width={80}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-[#3B82F6] font-medium">Germany</p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  독일 FIMA Maschinenbau GmbH의 국내대리점으로써 정유, 석유화학, 에너지 외 특수 산업 분야의 Process Application에 최적화 된 Turbo Blower 및 Compressor(Interally Geared Technology)를 공급하고 있습니다.
                </p>
              </div>

              {/* 제품군 - 인포그래픽 스타일 */}
              <div className="space-y-3 flex-1 flex flex-col justify-end">
                {fimaProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-white/5 pl-4 py-3 pr-4"
                  >
                    <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-white font-medium">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: FIMA Turbo Compressor 이미지 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/compressor/Turbo Compressor.jpg"
                alt="FIMA Turbo Compressor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: SPARE PARTS - 흰색 배경 (반전) */}
      <section id="spares" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
              RECIPROCATING COMPRESSOR SPARE PARTS SOLUTION
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            <p className="text-slate-600 mt-4 max-w-2xl">
              네덜란드 왕복동압축기 제작사의 국내대리점으로써의 30년 경험을 바탕으로 왕복동압축기의 Technical Background 및 Know how를 가지로 모든 제작사의 왕복동압축기에 대한 CAPITAL PARTS 및 CONSUMABLE PARTS에 대한 부품을 공급하고 있습니다.
            </p>
          </div>

          {/* 부품 캐러셀 */}
          <div className="relative">
            {/* 왼쪽 화살표 */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + totalCards) % totalCards)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-[#0A1628] text-white flex items-center justify-center hover:bg-[#3B82F6] transition-colors shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 캐러셀 컨테이너 */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 4)}%)` }}
              >
                {/* 무한 루프를 위해 카드 배열을 2번 반복 */}
                {[...sparePartsCategories, ...sparePartsCategories].map((part, idx) => (
                  <div
                    key={idx}
                    className="w-1/4 flex-shrink-0 px-2"
                  >
                    <div className="group relative rounded-xl overflow-hidden bg-[#0A1628] border border-[#0A1628]/20 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all">
                      <div className="aspect-square relative bg-white">
                        <Image
                          src={part.image}
                          alt={part.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          sizes="25vw"
                        />
                      </div>
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
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽 화살표 */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalCards)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-[#0A1628] text-white flex items-center justify-center hover:bg-[#3B82F6] transition-colors shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 인디케이터 dots - 7개 */}
          <div className="flex justify-center gap-2 mt-6">
            {sparePartsCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === idx ? 'bg-[#EF4444]' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: TROUBLE SHOOTING - 네이비 배경 (반전) */}
      <section id="troubleshooting" className="py-16 md:py-24 bg-[#0A1628]">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">03</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              TROUBLE SHOOTING
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            <p className="text-slate-300 mt-4 max-w-2xl">
              TURBO COMPRESSOR 및 왕복 압축기 부품 TROUBLE 발생 시 GLOBAL OEM 및 SUB-SUPPLIER, 그리고 국내 SERVICE NET WORK을 통한 <span className="text-[#EF4444] font-semibold">최적화 된 SOLUTION</span>을 제안하고 있습니다.
            </p>
          </div>

          {/* 문제 유형 - 2컬럼 레이아웃 (리스트 + 이미지) */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 왼쪽: 문제 유형 리스트 */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "진동 및 소음 문제", desc: "베어링 마모, 정렬 불량, 임펠러 손상 등 진단" },
                { title: "온도 이상", desc: "냉각 시스템, 윤활유, 씰 상태 점검" },
                { title: "압력 불균형", desc: "밸브 누설, 씰링 불량, 가스켓 손상 확인" },
                { title: "효율 저하", desc: "내부 마모, 밸브 타이밍, 제어 시스템 최적화" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 p-6 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-colors"
                >
                  <span className="text-4xl font-bold text-white/20">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 오른쪽: Trouble Shooting 이미지 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/compressor/radial fans.jpg"
                alt="Trouble Shooting Service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: M&R (Maintenance & Repair) - 흰색 배경 (반전) */}
      <section id="maintenance" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          {/* 섹션 헤더 */}
          <div className="mb-12">
            <span className="text-[#EF4444] font-bold text-sm tracking-wider">04</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
              MAINTENANCE & REPAIR (유지보수 & 정비)
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            <p className="text-slate-600 mt-4 max-w-2xl">
              현지 정비업체와의 SERVICE PARTNERSHIP을 통하여 신규 기계 설치 공사 및 회전기계정비작업과 부품수리에 대한 <span className="text-[#0A1628] font-semibold">SOLUTION</span>을 제공하고 있습니다.
            </p>
          </div>

          {/* 서비스 그리드 - 가로 레이아웃 카드 (Navy 배경 유지) */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "정기 점검", desc: "계획된 예방 정비 프로그램", image: "/images/services/compressor-mr/01-inspection.jpg" },
              { title: "긴급 수리", desc: "24시간 긴급 대응 체계", image: "/images/services/compressor-mr/02-emergency-repair.png" },
              { title: "오버홀", desc: "분해 점검 및 전면 정비", image: "/images/services/compressor-mr/03-overhaul.jpg" },
              { title: "부품 교체", desc: "순정 부품 공급 및 설치", image: "/images/services/compressor-mr/04-parts-replacement.jpg" },
              { title: "성능 진단", desc: "효율 측정 및 최적화 제안", image: "/images/services/compressor-mr/05-diagnosis.jpg" },
              { title: "기술 교육", desc: "운전자 대상 교육 프로그램", image: "/images/services/compressor-mr/06-training.jpg" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex rounded-xl overflow-hidden bg-[#0A1628] border border-[#0A1628]/20 hover:shadow-lg hover:border-[#3B82F6]/50 transition-all min-h-[160px]"
              >
                {/* 텍스트 영역 (좌측 50%) */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                  <span className="text-3xl font-bold text-white/10">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-semibold text-white text-lg mt-2">{service.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                </div>
                {/* 이미지 영역 (우측 50%, 패딩 없음) */}
                <div className="w-1/2 relative flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
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
