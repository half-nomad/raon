// ============================================================
// BEARING & LUBRICATION 제품 페이지 - 베어링 및 윤활 솔루션
// Phase 5.3: Products 재설계 (PRODUCTS-REDESIGN-GUIDE.md 적용)
// ============================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Settings,
  Droplets,
  ArrowRight,
  Phone,
  CheckCircle,
  Building2,
  ChevronRight,
  Cog,
  Clock,
  Award,
  Shield,
  Filter,
  Truck,
  Sparkles,
  Wrench,
  CircleDot,
  Gauge,
  Zap,
} from 'lucide-react';

// ============================================================
// 메타데이터
// ============================================================
export const metadata: Metadata = {
  title: 'Bearing & Lubrication | 베어링 및 윤활 솔루션 - RAON',
  description: '국내 BEARING 제작사 터보링크와 윤활 정제기 제작사 삼영필텍의 영업대리점으로써 BEARING과 LUBRICATION에 대한 SOLUTION을 제공합니다.',
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
// Bearing 제품군 (원고 기반)
// ============================================================
const bearingProducts = [
  {
    name: 'Tilting Pad Journal Bearing',
    description: '고속 회전 장비에 최적화된 틸팅 패드 저널 베어링',
    features: ['고속 회전 대응', '저진동 설계', '자동 조심 기능'],
  },
  {
    name: 'Tilting Pad Thrust Bearing',
    description: '축방향 하중을 지지하는 틸팅 패드 스러스트 베어링',
    features: ['높은 하중 용량', '균일한 압력 분포', '긴 수명'],
  },
  {
    name: 'Journal & Thrust Combined',
    description: '저널과 스러스트 기능을 통합한 복합 베어링',
    features: ['통합 설계', '공간 절약', '설치 용이'],
  },
  {
    name: 'Vertical Guide & Thrust',
    description: '수직형 펌프 및 회전기계용 가이드 베어링',
    features: ['수직 축 지지', '정밀 정렬', '내마모성'],
  },
  {
    name: 'Fixed Profile Bearing',
    description: '안정적인 성능과 경제적인 유지보수 제공',
    features: ['안정적 성능', '경제적', '유지보수 용이'],
  },
  {
    name: 'Repair / Retrofit / Replacement',
    description: '기존 베어링의 수리, 개조, 교체 서비스',
    features: ['현장 수리', '성능 개선', '비용 절감'],
  },
];

// ============================================================
// Bearing 서비스 (원고 기반)
// ============================================================
const bearingServices = [
  { icon: Wrench, title: 'BEARING REPAIR', desc: '손상된 베어링 수리 및 복원' },
  { icon: Cog, title: 'REVERSE ENGINEERING', desc: '역설계를 통한 베어링 신규 공급' },
  { icon: Gauge, title: 'TROUBLE SHOOTING', desc: 'NEW DESIGN 개선 베어링 공급' },
];

// ============================================================
// Lubrication 서비스 (원고 기반)
// ============================================================
const lubricationServices = [
  {
    name: 'Oil Purifier',
    description: '오염된 오일에서 수분, 가스, 미립자를 제거하여 오일 수명 연장',
    icon: Filter,
    features: ['수분 제거', '미립자 여과', '가스 제거'],
  },
  {
    name: 'Oil Purifier Rental Service',
    description: '단기 프로젝트나 정비 기간 동안 장비 임대 서비스',
    icon: Truck,
    features: ['단기 임대', '장비 운송', '기술 지원'],
  },
  {
    name: 'Oil Flushing Service',
    description: '배관 및 윤활 시스템의 오염물질 제거 전문 서비스',
    icon: Sparkles,
    features: ['배관 세척', '오염물 제거', '품질 검증'],
  },
];

// ============================================================
// 파트너사 정보
// ============================================================
const partners = {
  bearing: {
    name: '터보링크',
    englishName: 'TURBOLINK',
    country: '한국',
    description: '고속 고하중 회전기계의 유체윤활베어링 설계 및 제조 전문',
    highlight: '65,000rpm급 초고속 터보압축기 베어링 ~ 축 하중 수백톤 고하중 터빈 발전기 베어링',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-blue-400',
    bgAccent: 'bg-blue-500/20',
  },
  lubrication: {
    name: '삼영필텍',
    englishName: 'SAMYOUNG FILTECH',
    country: '한국',
    description: '윤활유 청정도 유지 전문',
    highlight: '국내 특허: 이중 진공 시스템 + 전기 필터 → 수분 제거, 바니쉬 신속 제거',
    benefit: '윤활유 청정도 유지 → Bearing 수명 반영구적 연장',
    color: 'from-cyan-500/20 to-cyan-600/10',
    borderColor: 'border-cyan-500/30',
    accentColor: 'text-cyan-400',
    bgAccent: 'bg-cyan-500/20',
  },
};

// ============================================================
// 통계 데이터
// ============================================================
const stats = [
  { value: '65K', label: 'rpm 고속 대응', icon: Zap },
  { value: '100+', label: '톤 고하중 대응', icon: Gauge },
  { value: '2', label: '국내 전문 파트너', icon: Building2 },
  { value: '24/7', label: '기술 지원', icon: Shield },
];

// ============================================================
// 메인 컴포넌트
// ============================================================
export default function BearingLubricationPage() {
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
                  ${category.id === 'bearing-lubrication'
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
            <span className="text-white">Bearing & Lubrication</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
                <Settings className="w-4 h-4 text-[#8B5CF6]" />
                <span>Bearing & Lubrication Specialist</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                BEARING &
                <span className="block text-[#8B5CF6] mt-2">LUBRICATION</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                국내 BEARING 제작사 <span className="text-white font-semibold">터보링크</span>와
                윤활 정제기 제작사 <span className="text-white font-semibold">삼영필텍</span>의 영업대리점으로써
                BEARING과 LUBRICATION에 대한 <span className="text-white font-semibold">SOLUTION</span>을 제공하고 있습니다.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <stat.icon className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  문의하기
                </Link>
                <a
                  href="#bearing"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
                >
                  제품 보기
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right - Partners Preview */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  {/* Two Partners */}
                  <div className="space-y-4">
                    <a
                      href="#bearing"
                      className={`block p-5 rounded-xl bg-gradient-to-r ${partners.bearing.color} border ${partners.bearing.borderColor} hover:scale-[1.02] transition-transform`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg ${partners.bearing.bgAccent} flex items-center justify-center`}>
                          <Cog className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold">BEARING SOLUTION</div>
                          <div className="text-gray-400 text-sm">{partners.bearing.name} ({partners.bearing.country})</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      </div>
                    </a>

                    <a
                      href="#lubrication"
                      className={`block p-5 rounded-xl bg-gradient-to-r ${partners.lubrication.color} border ${partners.lubrication.borderColor} hover:scale-[1.02] transition-transform`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg ${partners.lubrication.bgAccent} flex items-center justify-center`}>
                          <Droplets className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold">LUBRICATION SOLUTION</div>
                          <div className="text-gray-400 text-sm">{partners.lubrication.name} ({partners.lubrication.country})</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      </div>
                    </a>
                  </div>

                  {/* Highlight */}
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-semibold text-sm">국내 제작 + 빠른 납기</div>
                        <div className="text-gray-400 text-xs mt-1">
                          국내 전문 제작사와의 협력으로 맞춤 설계 및 신속 납기 실현
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B5CF6]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEARING SOLUTION Section */}
      <section id="bearing" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              BEARING SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              유체윤활베어링 전문
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              고속 고하중 회전기계의 유체윤활베어링 설계 및 제조
            </p>
          </div>

          {/* Partner Info */}
          <div className={`p-8 rounded-2xl bg-gradient-to-br ${partners.bearing.color} border ${partners.bearing.borderColor} mb-12`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl ${partners.bearing.bgAccent} flex items-center justify-center`}>
                    <span className="text-white font-bold text-2xl">T</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{partners.bearing.name}</h3>
                    <p className="text-gray-400">{partners.bearing.englishName} ({partners.bearing.country})</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{partners.bearing.description}</p>
                <div className="p-4 rounded-lg bg-white/5">
                  <p className="text-blue-300 text-sm">{partners.bearing.highlight}</p>
                </div>
              </div>

              {/* Services */}
              <div className="grid gap-4">
                {bearingServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{service.title}</h4>
                      <p className="text-gray-400 text-xs">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bearingProducts.map((product, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CircleDot className="w-5 h-5 text-blue-400" />
                  <h4 className="font-semibold text-white">{product.name}</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">{product.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {product.features.map((f, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-500/10 rounded text-blue-300">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LUBRICATION SOLUTION Section */}
      <section id="lubrication" className="py-24 bg-gradient-to-b from-[#0A1628] to-[#0f1d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              LUBRICATION SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              윤활유 청정도 유지 전문
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              모든 회전기계 윤활유 정제 서비스 및 플러싱 서비스
            </p>
          </div>

          {/* Partner Info */}
          <div className={`p-8 rounded-2xl bg-gradient-to-br ${partners.lubrication.color} border ${partners.lubrication.borderColor} mb-12`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl ${partners.lubrication.bgAccent} flex items-center justify-center`}>
                    <span className="text-white font-bold text-2xl">S</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{partners.lubrication.name}</h3>
                    <p className="text-gray-400">{partners.lubrication.englishName} ({partners.lubrication.country})</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{partners.lubrication.description}</p>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-white/5">
                    <div className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-cyan-300 text-sm">{partners.lubrication.highlight}</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-green-300 text-sm">{partners.lubrication.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Highlight */}
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-bold mb-4">특허 기술</h4>
                <div className="space-y-3">
                  {['이중 진공 시스템', '전기 필터', '수분 제거', '바니쉬 신속 제거'].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {lubricationServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{service.name}</h4>
                  <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {service.features.map((f, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-cyan-500/10 rounded text-cyan-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0f1d32] to-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            베어링 및 윤활 솔루션이 필요하신가요?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            국내 전문 제작사와의 협력으로 빠른 납기와 맞춤 설계를 제공합니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              문의하기
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
