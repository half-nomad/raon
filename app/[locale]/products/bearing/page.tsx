import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Zap, Dumbbell, Target, Thermometer, Timer, Flag, Factory, Waves, Cog, Wind, FlaskConical, Droplets, Wrench, Settings, RefreshCw } from "lucide-react";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: 'Bearing & Lubrication | 베어링 및 윤활 솔루션',
  description: '터보링크 고성능 베어링 및 삼영필텍 윤활 솔루션 전문 공급. Tilting Pad Journal/Thrust Bearing, Vertical Guide, Oil Purifier, Flushing Service 제공.',
  keywords: ['Bearing', '베어링', '터보링크', 'Tilting Pad', 'Thrust Bearing', 'Journal Bearing', 'Oil Purifier', '오일 정화기', '삼영필텍', '윤활'],
  openGraph: {
    title: 'Bearing & Lubrication | 라온토탈솔루션',
    description: '터보링크 고성능 베어링 및 삼영필텍 윤활 솔루션 전문 공급',
    images: ['/images/og/bearing-og.jpg'],
  },
};

// Bearing 이미지 데이터 정의
const bearingImages = [
  { src: "/images/products/bearing/bearing_TILTING PAD THRUST BEARING.png", alt: "Tilting Pad Thrust Bearing" },
  { src: "/images/products/bearing/bearing_VERTICAL BEARING.png", alt: "Vertical Bearing" },
  { src: "/images/products/bearing/bearing_JOURNAL & THRUST COMBINED BEARING.png", alt: "Journal & Thrust Combined Bearing" },
  { src: "/images/products/bearing/bearing_FIXED PROFILE BEARING.png", alt: "Fixed Profile Bearing" },
];

// Lubrication 이미지 데이터 정의
const lubricationImages = [
  { src: "/images/products/oil-purifier/Oil Purifier_1.png", alt: "Oil Purifier 1" },
  { src: "/images/products/oil-purifier/Oil Purifier_2.png", alt: "Oil Purifier 2" },
  { src: "/images/products/oil-purifier/Oil Purifier_3.png", alt: "Oil Purifier 3" },
  { src: "/images/products/oil-purifier/Oil Purifier_4.png", alt: "Oil Purifier 4" },
];

