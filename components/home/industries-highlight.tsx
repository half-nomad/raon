"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface IndustryCardProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  href: string;
  image: string;
}

function IndustryCard({
  title,
  subtitle,
  description,
  bullets,
  tags,
  href,
  image,
}: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      {/* Background Image with Overlay */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/20" />

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
            <span className="sr-only">{title} - </span>
            View Details
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Tags Section */}
      <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2">Key Products</p>
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
  const t = useTranslations("industries.highlight");

  const industries = [
    {
      title: t("oilRefinery.title"),
      subtitle: "Oil Refinery & Petrochemical",
      description: t("oilRefinery.description"),
      bullets: t.raw("oilRefinery.bullets") as string[],
      tags: ["Compressor & Parts", "Pump", "Bearing"],
      href: "/industries/oil-refinery",
      image: "/images/industries/oil-refinery.PNG",
    },
    {
      title: t("shipbuilding.title"),
      subtitle: "Ship Building",
      description: t("shipbuilding.description"),
      bullets: t.raw("shipbuilding.bullets") as string[],
      tags: ["Cylinder Liner", "Engine Parts"],
      href: "/industries/shipbuilding",
      image: "/images/industries/shipbuilding.PNG",
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
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
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
