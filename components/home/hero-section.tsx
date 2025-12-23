"use client";

import { CTAButton } from "@/components/ui/cta-button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Video for desktop/tablet */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        >
          <source src="/images/hero/plant_video.mp4" type="video/mp4" />
        </video>

        {/* Fallback image for mobile */}
        <div
          className="md:hidden w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/plant-night.png')" }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/80 via-[#0A1628]/70 to-[#3B82F6]/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          {/* Main Copy */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Technology Connecting
            <br />
            Energy's Future
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
            30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업.
            <br className="hidden sm:block" />
            라온토탈솔루션이 최적의 품질과 납기로 고객의 가치를 높입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton
              href="/industries"
              variant="primary"
              size="large"
            >
              산업별 솔루션 보기
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="large"
            >
              견적 문의하기
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Slide Indicator (for future expansion) */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex items-center gap-2 text-white/70 text-sm">
        <span className="font-mono">01</span>
        <span className="text-white/40">|</span>
        <span className="font-mono text-white/40">03</span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}
