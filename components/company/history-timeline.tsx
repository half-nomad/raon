"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface TimelineItem {
  year: string;
  events: string[];
}

export function HistoryTimeline() {
  const t = useTranslations("company.history");

  const TIMELINE_DATA: TimelineItem[] = [
    t.raw("years.2025"),
    t.raw("years.2024"),
    t.raw("years.2022"),
    t.raw("years.2021"),
    t.raw("years.2020"),
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const desktopRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 스크롤 위치 기반으로 가장 중앙에 가까운 요소 찾기
  const findClosestToCenter = useCallback(() => {
    const refs = isDesktop ? desktopRefs : mobileRefs;
    const elements = refs.current.filter(Boolean) as HTMLDivElement[];
    if (!elements.length) return;

    const viewportCenter = window.innerHeight / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      // hidden 요소 건너뛰기
      if (rect.width === 0 && rect.height === 0) return;

      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elementCenter - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, [isDesktop]);

  // 화면 크기 감지
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    // 초기 위치 계산
    findClosestToCenter();

    // 스크롤 이벤트 (throttled)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          findClosestToCenter();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [findClosestToCenter]);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0A1628] to-[#0F1D32]">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            {t("label")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Desktop Timeline - Zigzag Layout */}
        <div ref={containerRef} className="hidden md:block relative">
          {/* 중앙 세로 라인 (배경) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-700" />

          {/* 중앙 세로 라인 (진행된 부분) */}
          <div
            className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] to-[#60A5FA] transition-all duration-500 ease-out"
            style={{
              height:
                activeIndex === TIMELINE_DATA.length - 1
                  ? "100%"
                  : `calc(${(activeIndex / (TIMELINE_DATA.length - 1)) * 100}% + 3rem)`,
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  ref={(el) => {
                    desktopRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="relative"
                >
                  {/* 중앙 노드 - 절대 위치로 정확히 중앙 */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                    <div
                      className={[
                        "w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[3px] flex items-center justify-center transition-all duration-300",
                        isPast && "bg-[#3B82F6] border-[#3B82F6]",
                        isActive &&
                          "bg-[#0A1628] border-[#3B82F6] shadow-[0_0_0_8px_rgba(59,130,246,0.25)] scale-110",
                        !isPast &&
                          !isActive &&
                          "bg-[#0A1628] border-slate-600",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {(isPast || isActive) && (
                        <div
                          className={[
                            "w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300",
                            isPast ? "bg-white" : "bg-[#3B82F6]",
                          ].join(" ")}
                        />
                      )}
                    </div>
                  </div>

                  {/* 카드 - 왼쪽 또는 오른쪽 배치 */}
                  <div
                    className={`w-[calc(50%-40px)] ${isLeft ? "mr-auto pr-4" : "ml-auto pl-4"}`}
                  >
                    <TimelineCard
                      item={item}
                      isActive={isActive}
                      isPast={isPast}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Left-aligned */}
        <div className="md:hidden relative pl-12">
          {/* 왼쪽 세로 라인 (배경) */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />

          {/* 왼쪽 세로 라인 (진행된 부분) */}
          <div
            className="absolute left-[15px] top-0 w-[3px] bg-gradient-to-b from-[#3B82F6] to-[#60A5FA] transition-all duration-500 ease-out"
            style={{
              height:
                activeIndex === TIMELINE_DATA.length - 1
                  ? "100%"
                  : `calc(${(activeIndex / (TIMELINE_DATA.length - 1)) * 100}% + 2rem)`,
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-8">
            {TIMELINE_DATA.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <div
                  key={item.year}
                  ref={(el) => {
                    mobileRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="relative"
                >
                  {/* 노드 */}
                  <div className="absolute -left-[44px] top-6 z-10">
                    <div
                      className={[
                        "w-8 h-8 rounded-full border-[3px] flex items-center justify-center transition-all duration-300",
                        isPast && "bg-[#3B82F6] border-[#3B82F6]",
                        isActive &&
                          "bg-[#0A1628] border-[#3B82F6] shadow-[0_0_0_6px_rgba(59,130,246,0.25)] scale-110",
                        !isPast &&
                          !isActive &&
                          "bg-[#0A1628] border-slate-600",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {(isPast || isActive) && (
                        <div
                          className={[
                            "w-2 h-2 rounded-full transition-all duration-300",
                            isPast ? "bg-white" : "bg-[#3B82F6]",
                          ].join(" ")}
                        />
                      )}
                    </div>
                  </div>

                  {/* 카드 */}
                  <TimelineCard item={item} isActive={isActive} isPast={isPast} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// 타임라인 카드 컴포넌트
function TimelineCard({
  item,
  isActive,
  isPast,
}: {
  item: TimelineItem;
  isActive: boolean;
  isPast: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border px-5 py-6 sm:px-6 sm:py-8 transition-all duration-500",
        "bg-slate-900/40 border-slate-700/80",
        !isActive && !isPast && "opacity-50",
        isPast && "opacity-80",
        isActive &&
          "border-[#3B82F6]/80 bg-slate-900/80 opacity-100 shadow-[0_18px_45px_rgba(15,23,42,0.95)]",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Year Badge */}
      <div
        className={[
          "inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300",
          isActive
            ? "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white"
            : isPast
              ? "bg-[#3B82F6]/20 text-[#3B82F6]"
              : "bg-slate-800 text-slate-400",
        ].join(" ")}
      >
        {item.year}
      </div>

      {/* Events List */}
      <ul className="mt-4 space-y-3">
        {item.events.map((event, eventIndex) => (
          <li
            key={eventIndex}
            className="flex items-start gap-3 leading-relaxed"
          >
            <span
              className={[
                "flex-shrink-0 w-2 h-2 rounded-full mt-2 transition-colors duration-300",
                isActive
                  ? "bg-[#3B82F6]"
                  : isPast
                    ? "bg-[#3B82F6]/50"
                    : "bg-slate-600",
              ].join(" ")}
            />
            <span
              className={[
                "transition-colors duration-300",
                isActive ? "text-slate-200" : "text-slate-400",
              ].join(" ")}
            >
              {event}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
