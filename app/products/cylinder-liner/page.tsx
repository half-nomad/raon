import Link from "next/link";

export default function CylinderLinerPage() {
  const features = [
    {
      icon: "🛡️",
      title: "엔진 실린더 보호",
      description:
        "피스톤이 움직이는 공간을 보호하여 실린더 벽면의 직접적인 마모를 방지합니다.",
    },
    {
      icon: "⏱️",
      title: "마모 저감",
      description:
        "고온·고압 환경에서 피스톤과의 마찰을 최소화하고 엔진 수명을 연장합니다.",
    },
    {
      icon: "🌡️",
      title: "열 관리",
      description:
        "연소 과정에서 발생하는 고온을 효과적으로 분산시켜 엔진 온도를 안정화합니다.",
    },
    {
      icon: "🔧",
      title: "교체 용이",
      description:
        "실린더 라이너만 교체하여 전체 엔진 블록을 보호하고 유지보수 비용을 절감합니다.",
    },
  ];

  const applications = [
    {
      icon: "🚢",
      title: "화물선",
      description: "컨테이너선, 벌크선, 탱커 등 대형 화물선 주기관",
    },
    {
      icon: "⚓",
      title: "여객선",
      description: "크루즈, 페리, 여객선 엔진 시스템",
    },
    {
      icon: "⛴️",
      title: "특수 선박",
      description: "LNG선, 케미컬 탱커, 해양 플랜트 지원선",
    },
    {
      icon: "🛥️",
      title: "중소형 선박",
      description: "어선, 예인선, 작업선, 연안 여객선",
    },
  ];

  const specifications = [
    {
      title: "재질",
      items: [
        "주철 (Cast Iron) - 표준형",
        "합금 주철 (Alloy Cast Iron) - 내마모성 강화",
        "특수 합금 - 고온·고하중 대응",
      ],
    },
    {
      title: "표면 처리",
      items: [
        "크롬 도금 (Chrome Plating)",
        "니켈 도금 (Nickel Plating)",
        "보론 처리 (Boron Treatment)",
      ],
    },
    {
      title: "엔진 타입",
      items: [
        "2행정 (Two-stroke) 엔진",
        "4행정 (Four-stroke) 엔진",
        "디젤 엔진 (Diesel Engine)",
      ],
    },
    {
      title: "사이즈 범위",
      items: [
        "직경: 150mm ~ 980mm",
        "높이: 500mm ~ 3,500mm",
        "두께: 15mm ~ 80mm",
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
              WTQ (Yangzhou Wuting Qiao)
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cylinder Liner for Ship
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              선박용 실린더 라이너는 엔진 내부의 피스톤이 움직이는 공간을 감싸는
              부품입니다.
              <br />
              엔진 실린더를 보호하고 마모를 줄이며 엔진 수명을 연장합니다.
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
                <div className="text-8xl mb-4">🚢</div>
                <p className="text-sm">WTQ 로고 삽입 예정</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
                WTQ (Yangzhou Wuting Qiao) 소개
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Yangzhou Wuting Qiao Cylinder Liner Co., Ltd.는 중국의 선박용
                실린더 라이너 전문 제조업체입니다. 조선 산업을 위한 고품질
                실린더 라이너를 생산하며, 전 세계 주요 조선소 및 선박 엔진
                제조사에 공급하고 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>선박 엔진 특화:</strong> 대형 선박 주기관 전문
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>글로벌 공급:</strong> 세계 주요 조선소 납품 실적
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>품질 인증:</strong> ISO 9001, CCS, ABS 등 국제 인증
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>경쟁력 있는 가격:</strong> 합리적인 가격과 빠른 납기
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              실린더 라이너의 역할
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              선박 엔진의 핵심 부품인 실린더 라이너가 제공하는 주요 기능입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            기술 사양
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {specifications.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-slate-200"
              >
                <h3 className="text-2xl font-bold text-[#0A1628] mb-6">
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start text-slate-700"
                    >
                      <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            적용 선박
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                  {app.title}
                </h3>
                <p className="text-slate-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            WTQ 실린더 라이너의 장점
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                뛰어난 내구성
              </h3>
              <p className="text-slate-600 text-sm">
                고품질 주철과 특수 합금을 사용하여 고온·고압·고하중 환경에서도
                오랜 수명을 보장합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                정밀 가공
              </h3>
              <p className="text-slate-600 text-sm">
                최신 CNC 가공 설비를 통해 엄격한 공차(Tolerance)를 유지하며,
                피스톤과의 최적 틈새를 보장합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                국제 인증
              </h3>
              <p className="text-slate-600 text-sm">
                ISO 9001, CCS(중국선급), ABS(미국선급), DNV-GL, LR 등 주요 선급
                인증을 보유하고 있습니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                호환성
              </h3>
              <p className="text-slate-600 text-sm">
                MAN, Wärtsilä, Mitsubishi, Hyundai 등 주요 엔진 제조사의 사양에
                맞춰 제작 가능합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                가격 경쟁력
              </h3>
              <p className="text-slate-600 text-sm">
                유럽·일본 제품 대비 30~50% 저렴한 가격으로 동등한 품질을
                제공하여 운영비를 절감합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                신속한 납기
              </h3>
              <p className="text-slate-600 text-sm">
                중국 현지 생산으로 한국까지 빠른 배송이 가능하며, 긴급 주문 시
                우선 대응합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            실린더 라이너 제작 공정
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">주조</h3>
              <p className="text-slate-600 text-sm">
                고품질 주철을 정밀하게 주조하여 기본 형상을 만듭니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                열처리
              </h3>
              <p className="text-slate-600 text-sm">
                내구성과 경도를 높이기 위해 정밀 열처리 공정을 진행합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">가공</h3>
              <p className="text-slate-600 text-sm">
                CNC 선반으로 내·외경을 정밀 가공하여 엄격한 공차를 맞춥니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                표면 처리
              </h3>
              <p className="text-slate-600 text-sm">
                크롬 또는 니켈 도금을 통해 내마모성과 내식성을 강화합니다.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                품질 검사
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                치수 검사, 경도 시험, 비파괴 검사(NDT) 등을 통해 최종 품질을
                보증합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-8 text-center">
              품질 인증 및 규격
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  국제 인증
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>ISO 9001:2015 (품질 경영 시스템)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>CCS (중국선급)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>ABS (미국선급)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>DNV-GL (노르웨이/독일 선급)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>LR (영국선급)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  호환 엔진
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>MAN B&W (덴마크)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>Wärtsilä (핀란드)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>Mitsubishi (일본)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>Hyundai-HiMSEN (한국)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">✓</span>
                    <span>Yanmar (일본)</span>
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
            선박용 실린더 라이너가 필요하신가요?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            엔진 모델, 사이즈, 수량에 맞는 최적의 WTQ 실린더 라이너를 견적해
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
