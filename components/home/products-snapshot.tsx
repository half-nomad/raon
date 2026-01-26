"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("products.snapshot");

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
          <span>{t("learnMore")}</span>
          <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function ProductsSnapshot() {
  const t = useTranslations("products.snapshot");

  const products = [
    {
      name: t("products.compressor.name"),
      description: t("products.compressor.description"),
      href: "/products/compressor",
      image: "/images/category/compressor_cat.jpg",
    },
    {
      name: t("products.pump.name"),
      description: t("products.pump.description"),
      href: "/products/pump",
      image: "/images/category/pump_cat.png",
    },
    {
      name: t("products.bearing.name"),
      description: t("products.bearing.description"),
      href: "/products/bearing-lubrication",
      image: "/images/category/bearing_cat.png",
    },
    {
      name: t("products.motor.name"),
      description: t("products.motor.description"),
      href: "/products/motor",
      image: "/images/category/motor_cat.webp",
    },
    {
      name: t("products.mixer.name"),
      description: t("products.mixer.description"),
      href: "/products/mixer",
      image: "/images/category/mixer_cat.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            {t("businessItem")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.href} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
