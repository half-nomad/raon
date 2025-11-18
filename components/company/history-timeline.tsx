interface TimelineItem {
  year: string;
  events: string[];
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="group relative">
      {/* Timeline Node */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform" />

      {/* Content Card */}
      <div className="ml-8 bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300">
        {/* Year Badge */}
        <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#0A1628] to-[#1A2D47] text-white font-bold text-lg rounded-full mb-4">
          {item.year}
        </div>

        {/* Events List */}
        <ul className="space-y-3">
          {item.events.map((event, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700 leading-relaxed"
            >
              <span className="flex-shrink-0 w-2 h-2 bg-[#3B82F6] rounded-full mt-2" />
              <span>{event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function HistoryTimeline() {
  const timeline: TimelineItem[] = [
    {
      year: "2020",
      events: ["HK 인터내셔널 설립 (개인)"],
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
      year: "2022",
      events: ["SPX Flow Technology 한국 Master 대리점 계약 체결"],
    },
    {
      year: "2024",
      events: [
        "NEUMAN&ESSER 울산 대리점 계약 체결",
        "(주)터보링크 (정유/석유화학 분야) 대리점 계약 체결",
      ],
    },
    {
      year: "2025",
      events: [
        "중국 Cylinder liner 제작사 (WTQ)와 한국 대리점 계약 체결",
        "CP pump systems (Swiss) 울산 대리점 계약 체결",
        "FIMA (Germany) Compressor 제작사와 대리점 계약 체결",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            Company History
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            연혁
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            2020년부터 현재까지 라온토탈솔루션의 성장 여정
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3B82F6] to-[#0A1628] -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  {index % 2 === 0 && (
                    <div className="pr-12">
                      <TimelineCard item={item} />
                    </div>
                  )}
                </div>

                {/* Center Node */}
                <div className="relative flex-shrink-0 w-6 h-6 bg-[#3B82F6] rounded-full border-4 border-white shadow-xl z-10" />

                <div className="flex-1">
                  {index % 2 === 1 && (
                    <div className="pl-12">
                      <TimelineCard item={item} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          {/* Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#0A1628]" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <TimelineCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
