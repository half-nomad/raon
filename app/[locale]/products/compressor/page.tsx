import Link from "next/link";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ImageGallery } from "@/components/ui/image-gallery";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: 'Compressor & Spare Parts | 왕복동 압축기 전문',
  description: '왕복동, 로터리 스크류, 원심식 등 다양한 산업용 압축기와 핵심 부품 일체 공급. Cylinder Liner, Piston, Valve, Piston Rod 등 소모성 부품 전문. WTQ, Castanet, KB Delta 파트너십.',
  keywords: ['Compressor', '압축기 부품', '왕복동 압축기', 'Cylinder Liner', 'Piston', 'Valve', 'WTQ', 'Castanet', 'KB Delta'],
  openGraph: {
    title: 'Compressor & Spare Parts | 라온토탈솔루션',
    description: '왕복동, 로터리 스크류, 원심식 등 다양한 산업용 압축기와 핵심 부품 일체 공급',
    images: ['/images/og/compressor-og.jpg'],
  },
};

// 이미지 데이터 정의
const cylinderLinerImages = [
  { src: "/images/products/compressor-parts/cylinder-liner_1.jpg", alt: "Cylinder Liner - 실린더 라이너 1" },
  { src: "/images/products/compressor-parts/cylinder-liner_2.jpg", alt: "Cylinder Liner - 실린더 라이너 2" },
];

const pistonImages = [
  { src: "/images/products/compressor-parts/piston_1.jpg", alt: "Piston - 피스톤 1" },
  { src: "/images/products/compressor-parts/piston_2.jpg", alt: "Piston - 피스톤 2" },
  { src: "/images/products/compressor-parts/piston_3.jpg", alt: "Piston - 피스톤 3" },
  { src: "/images/products/compressor-parts/piston_4.jpg", alt: "Piston - 피스톤 4" },
];

const pistonRodImages = [
  { src: "/images/products/compressor-parts/piston-rod_1.jpg", alt: "Piston Rod - 피스톤 로드 1" },
  { src: "/images/products/compressor-parts/piston-rod_2.jpg", alt: "Piston Rod - 피스톤 로드 2" },
  { src: "/images/products/compressor-parts/piston-rod_3.jpg", alt: "Piston Rod - 피스톤 로드 3" },
  { src: "/images/products/compressor-parts/piston-rod_4.jpg", alt: "Piston Rod - 피스톤 로드 4" },
  { src: "/images/products/compressor-parts/piston-rod_5.jpg", alt: "Piston Rod - 피스톤 로드 5" },
];

const crossheadImages = [
  { src: "/images/products/compressor-parts/Crosshead_1.jpg", alt: "Crosshead - 크로스헤드 1" },
  { src: "/images/products/compressor-parts/Crosshead_2.jpg", alt: "Crosshead - 크로스헤드 2" },
  { src: "/images/products/compressor-parts/Crosshead_3.jpg", alt: "Crosshead - 크로스헤드 3" },
  { src: "/images/products/compressor-parts/Crosshead_4.jpg", alt: "Crosshead - 크로스헤드 4" },
];

const pistonRingImages = [
  { src: "/images/products/compressor-parts/Piston-ring_1.jpg", alt: "Piston Ring - 피스톤 링 1" },
  { src: "/images/products/compressor-parts/Piston-ring_2.jpg", alt: "Piston Ring - 피스톤 링 2" },
];

const riderRingImages = [
  { src: "/images/products/compressor-parts/Rider-ring_1.jpg", alt: "Rider Ring - 라이더 링 1" },
  { src: "/images/products/compressor-parts/Rider-ring_2.jpg", alt: "Rider Ring - 라이더 링 2" },
  { src: "/images/products/compressor-parts/Rider-ring_3.jpg", alt: "Rider Ring - 라이더 링 3" },
];

const packingCupImages = [
  { src: "/images/products/compressor-parts/Packing-Cup&Packing-Ring_1.jpg", alt: "Packing Cup & Ring 1" },
  { src: "/images/products/compressor-parts/Packing-Cup&Packing-Ring_2.jpg", alt: "Packing Cup & Ring 2" },
  { src: "/images/products/compressor-parts/Packing-Cup&Packing-Ring_3.jpg", alt: "Packing Cup & Ring 3" },
  { src: "/images/products/compressor-parts/Packing-Cup&Packing-Ring_4.jpg", alt: "Packing Cup & Ring 4" },
];

