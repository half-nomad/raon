"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductIntro } from "@/components/products/product-intro";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  { src: "/images/products/motor/definitepurpose.webp", alt: "Definite Purpose Motor" },
  { src: "/images/products/motor/FRACTIONAL.webp", alt: "Fractional Motor" },
  { src: "/images/products/motor/iecmotor.webp", alt: "IEC Motor" },
  { src: "/images/products/motor/WPII.webp", alt: "WPII Motor" },
  { src: "/images/products/motor/Capacitorstartmotor.webp", alt: "Capacitor Start Motor" },
  { src: "/images/products/motor/splitphase.webp", alt: "Split Phase Motor" },
  { src: "/images/products/motor/severeduty.webp", alt: "Severe Duty Motor" },
  { src: "/images/products/motor/AGDutySinglephase_edit.webp", alt: "AG Duty Single Phase Motor" },
];

export default function MotorPage() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("spare-parts");
  const [sparePartsImageIdx, setSparePartsImageIdx] = useState(0);

  const subNavItems = [
    { id: "spare-parts", label: t("products.motorPage.subNav.spareParts") },
    { id: "certification", label: t("products.motorPage.subNav.certification") },
  ];

  const partners = [
    {
      name: "LDW",
      fullName: "Lloyd Dynamowerke GmbH",
      country: "Germany",
      logo: "/images/partners/ldw_logo.png",
      description: t("products.motorPage.partners.ldw.description"),
    },
    {
      name: "NIDEC",
      fullName: t("products.motorPage.partners.nidec.fullName"),
      country: "Italy",
      logo: "/images/partners/nidec.webp",
      description: t("products.motorPage.partners.nidec.description"),
    },
  ];

  const sparePartsServices = [
    t("products.motorPage.sparePartsServices.techSupport"),
    t("products.motorPage.sparePartsServices.supervisorDispatch"),
    t("products.motorPage.sparePartsServices.genuineParts"),
    t("products.motorPage.sparePartsServices.fieldEngineers"),
  ];

  const certificationAgencies = [
    {
      code: "KOSHA",
      name: t("products.motorPage.certAgencies.kosha.name"),
      desc: t("products.motorPage.certAgencies.kosha.desc"),
    },
    {
      code: "KTL",
      name: t("products.motorPage.certAgencies.ktl.name"),
      desc: t("products.motorPage.certAgencies.ktl.desc"),
    },
    {
      code: "KGS",
      name: t("products.motorPage.certAgencies.kgs.name"),
      desc: t("products.motorPage.certAgencies.kgs.desc"),
    },
  ];

  const certificationServices = [
    t("products.motorPage.certServices.needAssessment"),
    t("products.motorPage.certServices.procedureConsulting"),
    t("products.motorPage.certServices.documentSupport"),
    t("products.motorPage.certServices.agencyResponse"),
  ];

  const certificationProcess = [
    { step: 1, title: t("products.motorPage.certProcess.step1.title"), desc: t("products.motorPage.certProcess.step1.desc") },
    { step: 2, title: t("products.motorPage.certProcess.step2.title"), desc: t("products.motorPage.certProcess.step2.desc") },
    { step: 3, title: t("products.motorPage.certProcess.step3.title"), desc: t("products.motorPage.certProcess.step3.desc") },
    { step: 4, title: t("products.motorPage.certProcess.step4.title"), desc: t("products.motorPage.certProcess.step4.desc") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map(item => document.getElementById(item.id));
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
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const goToPrev = (current: number, total: number, setter: (v: number) => void) => {
    setter((current - 1 + total) % total);
  };
  const goToNext = (current: number, total: number, setter: (v: number) => void) => {
    setter((current + 1) % total);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-[172px] pb-24 bg-gradient-to-br from-[#0A1628] via-[#0f1d32] to-[#1a2942] text-white">
          <div className="section-container">
            <BackButton href="/products" variant="dark" />
            <Breadcrumb
              variant="dark"
              items={[
                { label: "HOME", href: "/" },
                { label: "PRODUCTS", href: "/products" },
                { label: "MOTOR" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              MOTOR
            </h1>
            <p className="text-slate-300 mt-3 text-base md:text-lg max-w-2xl">
              {t("products.motorPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Product Intro */}
        <ProductIntro
          title={t("products.motorPage.introTitle")}
          description={t("products.motorPage.introDescription")}
          images={heroImages}
          partners={[
            { name: "LDW", country: t("products.motorPage.countryGermany") },
            { name: "NIDEC", country: t("products.motorPage.countryItaly") },
          ]}
          highlights={[
            t("products.motorPage.highlights.syncInductionMotor"),
            t("products.motorPage.highlights.explosionProofConsulting"),
            t("products.motorPage.highlights.thirtyYearTrackRecord"),
            t("products.motorPage.highlights.globalPartnerNetwork"),
          ]}
        />

        {/* Sticky Sub Navigation */}
        <nav className="sticky top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200">
          <div className="section-container">
            <div className="flex overflow-x-auto scrollbar-hide">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-6 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors
                    ${activeSection === item.id
                      ? "text-[#0A1628]"
                      : "text-slate-500 hover:text-[#0A1628]"
                    }
                  `}
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

        {/* ========== Section 01: MOTOR SPARE PARTS ========== */}
        <section id="spare-parts" className="py-16 md:py-24 bg-[#0A1628]">
          <div className="section-container">
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                MOTOR SPARE PARTS
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
              <p className="text-slate-300 mt-4 max-w-2xl">
                {t("products.motorPage.sparePartsDescription")}
              </p>
            </div>

            <div className="grid lg:grid-cols-[7fr_3fr] gap-12 lg:gap-16 items-start">
              <div className="flex flex-col">
                <div className="space-y-6 mb-8">
                  {partners.map((partner, idx) => (
                    <div key={idx} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={40}
                        className="object-contain mb-3"
                      />
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {partner.name}
                      </h3>
                      <p className="text-slate-400 text-sm mb-1">{partner.fullName}</p>
                      <p className="text-[#3B82F6] font-medium">{partner.country}</p>
                      <p className="text-slate-300 mt-4 leading-relaxed">
                        {partner.description}
                      </p>
                      <p className="text-sm text-slate-400 mt-2">
                        {t("products.motorPage.partnerInstallNote")}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-6">{t("products.motorPage.serviceContentTitle")}</h4>
                  <div className="space-y-3">
                    {sparePartsServices.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-white/5 pl-4 py-3 pr-4"
                      >
                        <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="text-white font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                <Image
                  src={heroImages[sparePartsImageIdx].src}
                  alt={heroImages[sparePartsImageIdx].alt}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />

                <button
                  onClick={() => goToPrev(sparePartsImageIdx, heroImages.length, setSparePartsImageIdx)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label={t("products.motorPage.aria.prevMotorImage")}
                >
                  <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
                </button>

                <button
                  onClick={() => goToNext(sparePartsImageIdx, heroImages.length, setSparePartsImageIdx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  aria-label={t("products.motorPage.aria.nextMotorImage")}
                >
                  <ChevronRight className="w-5 h-5 text-[#0A1628]" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {heroImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setSparePartsImageIdx(dotIdx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        dotIdx === sparePartsImageIdx
                          ? "bg-[#0A1628] w-4"
                          : "bg-[#0A1628]/30 hover:bg-[#0A1628]/60"
                      }`}
                      aria-label={t("products.motorPage.aria.motorImageDot", { index: dotIdx + 1 })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Section 02: Explosion-Proof Certification Service ========== */}
        <section id="certification" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="mb-12">
              <span className="text-[#EF4444] font-bold text-sm tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mt-2">
                {t("products.motorPage.certSectionTitle")}
              </h2>
              <div className="w-16 h-1 bg-[#EF4444] mt-4" />
            </div>

            <div className="mb-8">
              <p className="text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.raw("products.motorPage.certDescription") }}
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {certificationAgencies.map((agency, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-xl bg-[#0A1628] border border-slate-700 hover:border-[#3B82F6]/50 hover:shadow-lg transition-all"
                >
                  <span className="text-3xl font-bold text-white/20">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-bold text-white text-xl mt-2">{agency.code}</h4>
                  <p className="text-slate-300 font-medium mt-1">{agency.name}</p>
                  <p className="text-sm text-slate-400 mt-2">{agency.desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-[#0A1628] mb-4">{t("products.motorPage.certProcessTitle")}</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {certificationProcess.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4"
                  >
                    <span className="text-[#3B82F6] font-bold text-lg">{String(item.step).padStart(2, '0')}</span>
                    <div>
                      <h5 className="font-semibold text-[#0A1628]">{item.title}</h5>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#0A1628] mb-4">{t("products.motorPage.certServiceContentTitle")}</h4>
              <div className="space-y-3">
                {certificationServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 border-l-4 border-[#3B82F6] bg-slate-50 pl-4 py-3 pr-4"
                  >
                    <span className="text-[#3B82F6] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-[#0A1628] font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-[#0A1628] via-[#1A2D47] to-[#0A1628] text-white py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          <div className="section-container text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("products.motorPage.cta.title")}
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              {t("products.motorPage.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EF4444] text-white rounded-full font-semibold hover:bg-[#DC2626] transition-colors"
              >
                {t("products.motorPage.cta.requestConsultation")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {t("products.motorPage.cta.viewOtherProducts")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
