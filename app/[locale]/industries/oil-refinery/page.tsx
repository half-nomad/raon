import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IndustryHero } from "@/components/industries/industry-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: '정유·석유화학 산업 | Oil Refinery & Petrochemical',
  description: '30년 경험의 왕복동 압축기 및 회전기계 전문 솔루션. Compressor, Pump, Mixer, Bearing 등 정유·석유화학 플랜트 핵심 부품 공급. SK에너지, S-OIL, GS칼텍스 납품.',
  keywords: ['정유', '석유화학', 'Oil Refinery', 'Petrochemical', '압축기', 'Compressor', 'Pump', 'Mixer', 'Bearing'],
  openGraph: {
    title: '정유·석유화학 산업 | 라온토탈솔루션',
    description: '30년 경험의 왕복동 압축기 및 회전기계 전문 솔루션',
    images: ['/images/og/oil-refinery-og.jpg'],
  },
};

export default function OilRefineryPage() {
  const services = [
    "Industrial Compressor & Blower",
    "Pump",
    "Mixer & Agitator",
    "Bearing",
    "Compressor Cylinder liner",
    "Valve, piston ring 외 해당 제품에 대한 모든 Spare parts",
  ];

  const relatedProducts = [
    { name: "Compressor & Parts", href: "/products#compressor" },
    { name: "Pump", href: "/products#pump" },
    { name: "Mixer & Agitator", href: "/products#mixer" },
    { name: "Bearing", href: "/products#bearing" },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
          { name: '정유·석유화학', url: '/industries/oil-refinery' },
        ]}
      />
      <Header />

      <IndustryHero
        title="정유·석유화학"
        subtitle="Oil Refinery & Petrochemical"
        description="30년 경험과 노하우를 바탕으로 왕복동 압축기와 회전기계에 대한 전문 솔루션을 제공합니다"
      />

      {/* Industry Representative Image */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/industries/oil-refinery.PNG"
              alt="정유·석유화학 플랜트"
              fill
              className="object-cover"
              sizes="(max-width: 1240px) 100vw, 1240px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm sm:text-base font-medium opacity-90">
                정유·석유화학 플랜트에서 가동되는 산업용 압축기 및 회전기계 시스템
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
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p>
                (주)라온토탈솔루션은 왕복동 압축기와 회전기계에 대한 Spare parts
                및 엔지니어링 솔루션을 제공하는 전문 기업입니다.
              </p>
              <p>
                약 30년간의 경험과 Know-how를 바탕으로 다양한 사업의 요구에 맞춘
                서비스를 제공하고 있습니다.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-8 text-center">
              주요 제공 서비스
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center group-hover:bg-[#3B82F6] transition-colors">
                      <svg
                        className="w-5 h-5 text-[#3B82F6] group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed flex-1">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">30년 경험</h4>
              <p className="text-white/80 text-sm">
                정유·석유화학 플랜트 분야의 축적된 노하우
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">신속 대응</h4>
              <p className="text-white/80 text-sm">
                24시간 긴급 출동 서비스 제공
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">글로벌 파트너</h4>
              <p className="text-white/80 text-sm">
                세계 최고 수준의 기술력 보유
              </p>
            </div>
          </div>

          {/* Related Products */}
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-6 text-center">
              관련 제품 바로가기
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedProducts.map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-lg transition-all"
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
