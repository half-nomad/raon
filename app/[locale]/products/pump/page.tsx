import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";
import { CheckCircle, AlertTriangle, Wrench, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: 'Pump | CP Pumpen Magnetic Drive Pump',
  description: 'CP Pumpen 마그네틱 드라이브 펌프 전문. MKP, MKPL, MKP-Bio, MSKS, MSKP 등 다양한 모델로 부식성 유체, Slurry 문제 해결.',
  keywords: ['Pump', '펌프', 'CP Pumpen', 'Magnetic Drive Pump', 'Chemical Pump', '마그네틱 펌프'],
  openGraph: {
    title: 'Pump | 라온토탈솔루션',
    description: 'CP Pumpen 마그네틱 드라이브 펌프. 부식성 유체, Slurry 문제 해결',
    images: ['/images/og/pump-og.jpg'],
  },
};

// 이미지 데이터 정의
const pumpSolutionImage = "/images/products/pump/pump_2-1.PNG";
const troubleShootingImage = "/images/products/pump/pump_2-2.PNG";

export default async function PumpPage() {
  const t = await getTranslations("products.pump");

  const lineupItems = t.raw("pumpSolution.lineup.items") as string[];
  const featureItems = t.raw("pumpSolution.features.items") as string[];
  const problemItems = t.raw("troubleShooting.problems.items") as string[];
  const solutionItems = t.raw("troubleShooting.solutions.items") as string[];

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Pump (CP Pumpen Magnetic Drive Pump)"
        description="CP Pumpen 마그네틱 드라이브 펌프 전문. MKP, MKPL, MKP-Bio, MSKS, MSKP 등 다양한 모델로 부식성 유체, Slurry 문제 해결."
        category="펌프"
        manufacturers={[{ name: 'CP Pumpen' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Pump', url: '/products/pump' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl">
            <BackButton href="/products" variant="dark" />

            <Breadcrumb variant="dark" items={[
              { label: "HOME", href: "/" },
              { label: "PRODUCTS", href: "/products" },
              { label: "Pump" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              CP Pumpen
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pump</h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Submenu Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <nav className="flex gap-8 py-4">
            <a
              href="#pump-solution"
              className="text-sm font-semibold text-[#0A1628] hover:text-[#3B82F6] transition-colors pb-2 border-b-2 border-transparent hover:border-[#3B82F6]"
            >
              {t("submenu.pumpSolution")}
            </a>
            <a
              href="#trouble-shooting"
              className="text-sm font-semibold text-[#0A1628] hover:text-[#3B82F6] transition-colors pb-2 border-b-2 border-transparent hover:border-[#3B82F6]"
            >
              {t("submenu.troubleShooting")}
            </a>
          </nav>
        </div>
      </section>

      {/* Section 1: PUMP SOLUTION (Image Left) */}
      <section id="pump-solution" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src={pumpSolutionImage}
                alt="CP Pump Magnetic Drive Pump"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Content - Right */}
            <div className="order-1 md:order-2">
              <div className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-semibold rounded-full mb-4">
                {t("pumpSolution.title")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
                {t("pumpSolution.subtitle")}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t("pumpSolution.description")}
              </p>

              {/* Product Lineup */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0A1628] mb-4">
                  {t("pumpSolution.lineup.title")}
                </h3>
                <ul className="space-y-2">
                  {lineupItems.map((item, index) => (
                    <li key={index} className="flex items-start text-slate-700">
                      <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-[#0A1628] mb-4">
                  {t("pumpSolution.features.title")}
                </h3>
                <ul className="space-y-3">
                  {featureItems.map((item, index) => (
                    <li key={index} className="flex items-start text-slate-700">
                      <CheckCircle className="w-5 h-5 text-[#3B82F6] mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: TROUBLE SHOOTING (Image Right) */}
      <section id="trouble-shooting" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content - Left */}
            <div>
              <div className="inline-block px-3 py-1 bg-[#EF4444]/10 text-[#EF4444] text-sm font-semibold rounded-full mb-4">
                {t("troubleShooting.title")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
                {t("troubleShooting.subtitle")}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t("troubleShooting.description")}
              </p>

              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-xl p-6 mb-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("troubleShooting.highlight")}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {t("troubleShooting.highlightDescription")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Problems & Solutions Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Problems */}
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
                    <h4 className="font-bold text-[#0A1628]">
                      {t("troubleShooting.problems.title")}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {problemItems.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-slate-600">
                        <span className="text-[#EF4444] mr-2 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-[#3B82F6]" />
                    <h4 className="font-bold text-[#0A1628]">
                      {t("troubleShooting.solutions.title")}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {solutionItems.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-slate-600">
                        <Shield className="w-4 h-4 text-[#3B82F6] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image - Right */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={troubleShootingImage}
                alt="CP Pump Trouble Shooting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
              {t("cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {t("cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
