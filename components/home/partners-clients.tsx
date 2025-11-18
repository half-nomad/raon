"use client";

import { useEffect, useRef } from "react";

interface LogoItem {
  name: string;
  type?: string;
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
            className="flex-shrink-0 w-[200px] h-24 flex items-center justify-center bg-white rounded-lg border border-gray-200 hover:border-[#3B82F6] hover:shadow-lg transition-all px-6"
          >
            <div className="text-center">
              <p className="text-sm font-bold text-gray-700 mb-1">
                {logo.name}
              </p>
              {logo.type && (
                <p className="text-xs text-gray-500">{logo.type}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}

function ClientsGrid({ clients }: { clients: LogoItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {clients.map((client, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-white rounded-lg border border-gray-200 hover:border-[#3B82F6] hover:shadow-lg transition-all p-6 h-28"
        >
          <div className="text-center">
            <p className="text-sm font-bold text-gray-700 mb-1">
              {client.name}
            </p>
            {client.type && (
              <p className="text-xs text-gray-500">{client.type}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PartnersClients() {
  const partners: LogoItem[] = [
    { name: "SPXFLOW", type: "Mixer/Heat Exchange" },
    { name: "NEUMAN & ESSER", type: "Compressor" },
    { name: "CASTANET", type: "Cylinder Liner" },
    { name: "WTQ", type: "Pump" },
    { name: "CP pump", type: "Pump System" },
    { name: "KB DELTA", type: "Bearing" },
    { name: "TURBO LINK", type: "Turbocharger" },
    { name: "FIMA", type: "Oil Purifier" },
  ];

  const clients: LogoItem[] = [
    { name: "TKG", type: "석유화학" },
    { name: "SK에너지", type: "정유" },
    { name: "S-OIL", type: "정유" },
    { name: "GS칼텍스", type: "정유" },
    { name: "HD현대오일뱅크", type: "정유" },
    { name: "Hanwha", type: "조선" },
    { name: "휴켐스", type: "석유화학" },
    { name: "여수석유화학", type: "석유화학" },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            Partners & Clients
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            신뢰할 수 있는 파트너
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            글로벌 파트너와 국내 주요 고객사가 함께합니다
          </p>
        </div>

        {/* Global Partners Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] mb-2">
              글로벌 파트너
            </h3>
            <p className="text-sm text-gray-600">
              세계적인 기술력을 보유한 파트너사와 협력합니다
            </p>
          </div>
          <LogoSlider logos={partners} direction="left" />
        </div>

        {/* Trusted By Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] mb-2">
              주요 고객사
            </h3>
            <p className="text-sm text-gray-600">
              대한민국 주요 산업의 성장을 함께합니다
            </p>
          </div>
          <ClientsGrid clients={clients} />
        </div>
      </div>
    </section>
  );
}
