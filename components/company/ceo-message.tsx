"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function CEOMessage() {
  const t = useTranslations("company.ceo");

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            {t("label")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            {t("title")}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: CEO Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-1/2 max-w-[280px]">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero/president.png"
                  alt={t("photoAlt")}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Message Content */}
          <div className="order-1 lg:order-2">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/hero/raon-logo.jpg"
                alt="Raon Total Solution"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg sm:text-xl font-medium text-[#0A1628]">
                {t("greeting")}
              </p>

              <p>
                {t("intro")}
              </p>

              {/* Highlighted Quote */}
              <div className="relative bg-gradient-to-br from-[#0A1628] to-[#1A2D47] p-6 sm:p-8 rounded-xl text-white my-8">
                <div className="absolute top-4 left-4 text-6xl text-[#3B82F6]/20 font-serif">
                  "
                </div>
                <p className="relative z-10 text-base sm:text-lg font-medium leading-relaxed pl-6 whitespace-pre-line">
                  {t("quote")}
                </p>
              </div>

              <p>
                {t("partnership")}
              </p>

              <p>
                {t("commitment")}
              </p>

              <p className="text-lg font-semibold text-[#0A1628] pt-4">
                {t("closing")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
