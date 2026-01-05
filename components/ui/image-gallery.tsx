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
  aspectRatio?: "square" | "4/3" | "16/9";
  brandLabel?: string;
  objectFit?: "contain" | "cover";
}

export function ImageGallery({
  images,
  className = "",
  aspectRatio = "square",
  brandLabel,
  objectFit = "contain"
}: ImageGalleryProps) {
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

  const aspectRatioClass = {
    "square": "aspect-square",
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-[16/9]"
  }[aspectRatio];

  const objectFitClass = objectFit === "cover" ? "object-cover" : "object-contain";

  if (images.length === 0) {
    return (
      <div className={`${aspectRatioClass} bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center ${className}`}>
        <div className="text-center text-slate-400">
          <div className="text-6xl mb-2">&#128230;</div>
          <p className="text-sm">Image placeholder</p>
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`${aspectRatioClass} relative rounded-2xl overflow-hidden bg-slate-100 shadow-xl ${className}`}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className={objectFitClass}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Brand Label */}
        {brandLabel && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
              {brandLabel}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Image */}
      <div className={`relative ${aspectRatioClass} rounded-2xl overflow-hidden bg-slate-100 shadow-xl group`}>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className={`${objectFitClass} transition-opacity duration-300`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Brand Label */}
        {brandLabel && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-medium rounded-full">
              {brandLabel}
            </span>
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-[#0A1628]" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 justify-center overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all ${
              currentIndex === index
                ? "ring-2 ring-[#3B82F6] ring-offset-2"
                : "opacity-60 hover:opacity-100"
            }`}
            aria-label={`View image ${index + 1}`}
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
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
