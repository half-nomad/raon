"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Settings,
  Droplets,
  CircleDot,
  Wrench,
  Filter,
  Truck,
  Sparkles,
} from "lucide-react";
import { Tabs, TabPanel } from "@/components/ui/tabs";
import { ProductIntro } from "@/components/products/product-intro";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";

// 탭 정의
const tabs = [
  { id: "bearing", label: "BEARING SOLUTION" },
  { id: "lubrication", label: "LUBRICATION SOLUTION" },
];

// 대표 이미지
const heroImages = [
  { src: "/images/products/bearing/bearing_1.jpg", alt: "Tilting Pad Bearing" },
  { src: "/images/products/oil-purifier/oil-purifier_1.png", alt: "Oil Purifier" },
  { src: "/images/products/bearing/bearing_2.jpg", alt: "Combined Bearing" },
  { src: "/images/products/bearing/bearing_3.jpg", alt: "Bearing Assembly" },
];

// Bearing 제품군
const bearingProducts = [
  {
    name: "Tilting Pad Journal Bearing",
    description: "고속 회전 장비에 최적화된 틸팅 패드 저널 베어링",
    features: ["고속 회전 대응", "저진동 설계", "자동 조심 기능"],
  },
  {
    name: "Tilting Pad Thrust Bearing",
    description: "축방향 하중을 지지하는 틸팅 패드 스러스트 베어링",
    features: ["높은 하중 용량", "균일한 압력 분포", "긴 수명"],
  },
  {
    name: "Journal & Thrust Combined",
    description: "저널과 스러스트 기능을 통합한 복합 베어링",
    features: ["통합 설계", "공간 절약", "설치 용이"],
  },
  {
    name: "Vertical Guide & Thrust",
    description: "수직형 펌프 및 회전기계용 가이드 베어링",
    features: ["수직 축 지지", "정밀 정렬", "내마모성"],
  },
  {
    name: "Fixed Profile Bearing",
    description: "안정적인 성능과 경제적인 유지보수 제공",
    features: ["안정적 성능", "경제적", "유지보수 용이"],
  },
  {
    name: "Repair / Retrofit / Replacement",
    description: "기존 베어링의 수리, 개조, 교체 서비스",
    features: ["현장 수리", "성능 개선", "비용 절감"],
  },
];

// Lubrication 제품군
const lubricationProducts = [
  {
    name: "Oil Purifier",
    description: "오염된 오일에서 수분, 가스, 미립자를 제거하여 오일 수명 연장",
    icon: Filter,
    features: ["수분 제거", "미립자 여과", "가스 제거"],
  },
  {
    name: "Oil Purifier Rental Service",
    description: "단기 프로젝트나 정비 기간 동안 장비 임대 서비스",
    icon: Truck,
    features: ["단기 임대", "장비 운송", "기술 지원"],
  },
  {
    name: "Oil Flushing Service",
    description: "배관 및 윤활 시스템의 오염물질 제거 전문 서비스",
    icon: Sparkles,
    features: ["배관 세척", "오염물 제거", "품질 검증"],
  },
];

export default function BearingLubricationPage() {
  const [activeTab, setActiveTab] = useState("bearing");

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
              { label: "BEARING & LUBRICATION" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            BEARING & LUBRICATION
          </h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
            회전기계의 핵심 부품인 베어링과 윤활 시스템 종합 솔루션
          </p>
        </div>
      </section>

      {/* Product Intro */}
      <ProductIntro
        title="베어링 & 윤활 솔루션"
        description="국내 BEARING 제작사 '터보링크'와 윤활 정제기 제작사 '삼영필텍'의 영업대리점으로써 BEARING과 LUBRICATION에 대한 SOLUTION을 제공하고 있습니다."
        images={heroImages}
        partners={[
          { name: "터보링크", country: "한국" },
          { name: "삼영필텍", country: "한국" },
        ]}
        highlights={[
          "Tilting Pad Bearing 전문",
          "Oil Purifier 및 Flushing",
          "국내 제작 빠른 납기",
          "맞춤 설계 지원",
        ]}
      />

      {/* Tabs Section */}
      <section className="border-t border-slate-200">
        <div className="section-container">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* BEARING SOLUTION 탭 */}
          {activeTab === "bearing" && (
            <TabPanel>
              <div className="space-y-8">
                {/* 파트너 소개 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A1628]">
                        터보링크 <span className="text-slate-400 font-normal text-base">Korea</span>
                      </h3>
                      <p className="text-slate-600 mt-2">
                        국내 Tilting Pad Bearing 전문 제작사로,
                        고속 회전기계용 베어링의 설계부터 제작까지 일괄 서비스를 제공합니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 제품군 그리드 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bearingProducts.map((product, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <CircleDot className="w-5 h-5 text-[#3B82F6]" />
                        <h4 className="font-semibold text-[#0A1628]">{product.name}</h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.features.map((f, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          )}

          {/* LUBRICATION SOLUTION 탭 */}
          {activeTab === "lubrication" && (
            <TabPanel>
              <div className="space-y-8">
                {/* 파트너 소개 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A1628]">
                        삼영필텍 <span className="text-slate-400 font-normal text-base">Korea</span>
                      </h3>
                      <p className="text-slate-600 mt-2">
                        Oil Purifier 및 Flushing Service 전문 기업으로,
                        윤활유 정제 및 시스템 세척 서비스를 제공합니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 서비스 그리드 */}
                <div className="grid md:grid-cols-3 gap-6">
                  {lubricationProducts.map((product, idx) => {
                    const Icon = product.icon;
                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-xl border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-md transition-all text-center"
                      >
                        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-[#3B82F6]" />
                        </div>
                        <h4 className="font-semibold text-[#0A1628] mb-2">{product.name}</h4>
                        <p className="text-sm text-slate-600 mb-4">{product.description}</p>
                        <div className="flex flex-wrap justify-center gap-1.5">
                          {product.features.map((f, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
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
            베어링 및 윤활 솔루션이 필요하신가요?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            국내 전문 제작사와의 협력으로 빠른 납기와 맞춤 설계를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              문의하기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              제품 더보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
