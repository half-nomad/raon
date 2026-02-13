"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Globe,
  Wrench,
  Package,
  BadgeDollarSign,
  Award,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useTranslations } from "next-intl";

const subNavItems = [
  { id: "compressor", label: "COMPRESSOR" },
  { id: "pump", label: "PUMP" },
  { id: "mixer", label: "MIXER" },
  { id: "bearing-lubrication", label: "BEARING & LUBRICATION" },
  { id: "motor", label: "MOTOR" },
];

export default function PartnersPage() {
  const t = useTranslations("partners");
  const [activeSection, setActiveSection] = useState("compressor");

  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(subNavItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const partnerCategories = [
    {
      id: "compressor",
      label: "COMPRESSOR",
      description: t("categories.compressor.description"),
      partners: [
        {
          name: "FIMA",
          country: "Germany",
          logo: "/images/partners/fima.jpg",
          relationship: t("partnerDetails.fima.relationship"),
          description: t("categories.compressor.fima"),
          products: ["Turbo Compressor", "Blower"],
          highlight: t("partnerDetails.fima.highlight"),
        },
        {
          name: "NEUMAN & ESSER",
          country: "Germany",
          logo: "/images/partners/neuman-esser.jpg",
          relationship: t("partnerDetails.neumanEsser.relationship"),
          description: t("categories.compressor.neumanEsser"),
          products: ["Reciprocating Compressor", "After Market", "Revamping"],
          highlight: t("partnerDetails.neumanEsser.highlight"),
        },
        {
          name: "CASTANET",
          country: "France",
          logo: "/images/partners/castanet.jpg",
          relationship: t("partnerDetails.castanet.relationship"),
          description: t("categories.compressor.castanet"),
          products: [
            "Piston Ring",
            "Rider Ring",
            "Packing Ring",
            "Oil Scraper",
          ],
          highlight: t("partnerDetails.castanet.highlight"),
        },
        // KB DELTA - 노출 금지 (2025-12-18)
        {
          name: "WTQ",
          country: "China",
          logo: "/images/partners/wtq.jpg",
          relationship: t("partnerDetails.wtq.relationship"),
          description: t("categories.compressor.wtq"),
          products: ["Cylinder Liner"],
          highlight: t("partnerDetails.wtq.highlight"),
        },
      ],
    },
    {
      id: "pump",
      label: "PUMP",
      description: t("categories.pump.description"),
      partners: [
        {
          name: "CP PUMP",
          country: "Switzerland",
          logo: "/images/partners/cp-pump-systems.jpg",
          relationship: t("partnerDetails.cpPump.relationship"),
          description: t("categories.pump.cpPump"),
          products: ["Chemical Process Pump", "Magnetic Drive Pump"],
          highlight: t("partnerDetails.cpPump.highlight"),
        },
      ],
    },
    {
      id: "mixer",
      label: "MIXER",
      description: t("categories.mixer.description"),
      partners: [
        {
          name: "SPXFLOW",
          country: "Global",
          logo: "/images/partners/spx-flow.jpg",
          relationship: t("partnerDetails.spxflow.relationship"),
          description: t("categories.mixer.spxflow"),
          products: [
            "LIGHTNIN",
            "STELZER",
            "PLENTY",
            "PHILADELPHIA",
            "UUTECHNIC",
          ],
          highlight: t("partnerDetails.spxflow.highlight"),
        },
      ],
    },
    {
      id: "bearing-lubrication",
      label: "BEARING & LUBRICATION",
      description: t("categories.bearingLubrication.description"),
      partners: [
        {
          name: "TURBO LINK",
          country: "Korea",
          logo: "/images/partners/turbolink.jpg",
          relationship: t("partnerDetails.turbolink.relationship"),
          description: t("categories.bearingLubrication.turbolink"),
          products: ["Tilting Pad Bearing", "Fluid Film Bearing"],
          highlight: t("partnerDetails.turbolink.highlight"),
        },
        {
          name: "삼영필텍 (SYT)",
          country: "Korea",
          logo: "/images/partners/syt.jpg",
          relationship: t("partnerDetails.syt.relationship"),
          description: t("categories.bearingLubrication.syt"),
          products: ["Oil Purifier"],
        },
      ],
    },
    {
      id: "motor",
      label: "MOTOR",
      description: t("categories.motor.description"),
      partners: [
        {
          name: "LDW",
          country: "Germany",
          logo: "/images/partners/ldw_logo.png",
          relationship: t("partnerDetails.ldw.relationship"),
          description: t("categories.motor.ldw"),
          products: ["DC Motor", "Generator", "3-Phase Induction Motor"],
          highlight: t("partnerDetails.ldw.highlight"),
        },
        {
          name: "NIDEC",
          country: "Japan",
          logo: "/images/partners/nidec.webp",
          relationship: t("partnerDetails.nidec.relationship"),
          description: t("categories.motor.nidec"),
          products: ["Synchronous Motor", "Induction Motor"],
        },
      ],
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

      {/* Sticky Sub-Navigation */}
      <nav className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200">
        <div className="section-container">
          <div className="flex overflow-x-auto scrollbar-hide">
            {subNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
                  activeSection === item.id
                    ? "text-[#0A1628]"
                    : "text-slate-500 hover:text-[#0A1628]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#EF4444]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Category Sections */}
      {partnerCategories.map((category, categoryIdx) => {
        const isOdd = categoryIdx % 2 === 0;
        const sectionNumber = String(categoryIdx + 1).padStart(2, "0");

        return (
          <section
            key={category.id}
            id={category.id}
            className={`py-16 md:py-24 ${
              isOdd ? "bg-[#0A1628] text-white" : "bg-white text-[#0A1628]"
            }`}
          >
            <div className="section-container">
              <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <div className="mb-12">
                <span className="text-[#EF4444] font-bold text-sm tracking-wider">
                  {sectionNumber}
                </span>
                <h2
                  className={`text-2xl md:text-3xl font-bold mt-2 ${
                    isOdd ? "text-white" : "text-[#0A1628]"
                  }`}
                >
                  {category.label}
                </h2>
                <div className="w-16 h-1 bg-[#EF4444] mt-4" />
                <p
                  className={`mt-4 max-w-2xl ${
                    isOdd ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {category.description}
                </p>
              </div>

              {/* Partner Entries */}
              {isOdd ? (
                <div className="space-y-0 divide-y divide-white/10">
                  {category.partners.map((partner, pIdx) => (
                    <div key={pIdx} className="flex flex-col md:flex-row gap-5 md:gap-8 items-start py-8 first:pt-0 last:pb-0">
                      {/* Logo - constrained */}
                      <div className="flex-shrink-0 w-[140px] md:w-[160px] h-[60px] md:h-[70px] bg-white rounded-lg flex items-center justify-center p-3">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={160}
                          height={70}
                          className="object-contain max-w-[120px] max-h-[50px]"
                        />
                      </div>

                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                          <span className="px-2.5 py-0.5 bg-white/10 text-slate-300 text-xs rounded-full">{partner.country}</span>
                        </div>
                        <p className="text-[#3B82F6] text-sm font-medium mb-3">{partner.relationship}</p>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">{partner.description}</p>
                        {partner.highlight && (
                          <p className="text-[#93C5FD] text-xs leading-relaxed bg-blue-900/20 px-3 py-2 rounded inline-block mb-3">{partner.highlight}</p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {partner.products.map((product, pidx) => (
                            <span key={pidx} className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] text-xs rounded-full border border-[#3B82F6]/30">{product}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-0 divide-y divide-slate-200">
                  {category.partners.map((partner, pIdx) => (
                    <div key={pIdx} className="flex flex-col md:flex-row gap-5 md:gap-8 items-start py-8 first:pt-0 last:pb-0">
                      {/* Logo - constrained */}
                      <div className="flex-shrink-0 w-[140px] md:w-[160px] h-[60px] md:h-[70px] bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center p-3">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={160}
                          height={70}
                          className="object-contain max-w-[120px] max-h-[50px]"
                        />
                      </div>

                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-[#0A1628]">{partner.name}</h3>
                          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">{partner.country}</span>
                        </div>
                        <p className="text-[#3B82F6] text-sm font-medium mb-3">{partner.relationship}</p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">{partner.description}</p>
                        {partner.highlight && (
                          <p className="text-[#3B82F6] text-xs leading-relaxed bg-blue-50 px-3 py-2 rounded inline-block mb-3">{partner.highlight}</p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {partner.products.map((product, pidx) => (
                            <span key={pidx} className="px-3 py-1 bg-[#3B82F6] text-white text-xs rounded-full">{product}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("certifications.title")}
            </h2>
            <div className="w-16 h-1 bg-[#EF4444] mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("certifications.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <Image
                src="/images/partners/cerification1.png"
                alt="SPXFLOW, NEUMAN & ESSER, TURBOLINK 인증서"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-xs text-slate-500 text-center mt-3">
                SPXFLOW · NEUMAN & ESSER · TURBOLINK
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <Image
                src="/images/partners/certification2.png"
                alt="KB DELTA, FIMA, LDW 인증서"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-xs text-slate-500 text-center mt-3">
                FIMA · LDW · KB DELTA
              </p>
            </div>
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

          {/* Client Logo Grid - Single Row */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg flex items-center justify-center hover:border-[#3B82F6] hover:shadow-md transition-all p-4 w-[140px] h-[80px] md:w-[160px] md:h-[90px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
            ))}
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
