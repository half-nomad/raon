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
  Beaker,
  Factory,
  Droplets,
  FlaskConical,
  Pill,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// 대표 이미지
const heroImages = [
  { src: "/images/products/mixer/Mixer & Agitator_1.jpg", alt: "Mixer 1" },
  { src: "/images/products/mixer/Mixer & Agitator_2.jpg", alt: "Mixer 2" },
  { src: "/images/products/mixer/Mixer & Agitator_3.jpg", alt: "Mixer 3" },
  { src: "/images/products/mixer/Mixer & Agitator_4.jpg", alt: "Mixer 4" },
];

// 탭 정의
const tabs = [
  { id: "solution", label: "Mixing Solution" },
  { id: "brands", label: "SPXFlow Mixer Brands" },
];

// Mixing Solution 분야
const mixingSolutions = [
  { icon: Beaker, title: "화학 공정", desc: "화학 반응, 용해, 분산 등 혼합 솔루션" },
  { icon: Droplets, title: "수처리/폐수처리", desc: "응집, 침전, 소독 등 수처리 믹서" },
  { icon: Factory, title: "석유화학", desc: "정유 및 석유화학 플랜트 혼합" },
  { icon: FlaskConical, title: "바이오/제약", desc: "무균 환경 정밀 혼합" },
  { icon: Pill, title: "식품/유제품", desc: "위생 설계 CIP 호환 믹서" },
];

// SPXFlow 5개 브랜드
const spxflowBrands = [
  {
    name: "LIGHTNIN",
    tagline: "첨단 기술 기반의 고효율 혼합 솔루션",
    desc: "산업용 믹서 분야의 글로벌 리더로, 100년 이상의 혁신 역사를 보유. 첨단 유체역학 기술을 기반으로 에너지 효율적인 혼합 솔루션을 제공합니다.",
    applications: ["폐수/수처리", "화학", "바이오 연료", "제약 공정"],
    features: ["독자적 기어박스와 임펠러 기술", "Anti-fouling 메커니즘", "전력 효율 극대화"],
  },
  {
    name: "PLENTY",
    tagline: "70년 전통의 유체 역학 전문가",
    desc: "Side-Entry 믹서를 전문으로 제조해온 브랜드입니다. 탱크를 비우지 않고도 유지보수가 가능한 혁신적인 설계로 정유 및 석유화학 산업에서 높은 신뢰를 받고 있습니다.",
    applications: ["저장 탱크 혼합/균질화", "슬러지 침전 방지", "원유 블렌딩"],
    features: ["Fixed/Swivel Side-Entry 설계", "탱크 미배출 수리 가능", "낮은 유지보수 비용"],
  },
  {
    name: "PHILADELPHIA",
    tagline: "혁신적인 R&D와 고객 맞춤형 설계",
    desc: "2021년 SPX FLOW에 합류했으며, 65년 경력과 Philadelphia Gear Corporation 기술을 계승. 화학 공정 및 일반 산업 전반의 특수 혼합 공정을 담당합니다.",
    applications: ["화학 공정", "일반 산업", "특수 혼합 공정"],
    features: ["65년 경력", "전 세계 거점(미국, 영국, 인도)", "신속한 현장 지원"],
  },
  {
    name: "STELZER",
    tagline: "엄격한 위생과 정밀한 공정 노하우 (독일)",
    desc: "독일에서 제조되며 위생 설계(Hygienic Design)의 대명사입니다. 유제품, 제약, 식품 산업에서 요구하는 엄격한 위생 기준을 충족합니다.",
    applications: ["유제품 공정", "제약", "식품 제조", "고도의 세척/연마 공정"],
    features: ["DIN EN ISO 9001:2015 준수", "CFD 시뮬레이션 역량", "1946년부터 축적된 위생 설계 기술"],
  },
  {
    name: "UUTECHNIC",
    tagline: "특수 공정용 맞춤 솔루션",
    desc: "특수 공정에 최적화된 맞춤형 믹서 솔루션을 제공합니다. 고객의 특정 요구사항에 맞춘 엔지니어링 설계로 까다로운 혼합 과제를 해결합니다.",
    applications: ["특수 화학", "폴리머", "코팅/접착제", "배터리 소재"],
    features: ["맞춤형 설계", "고점도 대응", "파일럿 테스트 지원"],
  },
];

export default function MixerPage() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("solution");

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
              { label: "MIXER" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            MIXER
          </h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
            산업용 믹서 & 교반기 솔루션
          </p>
        </div>
      </section>

      {/* Product Intro */}
      <ProductIntro
        title="고객 맞춤형 MIXING SOLUTION"
        description="SPXFLOW의 국내 마스터 대리점으로써 현대 산업 전반에 걸쳐 중요한 제조 라인인 다양한 혼합 공정에 필요한 MIXER를 설계 제작하여 공급하고 있으며 생산성 향상, 에너지 절감 및 비용 절감을 위한 고객 맞춤형 MIXING SOLUTION을 제공하고 있습니다."
        images={heroImages}
        partners={[{ name: "SPXFLOW", country: "글로벌" }]}
        highlights={[
          "SPXFLOW 국내 마스터 대리점",
          "5개 글로벌 브랜드 공급",
          "생산성 향상 및 에너지 절감",
          "맞춤형 설계 지원",
        ]}
      />

      {/* Tabs Section */}
      <section className="border-t border-slate-200">
        <div className="section-container">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Mixing Solution 탭 */}
          {activeTab === "solution" && (
            <TabPanel>
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-2">
                    다양한 산업 분야의 혼합 솔루션
                  </h3>
                  <p className="text-slate-600">
                    각 산업의 특성에 맞는 최적의 믹서 솔루션을 제공합니다
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mixingSolutions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-[#3B82F6]" />
                      </div>
                      <h4 className="font-semibold text-[#0A1628] mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          )}

          {/* SPXFlow Mixer Brands 탭 */}
          {activeTab === "brands" && (
            <TabPanel>
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-2">
                    SPXFlow Mixer Brands
                  </h3>
                  <p className="text-slate-600">
                    세계적인 믹서 브랜드를 국내에 공급합니다
                  </p>
                </div>

                {spxflowBrands.map((brand, idx) => (
                  <div
                    key={idx}
                    className="p-6 md:p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    {/* 브랜드 헤더 */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">
                          {brand.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-[#0A1628]">
                          {brand.name}
                        </h4>
                        <p className="text-[#3B82F6] text-sm font-medium">
                          {brand.tagline}
                        </p>
                      </div>
                    </div>

                    {/* 설명 */}
                    <p className="text-slate-600 mb-6">{brand.desc}</p>

                    {/* 적용 분야 & 특징 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-sm font-semibold text-[#0A1628] mb-3 uppercase tracking-wider">
                          주요 적용 분야
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {brand.applications.map((app, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-md"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-[#0A1628] mb-3 uppercase tracking-wider">
                          주요 특징
                        </h5>
                        <ul className="space-y-1.5">
                          {brand.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <ChevronRight className="w-4 h-4 text-[#3B82F6]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16 mt-12">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            최적의 Mixing Solution이 필요하신가요?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            30년 이상의 경험을 바탕으로 고객의 공정에 최적화된 믹서 솔루션을 제안해 드립니다.
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
