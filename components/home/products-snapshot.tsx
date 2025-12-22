import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  image: string;
}

function ProductCard({
  name,
  description,
  href,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#3B82F6] transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {description}
        </p>

        {/* View More Link */}
        <div className="flex items-center text-sm font-semibold text-[#3B82F6] group-hover:gap-2 transition-all">
          <span>자세히 보기</span>
          <svg
            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </Link>
  );
}

export function ProductsSnapshot() {
  const products = [
    {
      name: "Reciprocating Compressor",
      description:
        "왕복동 압축기 및 부품. 정유·석유화학 플랜트의 핵심 설비",
      href: "/products/compressor",
      image: "/images/products/compressor-parts/piston_1.jpg",
    },
    {
      name: "Mixer / Agitator",
      description: "산업용 믹서 및 교반기. 화학공정의 필수 장비",
      href: "/products/mixer",
      image: "/images/products/mixer/Mixer & Agitator_1.jpg",
    },
    {
      name: "Motor",
      description: "산업용 전동기. 설비 구동의 핵심 동력원",
      href: "/products/motor",
      image: "/images/products/motor/motor_1.jpg",
    },
    {
      name: "Pump",
      description: "산업용 펌프 솔루션. 다양한 유체 이송 및 순환 시스템",
      href: "/products/pump",
      image: "/images/products/pump/pump_3.png",
    },
    {
      name: "Bearing",
      description: "고성능 베어링 및 윤활 시스템. 회전기계의 핵심 부품",
      href: "/products/bearing",
      image: "/images/products/bearing/bearing_TILTING PAD THRUST BEARING.png",
    },
    {
      name: "Oil Purifier",
      description: "오일 정화 시스템. 윤활유 수명 연장 및 설비 보호",
      href: "/products/oil-purifier",
      image: "/images/products/oil-purifier/Oil Purifier_1.png",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            Business Item
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            주요 제품
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            산업 현장에서 검증된 고품질 제품과 솔루션을 제공합니다
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white transition-all"
          >
            <Link href="/products">
              더 많은 제품 보기
              <svg
                className="ml-2 w-5 h-5"
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
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
