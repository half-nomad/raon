import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-8">
          {t("title")}
        </h1>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A1628] mb-4">
              {t("sections.general.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("sections.general.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A1628] mb-4">
              {t("sections.service.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("sections.service.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A1628] mb-4">
              {t("sections.liability.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("sections.liability.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A1628] mb-4">
              {t("sections.copyright.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("sections.copyright.content")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
