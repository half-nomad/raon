"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Building2, Phone, Printer, Mail, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

type MapType = "google" | "kakao" | "naver";

export function Location() {
  const t = useTranslations("company.location");
  const [activeMap, setActiveMap] = useState<MapType>("google");

  const MAP_CONFIG = {
    google: {
      name: t("tabs.google"),
      embedUrl: "https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EC%84%9C%EC%B4%88%EA%B5%AC+%EB%A7%88%EB%B0%A9%EB%A1%9C+16&t=&z=17&ie=UTF8&iwloc=&output=embed",
      linkUrl: "https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EC%84%9C%EC%B4%88%EA%B5%AC+%EB%A7%88%EB%B0%A9%EB%A1%9C+16",
      imageUrl: "/images/maps/google-map.png",
      color: "bg-white border-gray-300 text-gray-700 hover:bg-gray-50",
      activeColor: "bg-[#4285F4] text-white border-[#4285F4]",
      useIframe: true,
    },
    kakao: {
      name: t("tabs.kakao"),
      linkUrl: "https://map.kakao.com/?q=%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%A7%88%EB%B0%A9%EB%A1%9C%2016",
      imageUrl: "/images/maps/kakao-map.png",
      color: "bg-white border-gray-300 text-gray-700 hover:bg-gray-50",
      activeColor: "bg-[#FEE500] text-[#000000] border-[#FEE500]",
      useIframe: false,
    },
    naver: {
      name: t("tabs.naver"),
      linkUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%A7%88%EB%B0%A9%EB%A1%9C%2016",
      imageUrl: "/images/maps/naver-map.png",
      color: "bg-white border-gray-300 text-gray-700 hover:bg-gray-50",
      activeColor: "bg-[#03C75A] text-white border-[#03C75A]",
      useIframe: false,
    },
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Map */}
          <div className="order-2 lg:order-1">
            {/* Map Tabs */}
            <div className="flex gap-2 mb-4">
              {(Object.keys(MAP_CONFIG) as MapType[]).map((mapType) => (
                <button
                  key={mapType}
                  onClick={() => setActiveMap(mapType)}
                  className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg border transition-all ${
                    activeMap === mapType
                      ? MAP_CONFIG[mapType].activeColor
                      : MAP_CONFIG[mapType].color
                  }`}
                >
                  {MAP_CONFIG[mapType].name}
                </button>
              ))}
            </div>

            {/* Map Display */}
            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
              {activeMap === "google" ? (
                <iframe
                  src={MAP_CONFIG.google.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${MAP_CONFIG.google.name} - ${t("companyNameValue")}`}
                />
              ) : (
                <a
                  href={MAP_CONFIG[activeMap].linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group"
                >
                  {/* Map Screenshot Image */}
                  <Image
                    src={MAP_CONFIG[activeMap].imageUrl}
                    alt={`${MAP_CONFIG[activeMap].name} - ${t("companyNameValue")} ${t("title")}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-semibold">{MAP_CONFIG[activeMap].name} {t("tabs.viewOnMap")}</span>
                    </div>
                  </div>
                </a>
              )}
            </div>

            {/* External Link Button */}
            <div className="mt-4">
              <a
                href={MAP_CONFIG[activeMap].linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-4 min-h-11 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {MAP_CONFIG[activeMap].name} {t("tabs.viewLarger")}
              </a>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 h-full">
              <h3 className="text-2xl font-bold text-[#0A1628] mb-6">
                {t("contactInfo")}
              </h3>

              <div className="space-y-6">
                {/* Company Name */}
                <div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t("companyName")}</p>
                      <p className="text-base font-semibold text-gray-900">
                        {t("companyNameValue")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t("address")}</p>
                      <p className="text-base text-gray-900 leading-relaxed">
                        {t("addressValue")}
                        <br />
                        {t("addressDetail")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t("phone")}</p>
                      <a
                        href={`tel:${t("phoneValue")}`}
                        className="text-base font-semibold text-[#0A1628] hover:text-[#3B82F6] transition-colors"
                      >
                        {t("phoneValue")}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fax */}
                <div>
                  <div className="flex items-start gap-3">
                    <Printer className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t("fax")}</p>
                      <p className="text-base text-gray-900">{t("faxValue")}</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t("email")}</p>
                      <a
                        href={`mailto:${t("emailValue")}`}
                        className="text-base font-semibold text-[#0A1628] hover:text-[#3B82F6] transition-colors break-all"
                      >
                        {t("emailValue")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-4 min-h-11 bg-[#0A1628] text-white font-semibold rounded-full hover:bg-[#1A2D47] hover:shadow-lg transition-all"
                >
                  {t("contactButton")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
