// ============================================================
// PUMP 제품 페이지 - Magnetic Driven Pump 전문
// Phase 5.3: Products 재설계 (PRODUCTS-REDESIGN-GUIDE.md 적용)
// ============================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Droplets,
  Shield,
  Zap,
  AlertTriangle,
  ArrowRight,
  Phone,
  CheckCircle,
  Building2,
  Factory,
  ChevronRight,
  Beaker,
  FlaskConical,
  Wrench,
  Clock,
  Award,
  Target
} from 'lucide-react';

// ============================================================
// 메타데이터
// ============================================================
export const metadata: Metadata = {
  title: 'Pump | Magnetic Driven Pump 전문 - RAON',
  description: '스위스 CP Pump 국내 대리점. Magnetic Driven(Sealless) Pump 전문 업체로 Metal 및 PFA Lined PUMP SOLUTION을 제공합니다.',
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
// Magnetic Driven Pump 제품군 (원고 기반)
// ============================================================
const magneticPumps = [
  { model: 'MKP', desc: 'Metal(SS, Hastelloy) Chemical Process Pump', type: 'Metal' },
  { model: 'MKPL', desc: 'PFA Lined Chemical Process Pump', type: 'PFA Lined' },
  { model: 'MKP-Bio', desc: 'Stainless Steel Biotech Process Pump', type: 'Biotech' },
  { model: 'MSKS', desc: 'Self Priming Solid PTFE Chemical Process Pump', type: 'PTFE' },
  { model: 'MSKP', desc: 'Solid PTFE Chemical Process Pump', type: 'PTFE' },
  { model: 'MSKPP', desc: 'Solid PTFE Chemical Process Peripheral Pump', type: 'PTFE' },
  { model: 'MKTP', desc: 'Stainless Steel Chemical Process Sump Pump', type: 'Metal' },
  { model: 'MKP-S', desc: 'Stainless Steel Self Priming Chemical Process Pump', type: 'Metal' },
  { model: 'MKPL-S', desc: 'PFA Lined Self Priming Chemical Process Pump', type: 'PFA Lined' },
  { model: 'SZMK', desc: 'Stainless Steel In-Line Chemical Process Pump', type: 'Metal' },
  { model: 'MKPP', desc: 'Stainless Steel In-Line Chemical Process Peripheral', type: 'Metal' },
];

// ============================================================
// Double Mechanical Seal Pump 제품군 (원고 기반)
// ============================================================
const mechanicalPumps = [
  { model: 'ZMP', desc: 'Stainless Steel Chemical Process Crushing Pump' },
  { model: 'ET', desc: 'Ceramic-Lined Chemical Process Pump' },
  { model: 'EB', desc: 'PFA-Lined Chemical Process Pump' },
];

// ============================================================
// Trouble Shooting 문제/해결 (원고 기반)
// ============================================================
const troubleShootingItems = [
  {
    problem: '혹독한 부식성(황산) 유체',
    solution: 'PFA Lined Pump',
    icon: FlaskConical,
    color: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500/30',
  },
  {
    problem: 'Slurry(이물질)로 인한 부품 손상',
    solution: '특수재질(Hastelloy C22) PUMP',
    icon: Shield,
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
  },
  {
    problem: '이물질에 Magnetic Pump 사용 불가?',
    solution: 'CP Pump 특허 기술로 해결! (이물질 30%까지 이송 가능)',
    icon: Target,
    color: 'from-green-500/20 to-green-600/10',
    borderColor: 'border-green-500/30',
    highlight: true,
  },
];

// ============================================================
// 핵심 장점
// ============================================================
const advantages = [
  { icon: Shield, title: '완전 밀폐', desc: 'Sealless 설계로 누설 제로' },
  { icon: Droplets, title: '내화학성', desc: '부식성 유체 안전 이송' },
  { icon: Zap, title: '고효율', desc: '에너지 비용 절감' },
  { icon: Wrench, title: '저유지보수', desc: '씰 교체 불필요, TCO 절감' },
];

// ============================================================
// 적용 분야
// ============================================================
const applications = [
  { name: '정유/석유화학', icon: Factory },
  { name: '바이오/제약', icon: Beaker },
  { name: 'F&B (식품)', icon: FlaskConical },
  { name: '수처리', icon: Droplets },
];

// ============================================================
// 통계 데이터
// ============================================================
const stats = [
  { value: '50+', label: '년 스위스 기술', icon: Clock },
  { value: '30%', label: '이물질 이송', icon: Target },
  { value: '100%', label: '누설 방지', icon: Shield },
  { value: '24/7', label: '기술 지원', icon: Award },
];

// ============================================================
// 메인 컴포넌트
// ============================================================
export default function PumpPage() {
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
                  ${category.id === 'pump'
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
            <span className="text-white">Pump</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
                <Droplets className="w-4 h-4 text-[#3B82F6]" />
                <span>Magnetic Driven Pump Specialist</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                PUMP
                <span className="block text-[#3B82F6] mt-2">전문 솔루션</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                스위스에 소재한 <span className="text-white font-semibold">CP Pump</span>의 국내대리점으로써
                <span className="text-white font-semibold"> Magnetic Driven(Sealless) Pump</span> 전문 업체로
                Metal 및 PFA Lined <span className="text-white font-semibold">PUMP SOLUTION</span>을 제공하고 있습니다.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <stat.icon className="w-6 h-6 text-[#3B82F6] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563eb] text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  문의하기
                </Link>
                <a
                  href="#pump-solution"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
                >
                  제품 보기
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right - Feature Card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  {/* Partner Badge */}
                  <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                    <div className="w-12 h-12 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="text-white font-bold">CP PUMP</div>
                      <div className="text-gray-400 text-sm">Switzerland Partner</div>
                    </div>
                  </div>

                  {/* Applications */}
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">적용 분야</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {applications.map((app, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3"
                      >
                        <app.icon className="w-5 h-5 text-[#3B82F6]" />
                        <span className="text-gray-300 text-sm">{app.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-semibold text-sm">특허 기술</div>
                        <div className="text-gray-400 text-xs mt-1">
                          이물질(1mm 이내) 30%까지 Magnetic Pump로 이송 가능
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3B82F6]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUMP SOLUTION Section */}
      <section id="pump-solution" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium mb-4">
              PUMP SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Magnetic Driven Pump 제품군
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              정유, 석유화학, 바이오, F&B 등 모든 산업 분야에 최적의 PUMP를 공급합니다
            </p>
          </div>

          {/* Advantages */}
          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {advantages.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#3B82F6]/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Magnetic Driven Pump Products */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-[#3B82F6]" />
              </div>
              Magnetic Driven Pump (Sealless)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {magneticPumps.map((pump, idx) => (
                <div
                  key={idx}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#3B82F6]/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold rounded">
                      {pump.model}
                    </span>
                    <span className="text-xs text-gray-500">{pump.type}</span>
                  </div>
                  <p className="text-sm text-gray-400">{pump.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Double Mechanical Seal Pump */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-slate-400" />
              </div>
              Double Mechanical Seal Pump
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {mechanicalPumps.map((pump, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="px-3 py-1 bg-slate-600 text-white text-xs font-bold rounded">
                    {pump.model}
                  </span>
                  <p className="text-sm text-gray-400 mt-3">{pump.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TROUBLE SHOOTING Section */}
      <section id="troubleshooting" className="py-24 bg-gradient-to-b from-[#0A1628] to-[#0f1d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
              TROUBLE SHOOTING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              펌프 문제해결 솔루션
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              혹독한 부식성 유체와 Slurry로 인한 부품 손상 문제를 해결합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {troubleShootingItems.map((item, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} ${item.highlight ? 'ring-2 ring-green-500/30' : ''}`}
              >
                {item.highlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    ★ 특허 기술
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">문제</div>
                  <h3 className="text-lg font-semibold text-white">{item.problem}</h3>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">해결</div>
                    <p className="text-sm text-gray-300">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Problems */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              일반적인 펌프 문제와 CP Pump 솔루션
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  problem: '펌프 누설',
                  causes: '씰 마모, 개스킷 손상',
                  solution: 'Magnetic Drive 방식으로 완전 밀폐, 누설 원천 차단',
                },
                {
                  problem: '과도한 진동/소음',
                  causes: '캐비테이션, 베어링 마모',
                  solution: '정밀 밸런싱 임펠러와 고품질 베어링으로 진동 최소화',
                },
                {
                  problem: '유량/압력 저하',
                  causes: '임펠러 마모, 에어 유입',
                  solution: '내마모성 소재와 최적화된 임펠러 설계로 성능 유지',
                },
                {
                  problem: '잦은 유지보수',
                  causes: '씰 교체, 부품 마모',
                  solution: 'Sealless 설계로 씰 관련 유지보수 불필요, TCO 절감',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{item.problem}</h4>
                      <p className="text-xs text-gray-500 mb-2">
                        원인: {item.causes}
                      </p>
                      <div className="flex items-start gap-2 p-2 bg-green-500/10 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-300">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium mb-4">
                Global Partner
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                CP PUMP
                <span className="block text-gray-400 text-xl mt-2">Switzerland</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                스위스에 소재한 CP Pump는 50년 이상의 역사를 가진 Magnetic Driven Pump 전문 제조사입니다.
                고객 만족을 최우선으로 Trouble Shooting을 통한 최적의 PUMP를 공급합니다.
              </p>

              <div className="space-y-3">
                {[
                  'Magnetic Driven Pump 전문 제조사',
                  '50년+ 스위스 기술력 보유',
                  '독자적 베어링 특허 디자인',
                  '이물질 30% 함유 유체 이송 가능',
                  'Metal & PFA Lined 제품군 완비',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#3B82F6]/20 to-blue-500/10 rounded-2xl flex items-center justify-center border border-[#3B82F6]/20">
                <div className="text-center">
                  <Droplets className="w-24 h-24 text-[#3B82F6]/30 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">CP PUMP</div>
                  <div className="text-gray-400">Magnetic Driven Pump</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#3B82F6]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0f1d32] to-[#0A1628]">
        <div className="max-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            펌프 전문가와 상담하세요
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            30년 경력의 전문가가 귀사의 공정에 최적화된 펌프 솔루션을 제안해 드립니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3B82F6] hover:bg-[#2563eb] text-white font-semibold rounded-lg transition-colors"
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
