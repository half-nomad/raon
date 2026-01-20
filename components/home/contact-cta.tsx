"use client";

import { CTAButton } from "@/components/ui/cta-button";
import { FileText, Phone, ChevronRight, Mail, ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactCTA() {
  const t = useTranslations("common");
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1A2D47]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 section-container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3B82F6]/20 mb-6">
            <FileText className="w-8 h-8 text-[#3B82F6]" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("cta.title")}
            <br className="hidden sm:block" />
            {t("cta.titleLine2")}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10">
            {t("cta.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="/contact?type=consulting"
              variant="primary"
              size="large"
              className="bg-white text-[#0A1628] hover:bg-gray-100"
            >
              {t("cta.technicalConsulting")}
              <Phone className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              href="/contact?type=quote"
              variant="secondary"
              size="large"
            >
              {t("cta.requestQuote")}
              <ChevronRight className="ml-2 w-5 h-5" />
            </CTAButton>
          </div>

          {/* Contact Info */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/70 text-sm">
              <a
                href="tel:02-575-3051"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>02-575-3051</span>
              </a>
              <a
                href="mailto:rts@raontotalsolution.co.kr"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>rts@raontotalsolution.co.kr</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#0A1628] transition-all duration-300 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </section>
  );
}
