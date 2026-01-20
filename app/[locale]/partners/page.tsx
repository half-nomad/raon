import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Globe, Wrench, Package, BadgeDollarSign, Award } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getTranslations } from "next-intl/server";

export default async function PartnersPage() {
  const t = await getTranslations("partners");
  const globalPartners = [
    {
      name: "SPXFLOW",
      country: "Global",
      year: "2022",
      relationship: "한국 Master 대리점",
      description:
        "믹서, 교반기, 펌프 등 산업용 유체 처리 장비 전문 글로벌 기업",
      products: ["Mixer & Agitator", "Pump"],
      logo: "/images/partners/spx-flow.jpg",
    },
    {
      name: "NEUMAN & ESSER",
      country: "Global",
      year: "2024",
      relationship: "울산 대리점",
      description: "왕복동 압축기 및 고압 가스 압축 시스템 전문 제조사",
      products: ["Compressor"],
      logo: "/images/partners/neuman-esser.jpg",
    },
    {
      name: "CASTANET",
      country: "France",
      year: "2021",
      relationship: "Wearing Parts 대리점",
      description: "압축기용 피스톤, 라이너 등 소모성 부품 전문 제조사",
      products: ["Piston", "Wearing Parts"],
      logo: "/images/partners/castanet.jpg",
    },
    // KB DELTA - 노출 금지 (2025-12-18)
    // {
    //   name: "KB DELTA",
    //   country: "USA",
    //   year: "2021",
    //   relationship: "대리점",
    //   description: "압축기용 밸브 전문 제조사",
    //   products: ["Valve"],
    // },
    {
      name: "TURBO LINK",
      country: "Korea",
      year: "2024",
      relationship: "정유·석유화학 분야 대리점",
      description: "고성능 베어링 전문 제조사",
      products: ["Bearing"],
      logo: "/images/partners/turbolink.jpg",
    },
    {
      name: "WTQ",
      country: "China",
      year: "2025",
      relationship: "한국 대리점",
      description: "선박용 실린더 라이너 전문 제조사",
      products: ["Cylinder Liner"],
      logo: "/images/partners/wtq.jpg",
    },
    {
      name: "CP Pumpen",
      country: "Switzerland",
      year: "2025",
      relationship: "울산 대리점",
      description: "산업용 펌프 시스템 전문 제조사",
      products: ["Pump"],
      logo: "/images/partners/cp-pump-systems.jpg",
    },
    {
      name: "FIMA",
      country: "Germany",
      year: "2025",
      relationship: "대리점",
      description: "압축기 전문 제조사",
      products: ["Compressor"],
      logo: "/images/partners/fima.jpg",
    },
    {
      name: "NIDEC",
      country: "Japan",
      year: "-",
      relationship: "파트너",
      description: "세계 최대 모터 제조업체",
      products: ["Motor"],
      logo: "/images/partners/nidec.webp",
    },
    {
      name: "삼영필텍 (SYT)",
      country: "Korea",
      year: "-",
      relationship: "파트너",
      description: "오일 정화 장비 전문 제조사",
      products: ["Oil Purifier"],
      logo: "/images/partners/syt.jpg",
    },
    {
      name: "LDW",
      country: "Germany",
      year: "-",
      relationship: "파트너",
      description: "대형 전동기/발전기 전문 제조사 (Lloyd Dynamowerke GmbH)",
      products: ["Motor", "Generator"],
      logo: "/images/partners/ldw_logo.png",
    },
  ];

  const clients = [
    {
      name: "SK에너지",
      industry: "정유",
      description: "국내 1위 정유사",
      logo: "/images/clients/sk-logo.JPG",
    },
    {
      name: "S-OIL",
      industry: "정유",
      description: "국내 주요 정유사",
      logo: "/images/clients/soil-logo.JPG",
    },
    {
      name: "GS칼텍스",
      industry: "정유",
      description: "국내 주요 정유사",
      logo: "/images/clients/gs-caltex-logo.webp",
    },
    {
      name: "HD현대오일뱅크",
      industry: "정유",
      description: "국내 주요 정유사",
      logo: "/images/clients/hd-oilbank-logo.png",
    },
    {
      name: "TJG Huchems",
      industry: "석유화학",
      description: "석유화학 전문 기업",
      logo: "/images/clients/tjg-huchems-logo.png",
    },
    {
      name: "Hanwha",
      industry: "종합",
      description: "대기업 그룹",
      logo: "/images/clients/hanhwa-logo.webp",
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

        <div className="relative z-10 section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t("hero.description")}
              <br />
              {t("hero.descriptionLine2")}
            </p>
          </div>
        </div>
      </section>

      {/* Global Partners */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("globalPartners.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("globalPartners.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {globalPartners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all"
              >
                {/* Partner Logo */}
                <div className="aspect-video bg-white border border-slate-100 rounded-lg mb-4 flex items-center justify-center p-4 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
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
                      <span className="font-semibold mr-2">{t("globalPartners.partnerInfo.contractYear")}</span>
                      <span>{partner.year}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 mb-3">
                      <span className="font-semibold mr-2">{t("globalPartners.partnerInfo.relationship")}</span>
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
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            {t("whyPartner.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                {t("whyPartner.items.officialContract.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("whyPartner.items.officialContract.description")}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Globe className="w-10 h-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                {t("whyPartner.items.globalNetwork.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("whyPartner.items.globalNetwork.description")}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Wrench className="w-10 h-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                {t("whyPartner.items.techSupport.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("whyPartner.items.techSupport.description")}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Package className="w-10 h-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                {t("whyPartner.items.stableSupply.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("whyPartner.items.stableSupply.description")}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <BadgeDollarSign className="w-10 h-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                {t("whyPartner.items.competitivePrice.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("whyPartner.items.competitivePrice.description")}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Award className="w-10 h-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                {t("whyPartner.items.qualityAssurance.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("whyPartner.items.qualityAssurance.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("majorClients.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("majorClients.description")}
            </p>
          </div>

          {/* Client Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg flex items-center justify-center hover:border-[#3B82F6] hover:shadow-md transition-all p-8 h-32"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Client Highlight */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0A1628] mb-4">
                {t("majorClients.trustSection.title")}
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                {t("majorClients.trustSection.description")}
              </p>
              <div className="p-6 bg-white rounded-lg border border-slate-200">
                <p className="text-slate-600 text-sm">
                  {t("majorClients.trustSection.experience")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#3B82F6] mb-2">30+</div>
              <p className="text-lg font-semibold text-[#0A1628] mb-1">
                {t("stats.experience")}
              </p>
              <p className="text-sm text-slate-600">
                {t("stats.experienceDesc")}
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#3B82F6] mb-2">9+</div>
              <p className="text-lg font-semibold text-[#0A1628] mb-1">
                {t("stats.partners")}
              </p>
              <p className="text-sm text-slate-600">
                {t("stats.partnersDesc")}
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#3B82F6] mb-2">6+</div>
              <p className="text-lg font-semibold text-[#0A1628] mb-1">
                {t("stats.clients")}
              </p>
              <p className="text-sm text-slate-600">
                {t("stats.clientsDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              {t("cta.partnershipInquiry")}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {t("cta.viewProducts")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
