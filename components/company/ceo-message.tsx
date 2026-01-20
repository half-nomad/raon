"use client";

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
          {/* Left: Image/Signature Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* CEO Photo Placeholder */}
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-6">
                <span className="text-gray-400 text-sm">{t("photoPlaceholder")}</span>
              </div>

              {/* Signature */}
              <div className="text-right">
                <p className="text-lg font-semibold text-[#0A1628] mb-1">
                  {t("signature")}
                </p>
                <div className="h-16 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{t("signaturePlaceholder")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Content */}
          <div className="order-1 lg:order-2">
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
