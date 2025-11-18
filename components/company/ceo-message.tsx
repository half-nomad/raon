export function CEOMessage() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            CEO Message
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            대표이사 인사말
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image/Signature Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* CEO Photo Placeholder */}
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-6">
                <span className="text-gray-400 text-sm">CEO 사진 삽입 예정</span>
              </div>

              {/* Signature */}
              <div className="text-right">
                <p className="text-lg font-semibold text-[#0A1628] mb-1">
                  대표이사 김혜경 올림
                </p>
                <div className="h-16 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">서명 이미지</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg sm:text-xl font-medium text-[#0A1628]">
                안녕하십니까?
              </p>

              <p>
                저희 (주)라온토탈솔루션은 정유·석유화학 및 조선 산업 분야에서
                약 30년간 축적한 경험과 기술력을 바탕으로 고객의 가치를 극대화하는
                최고의 파트너가 되고자 합니다.
              </p>

              {/* Highlighted Quote */}
              <div className="relative bg-gradient-to-br from-[#0A1628] to-[#1A2D47] p-6 sm:p-8 rounded-xl text-white my-8">
                <div className="absolute top-4 left-4 text-6xl text-[#3B82F6]/20 font-serif">
                  "
                </div>
                <p className="relative z-10 text-base sm:text-lg font-medium leading-relaxed pl-6">
                  저희 라온토탈솔루션 임직원 모두는
                  <br />
                  '고객 최우선'이라는 신념 아래
                  <br />
                  최상의 품질과 서비스를 제공하기 위해
                  <br />
                  끊임없이 노력하겠습니다.
                </p>
              </div>

              <p>
                글로벌 파트너사들과의 긴밀한 협력을 통해 최신 기술과 제품을
                국내에 공급하며, 신속한 납기 대응과 전문적인 기술 지원으로
                고객 여러분의 성공을 함께 만들어가겠습니다.
              </p>

              <p>
                앞으로도 변함없는 신뢰와 혁신으로 고객 여러분께
                최고의 가치를 제공하는 신뢰받는 비즈니스 파트너로 성장하는
                주식회사 라온토탈솔루션이 되겠습니다.
              </p>

              <p className="text-lg font-semibold text-[#0A1628] pt-4">
                감사합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