export default async function BearingPage() {
  const t = await getTranslations();

  // Bearing products data
  const bearingProducts = [
    {
      title: "TILTING PAD JOURNAL BEARING",
      description: t("products.bearingPage.bearing.products.journal.description"),
    },
    {
      title: "TILTING PAD THRUST BEARING",
      description: t("products.bearingPage.bearing.products.thrust.description"),
    },
    {
      title: "VERTICAL GUIDE BEARING",
      description: t("products.bearingPage.bearing.products.vertical.description"),
    },
    {
      title: "JOURNAL & THRUST COMBINED",
      description: t("products.bearingPage.bearing.products.combined.description"),
    },
  ];

  // Bearing services data
  const bearingServices = [
    {
      icon: <Wrench className="w-8 h-8 text-[#3B82F6]" />,
      title: "REPAIR",
      description: t("products.bearingPage.bearing.services.repair"),
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-[#3B82F6]" />,
      title: "RETROFIT",
      description: t("products.bearingPage.bearing.services.retrofit"),
    },
    {
      icon: <Settings className="w-8 h-8 text-[#3B82F6]" />,
      title: "REPLACEMENT",
      description: t("products.bearingPage.bearing.services.replacement"),
    },
  ];

  // Lubrication products data
  const lubricationProducts = [
    {
      icon: <Droplets className="w-10 h-10 text-[#3B82F6]" />,
      title: "Oil Purifier",
      description: t("products.bearingPage.lubrication.products.purifier.description"),
    },
    {
      icon: <Cog className="w-10 h-10 text-[#3B82F6]" />,
      title: "Rental Service",
      description: t("products.bearingPage.lubrication.products.rental.description"),
    },
    {
      icon: <Waves className="w-10 h-10 text-[#3B82F6]" />,
      title: "Flushing Service",
      description: t("products.bearingPage.lubrication.products.flushing.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Bearing & Lubrication (베어링 및 윤활 솔루션)"
        description="터보링크 고성능 베어링 및 삼영필텍 윤활 솔루션. Tilting Pad Journal/Thrust Bearing, Vertical Guide, Oil Purifier, Flushing Service 제공."
        category="베어링 및 윤활"
        manufacturers={[{ name: '터보링크' }, { name: '삼영필텍' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Bearing & Lubrication', url: '/products/bearing' },
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
              { label: "Bearing & Lubrication" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              {t("products.bearingPage.hero.partners")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bearing & Lubrication
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {t("products.bearingPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Sub Navigation */}
      <section className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="flex justify-center gap-4 md:gap-8">
            <a
              href="#bearing-solution"
              className="py-4 px-4 md:px-6 text-sm md:text-base font-semibold text-[#0A1628] border-b-2 border-transparent hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
            >
              BEARING SOLUTION
            </a>
            <a
              href="#lubrication-solution"
              className="py-4 px-4 md:px-6 text-sm md:text-base font-semibold text-[#0A1628] border-b-2 border-transparent hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
            >
              LUBRICATION SOLUTION
            </a>
          </div>
        </div>
      </section>

      {/* BEARING SOLUTION Section */}
      <section id="bearing-solution" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-semibold rounded-full mb-4">
              {t("products.bearingPage.bearing.partner")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              BEARING SOLUTION
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("products.bearingPage.bearing.sectionDescription")}
            </p>
          </div>

          {/* Main Content - Image Left */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Image Gallery */}
            <div className="order-1">
              <ImageGallery images={bearingImages} />
            </div>

            {/* Content */}
            <div className="order-2">
              <h3 className="text-2xl font-bold text-[#0A1628] mb-6">
                {t("products.bearingPage.bearing.overviewTitle")}
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {t("products.bearingPage.bearing.overviewDescription")}
              </p>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {bearingProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-[#3B82F6] transition-colors"
                  >
                    <h4 className="font-bold text-[#0A1628] mb-2 text-sm">
                      {product.title}
                    </h4>
                    <p className="text-slate-600 text-xs">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Partner Brand Box */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-[#0A1628] mb-3">
                  {t("products.bearingPage.bearing.partnerBrand")}
                </h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <strong>{t("products.bearingPage.bearing.turbolinkName")}</strong>
                  </p>
                  <p className="text-xs leading-relaxed">
                    {t("products.bearingPage.bearing.turbolinkDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">
              {t("products.bearingPage.bearing.servicesTitle")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {bearingServices.map((service, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#3B82F6] hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h4 className="text-lg font-bold text-[#0A1628] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-200"></div>

      {/* LUBRICATION SOLUTION Section */}
      <section id="lubrication-solution" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-semibold rounded-full mb-4">
              {t("products.bearingPage.lubrication.partner")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              LUBRICATION SOLUTION
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("products.bearingPage.lubrication.sectionDescription")}
            </p>
          </div>

          {/* Main Content - Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-[#0A1628] mb-6">
                {t("products.bearingPage.lubrication.overviewTitle")}
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {t("products.bearingPage.lubrication.overviewDescription")}
              </p>

              {/* Products Grid */}
              <div className="space-y-4 mb-8">
                {lubricationProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#3B82F6] transition-colors flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">{product.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#0A1628] mb-1">
                        {product.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Partner Brand Box */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-[#0A1628] mb-3">
                  {t("products.bearingPage.lubrication.partnerBrand")}
                </h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <strong>{t("products.bearingPage.lubrication.samyoungName")}</strong>
                  </p>
                  <p className="text-xs leading-relaxed">
                    {t("products.bearingPage.lubrication.samyoungDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="order-1 lg:order-2">
              <ImageGallery images={lubricationImages} />
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">
              {t("products.bearingPage.lubrication.featuresTitle")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Droplets className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                <h4 className="font-bold text-[#0A1628] mb-2">
                  {t("products.bearingPage.lubrication.features.moisture.title")}
                </h4>
                <p className="text-slate-600 text-sm">
                  {t("products.bearingPage.lubrication.features.moisture.description")}
                </p>
              </div>
              <div className="text-center">
                <FlaskConical className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                <h4 className="font-bold text-[#0A1628] mb-2">
                  {t("products.bearingPage.lubrication.features.impurity.title")}
                </h4>
                <p className="text-slate-600 text-sm">
                  {t("products.bearingPage.lubrication.features.impurity.description")}
                </p>
              </div>
              <div className="text-center">
                <Timer className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                <h4 className="font-bold text-[#0A1628] mb-2">
                  {t("products.bearingPage.lubrication.features.lifeExtension.title")}
                </h4>
                <p className="text-slate-600 text-sm">
                  {t("products.bearingPage.lubrication.features.lifeExtension.description")}
                </p>
              </div>
              <div className="text-center">
                <Flag className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                <h4 className="font-bold text-[#0A1628] mb-2">
                  {t("products.bearingPage.lubrication.features.domestic.title")}
                </h4>
                <p className="text-slate-600 text-sm">
                  {t("products.bearingPage.lubrication.features.domestic.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            {t("products.bearingPage.industries.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Factory className="w-12 h-12 mb-3 text-[#3B82F6] mx-auto" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.bearingPage.industries.oilRefinery.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.bearingPage.industries.oilRefinery.description")}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Zap className="w-12 h-12 mb-3 text-[#3B82F6] mx-auto" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.bearingPage.industries.power.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.bearingPage.industries.power.description")}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Waves className="w-12 h-12 mb-3 text-[#3B82F6] mx-auto" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.bearingPage.industries.shipbuilding.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.bearingPage.industries.shipbuilding.description")}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Cog className="w-12 h-12 mb-3 text-[#3B82F6] mx-auto" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.bearingPage.industries.heavyIndustry.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.bearingPage.industries.heavyIndustry.description")}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <Wind className="w-12 h-12 mb-3 text-[#3B82F6] mx-auto" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.bearingPage.industries.hvac.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.bearingPage.industries.hvac.description")}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <FlaskConical className="w-12 h-12 mb-3 text-[#3B82F6] mx-auto" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.bearingPage.industries.research.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.bearingPage.industries.research.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("products.bearingPage.cta.title")}
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {t("products.bearingPage.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              {t("products.bearingPage.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {t("products.bearingPage.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
