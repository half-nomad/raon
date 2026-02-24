import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CEOMessage } from "@/components/company/ceo-message";
import { HistoryTimeline } from "@/components/company/history-timeline";
import { Location } from "@/components/company/location";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("company.title"),
    description: t("company.description"),
    keywords:
      locale === "ko"
        ? [
            "회사소개",
            "라온토탈솔루션",
            "회전기계 전문기업",
            "B2B 부품 솔루션",
          ]
        : [
            "about us",
            "Raon Total Solution",
            "rotating equipment specialist",
            "B2B parts solution",
          ],
    openGraph: {
      title: t("company.title"),
      description: t("company.description"),
      url: `https://raontotalsolution.com/${locale}/company`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/company`,
      languages: {
        ko: "https://raontotalsolution.com/ko/company",
        en: "https://raontotalsolution.com/en/company",
      },
    },
  };
}

export default async function CompanyPage() {
  const t = await getTranslations("company.hero");

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Company", url: "/company" },
        ]}
      />
      <Header />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#0A1628] to-[#1A2D47]">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {t("description")}
            <br />
            {t("descriptionLine2")}
          </p>
        </div>
      </section>

      <CEOMessage />
      <HistoryTimeline />
      <Location />

      <Footer />
    </div>
  );
}
