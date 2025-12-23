"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  events: string[];
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isLeft?: boolean;
}

function TimelineCard({ item, index, isLeft = false }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Content Card */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300">
        {/* Year Badge */}
        <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#0A1628] to-[#1A2D47] text-white font-bold text-xl rounded-full mb-4 shadow-lg">
          {item.year}
        </div>

        {/* Events List */}
        <ul className="space-y-3">
          {item.events.map((event, eventIndex) => (
            <li
              key={eventIndex}
              className="flex items-start gap-3 text-gray-700 leading-relaxed"
            >
              <span className="flex-shrink-0 w-2 h-2 bg-[#3B82F6] rounded-full mt-2" />
              <span>{event}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function HistoryTimeline() {
  // Timeline data in descending order (latest first)
  const timeline: TimelineItem[] = [
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

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            연혁
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            2020년부터 현재까지 라온토탈솔루션의 성장 여정
          </p>
        </motion.div>

        {/* Desktop Timeline - Center-aligned zigzag layout */}
        <div className="hidden md:block relative">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#3B82F6] to-[#0A1628] -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center">
                  {/* Left side content */}
                  <div className={`flex-1 ${isLeft ? 'pr-8 md:pr-12' : ''}`}>
                    {isLeft && <TimelineCard item={item} index={index} isLeft={true} />}
                  </div>

                  {/* Center Node with ripple effect */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative flex-shrink-0 z-10"
                  >
                    <div className="w-5 h-5 bg-[#3B82F6] rounded-full border-4 border-white shadow-lg relative z-10" />

                    {/* Ripple waves - 3 concentric circles */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute top-0 left-0 w-5 h-5 bg-[#3B82F6] rounded-full"
                        initial={{ scale: 1, opacity: 0.6 }}
                        whileInView={{ scale: 4, opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 2,
                          delay: index * 0.1 + i * 0.4,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Right side content */}
                  <div className={`flex-1 ${!isLeft ? 'pl-8 md:pl-12' : ''}`}>
                    {!isLeft && <TimelineCard item={item} index={index} isLeft={false} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Left-aligned simple layout */}
        <div className="md:hidden relative pl-8">
          {/* Left Vertical Line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#3B82F6] to-[#0A1628]" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Node on the line with ripple effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="absolute -left-[26px] top-3 z-10"
                >
                  <div className="w-4 h-4 bg-[#3B82F6] rounded-full border-3 border-white shadow-lg relative z-10" />

                  {/* Ripple waves - 3 concentric circles */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute top-0 left-0 w-4 h-4 bg-[#3B82F6] rounded-full"
                      initial={{ scale: 1, opacity: 0.6 }}
                      whileInView={{ scale: 4, opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 2,
                        delay: index * 0.1 + i * 0.4,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>

                {/* Content Card */}
                <TimelineCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
