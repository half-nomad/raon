import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import BackButton from "@/components/ui/back-button";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";

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

// Section navigation items
const sectionNavItems = [
  { id: "mixing-solution", labelKey: "mixingSolution" },
  { id: "spxflow-brands", labelKey: "spxflowBrands" },
];

// 브랜드 데이터
const mixerBrands = [
  { id: "lightnin", name: "LIGHTNIN" },
  { id: "plenty", name: "Plenty" },
  { id: "philadelphia", name: "Philadelphia" },
  { id: "stelzer", name: "Stelzer" },
  { id: "uutechnic", name: "Uutechnic" },
];

// 브랜드 상세 정보
const brandDetails = [
  {
    id: "lightnin",
    name: "LIGHTNIN",
    tagline: "첨단 기술 기반 고효율 혼합 솔루션",
    description: "Lightnin은 까다로운 폐수 및 수처리, 화학, 바이오 연료, 제약 공정에서 가장 신뢰받는 브랜드입니다.",
    features: [
      "휴대용 유닛부터 대형 고정식 유닛까지 믹서 포트폴리오",
      "독자적인 기어박스와 임펠러 기술",
      "전력 효율 극대화 솔루션",
      "오염 방지(Anti-fouling) 메커니즘으로 장비 수명 연장",
    ],
  },
  {
    id: "plenty",
    name: "Plenty",
    tagline: "70년 전통의 유체 역학 전문가",
    description: "Plenty는 석유, 가스 및 화학 산업에서 독보적인 엔지니어링 역량의 선두 주자입니다.",
    features: [
      "저장 탱크 내 액체 혼합 및 균질화",
      "슬러지 침전 방지",
      "탱크를 비우지 않고 수리 가능한 혁신적 설계",
      "타사 노후 장비 최신 고성능 모델 교체 프로그램",
    ],
  },
  {
    id: "philadelphia",
    name: "Philadelphia",
    tagline: "혁신적인 R&D와 고객 맞춤형 설계",
    description: "2021년 SPX FLOW에 합류한 Philadelphia Mixing Solutions는 북미 시장을 선도하는 혁신 브랜드입니다.",
    features: [
      "화학 공정 및 일반 산업 전반의 특수 혼합 공정",
      "최첨단 테스트와 공정 모델링",
      "전 세계 주요 거점(미국, 영국, 인도) 신속한 현장 지원",
      "고객 개별 요구사항에 100% 부합하는 고유한 솔루션",
    ],
  },
  {
    id: "stelzer",
    name: "Stelzer",
    tagline: "엄격한 위생과 정밀한 공정 노하우",
    description: "독일에 기반을 둔 Stelzer는 화학, 식품 및 제약 산업에서 요구하는 최고의 위생 표준을 충족합니다.",
    features: [
      "유제품 공정, 제약, 식품 제조 및 고도의 세척/연마 공정",
      "DIN EN ISO 9001:2015 표준에 따른 검증된 안전성",
      "CFD(전산유체역학) 시뮬레이션 역량",
      "국제 표준 준수 프로젝트 맞춤형 교반기",
    ],
  },
  {
    id: "uutechnic",
    name: "Uutechnic",
    tagline: "핀란드 기술력의 정밀 교반",
    description: "Uutechnic은 핀란드에 본사를 둔 고품질 교반기 전문 기업입니다.",
    features: [
      "핀란드 정밀 엔지니어링",
      "화학·석유화학 산업 특화",
      "고품질 교반기 설계",
      "맞춤형 솔루션 제공",
    ],
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl">
            <BackButton href="/products" variant="dark" />

            <Breadcrumb variant="dark" items={[
              { label: "HOME", href: "/" },
              { label: "PRODUCTS", href: "/products" },
              { label: "Mixer" }
            ]} />

            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              SPX FLOW · Lightnin · Plenty · Philadelphia · Stelzer · Uutechnic
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Mixer & Agitator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
              {t("products.mixer.hero.intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Submenu Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="flex overflow-x-auto scrollbar-hide">
            {sectionNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex-shrink-0 px-4 py-4 text-sm md:text-base font-medium text-slate-600 hover:text-[#3B82F6] hover:border-b-2 hover:border-[#3B82F6] transition-colors whitespace-nowrap"
              >
                {t(`products.mixer.nav.${item.labelKey}`)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: Mixing Solution - Image Left */}
      <section id="mixing-solution" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/mixer/Mixer & Agitator_1.jpg"
                  alt="Mixer & Agitator Solution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    SPX FLOW
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                Mixing Solution
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.mixer.mixingSolution.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.mixer.mixingSolution.description")}
              </p>

              <div className="space-y-4 mb-8">
                {mixerBrands.map((brand) => (
                  <div key={brand.id} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{brand.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("products.mixer.hero.contractLabel")}:</strong> {t("products.mixer.hero.contractInfo")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: SPXFlow Brands - Image Right */}
      <section id="spxflow-brands" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                SPXFlow Mixer Brands
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.mixer.brands.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.mixer.brands.description")}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {brandDetails.slice(0, 4).map((brand) => (
                  <div key={brand.id} className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="text-sm font-medium text-[#0A1628]">{brand.name}</span>
                    <p className="text-xs text-slate-500 mt-1">{brand.tagline}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-[#0A1628]">{t("products.mixer.brands.keyFeatures")}:</strong> {t("products.mixer.features.efficiency.description")}
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/mixer/Mixer & Agitator_2.jpg"
                  alt="SPX FLOW Mixer Brands"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    5 Global Brands
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Brand Features - Image Left */}
      <section className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/mixer/Mixer & Agitator_3.jpg"
                  alt="Mixer Features"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Industrial Solution
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                Key Features
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.mixer.features.efficiency.title")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {t("products.mixer.features.efficiency.description")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.mixer.features.efficiency.title")}</h4>
                    <p className="text-sm text-slate-600">{t("products.mixer.features.efficiency.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.mixer.features.customization.title")}</h4>
                    <p className="text-sm text-slate-600">{t("products.mixer.features.customization.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">{t("products.mixer.features.expertise.title")}</h4>
                    <p className="text-sm text-slate-600">{t("products.mixer.features.expertise.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Applications - Image Right */}
      <section className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
                Applications
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628] mb-6">
                {t("products.mixer.brands.applications")}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                SPX FLOW 믹서는 다양한 산업 분야에서 활용됩니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">화학 공정</h4>
                  <p className="text-sm text-slate-600">화학 반응 및 혼합 공정</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">석유화학</h4>
                  <p className="text-sm text-slate-600">정유 및 석유화학 플랜트</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">제약</h4>
                  <p className="text-sm text-slate-600">제약 및 바이오 공정</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <h4 className="font-semibold text-[#0A1628] mb-1">식품</h4>
                  <p className="text-sm text-slate-600">식품 및 음료 제조</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/mixer/Mixer & Agitator_4.jpg"
                  alt="Mixer Applications"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
                    Multi-Industry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t("products.mixer.cta.title")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t("products.mixer.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors text-sm md:text-base"
            >
              {t("products.mixer.cta.technical")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              {t("products.mixer.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
