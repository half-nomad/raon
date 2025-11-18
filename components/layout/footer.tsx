import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">RAON</h3>
            <p className="text-sm text-gray-300">
              30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  회사소개
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  산업별 솔루션
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  제품
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  파트너
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase">Products</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Compressor & Parts</li>
              <li className="text-sm text-gray-300">Mixer / Agitator</li>
              <li className="text-sm text-gray-300">Pump</li>
              <li className="text-sm text-gray-300">Bearing</li>
              <li className="text-sm text-gray-300">Oil Purifier</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>서울시 서초구 마방로 16, 5층</li>
              <li>(양재동, 재연빌딩)</li>
              <li className="pt-2">
                <a
                  href="tel:02-575-3051"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Tel: 02-575-3051
                </a>
              </li>
              <li>
                <span>Fax: 02-575-3052</span>
              </li>
              <li>
                <a
                  href="mailto:sales@raontotalsolution.co.kr"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  sales@raontotalsolution.co.kr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} 라온토탈솔루션. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
