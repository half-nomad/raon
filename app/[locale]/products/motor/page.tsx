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
import { Factory, Settings, Wind, Droplets, Tornado, Wrench } from "lucide-react";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: 'Motor & Electric Motor | 산업용 전동기',
  description: 'NIDEC 산업용 전동기 전문 공급. Inverter, Vector, Servo, Geared, Brake, Explosion-proof, High Efficiency, Special Purpose Motor 등 8개 제품군.',
  keywords: ['Motor', '전동기', 'NIDEC', 'Inverter Motor', 'Servo Motor', '산업용 모터'],
  openGraph: {
    title: 'Motor & Electric Motor | 라온토탈솔루션',
    description: 'NIDEC 산업용 전동기 전문 공급. 8개 제품군으로 다양한 산업 현장 대응',
    images: ['/images/og/motor-og.jpg'],
  },
};

// 이미지 데이터 정의
const motorImages = [
  { src: "/images/products/motor/motor_1.jpg", alt: "NIDEC Motor 1" },
  { src: "/images/products/motor/motor_2.png", alt: "NIDEC Motor 2" },
  { src: "/images/products/motor/motor_3.webp", alt: "NIDEC Motor 3" },
];

export default function MotorPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Motor & Electric Motor (산업용 전동기)"
        description="NIDEC 산업용 전동기 8개 제품군. Inverter, Vector, Servo, Geared, Brake, Explosion-proof, High Efficiency, Special Purpose Motor 전문 공급."
        category="전동기"
        manufacturers={[{ name: 'NIDEC' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Motor', url: '/products/motor' },
        ]}
      />
      <MotorContent />
    </div>
  );
}

