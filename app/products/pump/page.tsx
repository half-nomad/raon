import Link from "next/link";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductSchema } from "@/components/seo/product-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: 'Pump | 산업용 펌프 솔루션',
  description: 'CP Pumpen 산업용 펌프 전문 공급. MKP, MKPL, MCP, MCPL, VCP 등 15개 모델로 화학약품 이송, 정유·석유화학 산업 최적화.',
  keywords: ['Pump', '펌프', 'CP Pumpen', 'Magnetic Drive Pump', 'Chemical Pump'],
  openGraph: {
    title: 'Pump | 라온토탈솔루션',
    description: 'CP Pumpen 산업용 펌프 전문 공급. 15개 모델로 다양한 화학 공정 대응',
    images: ['/images/og/pump-og.jpg'],
  },
};

export default function PumpPage() {
  const pumpModels = [
    {
      id: "mkp",
      title: "MKP (Magnetic Drive Pump)",
      description:
        "자기 구동 방식의 누출 없는 펌프. 위험한 화학물질을 안전하게 이송할 수 있습니다.",
      features: [
        "100% 누출 방지 (Seal-less design)",
        "화학약품 안전 이송",
        "유지보수 최소화",
        "긴 수명",
      ],
      applications: ["화학약품 이송", "석유화학 플랜트", "제약 산업"],
    },
    {
      id: "mkpl",
      title: "MKPL (PFA-Lined Magnetic Drive Pump)",
      description:
        "PFA 라이닝 처리된 자기 구동 펌프. 고순도 화학물질 및 부식성 액체 이송에 최적화되어 있습니다.",
      features: [
        "PFA 라이닝 (고내식성)",
        "고순도 액체 이송",
        "오염 방지",
        "내화학성 우수",
      ],
      applications: ["반도체 산업", "고순도 화학약품", "식품·제약"],
    },
    {
      id: "mkp-s",
      title: "MKP-S (Self-Priming Magnetic Drive Pump)",
      description:
        "자체 프라이밍 기능이 있는 자기 구동 펌프. 별도 준비 없이 자동으로 액체를 흡입합니다.",
      features: [
        "자체 프라이밍 (Self-priming)",
        "설치 간편",
        "드라이런 보호",
        "자동 공기 배출",
      ],
      applications: ["탱크 이송", "배치 공정", "CIP 시스템"],
    },
    {
      id: "mkpd",
      title: "MKPD (Horizontal Magnetic Drive Pump)",
      description:
        "수평형 자기 구동 펌프. 설치 공간이 제한적인 환경에서도 효율적으로 사용 가능합니다.",
      features: [
        "수평 설치 (공간 절약)",
        "높은 유량",
        "안정적인 운전",
        "다양한 재질 선택",
      ],
      applications: ["석유화학", "화학 공정", "냉각수 순환"],
    },
    {
      id: "mkpv",
      title: "MKPV (Vertical Magnetic Drive Pump)",
      description:
        "수직형 자기 구동 펌프. 탱크 하부에 직접 설치하여 공간을 효율적으로 활용합니다.",
      features: [
        "수직 설치 (탱크 직결)",
        "공간 효율 극대화",
        "NPSH 문제 해결",
        "드럼 펌프 대체",
      ],
      applications: ["탱크 이송", "도금액 순환", "폐수 처리"],
    },
    {
      id: "cpp",
      title: "CPP (Centrifugal Process Pump)",
      description:
        "원심식 공정 펌프. 대유량·고압력이 필요한 산업 공정에 적합합니다.",
      features: [
        "고효율 원심 설계",
        "대유량 처리",
        "고압 대응",
        "API 610 기준 준수",
      ],
      applications: ["정유 공정", "석유화학", "발전소"],
    },
    {
      id: "msp",
      title: "MSP (Multistage Pump)",
      description:
        "다단 펌프. 여러 단계의 임펠러로 고압력을 생성하여 높은 양정이 필요한 곳에 사용됩니다.",
      features: [
        "다단 구조 (고압 생성)",
        "높은 양정",
        "안정적인 압력",
        "에너지 효율",
      ],
      applications: ["보일러 급수", "고압 세척", "역삼투 시스템"],
    },
    {
      id: "asp",
      title: "ASP (Air-Operated Double Diaphragm Pump)",
      description:
        "공기 구동식 더블 다이어프램 펌프. 전기 없이 압축공기로 작동하며 고형물 이송에 적합합니다.",
      features: [
        "공기 구동 (방폭 지역 안전)",
        "고형물 이송 가능",
        "자체 프라이밍",
        "드라이런 허용",
      ],
      applications: ["슬러리 이송", "방폭 지역", "도료·페인트"],
    },
    {
      id: "pgp",
      title: "PGP (Progressive Cavity Pump)",
      description:
        "프로그레시브 캐비티 펌프. 점도가 높은 액체나 고형물 포함 유체를 부드럽게 이송합니다.",
      features: [
        "고점도 액체 이송",
        "맥동 없는 연속 흐름",
        "고형물 포함 가능",
        "전단력 최소화",
      ],
      applications: ["슬러지", "식품 (잼, 크림)", "화장품"],
    },
    {
      id: "gp",
      title: "GP (Gear Pump)",
      description:
        "기어 펌프. 정밀한 유량 제어가 필요한 고점도 액체 이송에 사용됩니다.",
      features: [
        "정밀 유량 제어",
        "고점도 액체 적합",
        "자체 프라이밍",
        "안정적인 토출압",
      ],
      applications: ["오일 이송", "접착제", "폴리머"],
    },
    {
      id: "lp",
      title: "LP (Lobe Pump)",
      description:
        "로브 펌프. 전단력이 적어 민감한 제품의 이송에 적합하며 CIP/SIP 가능합니다.",
      features: [
        "낮은 전단력",
        "CIP/SIP 가능",
        "위생적 설계",
        "역류 방지",
      ],
      applications: ["식품 산업", "제약", "바이오 제품"],
    },
    {
      id: "pp",
      title: "PP (Peristaltic Pump)",
      description:
        "연동 펌프. 튜브를 압착하여 액체를 이송하므로 오염이 없고 정밀 투입에 적합합니다.",
      features: [
        "오염 제로 (튜브 방식)",
        "정밀 투입",
        "고형물 이송 가능",
        "역류 방지",
      ],
      applications: ["실험실", "투약 시스템", "폐수 처리"],
    },
    {
      id: "sp",
      title: "SP (Submersible Pump)",
      description:
        "수중 펌프. 액체 속에 잠겨서 작동하며 배수, 이송, 순환에 사용됩니다.",
      features: [
        "수중 설치",
        "자동 프라이밍",
        "소음 최소화",
        "공간 절약",
      ],
      applications: ["배수", "폐수 처리", "탱크 비우기"],
    },
    {
      id: "dp",
      title: "DP (Dosing Pump)",
      description:
        "정량 펌프. 정확한 양의 화학약품을 주입할 수 있는 펌프로, 수처리 및 투약 시스템에 사용됩니다.",
      features: [
        "정밀 투입 (±1% 이내)",
        "유량 조절 가능",
        "내화학성",
        "자동화 연동",
      ],
      applications: ["수처리", "화학 투입", "보일러 처리"],
    },
    {
      id: "vp",
      title: "VP (Vacuum Pump)",
      description:
        "진공 펌프. 기체를 제거하여 진공 상태를 만들며, 증류, 건조, 탈기 공정에 사용됩니다.",
      features: [
        "진공 생성",
        "탈기 효과",
        "다양한 진공도",
        "내구성",
      ],
      applications: ["증류", "건조", "포장"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProductSchema
        name="Pump (산업용 펌프)"
        description="CP Pumpen 산업용 펌프 15개 모델. MKP, MKPL, MCP, MCPL, VCP 등 화학약품 이송 및 정유·석유화학 산업 전문."
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
            <div className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full mb-4">
              CP Pumpen
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pump</h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              액체를 한 장소에서 다른 장소로 이동시키는 장치.
              <br />
              화학, 식품, 제약 등 분야에서 널리 사용되는 CP Pumpen의 15개 모델,
              105개 이상의 펌프 사이즈를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center">
              <div className="text-center text-slate-400">
                <div className="text-8xl mb-4">💧</div>
                <p className="text-sm">CP Pumpen 로고 삽입 예정</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
                CP Pumpen 소개
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                CP Pumpen (CP Pump Systems)은 스위스에 본사를 둔 산업용 펌프
                전문 제조업체입니다. 화학, 석유화학, 제약, 식품 산업을 위한
                고품질 펌프 솔루션을 제공하며, 특히 자기 구동 펌프(Magnetic
                Drive Pump) 기술에 강점을 보유하고 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>15개 모델:</strong> 다양한 산업 요구사항에 맞는 펌프
                    라인업
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>105개 이상 사이즈:</strong> 소형부터 대형까지 모든
                    용량
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>누출 방지:</strong> 자기 구동 방식으로 100% 안전
                  </span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                  <span>
                    <strong>내화학성:</strong> PFA 라이닝 등 다양한 재질 옵션
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pump Models Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              제품 라인업
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              화학, 석유화학, 식품, 제약 산업을 위한 15가지 펌프 모델을
              제공합니다.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="mkp"
          >
            {pumpModels.map((pump) => (
              <AccordionItem
                key={pump.id}
                value={pump.id}
                className="border border-slate-200 rounded-xl overflow-hidden px-6"
              >
                <AccordionTrigger className="text-xl font-bold text-[#0A1628] hover:no-underline py-6">
                  <div className="text-left">
                    <h3 className="text-2xl mb-2">{pump.title}</h3>
                    <p className="text-base font-normal text-slate-600">
                      {pump.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pt-4">
                    <h4 className="text-lg font-bold text-[#0A1628] mb-4">
                      주요 특징
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3 mb-6">
                      {pump.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-slate-700"
                        >
                          <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-lg font-bold text-[#0A1628] mb-3">
                      적용 분야
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pump.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            CP Pumpen 핵심 특징
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                누출 방지 (Seal-less)
              </h3>
              <p className="text-slate-600 text-sm">
                자기 구동 방식으로 기계적 씰이 없어 100% 누출 방지. 위험한
                화학물질도 안전하게 이송합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">⚗️</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                내화학성
              </h3>
              <p className="text-slate-600 text-sm">
                PFA, PTFE, PVDF 등 다양한 내화학성 재질로 제작. 강산, 강알칼리,
                유기용매 모두 대응 가능합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                유지보수 최소화
              </h3>
              <p className="text-slate-600 text-sm">
                씰 교체 불필요, 마모 부품 최소화로 유지보수 비용과 다운타임을
                획기적으로 절감합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📏</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                다양한 사이즈
              </h3>
              <p className="text-slate-600 text-sm">
                105개 이상의 펌프 사이즈로 소규모 실험실부터 대형 플랜트까지
                모든 요구사항을 충족합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                고온·고압 대응
              </h3>
              <p className="text-slate-600 text-sm">
                -40°C ~ +200°C 온도 범위, 최대 16bar 압력까지 안정적으로 작동.
                까다로운 공정 조건에도 적용 가능합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                인증 및 규격
              </h3>
              <p className="text-slate-600 text-sm">
                ISO 9001, ATEX, FDA 등 국제 인증 보유. 제약, 식품 산업의 위생
                기준도 충족합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12 text-center">
            적용 산업
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                석유화학
              </h3>
              <p className="text-slate-600 text-sm">
                정유, 석유화학 플랜트 화학약품 이송
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">⚗️</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">화학</h3>
              <p className="text-slate-600 text-sm">
                화학 공정, 반응기, 배치 시스템
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">제약</h3>
              <p className="text-slate-600 text-sm">
                제약 공정, 고순도 액체 이송
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🍲</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">식품</h3>
              <p className="text-slate-600 text-sm">
                식품 제조, 위생 공정, CIP 시스템
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">💧</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                수처리
              </h3>
              <p className="text-slate-600 text-sm">
                폐수 처리, 투약 시스템, 정수
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                반도체
              </h3>
              <p className="text-slate-600 text-sm">
                초고순도 화학약품, 특수 공정
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                도료·페인트
              </h3>
              <p className="text-slate-600 text-sm">
                고점도 액체, 안료, 코팅제
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#3B82F6] hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                환경·에너지
              </h3>
              <p className="text-slate-600 text-sm">
                폐수 처리, 재활용, 바이오 가스
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-8">
              기술 사양
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  유량 범위
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>최소: 0.1 L/min (실험실용)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>최대: 500 m³/h (대형 플랜트용)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>105개 이상의 사이즈 옵션</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  압력 범위
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>최대 토출압: 16 bar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>최대 흡입압: -0.9 bar (진공)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>안정적인 압력 제어</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  온도 범위
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>표준: -20°C ~ +120°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>고온형: -40°C ~ +200°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>열 관리 시스템 내장</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
                  재질
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>PFA, PTFE, PVDF (고내식성)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>Stainless Steel (SUS316, SUS316L)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                    <span>Hastelloy, Titanium (특수 용도)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            최적의 펌프 솔루션이 필요하신가요?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            유량, 압력, 화학물질 특성에 맞는 최적의 CP Pumpen 모델을 선정해
            드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              기술 상담 문의
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              견적 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
