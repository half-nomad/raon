import Link from "next/link";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: 'Mixer & Agitator | 산업용 믹서 솔루션',
  description: 'SPX FLOW 믹서 및 교반기 전문 공급. Lightnin, Plenty, Stelzer 브랜드로 다양한 유체 혼합, 균질화 솔루션 제공. 정유·석유화학 산업 최적화.',
  keywords: ['Mixer', 'Agitator', '믹서', '교반기', 'SPX FLOW', 'Lightnin', 'Plenty', 'Stelzer'],
  openGraph: {
    title: 'Mixer & Agitator | 라온토탈솔루션',
    description: 'SPX FLOW 믹서 및 교반기 전문 공급. 다양한 유체 혼합, 균질화 솔루션 제공',
    images: ['/images/og/mixer-og.jpg'],
  },
};

export default function MixerPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Mixer & Agitator (산업용 믹서)"
        description="SPX FLOW의 검증된 기술력으로 다양한 유체를 효과적으로 섞고, 균질화하며, 일정한 상태로 유지하는 장치. Lightnin, Plenty, Stelzer 브랜드."
        category="믹서 및 교반기"
        manufacturers={[
          { name: 'SPX FLOW' },
          { name: 'Lightnin' },
          { name: 'Plenty' },
          { name: 'Stelzer' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Mixer', url: '/products/mixer' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              SPX FLOW · Lightnin · Plenty · Stelzer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mixer & Agitator
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              다양한 유체(액체 또는 혼합물)를 효과적으로 섞고, 균질화하며,
              일정한 상태로 유지하기 위한 장치입니다.
              <br />
              SPX FLOW의 검증된 기술력으로 최적의 혼합 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-slate-400">
                <div className="text-8xl mb-4">🌀</div>
                <p className="text-sm">이미지 삽입 예정</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
                제품 개요
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Mixer와 Agitator는 화학, 제약, 식품, 석유화학 등 다양한
                산업에서 액체 또는 혼합물을 효과적으로 혼합하고 균질화하는 데
                필수적인 장비입니다. SPX FLOW의 Lightnin, Plenty, Stelzer 브랜드는
                전 세계적으로 검증된 고품질 믹서 솔루션을 제공합니다.
              </p>

              <h3 className="text-xl font-bold text-[#0A1628] mb-4">
                주요 특징
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>다양한 점도 대응:</strong> 저점도부터 고점도
                    유체까지 폭넓은 범위의 혼합 가능
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>균질화 성능:</strong> 일정하고 균일한 혼합 상태 유지
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>에너지 효율:</strong> 최적화된 임펠러 설계로 에너지
                    소비 최소화
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>내구성:</strong> 부식 방지 소재 및 견고한 구조로
                    장기간 안정적 운전
                  </span>
                </li>
              </ul>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-[#0A1628] mb-3">
                  파트너 브랜드
                </h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <strong>SPX FLOW:</strong> 글로벌 유체 처리 솔루션 선도 기업
                  </p>
                  <p>
                    <strong>Lightnin:</strong> 산업용 믹서 및 임펠러 전문
                  </p>
                  <p>
                    <strong>Plenty:</strong> 고점도 유체 혼합 솔루션
                  </p>
                  <p>
                    <strong>Stelzer:</strong> 정밀 교반 시스템
                  </p>
                  <p className="mt-4 pt-4 border-t border-slate-200">
                    <strong className="text-[#0A1628]">계약:</strong> 2022년
                    한국 Master 대리점
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-8">
              적용 분야
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  석유화학
                </h3>
                <p className="text-slate-600 text-sm">
                  원유 정제, 화학 반응 촉진, 첨가제 혼합
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  제약·화학
                </h3>
                <p className="text-slate-600 text-sm">
                  의약품 제조, 화학 물질 합성, 용액 혼합
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🥤</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  식품·음료
                </h3>
                <p className="text-slate-600 text-sm">
                  식품 가공, 음료 제조, 유화 및 분산
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  도료·코팅
                </h3>
                <p className="text-slate-600 text-sm">
                  페인트 제조, 안료 분산, 코팅제 혼합
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  수처리
                </h3>
                <p className="text-slate-600 text-sm">
                  응집제 혼합, 폐수 처리, 화학 약품 분산
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  기타 산업
                </h3>
                <p className="text-slate-600 text-sm">
                  펄프·제지, 광물 처리, 바이오 연료
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
              기술 사양
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  혼합 용량
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>소형: 10L ~ 1,000L</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>중형: 1,000L ~ 10,000L</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>대형: 10,000L 이상</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  구동 방식
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>전기 모터 구동</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>기어 감속기 타입</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>가변 속도 제어 (VFD)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  임펠러 타입
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>Axial Flow (축류형)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>Radial Flow (원심형)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>High Shear (고전단)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  재질
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>Stainless Steel (316, 316L)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>Hastelloy, Titanium (고부식 환경)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>PTFE 코팅 (특수 용도)</span>
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
            최적의 혼합 솔루션이 필요하신가요?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            공정 조건, 유체 특성, 용량에 맞는 맞춤형 믹서 솔루션을 제안해
            드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              기술 상담 문의
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              견적 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
