"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle2, Globe, Wrench, Package, BadgeDollarSign, Award } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useTranslations } from "next-intl";

// Category type definition
type CategoryKey = "compressor" | "pump" | "mixer" | "bearing" | "motor";

// Partner data organized by category
const partnersByCategory: Record<CategoryKey, Array<{
  name: string;
  country: string;
  year: string;
  relationship: string;
  descriptionKey: string;
  products: string[];
  logo: string;
}>> = {
  compressor: [
    {
      name: "FIMA",
      country: "Germany",
      year: "2025",
      relationship: "대리점",
      descriptionKey: "fima",
      products: ["Compressor"],
      logo: "/images/partners/fima.jpg",
    },
    {
      name: "NEUMAN & ESSER",
      country: "Global",
      year: "2024",
      relationship: "울산 대리점",
      descriptionKey: "neumanEsser",
      products: ["Compressor"],
      logo: "/images/partners/neuman-esser.jpg",
    },
    {
      name: "CASTANET",
      country: "France",
      year: "2021",
      relationship: "Wearing Parts 대리점",
      descriptionKey: "castanet",
      products: ["Piston", "Wearing Parts"],
      logo: "/images/partners/castanet.jpg",
    },
    {
      name: "WTQ",
      country: "China",
      year: "2025",
      relationship: "한국 대리점",
      descriptionKey: "wtq",
      products: ["Cylinder Liner"],
      logo: "/images/partners/wtq.jpg",
    },
  ],
  pump: [
    {
      name: "CP Pumpen",
      country: "Switzerland",
      year: "2025",
      relationship: "울산 대리점",
      descriptionKey: "cpPump",
      products: ["Pump"],
      logo: "/images/partners/cp-pump-systems.jpg",
    },
  ],
  mixer: [
    {
      name: "SPXFLOW",
      country: "Global",
      year: "2022",
      relationship: "한국 Master 대리점",
      descriptionKey: "spxflow",
      products: ["Mixer & Agitator", "Pump"],
      logo: "/images/partners/spx-flow.jpg",
    },
  ],
  bearing: [
    {
      name: "TURBO LINK",
      country: "Korea",
      year: "2024",
      relationship: "정유·석유화학 분야 대리점",
      descriptionKey: "turbolink",
      products: ["Bearing"],
      logo: "/images/partners/turbolink.jpg",
    },
    {
      name: "삼영필텍 (SYT)",
      country: "Korea",
      year: "-",
      relationship: "파트너",
      descriptionKey: "samyoungFiltech",
      products: ["Oil Purifier"],
      logo: "/images/partners/syt.jpg",
    },
  ],
  motor: [
    {
      name: "LDW",
      country: "Germany",
      year: "-",
      relationship: "파트너",
      descriptionKey: "ldw",
      products: ["Motor", "Generator"],
      logo: "/images/partners/ldw_logo.png",
    },
    {
      name: "NIDEC",
      country: "Japan",
      year: "-",
      relationship: "파트너",
      descriptionKey: "nidec",
      products: ["Motor"],
      logo: "/images/partners/nidec.webp",
    },
  ],
};

const categories: { key: CategoryKey; label: string }[] = [
  { key: "compressor", label: "COMPRESSOR" },
  { key: "pump", label: "PUMP" },
  { key: "mixer", label: "MIXER" },
  { key: "bearing", label: "BEARING & LUBRICATION" },
  { key: "motor", label: "MOTOR" },
];

export default function PartnersPage() {
  const t = useTranslations("partners");
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);

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

  const scrollToSection = (categoryKey: CategoryKey) => {
    setActiveCategory(categoryKey);
    const element = document.getElementById(`category-${categoryKey}`);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => ({
        key: cat.key,
        element: document.getElementById(`category-${cat.key}`)
      }));

      const headerOffset = 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            setActiveCategory(section.key);
            return;
          }
        }
      }
      setActiveCategory(null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Category Menu Bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <nav className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => scrollToSection(category.key)}
                className={`px-4 py-2 text-sm font-semibold whitespace-nowrap rounded-full transition-all ${
                  activeCategory === category.key
                    ? "bg-[#3B82F6] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {t(`categories.${category.key}.title`)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Global Partners by Category */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("globalPartners.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("globalPartners.description")}
            </p>
          </div>

          {/* Category Sections */}
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.key} id={`category-${category.key}`} className="scroll-mt-32">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] px-4 py-2 bg-slate-50 rounded-full">
                    {t(`categories.${category.key}.title`)}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200"></div>
                </div>

                {/* Partners Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {partnersByCategory[category.key].map((partner, idx) => (
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
                          <h4 className="text-xl font-bold text-[#0A1628]">
                            {partner.name}
                          </h4>
                          <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                            {partner.country}
                          </span>
                        </div>

                        <p className="text-slate-700 text-sm leading-relaxed">
                          {t(`partnerDescriptions.${partner.descriptionKey}`)}
                        </p>

                        <div className="pt-3 border-t border-slate-200">
                          <div className="flex items-center text-sm text-slate-600 mb-2">
                            <span className="font-semibold mr-2">{t("globalPartners.partnerInfo.contractYear")}</span>
                            <span>{partner.year}</span>
                          </div>
                          <div className="flex items-center text-sm text-slate-600 mb-3">
                            <span className="font-semibold mr-2">{t("globalPartners.partnerInfo.relationship")}</span>
                            <span>{t(`relationships.${partner.descriptionKey}`)}</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
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
              <div className="text-5xl font-bold text-[#3B82F6] mb-2">10+</div>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
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
