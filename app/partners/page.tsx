import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PartnersPage() {
  const globalPartners = [
    {
      name: "SPXFLOW",
      country: "Global",
      year: "2022",
      relationship: "한국 Master 대리점",
      description:
        "믹서, 교반기, 펌프 등 산업용 유체 처리 장비 전문 글로벌 기업",
      products: ["Mixer & Agitator", "Pump"],
    },
    {
      name: "NEUMAN & ESSER",
      country: "Global",
      year: "2024",
      relationship: "울산 대리점",
      description: "왕복동 압축기 및 고압 가스 압축 시스템 전문 제조사",
      products: ["Compressor"],
    },
    {
      name: "CASTANET",
      country: "France",
      year: "2021",
      relationship: "Wearing Parts 대리점",
      description: "압축기용 피스톤, 라이너 등 소모성 부품 전문 제조사",
      products: ["Piston", "Wearing Parts"],
    },
    {
      name: "KB DELTA",
      country: "USA",
      year: "2021",
      relationship: "대리점",
      description: "압축기용 밸브 전문 제조사",
      products: ["Valve"],
    },
    {
      name: "TURBO LINK",
      country: "Korea",
      year: "2024",
      relationship: "정유·석유화학 분야 대리점",
      description: "고성능 베어링 전문 제조사",
      products: ["Bearing"],
    },
    {
      name: "WTQ",
      country: "China",
      year: "2025",
      relationship: "한국 대리점",
      description: "선박용 실린더 라이너 전문 제조사",
      products: ["Cylinder Liner"],
    },
    {
      name: "CP Pumpen",
      country: "Switzerland",
      year: "2025",
      relationship: "울산 대리점",
      description: "산업용 펌프 시스템 전문 제조사",
      products: ["Pump"],
    },
    {
      name: "FIMA",
      country: "Germany",
      year: "2025",
      relationship: "대리점",
      description: "압축기 전문 제조사",
      products: ["Compressor"],
    },
    {
      name: "NIDEC",
      country: "Japan",
      year: "-",
      relationship: "파트너",
      description: "세계 최대 모터 제조업체",
      products: ["Motor"],
    },
    {
      name: "삼영필텍 (SYT)",
      country: "Korea",
      year: "-",
      relationship: "파트너",
      description: "오일 정화 장비 전문 제조사",
      products: ["Oil Purifier"],
    },
  ];

  const clients = [
    {
      name: "SK에너지",
      industry: "정유",
      description: "국내 1위 정유사",
    },
    {
      name: "S-OIL",
      industry: "정유",
      description: "국내 주요 정유사",
    },
    {
      name: "GS칼텍스",
      industry: "정유",
      description: "국내 주요 정유사",
    },
    {
      name: "HD현대오일뱅크",
      industry: "정유",
      description: "국내 주요 정유사",
    },
    {
      name: "TKG",
      industry: "석유화학",
      description: "석유화학 전문 기업",
    },
    {
      name: "Hanwha",
      industry: "종합",
      description: "대기업 그룹",
    },
    {
      name: "휴켐스",
      industry: "화학",
      description: "화학 전문 기업",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1628] via-[#1A2D47] to-[#0A1628] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partners & Clients
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              라온토탈솔루션은 전 세계 최고 수준의 제조사들과 공식 파트너십 및
              대리점 계약을 맺고,
              <br />
              국내 유수의 에너지·화학·중공업 기업들에게 검증된 솔루션을
              제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Global Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              글로벌 파트너
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              전 세계 최고 수준의 제조사들과 공식 파트너십 및 대리점 계약을
              맺고, 안정적이고 검증된 부품만을 공급합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {globalPartners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all"
              >
                {/* Partner Logo Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <div className="text-4xl mb-2">🏢</div>
                    <p className="text-sm font-semibold text-slate-600">
                      {partner.name}
                    </p>
                    <p className="text-xs text-slate-400">로고 삽입 예정</p>
                  </div>
                </div>

                {/* Partner Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-[#0A1628]">
                      {partner.name}
                    </h3>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                      {partner.country}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200">
                    <div className="flex items-center text-sm text-slate-600 mb-2">
                      <span className="font-semibold mr-2">계약 연도:</span>
                      <span>{partner.year}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 mb-3">
                      <span className="font-semibold mr-2">관계:</span>
                      <span>{partner.relationship}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {partner.products.map((product, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 py-1 bg-[#3B82F6] text-white text-xs rounded-full"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            파트너십의 강점
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                공식 대리점 계약
              </h3>
              <p className="text-slate-600 text-sm">
                모든 파트너사와 공식 대리점 계약을 체결하여 정품 부품만을
                공급합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                글로벌 네트워크
              </h3>
              <p className="text-slate-600 text-sm">
                유럽, 미국, 아시아 등 전 세계 최고 수준의 제조사들과
                파트너십을 보유하고 있습니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                기술 지원
              </h3>
              <p className="text-slate-600 text-sm">
                제조사와의 긴밀한 협력을 통해 신속한 기술 지원과 A/S를
                제공합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                안정적 공급
              </h3>
              <p className="text-slate-600 text-sm">
                파트너사와의 협력으로 안정적인 재고 확보와 신속한 납기가
                가능합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                경쟁력 있는 가격
              </h3>
              <p className="text-slate-600 text-sm">
                대리점 계약을 통한 직접 공급으로 합리적인 가격을 제공합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                품질 보증
              </h3>
              <p className="text-slate-600 text-sm">
                제조사 직접 공급으로 품질을 보증하고 위조품 위험이 없습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              주요 고객사
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              국내 유수의 에너지, 화학, 중공업 기업들이 라온토탈솔루션의
              기술력과 서비스를 신뢰하고 있습니다.
            </p>
          </div>

          {/* Client Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="aspect-square bg-white border border-slate-200 rounded-lg flex items-center justify-center hover:border-[#3B82F6] hover:shadow-md transition-all p-4"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">🏢</div>
                  <p className="text-xs font-semibold text-slate-700">
                    {client.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">로고 삽입 예정</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Details */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#0A1628] mb-6">
              산업별 주요 고객사
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[#0A1628] mb-4 flex items-center">
                  <span className="text-[#3B82F6] mr-2">🏭</span>
                  정유·석유화학
                </h4>
                <ul className="space-y-2">
                  {clients
                    .filter((c) => c.industry === "정유")
                    .map((client, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>
                          <strong>{client.name}</strong> - {client.description}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#0A1628] mb-4 flex items-center">
                  <span className="text-[#3B82F6] mr-2">⚗️</span>
                  화학·중공업
                </h4>
                <ul className="space-y-2">
                  {clients
                    .filter(
                      (c) => c.industry !== "정유" && c.industry !== "정유"
                    )
                    .map((client, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>
                          <strong>{client.name}</strong> - {client.description}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-slate-200">
              <p className="text-slate-600 text-sm text-center">
                <span className="font-semibold text-[#0A1628]">30년 경험</span>
                을 바탕으로 국내 주요 에너지·화학·중공업 기업들에게 신뢰받는
                파트너로 자리매김하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#3B82F6] mb-2">30+</div>
              <p className="text-lg font-semibold text-[#0A1628] mb-1">
                업력 (년)
              </p>
              <p className="text-sm text-slate-600">
                2020년 설립 이후 30년 경험 보유
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#3B82F6] mb-2">10+</div>
              <p className="text-lg font-semibold text-[#0A1628] mb-1">
                글로벌 파트너사
              </p>
              <p className="text-sm text-slate-600">
                전 세계 최고 수준의 제조사 협력
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#3B82F6] mb-2">7+</div>
              <p className="text-lg font-semibold text-[#0A1628] mb-1">
                주요 고객사
              </p>
              <p className="text-sm text-slate-600">
                국내 유수 에너지·화학 기업
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            라온토탈솔루션과 함께하시겠습니까?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            글로벌 파트너십과 30년 경험을 바탕으로 최고의 솔루션을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              파트너십 문의
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              제품 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
