export function Location() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-3">
            Location
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            오시는 길
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Map */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm">
                    구글/네이버 지도 삽입 예정
                  </p>
                </div>
              </div>
            </div>

            {/* Map Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a
                href="https://map.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#FEE500] hover:bg-[#FDD835] text-[#000000] font-semibold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.293.801a.472.472 0 1 0 .886-.325l-.341-.932zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z" />
                </svg>
                카카오맵
              </a>
              <a
                href="https://map.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#03C75A] hover:bg-[#02B350] text-white font-semibold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z" />
                </svg>
                네이버맵
              </a>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 h-full">
              <h3 className="text-2xl font-bold text-[#0A1628] mb-6">
                연락처 정보
              </h3>

              <div className="space-y-6">
                {/* Company Name */}
                <div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">회사명</p>
                      <p className="text-base font-semibold text-gray-900">
                        (주)라온토탈솔루션
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">주소</p>
                      <p className="text-base text-gray-900 leading-relaxed">
                        서울시 서초구 마방로 16, 5층
                        <br />
                        (양재동, 재연빌딩)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">전화</p>
                      <a
                        href="tel:02-575-3051"
                        className="text-base font-semibold text-[#0A1628] hover:text-[#3B82F6] transition-colors"
                      >
                        02-575-3051
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fax */}
                <div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">팩스</p>
                      <p className="text-base text-gray-900">02-575-3052</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">이메일</p>
                      <a
                        href="mailto:sales@raontotalsolution.co.kr"
                        className="text-base font-semibold text-[#0A1628] hover:text-[#3B82F6] transition-colors break-all"
                      >
                        sales@raontotalsolution.co.kr
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-[#0A1628] text-white font-semibold rounded-full hover:bg-[#1A2D47] hover:shadow-lg transition-all"
                >
                  문의하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
