"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  events: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2025",
    events: [
      "중국 Cylinder liner 제작사 (WTQ)와 한국 대리점 계약 체결",
      "CP pump systems (Swiss) 울산 대리점 계약 체결",
      "FIMA (Germany) Compressor 제작사와 대리점 계약 체결",
    ],
  },
  {
    year: "2024",
    events: [
      "NEUMAN&ESSER 울산 대리점 계약 체결",
      "(주)터보링크 (정유/석유화학 분야) 대리점 계약 체결",
    ],
  },
  {
    year: "2022",
    events: ["SPX Flow Technology 한국 Master 대리점 계약 체결"],
  },
  {
    year: "2021",
    events: [
      "(주)라온토탈솔루션 회사명 변경 (법인 전환)",
      "프랑스 Wearing Parts (Castanet) 대리점 계약 체결",
      "미국 Valve 제작사와 대리점 계약 체결",
    ],
  },
  {
    year: "2020",
    events: ["HK 인터내셔널 설립 (개인)"],
  },
];

export function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = itemRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 현재 보이는 모든 요소 중에서 가장 viewport 중앙에 가까운 요소 찾기
        const visibleElements: { index: number; distance: number }[] = [];

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = Math.abs(elementCenter - viewportCenter);
            const index = Number((entry.target as HTMLDivElement).dataset.index);

            if (!isNaN(index)) {
              visibleElements.push({ index, distance });
            }
          }
        });

        if (visibleElements.length > 0) {
          // 가장 중앙에 가까운 요소 선택
          visibleElements.sort((a, b) => a.distance - b.distance);
          const closestIndex = visibleElements[0].index;
          setActiveIndex(closestIndex);
        }
      },
      {
        root: null,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0A1628] to-[#0F1D32]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            Company History
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            연혁
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            2020년부터 현재까지 라온토탈솔루션의 성장 여정
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
                    itemRefs.current[index] = el;
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
                    if (typeof window !== "undefined" && window.innerWidth < 768) {
                      itemRefs.current[index] = el;
                    }
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
