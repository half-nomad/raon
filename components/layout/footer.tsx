"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">RAON</h3>
            <p className="text-sm text-gray-300">
              {t("description")}
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
                  {t("links.company")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {t("links.industries")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {t("links.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {t("links.partners")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/compressor"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {t("productList.compressor")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mixer"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {t("productList.mixer")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pump"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {t("productList.pump")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bearing"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {t("productList.bearing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/oil-purifier"
                  className="text-sm text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {t("productList.oilPurifier")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{t("address")}</li>
              <li className="pt-2">
                <a
                  href="tel:02-575-3051"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Tel: {t("phone")}
                </a>
              </li>
              <li>
                <span>Fax: {t("fax")}</span>
              </li>
              <li>
                <a
                  href="mailto:rts@raontotalsolution.co.kr"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-sm text-gray-400 space-y-1">
            <p>{t("businessInfo.companyName")} | {t("businessInfo.ceo")}</p>
            <p>{t("businessInfo.businessNumber")} | {t("businessInfo.privacyOfficer")}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {t("copyright", { year: currentYear })}
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
              >
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
