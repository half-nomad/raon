import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BearingPage() {
  const bearingTypes = [
    {
      id: "tilting-pad-thrust",
      title: "TILTING PAD THRUST BEARING",
      description:
        "틸팅 패드 스러스트 베어링은 축 방향 하중을 지지하는 고성능 베어링입니다. 각 패드가 독립적으로 기울어지면서 최적의 유막을 형성하여 고속·고하중 환경에서도 안정적으로 작동합니다.",
      features: [
        "축 방향 하중 지지",
        "고속 회전 대응 (10,000 RPM 이상)",
        "자동 정렬 (Self-aligning)",
        "안정적인 유막 형성",
        "고하중 환경 적합",
        "긴 수명",
      ],
      applications: [
        "터빈",
        "압축기",
        "펌프",
        "발전기",
        "대형 회전기계",
      ],
      specifications: [
        "최대 회전속도: 15,000 RPM",
        "축 방향 하중: 최대 500 ton",
        "작동 온도: -20°C ~ +120°C",
        "윤활유: ISO VG 32~68",
      ],
    },
    {
      id: "vertical-bearing",
      title: "VERTICAL BEARING",
      description:
        "수직 베어링은 수직축 회전기계의 방사 방향 및 축 방향 하중을 동시에 지지합니다. 중력 하중과 운전 하중을 안정적으로 받아내며, 정유·석유화학 플랜트의 수직 펌프에 널리 사용됩니다.",
      features: [
        "수직축 전용 설계",
        "방사+축 방향 하중 동시 지지",
        "중력 하중 대응",
        "유막 안정성 우수",
        "진동 최소화",
        "쉬운 유지보수",
      ],
      applications: [
        "수직 펌프",
        "수직 압축기",
        "수직 믹서",
        "수직 교반기",
        "해상 플랜트",
      ],
      specifications: [
        "최대 회전속도: 5,000 RPM",
        "방사 방향 하중: 최대 300 ton",
        "축 방향 하중: 최대 200 ton",
        "베어링 직경: 200mm ~ 1,500mm",
      ],
    },
    {
      id: "journal-thrust-combined",
      title: "JOURNAL & THRUST COMBINED BEARING",
      description:
        "저널 베어링과 스러스트 베어링이 결합된 복합형 베어링입니다. 방사 방향과 축 방향 하중을 동시에 지지하며, 공간을 절약하고 설치 및 정렬이 간편합니다. 압축기, 터빈 등 고성능 회전기계에 적용됩니다.",
      features: [
        "방사+축 방향 하중 동시 지지",
        "공간 절약형 설계",
        "설치 간편",
        "정렬 오차 흡수",
        "통합형 윤활 시스템",
        "고효율·저손실",
      ],
      applications: [
        "왕복동 압축기",
        "원심 압축기",
        "가스 터빈",
        "증기 터빈",
        "고속 회전기계",
      ],
      specifications: [
        "최대 회전속도: 12,000 RPM",
        "방사 방향 하중: 최대 400 ton",
        "축 방향 하중: 최대 350 ton",
        "베어링 직경: 150mm ~ 1,200mm",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              터보링크
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bearing</h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              회전하거나 움직이는 기계 부품을 지지하고, 마찰을 줄이며, 안정적으로
              작동하도록 돕는 장치.
              <br />
              터보링크의 베어링은 고속·고하중 환경에서도 안정적인 성능을
              제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center">
              <div className="text-center text-slate-400">
                <div className="text-8xl mb-4">⚙️</div>
                <p className="text-sm">터보링크 로고 삽입 예정</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
                터보링크 (TURBO LINK) 소개
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                터보링크는 대한민국의 회전기계 베어링 전문 제조업체입니다.
                정유·석유화학 산업에 특화된 고성능 베어링을 설계·제조하며,
                압축기, 터빈, 펌프 등 대형 회전기계의 핵심 부품을 공급합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>국내 전문 기업:</strong> 정유·석유화학 분야 특화
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>고속·고하중:</strong> 극한 환경에서도 안정적 성능
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>맞춤 설계:</strong> 고객 요구에 맞춘 커스터마이징
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>신속 대응:</strong> 국내 생산으로 빠른 납기
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bearing Types Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              제품 라인업
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              고속·고하중 환경을 위한 3가지 고성능 베어링 제품군을 제공합니다.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="tilting-pad-thrust"
          >
            {bearingTypes.map((bearing) => (
              <AccordionItem
                key={bearing.id}
                value={bearing.id}
                className="border border-slate-200 rounded-xl overflow-hidden px-6"
              >
                <AccordionTrigger className="text-xl font-bold text-[#0A1628] hover:no-underline py-6">
                  <div className="text-left">
                    <h3 className="text-2xl mb-2">{bearing.title}</h3>
                    <p className="text-base font-normal text-slate-600">
                      {bearing.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pt-4 space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-bold text-[#0A1628] mb-4">
                        주요 특징
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {bearing.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-slate-700"
                          >
                            <span className="text-[#3B82F6] mr-2 mt-0.5">
                              •
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h4 className="text-lg font-bold text-[#0A1628] mb-4">
                        기술 사양
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {bearing.specifications.map((spec, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-slate-700"
                          >
                            <span className="text-[#3B82F6] mr-2 mt-0.5">
                              •
                            </span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="text-lg font-bold text-[#0A1628] mb-3">
                        적용 분야
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {bearing.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            터보링크 베어링의 강점
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                고속 회전 대응
              </h3>
              <p className="text-slate-600 text-sm">
                15,000 RPM 이상의 초고속 회전에도 안정적인 유막을 형성하여
                마모를 최소화합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                고하중 환경
              </h3>
              <p className="text-slate-600 text-sm">
                최대 500 ton의 축 방향 하중을 지지. 대형 압축기·터빈에
                적용됩니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                자동 정렬
              </h3>
              <p className="text-slate-600 text-sm">
                틸팅 패드 구조로 축의 미세한 정렬 오차를 자동으로 흡수하여 안정성
                향상.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                온도 안정성
              </h3>
              <p className="text-slate-600 text-sm">
                -20°C ~ +120°C 광범위한 온도에서 안정적으로 작동. 극한 환경에도
                적합합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                긴 수명
              </h3>
              <p className="text-slate-600 text-sm">
                최적화된 유막 설계와 고품질 재질로 교체 주기를 최대한 연장.
                운영비를 절감합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🇰🇷</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                국내 제작
              </h3>
              <p className="text-slate-600 text-sm">
                국내 설계·제조로 신속한 납기와 즉각적인 A/S 대응이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            적용 산업
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                정유·석유화학
              </h3>
              <p className="text-slate-600 text-sm">
                압축기, 터빈, 펌프용 고성능 베어링
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">발전</h3>
              <p className="text-slate-600 text-sm">
                가스 터빈, 증기 터빈, 발전기
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                조선·해양
              </h3>
              <p className="text-slate-600 text-sm">
                선박 엔진, 해상 플랜트 회전기계
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                중공업
              </h3>
              <p className="text-slate-600 text-sm">
                대형 회전기계, 산업 플랜트
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">💨</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                공조·환경
              </h3>
              <p className="text-slate-600 text-sm">
                대형 송풍기, 압축기, 블로어
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">연구소</h3>
              <p className="text-slate-600 text-sm">
                시험기, 실험 장비, 특수 회전기계
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-8">
              왜 터보링크 베어링을 선택해야 할까요?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4 flex items-center">
                  <span className="text-[#3B82F6] mr-2">1.</span>
                  정유·석유화학 특화
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  국내 주요 정유사(SK에너지, S-OIL, GS칼텍스 등)의 압축기,
                  터빈, 펌프에 공급된 실적을 바탕으로 검증된 성능을 제공합니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4 flex items-center">
                  <span className="text-[#3B82F6] mr-2">2.</span>
                  맞춤형 설계
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  고객의 회전기계 사양(RPM, 하중, 온도, 윤활유 등)에 맞춰
                  최적화된 베어링을 설계·제작합니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4 flex items-center">
                  <span className="text-[#3B82F6] mr-2">3.</span>
                  신속한 납기
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  국내 생산으로 해외 제품 대비 납기가 빠르며, 긴급 상황 시
                  즉각적인 대응이 가능합니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4 flex items-center">
                  <span className="text-[#3B82F6] mr-2">4.</span>
                  기술 지원
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  베어링 선정, 설치, 유지보수, 트러블슈팅까지 전 과정에 걸쳐
                  전문 엔지니어의 기술 지원을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            최적의 베어링 솔루션이 필요하신가요?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            회전속도, 하중, 운전 조건에 맞는 최적의 터보링크 베어링을 선정해
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
