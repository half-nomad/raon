"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  className?: string;
}

export function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  if (images.length === 0) {
    return (
      <div className={`aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center ${className}`}>
        <div className="text-center text-slate-400">
          <div className="text-6xl mb-2">📦</div>
          <p className="text-sm">이미지 삽입 예정</p>
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`aspect-square relative rounded-xl overflow-hidden bg-slate-100 ${className}`}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Main Image */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 group">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="이전 이미지"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="다음 이미지"
        >
          <ChevronRight className="w-5 h-5 text-slate-700" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
              currentIndex === index
                ? "border-[#3B82F6] ring-2 ring-[#3B82F6]/30"
                : "border-transparent hover:border-slate-300"
            }`}
            aria-label={`${index + 1}번째 이미지 보기`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Mobile Swipe Dots */}
      <div className="flex justify-center gap-1.5 md:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-[#3B82F6] w-4"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`${index + 1}번째 이미지로 이동`}
          />
        ))}
      </div>
    </div>
  );
}
