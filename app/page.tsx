import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Temporary */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1628] to-[#3B82F6]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology Connecting Energy's Future
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업.
            <br />
            라온토탈솔루션이 최적의 품질과 납기로 고객의 가치를 높입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#0A1628] font-semibold hover:bg-gray-100 transition-colors"
            >
              상담 문의
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0A1628] transition-colors"
            >
              제품 문의
            </a>
          </div>
        </div>
      </section>

      {/* Temporary Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-4">
            핵심 산업 솔루션
          </h2>
          <p className="text-gray-600 mb-12">
            정유·석유화학 및 조선 산업을 위한 전문 솔루션
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#0A1628] mb-2">
                정유·석유화학
              </h3>
              <p className="text-gray-600">
                30년 노하우의 플랜트 솔루션
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#0A1628] mb-2">
                조선
              </h3>
              <p className="text-gray-600">
                선박 엔진용 실린더 라이너 전문 공급
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
