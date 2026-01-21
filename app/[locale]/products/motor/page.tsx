// ============================================================
// MOTOR 제품 페이지 - 모터 부품 및 방폭 인증 솔루션
// Phase 5.3: Products 재설계 (PRODUCTS-REDESIGN-GUIDE.md 적용)
// ============================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap,
  Shield,
  Award,
  FileCheck,
  ArrowRight,
  Phone,
  CheckCircle,
  Building2,
  ChevronRight,
  Settings,
  Clock,
  Users,
  AlertTriangle,
  FileText,
  ClipboardCheck,
  BadgeCheck,
} from 'lucide-react';

// ============================================================
// 메타데이터
// ============================================================
export const metadata: Metadata = {
  title: 'Motor | 모터 부품 및 방폭 인증 - RAON',
  description: '정유, 석유화학에 30년의 왕복동압축기 공급 실적으로 외산 모터 부품 공급 및 방폭 인증(KOSHA/KGS/KTL) 솔루션을 제공합니다.',
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
// 파트너사 (원고 기반)
// ============================================================
const partners = [
  {
    name: 'LDW',
    fullName: 'Lloyd Dynamowerke GmbH',
    country: '독일',
    desc: '대형 Synchronous 및 Induction Motor 제작사',
    details: '국내 정유/석유화학 공장 설치, 기술지원/Supervisor/부품 공급',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-blue-400',
    bgAccent: 'bg-blue-500/20',
  },
  {
    name: 'NIDEC',
    fullName: '舊 Ansaldo',
    country: '이탈리아',
    desc: '대형 Synchronous 및 Induction Motor 제작사',
    details: '국내 정유/석유화학 공장 설치, 기술지원/Supervisor/부품 공급',
    color: 'from-green-500/20 to-green-600/10',
    borderColor: 'border-green-500/30',
    accentColor: 'text-green-400',
    bgAccent: 'bg-green-500/20',
  },
];

// ============================================================
// 방폭 인증 기관 (원고 기반)
// ============================================================
const certificationAgencies = [
  {
    code: 'KOSHA',
    name: '한국산업안전보건공단',
    desc: '산업안전 및 방폭 인증 총괄 기관',
    color: '#1E40AF',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    code: 'KTL',
    name: '한국산업기술시험원',
    desc: '산업기술 시험 및 인증 전문 기관',
    color: '#059669',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
  },
  {
    code: 'KGS',
    name: '한국가스안전공사',
    desc: '가스 관련 방폭 설비 인증 기관',
    color: '#DC2626',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
  },
];

// ============================================================
// 인증 프로세스
// ============================================================
const certificationProcess = [
  { step: 1, title: '사전 검토', desc: '기존 장비 현황 및 요구사항 분석', icon: FileText },
  { step: 2, title: '인증 계획', desc: '적합한 인증 기관 및 절차 수립', icon: ClipboardCheck },
  { step: 3, title: '서류 준비', desc: '기술 문서 및 시험 자료 준비', icon: FileCheck },
  { step: 4, title: '인증 취득', desc: '심사 대응 및 인증서 발급', icon: BadgeCheck },
];

// ============================================================
// 서비스 특징
// ============================================================
const sparePartsServices = [
  { icon: Settings, title: 'LDW/NIDEC Motor 기술지원', desc: '국내 설치 모터 전문 지원' },
  { icon: Users, title: 'Supervisor 파견', desc: '현장 기술 인력 파견 서비스' },
  { icon: Award, title: 'Spare Parts 공급', desc: '정품 부품 신속 수배' },
];

// ============================================================
// 통계 데이터
// ============================================================
const stats = [
  { value: '30+', label: '년 경험', icon: Clock },
  { value: '2', label: '글로벌 파트너', icon: Building2 },
  { value: '3', label: '인증 기관', icon: Shield },
  { value: '24/7', label: '기술 지원', icon: Award },
];

// ============================================================
// 메인 컴포넌트
// ============================================================
export default function MotorPage() {
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
                  ${category.id === 'motor'
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
            <span className="text-white">Motor</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
                <Zap className="w-4 h-4 text-[#F59E0B]" />
                <span>Motor Spare Parts & Certification</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                MOTOR
                <span className="block text-[#F59E0B] mt-2">전문 솔루션</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                정유, 석유화학에 <span className="text-white font-semibold">30년의 왕복동압축기 공급 실적</span>으로
                현장에 설치된 외산 모터에 대한 <span className="text-white font-semibold">부품 공급</span> 및
                <span className="text-white font-semibold"> 방폭 인증(KOSHA/KGS/KTL)</span>에 대한 SOLUTION을 제공하고 있습니다.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <stat.icon className="w-6 h-6 text-[#F59E0B] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  문의하기
                </Link>
                <a
                  href="#spare-parts"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
                >
                  서비스 보기
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right - Service Preview */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  {/* Two Main Services */}
                  <div className="space-y-4">
                    <a
                      href="#spare-parts"
                      className="block p-5 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/30 hover:scale-[1.02] transition-transform"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Settings className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white font-bold">MOTOR SPARE PARTS</div>
                          <div className="text-gray-400 text-sm">LDW / NIDEC 정품 부품 공급</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500 ml-auto" />
                      </div>
                    </a>

                    <a
                      href="#certification"
                      className="block p-5 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 hover:scale-[1.02] transition-transform"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-white font-bold">방폭인증서비스</div>
                          <div className="text-gray-400 text-sm">KOSHA / KTL / KGS 인증 대응</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500 ml-auto" />
                      </div>
                    </a>
                  </div>

                  {/* Highlight */}
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/20">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-semibold text-sm">★ 방폭 인증 경험</div>
                        <div className="text-gray-400 text-xs mt-1">
                          국내 정유/석유화학 신설 프로젝트 다수 방폭 기계 설치 경험 보유
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F59E0B]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOTOR SPARE PARTS Section */}
      <section id="spare-parts" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              MOTOR SPARE PARTS SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              외산 모터 부품 공급
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              해외 OEM 왕복동압축기에 동력원으로 공급되는 외산 Motor의 Aftermarket 국내대리점
            </p>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {sparePartsServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${partner.color} border ${partner.borderColor}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl ${partner.bgAccent} flex items-center justify-center`}>
                    <span className="text-white font-bold text-2xl">{partner.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                    <p className="text-gray-400 text-sm">{partner.fullName}</p>
                    <p className={`${partner.accentColor} font-medium text-sm mt-1`}>{partner.country}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{partner.desc}</p>
                <div className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-400">{partner.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 방폭인증서비스 Section */}
      <section id="certification" className="py-24 bg-gradient-to-b from-[#0A1628] to-[#0f1d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
              방폭인증서비스 SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explosion Proof Certification
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              국내 방폭 지역 설치 외산 수입 모터 → 국내 인증 필수
            </p>
          </div>

          {/* Certification Agencies */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {certificationAgencies.map((agency, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl bg-white/5 border ${agency.borderColor} overflow-hidden`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: agency.color }}
                />
                <div
                  className={`w-16 h-16 rounded-full ${agency.bgColor} flex items-center justify-center mx-auto mb-4`}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: agency.color }}
                  >
                    {agency.code.charAt(0)}
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold text-center mb-2"
                  style={{ color: agency.color }}
                >
                  {agency.code}
                </h3>
                <p className="text-white font-medium text-center mb-1">{agency.name}</p>
                <p className="text-gray-400 text-sm text-center">{agency.desc}</p>
              </div>
            ))}
          </div>

          {/* Certification Process */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-8 text-center">인증 진행 프로세스</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certificationProcess.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#0A1628] font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-400" />
                서비스 내용
              </h4>
              <ul className="space-y-3">
                {[
                  '방폭 인증 필요 유무 판단',
                  '인증 절차 컨설팅',
                  '기술 문서 작성 지원',
                  '인증 기관 대응',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                ★ 핵심 경험
              </h4>
              <p className="text-gray-300 leading-relaxed">
                국내 정유/석유화학 신설 프로젝트 다수 <span className="text-white font-semibold">방폭 기계 설치 경험</span> 보유.
                복잡한 인증 절차를 원활하게 진행하여 고객의 프로젝트 일정을 준수합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0f1d32] to-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            모터 부품 및 인증 서비스 문의
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            외산 모터 부품 공급, 방폭 인증 관련 문의사항이 있으시면 연락해 주세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              상담 문의하기
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
