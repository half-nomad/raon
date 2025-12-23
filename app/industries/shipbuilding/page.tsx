import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IndustryHero } from "@/components/industries/industry-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: '조선 산업 | Shipbuilding',
  description: 'WTQ 선박용 실린더 라이너 전문 공급. 직경 480~1500mm, 선박 메인 엔진 및 해양 설비 적용. 삼영필텍 오일 정화 시스템으로 최적의 품질 보장.',
  keywords: ['조선', 'Shipbuilding', '선박용 실린더 라이너', 'Cylinder Liner', 'WTQ', 'Oil Purifier', 'Marine Engine'],
  openGraph: {
    title: '조선 산업 | 라온토탈솔루션',
    description: 'WTQ 선박용 실린더 라이너 전문 공급. 선박 메인 엔진 및 해양 설비',
    images: ['/images/og/shipbuilding-og.jpg'],
  },
};

export default function ShipbuildingPage() {
  const services = [
    "상용차량, 건설 기계, 기관차 용 실린더라이너",
    "선박 및 해양용 실린더라이너",
    "슬러지 펌프 및 유압 실린더용 라이너",
    "컴프레셔 및 발전기 유닛 용 실린더라이너",
  ];

  const relatedProducts = [
    { name: "Cylinder Liner", href: "/products#cylinder-liner" },
    { name: "Oil Purifier", href: "/products#oil-purifier" },
    { name: "Bearing", href: "/products#bearing" },
  ];

  const specifications = [
    { label: "직경 범위", value: "480 ~ 1500mm" },
    { label: "적용 분야", value: "선박 메인 엔진, 해양 설비" },
    { label: "인증", value: "글로벌 표준 인증 제품" },
    { label: "납기", value: "신속한 납기 대응 시스템" },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
          { name: '조선', url: '/industries/shipbuilding' },
        ]}
      />
      <Header />

      <IndustryHero
        title="조선"
        subtitle="Ship Building"
        description="중국 양주 실린더라이너 제조사(WTQ)의 한국 대리점으로 고품질 선박용 부품을 공급합니다"
      />

      {/* Industry Representative Image */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/industries/shipbuilding.PNG"
              alt="조선소 및 선박 건조 현장"
              fill
              className="object-cover"
              sizes="(max-width: 1240px) 100vw, 1240px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm sm:text-base font-medium opacity-90">
                대형 선박 건조 현장에서 사용되는 고품질 실린더 라이너 및 해양 설비
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-6">
              핵심 소개
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                당사는 중국 양주에 위치한 실린더라이너 제조사(WTQ)의 한국
                대리점으로 직경 480~ 1500mm의 실린더라이너를 공급합니다.
              </p>
              <p>
                WTQ사는 선박용 메인 엔진 실린더라이너를 생산하는 중국 내 주요
                제조사 중 하나로, 2025년 한국에 대리점을 개설하게 되었습니다.
              </p>
              <p className="text-[#3B82F6] font-semibold">
                글로벌 표준 인증을 받은 제품으로 안정적인 품질과 신속한 납기를
                보장합니다.
              </p>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-8 text-center">
              제품 사양
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all"
                >
                  <p className="text-sm text-gray-500 mb-2">{spec.label}</p>
                  <p className="text-lg font-bold text-[#0A1628]">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-8 text-center">
              주요 제공 서비스
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center group-hover:bg-[#3B82F6] transition-colors">
                      <svg
                        className="w-6 h-6 text-[#3B82F6] group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium text-lg leading-relaxed flex-1">
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-[#0A1628] to-[#1A2D47] rounded-2xl text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">품질 보증</h4>
              <p className="text-white/80 text-sm">
                글로벌 표준 인증 제품
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-2xl text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">신속 납기</h4>
              <p className="text-white/80 text-sm">
                빠른 대응 시스템 구축
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#1A2D47] to-[#0A1628] rounded-2xl text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">WTQ 공식 대리점</h4>
              <p className="text-white/80 text-sm">
                2025년 한국 대리점 개설
              </p>
            </div>
          </div>

          {/* Related Products */}
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-6 text-center">
              관련 제품 바로가기
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedProducts.map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-lg transition-all"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1628] text-white font-semibold text-lg rounded-full hover:bg-[#1A2D47] hover:shadow-xl transition-all"
            >
              상담 문의하기
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
