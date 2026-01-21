// ============================================================
// MIXER 제품 페이지 - SPXFLOW Mixing Solution
// Phase 5.3: Products 재설계 (PRODUCTS-REDESIGN-GUIDE.md 적용)
// ============================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Beaker,
  Factory,
  Droplets,
  FlaskConical,
  Pill,
  ArrowRight,
  Phone,
  CheckCircle,
  Building2,
  ChevronRight,
  Zap,
  Settings,
  Clock,
  Award,
  Globe,
  Cog,
  Gauge,
  Shield,
} from 'lucide-react';

// ============================================================
// 메타데이터
// ============================================================
export const metadata: Metadata = {
  title: 'Mixer | SPXFLOW Mixing Solution - RAON',
  description: 'SPXFLOW 국내 마스터 대리점. 5개 글로벌 브랜드(Lightnin, Plenty, Philadelphia, Stelzer, Uutechnic)를 통해 맞춤형 Mixing Solution을 제공합니다.',
};

// ============================================================
// Products 공통 서브 네비게이션
// ============================================================
const productCategories = [
  { id: 'compressor', label: 'COMPRESSOR', href: '/products/compressor' },
  { id: 'pump', label: 'PUMP', href: '/products/pump' },
  { id: 'mixer', label: 'MIXER', href: '/products/mixer' },
  { id: 'motor', label: 'MOTOR', href: '/products/motor' },
  { id: 'bearing-lubrication', label: 'BEARING & LUBRICATION', href: '/products/bearing-lubrication' },
];

// ============================================================
// Mixing Solution 적용 분야
// ============================================================
const mixingSolutions = [
  { icon: Beaker, title: '화학 공정', desc: '화학 반응, 용해, 분산' },
  { icon: Droplets, title: '수처리/폐수', desc: '응집, 침전, 소독' },
  { icon: Factory, title: '석유화학', desc: '정유 및 플랜트 혼합' },
  { icon: FlaskConical, title: '바이오/제약', desc: '무균 환경 정밀 혼합' },
  { icon: Pill, title: '식품/유제품', desc: '위생 설계 CIP 호환' },
];

