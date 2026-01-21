"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Tabs, TabPanel } from "@/components/ui/tabs";
import { ProductIntro } from "@/components/products/product-intro";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import {
  Wrench,
  Settings,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  Factory,
  Gauge,
  Shield,
} from "lucide-react";

// 대표 이미지 (상단 갤러리용)
const heroImages = [
  { src: "/images/products/compressor-parts/Valve-Assy&Internal-Parts_1.jpg", alt: "Compressor Valve Assembly" },
  { src: "/images/products/compressor-parts/piston_1.jpg", alt: "Piston" },
  { src: "/images/products/compressor-parts/cylinder-liner_1.jpg", alt: "Cylinder Liner" },
  { src: "/images/products/compressor-parts/piston-rod_1.jpg", alt: "Piston Rod" },
  { src: "/images/products/compressor-parts/Crosshead_1.jpg", alt: "Crosshead" },
];

// 탭 정의
const tabs = [
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
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
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

      {/* Tabs Section */}
      <section className="border-t border-slate-200">
        <div className="section-container">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* NEW COMPRESSOR 탭 */}
          {activeTab === "new" && (
            <TabPanel>
              <div className="space-y-8">
                {/* FIMA 파트너 소개 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Factory className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A1628]">
                        FIMA <span className="text-slate-400 font-normal text-base">Germany</span>
                      </h3>
                      <p className="text-slate-600 mt-2">
                        독일 소재 Turbo Compressor 및 Blower 전문 제조사로,
                        고효율 원심 압축기 및 특수 목적 블로워를 공급합니다.
                      </p>
                    </div>
                  </div>

                  {/* 제품군 */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {fimaProducts.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-slate-200/80"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                        <span className="text-sm md:text-base text-slate-700 font-medium">
                          {product}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 핵심 특징 */}
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: Gauge, title: "고효율", desc: "최적화된 에너지 효율" },
                    { icon: Shield, title: "방폭 인증", desc: "위험지역 설치 가능" },
                    { icon: Settings, title: "맞춤 설계", desc: "공정 요구사항 맞춤" },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center p-6 rounded-xl border border-slate-200 hover:border-[#3B82F6]/30 transition-colors">
                      <item.icon className="w-8 h-8 text-[#3B82F6] mx-auto mb-3" />
                      <h4 className="font-semibold text-[#0A1628]">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          )}

          {/* SPARE PARTS 탭 */}
          {activeTab === "spares" && (
            <TabPanel>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sparePartsCategories.map((part, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl overflow-hidden border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                  >
                    {/* 이미지 */}
                    <div className="aspect-square relative bg-slate-100">
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
                        <h4 className="font-semibold text-[#0A1628]">{part.name}</h4>
                        {part.partner !== "-" && (
                          <span className="text-xs text-slate-400">{part.partner}</span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">{part.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          )}

          {/* TROUBLE SHOOTING 탭 */}
          {activeTab === "troubleshooting" && (
            <TabPanel>
              <div className="max-w-3xl">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0A1628]">
                      압축기 문제해결 솔루션
                    </h3>
                    <p className="text-slate-600 mt-2">
                      30년간 축적된 현장 경험을 바탕으로 압축기 운전 중 발생하는
                      다양한 문제에 대한 체계적인 진단 및 해결 방안을 제공합니다.
                    </p>
                  </div>
                </div>

                {/* 문제 유형 */}
                <div className="space-y-3">
                  {[
                    { title: "진동 및 소음 문제", desc: "베어링 마모, 정렬 불량, 임펠러 손상 등 진단" },
                    { title: "온도 이상", desc: "냉각 시스템, 윤활유, 씰 상태 점검" },
                    { title: "압력 불균형", desc: "밸브 누설, 씰링 불량, 가스켓 손상 확인" },
                    { title: "효율 저하", desc: "내부 마모, 밸브 타이밍, 제어 시스템 최적화" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center font-semibold text-sm">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-medium text-[#0A1628]">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          )}

          {/* M&R 탭 */}
          {activeTab === "maintenance" && (
            <TabPanel>
              <div className="max-w-3xl">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <RotateCcw className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0A1628]">
                      유지보수 & 정비 서비스
                    </h3>
                    <p className="text-slate-600 mt-2">
                      예방 정비부터 긴급 수리까지, 압축기 수명 연장과
                      안정적인 운전을 위한 종합 서비스를 제공합니다.
                    </p>
                  </div>
                </div>

                {/* 서비스 목록 */}
                <div className="grid sm:grid-cols-2 gap-4">
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
                      className="flex items-start gap-3 p-4 rounded-lg bg-slate-50"
                    >
                      <Wrench className="w-5 h-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-[#0A1628]">{service.title}</h4>
                        <p className="text-sm text-slate-500">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16 mt-12">
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
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
    </div>
  );
}
