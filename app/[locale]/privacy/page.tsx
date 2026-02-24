import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("privacy.title"),
    description: t("privacy.description"),
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/privacy`,
      languages: {
        ko: "https://raontotalsolution.com/ko/privacy",
        en: "https://raontotalsolution.com/en/privacy",
      },
    },
  };
}

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-8">
          {t("title")}
        </h1>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A1628] mb-4">
              {t("sections.collection.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("sections.collection.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A1628] mb-4">
              {t("sections.usage.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("sections.usage.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A1628] mb-4">
              {t("sections.protection.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("sections.protection.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A1628] mb-4">
              {t("sections.contact.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("sections.contact.content")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