async function MotorContent() {
  const t = await getTranslations();
  const motorTypes = [
    {
      id: "inverter",
      title: "Inverter motor",
      description:
        "인버터 제어를 통해 속도 조절이 가능한 모터. 에너지 효율이 높고 다양한 부하 조건에 대응 가능합니다.",
      features: [
        "가변 속도 제어 (0~100%)",
        "에너지 절감 (최대 30%)",
        "부드러운 기동 및 정지",
        "정밀한 토크 제어",
      ],
    },
    {
      id: "vector",
      title: "Vector motor",
      description:
        "벡터 제어 방식으로 높은 정밀도와 빠른 응답 특성을 제공하는 모터. 정밀 제어가 필요한 용도에 적합합니다.",
      features: [
        "고정밀 속도 제어",
        "빠른 응답 속도",
        "넓은 속도 범위",
        "우수한 저속 토크 특성",
      ],
    },
    {
      id: "three-phase",
      title: "Three-phase motor",
      description:
        "3상 교류 전원으로 구동되는 산업용 표준 모터. 높은 효율과 안정성으로 가장 널리 사용됩니다.",
      features: [
        "높은 효율 (IE3, IE4 등급)",
        "안정적인 운전",
        "간단한 유지보수",
        "긴 수명",
      ],
    },
    {
      id: "anti-explosion",
      title: "Anti-explosion motor",
      description:
        "폭발 위험이 있는 환경에서 사용 가능한 방폭 모터. 정유·석유화학·가스 산업에 필수적입니다.",
      features: [
        "Ex 등급 인증 (IECEx, ATEX)",
        "Zone 1, Zone 2 대응",
        "고온·고압 환경 적용",
        "특수 밀봉 구조",
      ],
    },
    {
      id: "high-efficiency",
      title: "High-efficiency motor",
      description:
        "에너지 효율이 극대화된 모터. IE3, IE4 등급으로 전력 소비를 최소화하고 운영비를 절감합니다.",
      features: [
        "IE3 / IE4 에너지 등급",
        "전력 소비 최소화",
        "발열 저감",
        "친환경 운전",
      ],
    },
    {
      id: "servo",
      title: "Servo motor",
      description:
        "정밀한 위치 제어가 가능한 서보 모터. 로봇, 자동화 설비 등 고정밀 제어가 필요한 용도에 사용됩니다.",
      features: [
        "고정밀 위치 제어",
        "빠른 가감속",
        "높은 응답 속도",
        "엔코더 피드백",
      ],
    },
    {
      id: "geared",
      title: "Geared motor",
      description:
        "감속기가 일체형으로 내장된 모터. 높은 토크와 낮은 속도가 필요한 용도에 적합합니다.",
      features: [
        "고토크 출력",
        "컴팩트한 설계",
        "다양한 감속비",
        "유지보수 용이",
      ],
    },
    {
      id: "dc-brushless",
      title: "DC Brushless motor",
      description:
        "브러시가 없는 직류 모터. 긴 수명과 낮은 유지보수 비용으로 산업용 및 정밀 제어 용도에 사용됩니다.",
      features: [
        "긴 수명 (브러시 마모 없음)",
        "낮은 소음",
        "높은 효율",
        "정밀 제어 가능",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl">
            <BackButton href="/products" variant="dark" />

            <Breadcrumb variant="dark" items={[
              { label: "HOME", href: "/" },
              { label: "PRODUCTS", href: "/products" },
              { label: "Motor" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              NIDEC
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Motor</h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {t("products.motor.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <ImageGallery images={motorImages} />

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
                제품 개요
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Motor는 전기 에너지를 기계 에너지로 변환하여 기계를 움직이게 하는 장치입니다.
                펌프, 압축기, 믹서, 컨베이어 등 다양한 산업 설비의 구동원으로 사용되며,
                정유·석유화학, 조선, 제조업 등 모든 산업 분야에서 필수적인 핵심 장비입니다.
              </p>

              <h3 className="text-xl font-bold text-[#0A1628] mb-4">
                주요 특징
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>고효율 설계:</strong> IE2, IE3, IE4 에너지 효율 등급으로 전력 소비 최소화
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>다양한 제품군:</strong> 인버터, 서보, 방폭, 기어드 등 용도별 최적 솔루션
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>안정적 운전:</strong> 장기간 연속 운전에도 안정적인 성능 유지
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>내구성:</strong> 고온·고압·고부하 환경에서도 뛰어난 내구성
                  </span>
                </li>
              </ul>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-[#0A1628] mb-3">
                  파트너 브랜드
                </h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <strong>NIDEC:</strong> 세계 최대의 종합 모터 제조업체 (일본)
                  </p>
                  <p className="text-xs leading-relaxed">
                    50년 이상의 기술력으로 산업용, 자동차용, 가전용 등 다양한 분야의 고품질 정밀 모터를 설계 및 제조합니다.
                    세계 모터 시장 점유율 1위, ISO 9001/14001 인증, 전 세계 네트워크를 통한 신속한 A/S를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motor Types Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              제품 라인업
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              다양한 산업 분야와 용도에 맞는 8가지 모터 제품군을 제공합니다.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="inverter"
          >
            {motorTypes.map((motor) => (
              <AccordionItem
                key={motor.id}
                value={motor.id}
                className="border border-slate-200 rounded-xl overflow-hidden px-6"
              >
                <AccordionTrigger className="text-xl font-bold text-[#0A1628] hover:no-underline py-6">
                  <div className="text-left">
                    <h3 className="text-2xl mb-2">{motor.title}</h3>
                    <p className="text-base font-normal text-slate-600">
                      {motor.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pt-4">
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">
                      주요 특징
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {motor.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-slate-700"
                        >
                          <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            적용 분야
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Factory className="w-12 h-12 mb-4 text-[#3B82F6]" />
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                석유화학 플랜트
              </h3>
              <p className="text-slate-600 text-sm">
                펌프, 압축기, 컨베이어 구동용 모터
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Settings className="w-12 h-12 mb-4 text-[#3B82F6]" />
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                산업 자동화
              </h3>
              <p className="text-slate-600 text-sm">
                로봇, 자동화 설비, 컨베이어 시스템
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Wind className="w-12 h-12 mb-4 text-[#3B82F6]" />
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                HVAC 시스템
              </h3>
              <p className="text-slate-600 text-sm">
                공조 설비, 환기 팬, 냉난방 시스템
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Droplets className="w-12 h-12 mb-4 text-[#3B82F6]" />
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                펌프 시스템
              </h3>
              <p className="text-slate-600 text-sm">
                급수 펌프, 송유 펌프, 화학 펌프 구동
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Tornado className="w-12 h-12 mb-4 text-[#3B82F6]" />
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                믹서·교반기
              </h3>
              <p className="text-slate-600 text-sm">
                산업용 믹서, 화학 반응기, 혼합 설비
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Wrench className="w-12 h-12 mb-4 text-[#3B82F6]" />
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                기타 산업
              </h3>
              <p className="text-slate-600 text-sm">
                식품, 제약, 광물 처리, 환경 설비
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-8">
              기술 사양
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  출력 범위
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>소형: 0.1kW ~ 3.7kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>중형: 5.5kW ~ 75kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>대형: 90kW ~ 500kW 이상</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  전압
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>단상: 110V, 220V</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>3상: 220V, 380V, 440V</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>특수 전압: 6.6kV, 11kV (대용량)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  보호 등급
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>IP54, IP55 (표준)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>IP65, IP66 (방진·방수)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>Ex 등급 (방폭 환경)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  에너지 효율
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>IE2 (High Efficiency)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>IE3 (Premium Efficiency)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>IE4 (Super Premium Efficiency)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("products.motor.cta.title")}
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {t("products.motor.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              {t("products.motor.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {t("products.motor.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
