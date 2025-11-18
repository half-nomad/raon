import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IndustryCardProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  href: string;
  imagePlaceholder: string;
}

function IndustryCard({
  title,
  subtitle,
  description,
  bullets,
  tags,
  href,
  imagePlaceholder,
}: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      {/* Background Image with Overlay */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100 text-gray-400 text-sm group-hover:scale-105 transition-transform duration-500">
          <span>{imagePlaceholder}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/50 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
          <p className="text-sm font-medium text-white/80 mb-2 uppercase tracking-wide">
            {subtitle}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h3>
          <p className="text-white/90 mb-4 line-clamp-2">{description}</p>

          {/* Key Points */}
          <ul className="space-y-1 mb-4">
            {bullets.map((bullet, index) => (
              <li
                key={index}
                className="text-sm text-white/80 flex items-start gap-2"
              >
                <span className="text-[#3B82F6] mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#0A1628] transition-all"
          >
            세부 산업 보기
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Tags Section */}
      <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2">주력 제품</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function IndustriesHighlight() {
  const industries = [
    {
      title: "정유·석유화학",
      subtitle: "Oil Refinery & Petrochemical",
      description: "30년 노하우의 플랜트 솔루션",
      bullets: [
        "정유 및 석유화학 플랜트 핵심 설비",
        "회전기계 및 왕복동 압축기 전문",
        "24시간 긴급 출동 서비스",
      ],
      tags: ["Compressor & Parts", "Pump", "Bearing"],
      href: "/industries/oil-refinery",
      imagePlaceholder: "정유 플랜트 이미지",
    },
    {
      title: "조선",
      subtitle: "Ship Building",
      description: "선박 엔진용 실린더 라이너 전문 공급",
      bullets: [
        "선박용 메인 엔진 실린더 라이너",
        "글로벌 표준 인증 제품",
        "신속한 납기 대응 시스템",
      ],
      tags: ["Cylinder Liner", "Engine Parts"],
      href: "/industries/shipbuilding",
      imagePlaceholder: "조선소/선박 이미지",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            Business Field
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            핵심 산업 솔루션
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            정유·석유화학 및 조선 산업을 위한 전문 솔루션을 제공합니다
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
