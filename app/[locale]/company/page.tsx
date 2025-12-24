import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CEOMessage } from "@/components/company/ceo-message";
import { HistoryTimeline } from "@/components/company/history-timeline";
import { Location } from "@/components/company/location";
import { getTranslations } from "next-intl/server";

export default async function CompanyPage() {
  const t = await getTranslations("company.hero");

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#0A1628] to-[#1A2D47]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
