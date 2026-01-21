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
  Droplets,
  Shield,
  Zap,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Wrench,
} from "lucide-react";

// 대표 이미지
const heroImages = [
  { src: "/images/products/pump/pump_2-1.PNG", alt: "CP Pump MKP" },
  { src: "/images/products/pump/pump_2-2.PNG", alt: "CP Pump MKPL" },
  { src: "/images/products/pump/pump_3.png", alt: "CP Pump System" },
];

// 탭 정의
const tabs = [
  { id: "solution", label: "PUMP SOLUTION" },
  { id: "troubleshooting", label: "TROUBLE SHOOTING" },
];

// Magnetic Driven Pump (Sealless)
const magneticPumps = [
  { model: "MKP", desc: "Metal(SS, Hastelloy) Chemical Process Pump" },
  { model: "MKPL", desc: "PFA Lined Chemical Process Pump" },
  { model: "MKP-Bio", desc: "Stainless Steel Biotech Process Pump" },
  { model: "MSKS", desc: "Self Priming Solid PTFE Chemical Process Pump" },
  { model: "MSKP", desc: "Solid PTFE Chemical Process Pump" },
  { model: "MSKPP", desc: "Solid PTFE Chemical Process Peripheral Pump" },
];

// Double Mechanical Seal Pump
const mechanicalPumps = [
  { model: "ZMP", desc: "Stainless Steel Chemical Process Crushing Pump" },
  { model: "ET", desc: "Ceramic-Lined Chemical Process Pump" },
  { model: "EB", desc: "PFA-Lined Chemical Process Pump" },
];

export default function PumpPage() {
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
              { label: "PUMP" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            PUMP
          </h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
            Magnetic Driven (Sealless) Pump 전문 솔루션
          </p>
        </div>
      </section>

      {/* Product Intro */}
      <ProductIntro
        title="펌프 전문 솔루션"
        description="스위스에 소재한 CP Pump의 국내대리점으로써 Magnetic Driven(Sealless) Pump 전문 업체로 Metal 및 PFA Lined PUMP SOLUTION을 제공하고 있습니다."
        images={heroImages}
        partners={[{ name: "CP Pump", country: "스위스" }]}
        highlights={[
          "Magnetic Driven (Sealless) 전문",
          "Metal & PFA Lined 제품군",
          "이물질 30% 함유 유체 이송 가능",
          "50년+ 스위스 기술력",
        ]}
      />

      {/* Tabs Section */}
      <section className="border-t border-slate-200">
        <div className="section-container">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* PUMP SOLUTION 탭 */}
          {activeTab === "solution" && (
            <TabPanel>
              <div className="space-y-10">
                {/* 특허 기술 */}
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1628] mb-2">
                        특허 기술
                      </h3>
                      <p className="text-slate-600">
                        이물질(1mm 이내) 함유량 <strong className="text-[#3B82F6]">30%까지</strong> Magnetic Driven Pump로 이송 가능
                      </p>
                    </div>
                  </div>
                </div>

                {/* Magnetic Driven Pump */}
                <div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-[#3B82F6]" />
                    Magnetic Driven Pump (Sealless)
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {magneticPumps.map((pump, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-slate-200 hover:border-[#3B82F6]/50 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-[#3B82F6] text-white text-xs font-bold rounded">
                            {pump.model}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{pump.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Double Mechanical Seal Pump */}
                <div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#3B82F6]" />
                    Double Mechanical Seal Pump
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {mechanicalPumps.map((pump, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-slate-200 hover:border-[#3B82F6]/50 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-slate-700 text-white text-xs font-bold rounded">
                            {pump.model}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{pump.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 핵심 장점 */}
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: Shield, title: "완전 밀폐", desc: "Sealless 설계로 누설 제로" },
                    { icon: Droplets, title: "내화학성", desc: "부식성 유체 안전 이송" },
                    { icon: Zap, title: "고효율", desc: "에너지 비용 절감" },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center p-6 rounded-xl border border-slate-200">
                      <item.icon className="w-8 h-8 text-[#3B82F6] mx-auto mb-3" />
                      <h4 className="font-semibold text-[#0A1628]">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
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
                      펌프 문제해결 솔루션
                    </h3>
                    <p className="text-slate-600 mt-2">
                      기존 펌프의 일반적인 문제들과 CP Pump 솔루션을 확인하세요.
                    </p>
                  </div>
                </div>

                {/* 문제-해결 카드 */}
                <div className="space-y-4">
                  {[
                    {
                      problem: "펌프 누설",
                      causes: "씰 마모, 개스킷 손상, 케이싱 균열",
                      solution: "Magnetic Drive 방식으로 완전 밀폐, 누설 원천 차단",
                    },
                    {
                      problem: "과도한 진동/소음",
                      causes: "캐비테이션, 베어링 마모, 임펠러 불균형",
                      solution: "정밀 밸런싱 임펠러와 고품질 베어링으로 진동 최소화",
                    },
                    {
                      problem: "유량/압력 저하",
                      causes: "임펠러 마모, 배관 막힘, 에어 유입",
                      solution: "내마모성 소재와 최적화된 임펠러 설계로 성능 유지",
                    },
                    {
                      problem: "잦은 유지보수",
                      causes: "씰 교체, 베어링 교체, 부품 마모",
                      solution: "Sealless 설계로 씰 관련 유지보수 불필요, TCO 절감",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#0A1628] mb-2">{item.problem}</h4>
                          <p className="text-sm text-slate-500 mb-3">
                            <span className="text-red-500">원인:</span> {item.causes}
                          </p>
                          <div className="flex items-start gap-2 p-3 bg-emerald-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-emerald-800">{item.solution}</p>
                          </div>
                        </div>
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
            펌프 솔루션이 필요하신가요?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            30년 이상의 경험을 바탕으로 최적의 펌프 솔루션을 제안해 드립니다.
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