// ============================================================
// SPXFlow 5개 브랜드 (원고 기반)
// ============================================================
const spxflowBrands = [
  {
    id: 'lightnin',
    name: 'LIGHTNIN',
    tagline: '첨단 기술 기반의 고효율 혼합 솔루션',
    desc: '산업용 믹서 분야의 글로벌 리더로, 100년 이상의 혁신 역사를 보유. 첨단 유체역학 기술을 기반으로 에너지 효율적인 혼합 솔루션을 제공합니다.',
    applications: ['폐수/수처리', '화학', '바이오 연료', '제약 공정'],
    features: [
      { text: '독자적 기어박스와 임펠러 기술', icon: Cog },
      { text: 'Anti-fouling 메커니즘', icon: Shield },
      { text: '전력 효율 극대화', icon: Zap },
    ],
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-blue-400',
    bgAccent: 'bg-blue-500/20',
  },
  {
    id: 'plenty',
    name: 'PLENTY',
    tagline: '70년 전통의 유체 역학 전문가',
    desc: 'Side-Entry 믹서를 전문으로 제조해온 브랜드입니다. 탱크를 비우지 않고도 유지보수가 가능한 혁신적인 설계로 정유 및 석유화학 산업에서 높은 신뢰를 받고 있습니다.',
    applications: ['저장 탱크 혼합/균질화', '슬러지 침전 방지', '원유 블렌딩'],
    features: [
      { text: 'Fixed/Swivel Side-Entry 설계', icon: Settings },
      { text: '탱크 미배출 수리 가능', icon: Gauge },
      { text: '낮은 유지보수 비용', icon: Clock },
    ],
    color: 'from-green-500/20 to-green-600/10',
    borderColor: 'border-green-500/30',
    accentColor: 'text-green-400',
    bgAccent: 'bg-green-500/20',
  },
  {
    id: 'philadelphia',
    name: 'PHILADELPHIA',
    tagline: '혁신적인 R&D와 고객 맞춤형 설계',
    desc: '2021년 SPX FLOW에 합류했으며, 65년 경력과 Philadelphia Gear Corporation 기술을 계승. 화학 공정 및 일반 산업 전반의 특수 혼합 공정을 담당합니다.',
    applications: ['화학 공정', '일반 산업', '특수 혼합 공정'],
    features: [
      { text: '65년 경력 기술 축적', icon: Clock },
      { text: '전 세계 거점(미국, 영국, 인도)', icon: Globe },
      { text: '신속한 현장 지원', icon: Zap },
    ],
    color: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    bgAccent: 'bg-purple-500/20',
  },
  {
    id: 'stelzer',
    name: 'STELZER',
    tagline: '엄격한 위생과 정밀한 공정 노하우 (독일)',
    desc: '독일에서 제조되며 위생 설계(Hygienic Design)의 대명사입니다. 유제품, 제약, 식품 산업에서 요구하는 엄격한 위생 기준을 충족합니다.',
    applications: ['유제품 공정', '제약', '식품 제조', '고도의 세척/연마 공정'],
    features: [
      { text: 'DIN EN ISO 9001:2015 준수', icon: Award },
      { text: 'CFD 시뮬레이션 역량', icon: Gauge },
      { text: '1946년부터 축적된 위생 설계', icon: Shield },
    ],
    color: 'from-amber-500/20 to-amber-600/10',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    bgAccent: 'bg-amber-500/20',
  },
  {
    id: 'uutechnic',
    name: 'UUTECHNIC',
    tagline: '특수 공정용 맞춤 솔루션',
    desc: '특수 공정에 최적화된 맞춤형 믹서 솔루션을 제공합니다. 고객의 특정 요구사항에 맞춘 엔지니어링 설계로 까다로운 혼합 과제를 해결합니다.',
    applications: ['특수 화학', '폴리머', '코팅/접착제', '배터리 소재'],
    features: [
      { text: '맞춤형 설계', icon: Settings },
      { text: '고점도 대응', icon: Gauge },
      { text: '파일럿 테스트 지원', icon: Beaker },
    ],
    color: 'from-cyan-500/20 to-cyan-600/10',
    borderColor: 'border-cyan-500/30',
    accentColor: 'text-cyan-400',
    bgAccent: 'bg-cyan-500/20',
  },
];

// ============================================================
// 통계 데이터
// ============================================================
const stats = [
  { value: '5', label: '글로벌 브랜드', icon: Building2 },
  { value: '100+', label: '년 역사', icon: Clock },
  { value: '30+', label: '년 국내 경험', icon: Award },
  { value: '24/7', label: '기술 지원', icon: Shield },
];

