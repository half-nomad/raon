import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";
import { Lightbulb, Droplets, FlaskConical, ShieldCheck, Zap, Settings, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: 'Mixer & Agitator | 산업용 믹서 솔루션',
  description: 'SPX FLOW 믹서 및 교반기 전문 공급. Lightnin, Plenty, Philadelphia, Stelzer, Uutechnic 브랜드로 다양한 유체 혼합, 균질화 솔루션 제공. 정유·석유화학 산업 최적화.',
  keywords: ['Mixer', 'Agitator', '믹서', '교반기', 'SPX FLOW', 'Lightnin', 'Plenty', 'Philadelphia', 'Stelzer', 'Uutechnic'],
  openGraph: {
    title: 'Mixer & Agitator | 라온토탈솔루션',
    description: 'SPX FLOW 믹서 및 교반기 전문 공급. 다양한 유체 혼합, 균질화 솔루션 제공',
    images: ['/images/og/mixer-og.jpg'],
  },
};

// 이미지 데이터 정의
const mixerImages = [
  { src: "/images/products/mixer/Mixer & Agitator_1.jpg", alt: "Mixer & Agitator 1" },
  { src: "/images/products/mixer/Mixer & Agitator_2.jpg", alt: "Mixer & Agitator 2" },
  { src: "/images/products/mixer/Mixer & Agitator_3.jpg", alt: "Mixer & Agitator 3" },
  { src: "/images/products/mixer/Mixer & Agitator_4.jpg", alt: "Mixer & Agitator 4" },
];

// 브랜드 데이터
const mixerBrands = [
  {
    id: "lightnin",
    name: "LIGHTNIN",
    logo: "/images/partners/lightnin-logo.png",
    color: "#0066B3",
  },
  {
    id: "plenty",
    name: "Plenty",
    logo: "/images/partners/plenty-logo.png",
    color: "#1E3A5F",
  },
  {
    id: "philadelphia",
    name: "Philadelphia",
    logo: "/images/partners/philadelphia-logo.png",
    color: "#00447C",
  },
  {
    id: "stelzer",
    name: "Stelzer",
    logo: "/images/partners/stelzer-logo.png",
    color: "#003366",
  },
  {
    id: "uutechnic",
    name: "Uutechnic",
    logo: "/images/partners/uutechnic-logo.png",
    color: "#0072CE",
  },
];

// 브랜드 상세 정보
const brandDetails = [
  {
    id: "lightnin",
    name: "LIGHTNIN",
    tagline: "첨단 기술 기반 고효율 혼합",
    description: "100년 이상의 역사를 가진 LIGHTNIN은 산업용 믹서 분야의 글로벌 리더입니다. 정밀한 CFD 분석과 혁신적인 임펠러 설계를 통해 최적의 혼합 성능과 에너지 효율을 제공합니다.",
    icon: Lightbulb,
    features: [
      "A310/A320 고효율 임펠러 기술",
      "CFD 기반 맞춤형 설계",
      "에너지 효율 최적화",
      "광범위한 산업 적용 경험",
    ],
    applications: ["석유화학", "화학공정", "수처리", "제약"],
  },
  {
    id: "plenty",
    name: "Plenty",
    tagline: "70년 전통 유체 역학 전문가",
    description: "Plenty는 70년 이상의 유체 역학 전문성을 바탕으로 석유, 가스, 화학 산업에 특화된 Side Entry Mixer를 제공합니다. 대용량 저장 탱크의 효율적인 혼합 솔루션을 제공합니다.",
    icon: Droplets,
    features: [
      "Side Entry Mixer 전문",
      "대용량 탱크 혼합 솔루션",
      "석유·가스 산업 특화",
      "우수한 내구성 및 신뢰성",
    ],
    applications: ["정유공정", "원유 저장", "석유화학", "가스처리"],
  },
  {
    id: "philadelphia",
    name: "Philadelphia",
    tagline: "혁신적 R&D, 고객 맞춤형",
    description: "Philadelphia Mixing Solutions는 고객의 특수한 요구사항에 맞춘 혁신적인 R&D로 최적의 솔루션을 제공합니다. 독창적인 기어드라이브 기술과 다양한 임펠러 옵션으로 모든 혼합 과제를 해결합니다.",
    icon: FlaskConical,
    features: [
      "고객 맞춤형 설계",
      "혁신적 기어드라이브 기술",
      "다양한 임펠러 옵션",
      "글로벌 서비스 네트워크",
    ],
    applications: ["특수화학", "식품가공", "제약", "바이오연료"],
  },
  {
    id: "stelzer",
    name: "Stelzer",
    tagline: "위생과 정밀 공정",
    description: "Stelzer는 제약, 식품, 화장품 산업 등 위생이 중요한 분야에 특화된 정밀 믹서를 제공합니다. 청결성과 정밀성을 겸비한 설계로 까다로운 공정 요구사항을 충족합니다.",
    icon: ShieldCheck,
    features: [
      "위생 설계 (Hygienic Design)",
      "정밀 공정 최적화",
      "CIP/SIP 대응 가능",
      "GMP 규격 충족",
    ],
    applications: ["제약", "식품", "화장품", "바이오텍"],
  },
  {
    id: "uutechnic",
    name: "Uutechnic",
    tagline: "핀란드 기술력의 정밀 교반",
    description: "Uutechnic은 핀란드에 본사를 둔 고품질 교반기 전문 기업입니다. 화학, 석유화학, 제약 산업에 특화된 정밀 믹서를 제공하며, 북유럽 기술력을 바탕으로 혁신적인 혼합 솔루션을 제공합니다.",
    icon: Globe,
    features: [
      "핀란드 정밀 엔지니어링",
      "화학·석유화학 산업 특화",
      "고품질 교반기 설계",
      "맞춤형 솔루션 제공",
    ],
    applications: ["화학", "석유화학", "제약", "특수공정"],
  },
];