const oilScraperImages = [
  { src: "/images/products/compressor-parts/Oil-Scraper-Packing_1.jpg", alt: "Oil Scraper Packing 1" },
  { src: "/images/products/compressor-parts/Oil-Scraper-Packing_2.jpg", alt: "Oil Scraper Packing 2" },
  { src: "/images/products/compressor-parts/Oil-Scraper-Packing_3.jpg", alt: "Oil Scraper Packing 3" },
  { src: "/images/products/compressor-parts/Oil-Scraper-Packing_4.jpg", alt: "Oil Scraper Packing 4" },
];

const valveImages = [
  { src: "/images/products/compressor-parts/Valve-Assy&Internal-Parts_1.jpg", alt: "Valve Assembly 1" },
  { src: "/images/products/compressor-parts/Valve-Assy&Internal-Parts_2.png", alt: "Valve Assembly 2" },
  { src: "/images/products/compressor-parts/Valve-Assy&Internal-Parts_3.png", alt: "Valve Assembly 3" },
  { src: "/images/products/compressor-parts/Valve-Repair-Kits_1.PNG", alt: "Valve Repair Kit" },
  { src: "/images/products/compressor-parts/spring_1.PNG", alt: "Valve Spring" },
];

export default async function CompressorPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Compressor & Spare Parts (왕복동 압축기 부품)"
        description="왕복동, 로터리 스크류, 원심식 등 다양한 산업용 압축기와 핵심 부품 일체. Cylinder Liner, Piston, Valve, Piston Rod 등 소모성 부품 전문 공급."
        category="압축기 부품"
        manufacturers={[
          { name: 'WTQ' },
          { name: 'Castanet SA' },
          { name: 'KB Delta' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Compressor', url: '/products/compressor' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl">
            <BackButton href="/products" variant="dark" />

            <Breadcrumb variant="dark" items={[
              { label: "HOME", href: "/" },
              { label: "PRODUCTS", href: "/products" },
              { label: "Compressor" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              WTQ · Castanet SA · KB Delta
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Compressor & Spare parts
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
              {t("products.compressor.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Products Accordion */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <Accordion
            type="single"
            collapsible
            className="space-y-4 md:space-y-6"
            defaultValue="cylinder-liner"
          >
            {/* 1. Cylinder liner */}
            <AccordionItem
              value="cylinder-liner"
              className="border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden px-4 md:px-6"
            >
              <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A1628] hover:no-underline py-4 md:py-6">
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span>Cylinder liner</span>
                    <span className="text-xs md:text-sm font-normal text-slate-500 bg-slate-100 px-2 md:px-3 py-1 rounded-full">
                      WTQ
                    </span>
                  </div>
                  <p className="text-sm md:text-base font-normal text-slate-600">
                    피스톤의 왕복 운동을 위한 매끄러운 내벽을 제공하는 교체 가능한 슬리브
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-4">
                  <ImageGallery images={cylinderLinerImages} />
                  <div>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">주요 특징</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>교체 가능한 슬리브:</strong> 피스톤의 왕복 운동을 위한 매끄러운 내벽 제공</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>마모 부품 보호:</strong> 실린더 본체를 마모로부터 보호하고 수명 연장</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>고내구성 소재:</strong> 고압·고온 환경에서도 안정적인 성능 유지</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">적용 분야</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>정유·석유화학 플랜트 왕복동 압축기</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>가스 처리 시설</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>선박용 엔진 (직경 480~1500mm)</span>
                      </li>
                    </ul>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <p className="text-sm text-slate-600">
                        <strong className="text-[#0A1628]">파트너 브랜드:</strong> WTQ (Yangzhou Wuting Qiao Cylinder Liner Co., Ltd.)
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 2. Piston */}
            <AccordionItem
              value="piston"
              className="border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden px-4 md:px-6"
            >
              <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A1628] hover:no-underline py-4 md:py-6">
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span>Piston</span>
                    <span className="text-xs md:text-sm font-normal text-slate-500 bg-slate-100 px-2 md:px-3 py-1 rounded-full">
                      Castanet SA
                    </span>
                  </div>
                  <p className="text-sm md:text-base font-normal text-slate-600">
                    실린더 안에서 왕복 운동을 하며 기체의 부피를 줄이고 압력을 높이는 역할
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-4">
                  <ImageGallery images={pistonImages} />
                  <div>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">주요 특징</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>왕복 운동 핵심 부품:</strong> 실린더 내에서 왕복 운동을 통해 기체 압축</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>고정밀 가공:</strong> 실린더 라이너와의 완벽한 밀착을 위한 정밀 설계</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>내열·내마모성:</strong> 고온·고압 환경에서 장기간 사용 가능</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">적용 분야</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>왕복동 압축기 (Reciprocating Compressor)</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>고압 가스 압축 시스템</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>산업용 엔진</span>
                      </li>
                    </ul>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <p className="text-sm text-slate-600">
                        <strong className="text-[#0A1628]">파트너 브랜드:</strong> Castanet SA (France)
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 3. Piston Rod */}
            <AccordionItem
              value="piston-rod"
              className="border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden px-4 md:px-6"
            >
              <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A1628] hover:no-underline py-4 md:py-6">
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span>Piston Rod</span>
                    <span className="text-xs md:text-sm font-normal text-slate-500 bg-slate-100 px-2 md:px-3 py-1 rounded-full">
                      Castanet SA
                    </span>
                  </div>
                  <p className="text-sm md:text-base font-normal text-slate-600">
                    피스톤과 크랭크샤프트를 연결하는 막대 모양의 부품
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-4">
                  <ImageGallery images={pistonRodImages} />
                  <div>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">주요 특징</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>연결 부품:</strong> 피스톤과 크랭크샤프트를 연결하여 동력 전달</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>고강도 소재:</strong> 왕복 운동 시 발생하는 높은 응력 견딤</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>표면 처리:</strong> 부식 방지 및 마모 저항성 향상</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">적용 분야</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>대형 왕복동 압축기</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>고압 가스 처리 설비</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>정유·석유화학 플랜트</span>
                      </li>
                    </ul>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <p className="text-sm text-slate-600">
                        <strong className="text-[#0A1628]">파트너 브랜드:</strong> Castanet SA (France)
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 4. Crosshead */}
            <AccordionItem
              value="crosshead"
              className="border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden px-4 md:px-6"
            >
              <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A1628] hover:no-underline py-4 md:py-6">
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span>Crosshead</span>
                  </div>
                  <p className="text-sm md:text-base font-normal text-slate-600">
                    피스톤과 피스톤 로드 사이를 연결하여 왕복 운동을 안정적으로 지원하는 기계적 부품
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-4">
                  <ImageGallery images={crossheadImages} />
                  <div>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">주요 특징</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>안정적 왕복 운동:</strong> 피스톤과 피스톤 로드 사이의 연결 및 지지</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>측면 하중 분산:</strong> 왕복 운동 시 발생하는 측면 하중 효과적 분산</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>마모 방지:</strong> 피스톤과 실린더 라이너의 마모 최소화</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">적용 분야</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>대형 왕복동 압축기</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>선박용 엔진</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>고압 가스 압축 시스템</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 5. Consumable parts (Nested Accordion) */}
            <AccordionItem
              value="consumable"
              className="border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden px-4 md:px-6"
            >
              <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A1628] hover:no-underline py-4 md:py-6">
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span>Consumable parts</span>
                    <span className="text-xs md:text-sm font-normal text-slate-500 bg-slate-100 px-2 md:px-3 py-1 rounded-full">
                      소모품 부품
                    </span>
                  </div>
                  <p className="text-sm md:text-base font-normal text-slate-600">
                    왕복동 압축기의 정기 교체가 필요한 소모성 부품
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <Accordion type="single" collapsible className="space-y-4 pt-4">
                  {/* 5-1. Piston ring */}
                  <AccordionItem
                    value="piston-ring"
                    className="border border-slate-200 rounded-xl overflow-hidden px-4"
                  >
                    <AccordionTrigger className="text-base md:text-lg lg:text-xl font-semibold text-[#0A1628] hover:no-underline py-4">
                      Piston ring
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="grid md:grid-cols-2 gap-6 pt-2">
                        <ImageGallery images={pistonRingImages} />
                        <div className="space-y-4">
                          <p className="text-slate-700">
                            피스톤과 실린더 벽 사이의 기밀성을 유지하고 누출을 막는 역할을 합니다.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>기밀 유지:</strong> 피스톤과 실린더 벽 사이의 기밀성 확보</span>
                            </li>
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>가스 누출 방지:</strong> 압축 가스의 외부 누출 차단</span>
                            </li>
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>열 전달:</strong> 피스톤에서 실린더로 열 전달</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* 5-2. Rider ring */}
                  <AccordionItem
                    value="rider-ring"
                    className="border border-slate-200 rounded-xl overflow-hidden px-4"
                  >
                    <AccordionTrigger className="text-base md:text-lg lg:text-xl font-semibold text-[#0A1628] hover:no-underline py-4">
                      Rider ring
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="grid md:grid-cols-2 gap-6 pt-2">
                        <ImageGallery images={riderRingImages} />
                        <div className="space-y-4">
                          <p className="text-slate-700">
                            피스톤과 실린더 사이의 상단 부하를 지지하고 마찰을 줄이는 역할을 합니다.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>부하 지지:</strong> 피스톤의 상단 하중 분산</span>
                            </li>
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>마찰 저감:</strong> 피스톤과 실린더 벽 사이 마찰 최소화</span>
                            </li>
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>위치 유지:</strong> 피스톤의 중심 위치 안정화</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* 5-3. Packing Cup & Packing Ring */}
                  <AccordionItem
                    value="packing"
                    className="border border-slate-200 rounded-xl overflow-hidden px-4"
                  >
                    <AccordionTrigger className="text-base md:text-lg lg:text-xl font-semibold text-[#0A1628] hover:no-underline py-4">
                      Packing Cup & Packing Ring
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="grid md:grid-cols-2 gap-6 pt-2">
                        <ImageGallery images={packingCupImages} />
                        <div className="space-y-4">
                          <p className="text-slate-700">
                            실린더 내부의 고압 기체가 외부로 누출되지 않도록 밀봉 역할을 수행합니다.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>고압 밀봉:</strong> 실린더 내부 고압 기체 누출 방지</span>
                            </li>
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>내구성:</strong> 장기간 사용 시에도 밀봉 성능 유지</span>
                            </li>
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>교체 용이:</strong> 정기 점검 및 교체 간편</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* 5-4. Oil Scraper Packing */}
                  <AccordionItem
                    value="oil-scraper"
                    className="border border-slate-200 rounded-xl overflow-hidden px-4"
                  >
                    <AccordionTrigger className="text-base md:text-lg lg:text-xl font-semibold text-[#0A1628] hover:no-underline py-4">
                      Oil Scraper Packing
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="grid md:grid-cols-2 gap-6 pt-2">
                        <ImageGallery images={oilScraperImages} />
                        <div className="space-y-4">
                          <p className="text-slate-700">
                            피스톤 로드의 윤활유가 시스템으로 유입되지 않도록 닦아내는 역할을 합니다.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>오일 제거:</strong> 피스톤 로드의 과도한 윤활유 제거</span>
                            </li>
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>오염 방지:</strong> 압축 가스의 오일 오염 차단</span>
                            </li>
                            <li className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span><strong>시스템 보호:</strong> 하류 시스템의 오일 유입 방지</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* 6. Valve Assy & Internal Parts */}
            <AccordionItem
              value="valve"
              className="border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden px-4 md:px-6"
            >
              <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A1628] hover:no-underline py-4 md:py-6">
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span>Valve Assy & Internal Parts</span>
                    <span className="text-xs md:text-sm font-normal text-slate-500 bg-slate-100 px-2 md:px-3 py-1 rounded-full">
                      KB Delta
                    </span>
                  </div>
                  <p className="text-sm md:text-base font-normal text-slate-600">
                    공기나 가스가 필요한 방향으로만 이동하도록 조절 (흡기/배출 밸브)
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-4">
                  <ImageGallery images={valveImages} />
                  <div>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">주요 특징</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>흡기/배출 제어:</strong> 가스 흐름 방향 정밀 제어</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>고압 대응:</strong> 고압 환경에서도 안정적인 작동</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span><strong>내구성:</strong> 장기간 반복 작동에도 성능 유지</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">구성 부품</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>Suction Valve (흡기 밸브)</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>Discharge Valve (배출 밸브)</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>Valve Spring & Seat</span>
                      </li>
                      <li className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>Valve Repair Kits</span>
                      </li>
                    </ul>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <p className="text-sm text-slate-600">
                        <strong className="text-[#0A1628]">파트너 브랜드:</strong> KB Delta (USA)
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t("products.compressor.cta.title")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t("products.compressor.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors text-sm md:text-base"
            >
              {t("products.compressor.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              {t("products.compressor.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