// ============================================================
// 메인 컴포넌트
// ============================================================
export default function MixerPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Sub Navigation - Fixed below header */}
      <div className="fixed top-[72px] left-0 right-0 z-40 bg-[#0A1628] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-1 h-14 overflow-x-auto scrollbar-hide">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className={`
                  relative px-5 h-full flex items-center text-sm font-medium whitespace-nowrap
                  transition-colors duration-200
                  ${category.id === 'mixer'
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#EF4444]'
                    : 'text-gray-400 hover:text-white'
                  }
                `}
              >
                {category.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-[172px] pb-24 bg-gradient-to-br from-[#0A1628] via-[#0f1d32] to-[#1a2942]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1628]/50" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Mixer</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
                <Settings className="w-4 h-4 text-[#10B981]" />
                <span>SPXFLOW Master Distributor</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                MIXER
                <span className="block text-[#10B981] mt-2">전문 솔루션</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                <span className="text-white font-semibold">SPXFLOW</span>의 국내 마스터 대리점으로써
                현대 산업 전반에 걸쳐 중요한 제조 라인인 다양한 혼합 공정에 필요한 MIXER를 설계 제작하여 공급하고 있으며
                <span className="text-white font-semibold"> 생산성 향상, 에너지 절감 및 비용 절감</span>을 위한
                고객 맞춤형 MIXING SOLUTION을 제공하고 있습니다.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <stat.icon className="w-6 h-6 text-[#10B981] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  문의하기
                </Link>
                <a
                  href="#brands"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
                >
                  브랜드 보기
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right - Brand Preview */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  {/* Partner Badge */}
                  <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                    <div className="w-12 h-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <div>
                      <div className="text-white font-bold">SPXFLOW</div>
                      <div className="text-gray-400 text-sm">Global Master Partner</div>
                    </div>
                  </div>

                  {/* 5 Brands Preview */}
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">5개 브랜드</h3>
                  <div className="space-y-2">
                    {spxflowBrands.map((brand, index) => (
                      <a
                        key={brand.id}
                        href={`#${brand.id}`}
                        className={`flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r ${brand.color} border ${brand.borderColor} hover:scale-[1.02] transition-transform`}
                      >
                        <div className={`w-8 h-8 rounded-lg ${brand.bgAccent} flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">{brand.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold text-sm">{brand.name}</div>
                          <div className="text-gray-400 text-xs truncate">{brand.tagline}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#10B981]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mixing Solution Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium mb-4">
              MIXING SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              다양한 산업 분야의 혼합 솔루션
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              각 산업의 특성에 맞는 최적의 믹서 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {mixingSolutions.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#10B981]/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-24 bg-gradient-to-b from-[#0A1628] to-[#0f1d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              SPXFLOW MIXER BRANDS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              5개 글로벌 브랜드
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              세계적인 믹서 브랜드를 국내에 공급합니다
            </p>
          </div>

          {/* Brand Cards */}
          <div className="space-y-8">
            {spxflowBrands.map((brand, index) => (
              <div
                key={brand.id}
                id={brand.id}
                className={`p-8 md:p-10 rounded-2xl bg-gradient-to-br ${brand.color} border ${brand.borderColor}`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Brand Header */}
                  <div className="lg:col-span-1">
                    <div className={`w-16 h-16 rounded-xl ${brand.bgAccent} flex items-center justify-center mb-4`}>
                      <span className="text-white font-bold text-2xl">{brand.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{brand.name}</h3>
                    <p className={`${brand.accentColor} font-medium mb-4`}>{brand.tagline}</p>
                    <p className="text-gray-300 leading-relaxed">{brand.desc}</p>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">주요 적용 분야</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 bg-white/10 text-gray-300 text-sm rounded-lg"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">주요 특징</h4>
                    <div className="space-y-3">
                      {brand.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                        >
                          <div className={`w-8 h-8 rounded-lg ${brand.bgAccent} flex items-center justify-center flex-shrink-0`}>
                            <feature.icon className={`w-4 h-4 ${brand.accentColor}`} />
                          </div>
                          <span className="text-gray-300 text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SPXFLOW Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium mb-4">
                Why SPXFLOW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                왜 SPXFLOW인가?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                수세기의 경험을 기반으로 맞춤형 Mixing Solution을 개발 공급합니다.
                Process 속도 향상, 생산량 증가, 에너지 절감 및 비용 절감을 실현합니다.
              </p>

              <div className="space-y-4">
                {[
                  { title: '생산성 향상', desc: 'Process 속도 향상 및 생산량 증가' },
                  { title: '에너지 절감', desc: '고효율 설계로 운영 비용 절감' },
                  { title: '맞춤형 설계', desc: '고객 공정에 최적화된 솔루션' },
                  { title: '글로벌 품질', desc: '5개 브랜드의 검증된 기술력' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#10B981]/20 to-green-500/10 rounded-2xl flex items-center justify-center border border-[#10B981]/20">
                <div className="text-center">
                  <Settings className="w-24 h-24 text-[#10B981]/30 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">SPXFLOW</div>
                  <div className="text-gray-400">Mixing Solution Expert</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#10B981]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-green-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0f1d32] to-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            최적의 Mixing Solution이 필요하신가요?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            30년 이상의 경험을 바탕으로 고객의 공정에 최적화된 믹서 솔루션을 제안해 드립니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              기술 상담 신청
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
            >
              다른 제품 보기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
