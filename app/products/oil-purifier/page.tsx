import Link from "next/link";

export default function OilPurifierPage() {
  const features = [
    {
      icon: "💧",
      title: "수분 제거",
      description:
        "진공 증발 방식으로 오일 내 수분을 효과적으로 제거하여 오일 성능을 회복합니다.",
    },
    {
      icon: "🔬",
      title: "불순물 제거",
      description:
        "다단계 필터링으로 금속 입자, 슬러지, 미세 불순물을 제거하여 오일을 정화합니다.",
    },
    {
      icon: "⏱️",
      title: "오일 수명 연장",
      description:
        "오일을 정화하여 재사용함으로써 오일 교체 주기를 연장하고 비용을 절감합니다.",
    },
    {
      icon: "🛡️",
      title: "설비 보호",
      description:
        "깨끗한 오일로 베어링, 기어, 유압 시스템 등의 마모를 줄이고 설비 수명을 연장합니다.",
    },
  ];

  const applications = [
    {
      icon: "⚙️",
      title: "터빈 오일",
      description: "증기 터빈, 가스 터빈의 윤활유 정화",
    },
    {
      icon: "🔩",
      title: "유압 오일",
      description: "유압 시스템, 프레스, 사출기 오일 정화",
    },
    {
      icon: "🏭",
      title: "압축기 오일",
      description: "왕복동/원심 압축기 윤활유 정화",
    },
    {
      icon: "⚡",
      title: "변압기 오일",
      description: "전력 변압기 절연유 정화",
    },
    {
      icon: "⚙️",
      title: "기어 오일",
      description: "기어박스, 감속기 윤활유 정화",
    },
    {
      icon: "🚢",
      title: "선박 엔진 오일",
      description: "선박 주기관, 발전기 윤활유 정화",
    },
  ];

  const modelSpecs = [
    {
      model: "DVEFB-10-PW",
      flowRate: "10 L/min",
      size: "500 x 400 x 600 mm",
      power: "3 kW",
    },
    {
      model: "DVEFB-20-PW",
      flowRate: "20 L/min",
      size: "600 x 500 x 700 mm",
      power: "5 kW",
    },
    {
      model: "DVEFB-30-PW",
      flowRate: "30 L/min",
      size: "700 x 600 x 800 mm",
      power: "7.5 kW",
    },
    {
      model: "DVEFB-50-PW",
      flowRate: "50 L/min",
      size: "800 x 700 x 900 mm",
      power: "10 kW",
    },
    {
      model: "DVEFB-80-PW",
      flowRate: "80 L/min",
      size: "1000 x 800 x 1100 mm",
      power: "15 kW",
    },
    {
      model: "DVEFB-100-PW",
      flowRate: "100 L/min",
      size: "1100 x 900 x 1200 mm",
      power: "18.5 kW",
    },
    {
      model: "DVEFB-150-PW",
      flowRate: "150 L/min",
      size: "1300 x 1000 x 1400 mm",
      power: "25 kW",
    },
    {
      model: "DVEFB-200-PW",
      flowRate: "200 L/min",
      size: "1500 x 1200 x 1600 mm",
      power: "35 kW",
    },
    {
      model: "DVEFB-CO-PW",
      flowRate: "맞춤 제작",
      size: "고객 요구사항",
      power: "변동",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              삼영필텍 (SYT)
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Oil Purifier
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              오염된 오일(윤활유, 유압유 등)을 정화하여 재사용 가능하도록
              만드는 장치.
              <br />
              수분, 불순물, 미세 입자를 제거하여 오일 수명을 연장하고 설비를
              보호합니다.
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
                <div className="text-8xl mb-4">🛢️</div>
                <p className="text-sm">삼영필텍 로고 삽입 예정</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
                삼영필텍 (SYT) 소개
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                삼영필텍(SYT)은 대한민국의 오일 정화 장비 전문 제조업체입니다.
                산업용 오일 퓨리파이어(Oil Purifier)를 설계·제작하며, 정유,
                석유화학, 발전, 조선 산업의 윤활유 및 유압유 정화 솔루션을
                제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>국내 전문 기업:</strong> 산업용 오일 정화 장비 특화
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>진공 증발 방식:</strong> 수분 제거 효율 99% 이상
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>맞춤형 제작:</strong> 고객 요구에 맞춘 커스터마이징
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>A/S 신속 대응:</strong> 국내 생산으로 빠른 유지보수
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
              Oil Purifier의 주요 기능
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              오일 정화 장치가 제공하는 4가지 핵심 기능입니다.
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

      {/* Model Specifications Table */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              모델 사양
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              10 L/min부터 200 L/min까지 다양한 용량의 모델을 제공합니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">모델명</th>
                    <th className="px-6 py-4 text-left font-semibold">
                      청정 유량
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      크기 (W x D x H)
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      소비 전력
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {modelSpecs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">
                        {spec.model}
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        {spec.flowRate}
                      </td>
                      <td className="px-6 py-4 text-slate-700">{spec.size}</td>
                      <td className="px-6 py-4 text-slate-700">{spec.power}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-slate-600 text-sm">
              * DVEFB-CO-PW: 고객 요구사항에 맞춤 제작 가능 (Custom Order)
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            오일 정화 원리
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                오일 흡입
              </h3>
              <p className="text-slate-600 text-sm">
                오염된 오일을 펌프로 흡입하여 정화 장치로 이송합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                1차 여과
              </h3>
              <p className="text-slate-600 text-sm">
                조대 필터로 큰 입자와 슬러지를 제거합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                진공 증발
              </h3>
              <p className="text-slate-600 text-sm">
                진공 챔버에서 수분을 증발시켜 제거합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                정밀 여과
              </h3>
              <p className="text-slate-600 text-sm">
                미세 필터로 1μm 이하의 입자까지 제거합니다.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="text-center">
              <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                청정유 배출
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                정화된 오일을 탱크 또는 시스템으로 복귀시킵니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            적용 분야
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all"
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            삼영필텍 Oil Purifier의 장점
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                높은 수분 제거율
              </h3>
              <p className="text-slate-600 text-sm">
                진공 증발 방식으로 수분 제거율 99% 이상 달성. 오일의 절연성능과
                윤활성능을 회복합니다.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                정밀 여과
              </h3>
              <p className="text-slate-600 text-sm">
                1μm 이하의 미세 입자까지 제거하여 오일 청정도 NAS 등급 6 이하로
                유지합니다.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                비용 절감
              </h3>
              <p className="text-slate-600 text-sm">
                오일을 재사용하여 오일 교체 비용을 80% 이상 절감. 폐유 처리
                비용도 감소합니다.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                친환경
              </h3>
              <p className="text-slate-600 text-sm">
                오일 재생으로 폐유 배출을 줄이고 환경 보호에 기여합니다.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                자동 운전
              </h3>
              <p className="text-slate-600 text-sm">
                자동 제어 시스템으로 무인 운전 가능. 수분·입자 센서로 실시간
                모니터링합니다.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🇰🇷</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                국내 제작
              </h3>
              <p className="text-slate-600 text-sm">
                국내 설계·제조로 신속한 납기와 즉각적인 A/S가 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-8">
              기술 사양
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  처리 성능
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>수분 제거율: 99% 이상</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>여과 정밀도: 1μm 이하</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>청정도: NAS 등급 6 이하</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  운전 조건
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>처리 온도: 60~90°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>진공도: -0.095 MPa 이하</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>전원: 3상 380V 60Hz</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  적용 오일
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>터빈 오일 (Turbine Oil)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>유압 오일 (Hydraulic Oil)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>변압기 오일 (Transformer Oil)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>기어 오일 (Gear Oil)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  안전 기능
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>과열 방지 (Over-heating protection)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>압력 안전 밸브</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>자동 정지 (Auto-shutdown)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>경보 시스템 (Alarm system)</span>
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
            오일 정화 솔루션이 필요하신가요?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            오일 종류, 유량, 오염도에 맞는 최적의 Oil Purifier 모델을 선정해
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
