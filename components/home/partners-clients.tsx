"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface LogoItem {
  name: string;
  type?: string;
  logo: string;
}

function LogoSlider({
  logos,
  direction = "left",
}: {
  logos: LogoItem[];
  direction?: "left" | "right";
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let position = 0;
    const speed = direction === "left" ? -0.5 : 0.5;

    const animate = () => {
      position += speed;
      const itemWidth = 240; // Width of each logo item
      const totalWidth = itemWidth * logos.length;

      if (direction === "left" && Math.abs(position) >= totalWidth) {
        position = 0;
      } else if (direction === "right" && position >= 0) {
        position = -totalWidth;
      }

      slider.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [direction, logos.length]);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-8 items-center"
        style={{ willChange: "transform" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 w-[180px] h-20 flex items-center justify-center bg-white rounded-lg border border-gray-200 hover:border-[#3B82F6] hover:shadow-lg transition-all px-4"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={logo.logo}
                alt={logo.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
    </div>
  );
}

function ClientsGrid({ clients }: { clients: LogoItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {clients.map((client, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-white rounded-lg border border-gray-200 hover:border-[#3B82F6] hover:shadow-lg transition-all p-4 h-24"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PartnersClients() {
  const t = useTranslations("partners.home");
  const tGlobal = useTranslations("partners.globalPartners");
  const tClients = useTranslations("partners.majorClients");

  const partners: LogoItem[] = [
    { name: "SPXFLOW", type: "Mixer/Heat Exchange", logo: "/images/partners/spx-flow.jpg" },
    { name: "NEUMAN & ESSER", type: "Compressor", logo: "/images/partners/neuman-esser.jpg" },
    { name: "CASTANET", type: "Cylinder Liner", logo: "/images/partners/castanet.jpg" },
    { name: "WTQ", type: "Pump", logo: "/images/partners/wtq.jpg" },
    { name: "CP pump", type: "Pump System", logo: "/images/partners/cp-pump-systems.jpg" },
    // KB DELTA - 노출 금지 (2025-12-18)
    // { name: "KB DELTA", type: "Bearing", logo: "/images/partners/kb-delta-logo.png" },
    { name: "TURBO LINK", type: "Turbocharger", logo: "/images/partners/turbolink.jpg" },
    { name: "FIMA", type: "Oil Purifier", logo: "/images/partners/fima.jpg" },
    { name: "NIDEC", type: "Motor", logo: "/images/partners/nidec.webp" },
    { name: "삼영필텍", type: "Oil Purifier", logo: "/images/partners/syt.jpg" },
    { name: "LDW", type: "Motor/Generator", logo: "/images/partners/ldw_logo.png" },
  ];

  const clients: LogoItem[] = [
    { name: "TJG Huchems", type: "석유화학", logo: "/images/clients/tjg-huchems-logo.png" },
    { name: "SK에너지", type: "정유", logo: "/images/clients/sk-logo.JPG" },
    { name: "S-OIL", type: "정유", logo: "/images/clients/soil-logo.JPG" },
    { name: "GS칼텍스", type: "정유", logo: "/images/clients/gs-caltex-logo.webp" },
    { name: "HD현대오일뱅크", type: "정유", logo: "/images/clients/hd-oilbank-logo.png" },
    { name: "Hanwha", type: "조선", logo: "/images/clients/hanhwa-logo.webp" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            Partners & Clients
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Global Partners Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] mb-2">
              {tGlobal("title")}
            </h3>
            <p className="text-sm text-gray-600">
              {tGlobal("description")}
            </p>
          </div>
          <LogoSlider logos={partners} direction="left" />
        </div>

        {/* Trusted By Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] mb-2">
              {tClients("title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("clientsDescription")}
            </p>
          </div>
          <ClientsGrid clients={clients} />
        </div>
      </div>
    </section>
  );
}
