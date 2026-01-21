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
  Zap,
  Shield,
  Award,
  FileCheck,
  ArrowRight,
  Settings,
  Building2,
} from "lucide-react";

// 대표 이미지
const heroImages = [
  { src: "/images/products/motor/motor_2.png", alt: "Motor 1" },
  { src: "/images/products/motor/motor_3.webp", alt: "Motor 2" },
];

// 탭 정의
const tabs = [
  { id: "spares", label: "MOTOR SPARE PARTS" },
  { id: "certification", label: "방폭인증서비스" },
];

// 파트너사
const partners = [
  { name: "LDW", country: "독일", desc: "모터 부품 전문 제조사" },
  { name: "NIDEC (舊 Ansaldo)", country: "이탈리아", desc: "고효율 모터 제조 전문" },
];

// 방폭 인증 기관
const certificationAgencies = [
  {
    code: "KOSHA",
    name: "한국산업안전보건공단",
    desc: "산업안전 및 방폭 인증 총괄 기관",
    color: "#1E40AF",
  },
  {
    code: "KTL",
    name: "한국산업기술시험원",
    desc: "산업기술 시험 및 인증 전문 기관",
    color: "#059669",
  },
  {
    code: "KGS",
    name: "한국가스안전공사",
    desc: "가스 관련 방폭 설비 인증 기관",
    color: "#DC2626",
  },
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
  const [activeTab, setActiveTab] = useState("spares");

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
              { label: "MOTOR" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            MOTOR
          </h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
            모터 부품 공급 및 방폭 인증 솔루션
          </p>
        </div>
      </section>

      {/* Product Intro */}
      <ProductIntro
        title="모터 전문 솔루션"
        description="정유, 석유화학에 30년의 왕복동압축기 공급 실적으로 현장에 설치된 외산 모터에 대한 부품 공급 및 방폭 인증(KOSHA/KGS/KTL)에 대한 SOLUTION을 제공하고 있습니다."
        images={heroImages}
        partners={[
          { name: "LDW", country: "독일" },
          { name: "NIDEC", country: "이탈리아" },
        ]}
        highlights={[
          "외산 모터 정품 부품 공급",
          "방폭 인증 컨설팅 및 대행",
          "30년 축적된 기술력",
          "KOSHA/KGS/KTL 대응",
        ]}
      />

      {/* Tabs Section */}
      <section className="border-t border-slate-200">
        <div className="section-container">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* MOTOR SPARE PARTS 탭 */}
          {activeTab === "spares" && (
            <TabPanel>
              <div className="space-y-8">
                {/* 서비스 특징 */}
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: Zap, title: "고효율 모터 부품", desc: "독일 LDW, 이탈리아 NIDEC 정품 부품" },
                    { icon: Shield, title: "30년 공급 실적", desc: "정유·석유화학 현장 외산 모터 전문" },
                    { icon: Award, title: "기술 지원", desc: "부품 선정부터 설치까지 지원" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-slate-200 hover:border-[#3B82F6]/50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-[#3B82F6]" />
                      </div>
                      <h4 className="font-semibold text-[#0A1628] mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* 파트너사 */}
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-bold text-[#0A1628] mb-6 text-center">
                    글로벌 파트너십
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {partners.map((partner, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-xl">
                        <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-7 h-7 text-slate-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0A1628]">{partner.name}</h4>
                          <p className="text-sm text-[#3B82F6] mb-1">{partner.country}</p>
                          <p className="text-sm text-slate-600">{partner.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
          )}

          {/* 방폭인증서비스 탭 */}
          {activeTab === "certification" && (
            <TabPanel>
              <div className="space-y-10">
                {/* 인증 기관 */}
                <div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-6 text-center">
                    방폭 인증 기관
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {certificationAgencies.map((agency, idx) => (
                      <div
                        key={idx}
                        className="relative p-6 bg-white rounded-2xl border border-slate-200 overflow-hidden"
                      >
                        <div
                          className="absolute top-0 left-0 right-0 h-1"
                          style={{ backgroundColor: agency.color }}
                        />
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                          style={{ backgroundColor: `${agency.color}15` }}
                        >
                          <span
                            className="text-lg font-bold"
                            style={{ color: agency.color }}
                          >
                            {agency.code.charAt(0)}
                          </span>
                        </div>
                        <h4
                          className="text-xl font-bold text-center mb-2"
                          style={{ color: agency.color }}
                        >
                          {agency.code}
                        </h4>
                        <p className="text-sm text-[#0A1628] font-medium text-center mb-1">
                          {agency.name}
                        </p>
                        <p className="text-sm text-slate-500 text-center">
                          {agency.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 인증 프로세스 */}
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-bold text-[#0A1628] mb-8 text-center">
                    인증 진행 프로세스
                  </h3>
                  <div className="relative">
                    {/* 연결선 */}
                    <div className="hidden md:block absolute top-8 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-slate-300" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {certificationProcess.map((item, idx) => (
                        <div key={idx} className="text-center">
                          <div className="relative z-10 w-16 h-16 bg-[#0A1628] rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold text-white">
                              {item.step}
                            </span>
                          </div>
                          <h4 className="font-semibold text-[#0A1628] mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 안내 박스 */}
                <div className="p-6 bg-blue-50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <FileCheck className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0A1628] mb-2">
                        전문 인증 지원 서비스
                      </h4>
                      <p className="text-sm text-slate-600">
                        라온토탈솔루션은 방폭 인증에 필요한 모든 과정을 지원합니다.
                        기존 장비의 인증 갱신, 신규 장비 인증 취득, 해외 인증 국내 전환까지
                        전문 엔지니어가 함께합니다.
                      </p>
                    </div>
                  </div>
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
            모터 부품 및 인증 서비스 문의
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            외산 모터 부품 공급, 방폭 인증 관련 문의사항이 있으시면 연락해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              상담 문의하기
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
