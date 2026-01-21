"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageItem {
  src: string;
  alt: string;
}

interface Partner {
  name: string;
  country?: string;
}

interface ProductIntroProps {
  title: string;
  description: string;
  images: ImageItem[];
  partners?: Partner[];
  highlights?: string[];
  className?: string;
}

export function ProductIntro({
  title,
  description,
  images,
  partners,
  highlights,
  className,
}: ProductIntroProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  // 모자이크 레이아웃: 메인 1장 + 서브 4장
  const mainImage = images[0];
  const subImages = images.slice(1, 5);

  return (
    <>
      <section className={cn("py-8 md:py-12 lg:py-16", className)}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* 이미지 갤러리 - 모자이크 */}
            <div className="space-y-2">
              {/* 메인 이미지 */}
              <div
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                {mainImage ? (
                  <Image
                    src={mainImage.src}
                    alt={mainImage.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span className="text-6xl">📦</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
              </div>

              {/* 서브 이미지 그리드 */}
              {subImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {subImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 cursor-pointer group"
                      onClick={() => openLightbox(idx + 1)}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="120px"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  ))}
                  {/* 더보기 버튼 (이미지가 5개 이상일 때) */}
                  {images.length > 5 && (
                    <button
                      onClick={() => openLightbox(4)}
                      className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded"
                    >
                      +{images.length - 5}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* 설명 영역 */}
            <div className="space-y-6">
              {/* 파트너 태그 */}
              {partners && partners.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {partners.map((partner, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      <span className="font-medium">{partner.name}</span>
                      {partner.country && (
                        <span className="text-slate-400">
                          · {partner.country}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {/* 타이틀 */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1628]">
                {title}
              </h2>

              {/* 설명 */}
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {description}
              </p>

              {/* 핵심 하이라이트 */}
              {highlights && highlights.length > 0 && (
                <div className="pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox 모달 */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-6 h-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="이전"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="다음"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-4xl aspect-[4/3] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