export default async function MixerPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Mixer & Agitator (산업용 믹서)"
        description="SPX FLOW의 검증된 기술력으로 다양한 유체를 효과적으로 섞고, 균질화하며, 일정한 상태로 유지하는 장치. Lightnin, Plenty, Philadelphia, Stelzer, Uutechnic 브랜드."
        category="믹서 및 교반기"
        manufacturers={[
          { name: 'SPX FLOW' },
          { name: 'Lightnin' },
          { name: 'Plenty' },
          { name: 'Philadelphia' },
          { name: 'Stelzer' },
          { name: 'Uutechnic' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Mixer', url: '/products/mixer' },
        ]}
      />

      {/* Hero Section with Mosaic Gallery */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <BackButton href="/products" variant="dark" />
          <Breadcrumb variant="dark" items={[
            { label: "HOME", href: "/" },
            { label: "PRODUCTS", href: "/products" },
            { label: "Mixer" }
          ]} />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-6">
            {/* Left: Mosaic Image Gallery */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {mixerImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl ${
                    index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                </div>
              ))}
            </div>

            {/* Right: Introduction Text */}
            <div className="lg:pl-4">
              <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
                SPX FLOW Master Agency
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Mixer & Agitator
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                {t("products.mixer.hero.intro")}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {mixerBrands.map((brand) => (
                  <span
                    key={brand.id}
                    className="px-3 py-1.5 bg-white/10 text-white text-sm rounded-full border border-white/20"
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-sm text-slate-200">
                  <strong className="text-white">{t("products.mixer.hero.contractLabel")}</strong> {t("products.mixer.hero.contractInfo")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submenu Bar */}
      <section className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <nav className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
            <a
              href="#mixing-solution"
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0A1628] hover:bg-slate-100 rounded-full transition-colors"
            >
              {t("products.mixer.nav.mixingSolution")}
            </a>
            <a
              href="#spxflow-brands"
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0A1628] hover:bg-slate-100 rounded-full transition-colors"
            >
              {t("products.mixer.nav.spxflowBrands")}
            </a>
          </nav>
        </div>
      </section>

      {/* Mixing Solution Section */}
      <section id="mixing-solution" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
              Mixing Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("products.mixer.mixingSolution.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t("products.mixer.mixingSolution.description")}
            </p>
          </div>

          {/* Brand Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {mixerBrands.map((brand) => (
              <a
                key={brand.id}
                href={`#${brand.id}`}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-[#3B82F6]/10 transition-colors">
                  <Settings className="w-8 h-8 text-slate-400 group-hover:text-[#3B82F6] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1628] group-hover:text-[#3B82F6] transition-colors">
                  {brand.name}
                </h3>
              </a>
            ))}
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <Zap className="w-10 h-10 text-[#3B82F6] mb-4" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.mixer.features.efficiency.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.mixer.features.efficiency.description")}
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <Settings className="w-10 h-10 text-[#3B82F6] mb-4" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.mixer.features.customization.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.mixer.features.customization.description")}
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <Award className="w-10 h-10 text-[#3B82F6] mb-4" />
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {t("products.mixer.features.expertise.title")}
              </h3>
              <p className="text-slate-600 text-sm">
                {t("products.mixer.features.expertise.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPXFlow Mixer Brands Section */}
      <section id="spxflow-brands" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
              SPXFlow Mixer Brands
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("products.mixer.brands.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t("products.mixer.brands.description")}
            </p>
          </div>

          {/* Brand Details */}
          <div className="space-y-8">
            {brandDetails.map((brand, index) => {
              const IconComponent = brand.icon;
              return (
                <div
                  key={brand.id}
                  id={brand.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24"
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Content Side */}
                    <div className={`p-8 md:p-10 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-[#3B82F6]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#0A1628]">{brand.name}</h3>
                          <p className="text-[#3B82F6] font-medium">{brand.tagline}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {brand.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#0A1628] mb-3">{t("products.mixer.brands.keyFeatures")}</h4>
                        <ul className="space-y-2">
                          {brand.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start text-slate-700">
                              <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0A1628] mb-3">{t("products.mixer.brands.applications")}</h4>
                        <div className="flex flex-wrap gap-2">
                          {brand.applications.map((app, aIndex) => (
                            <span
                              key={aIndex}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Visual Side */}
                    <div className={`bg-gradient-to-br from-[#0A1628] to-[#1a2942] p-8 md:p-10 flex flex-col items-center justify-center min-h-[300px] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                        {brand.name}
                      </h4>
                      <p className="text-slate-300 text-center">{brand.tagline}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("products.mixer.cta.title")}
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {t("products.mixer.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              {t("products.mixer.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {t("products.mixer.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
