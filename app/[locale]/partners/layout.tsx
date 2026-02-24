import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("partners.title"),
    description: t("partners.description"),
    keywords:
      locale === "ko"
        ? [
            "SPXFLOW",
            "NEUMAN & ESSER",
            "NIDEC",
            "글로벌 파트너",
            "주요 고객사",
          ]
        : [
            "SPXFLOW",
            "NEUMAN & ESSER",
            "NIDEC",
            "global partners",
            "major clients",
          ],
    openGraph: {
      title: t("partners.title"),
      description: t("partners.description"),
      url: `https://raontotalsolution.com/${locale}/partners`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/partners`,
      languages: {
        ko: "https://raontotalsolution.com/ko/partners",
        en: "https://raontotalsolution.com/en/partners",
      },
    },
  };
}

export default function Layout({ children }: Props) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Partners", url: "/partners" },
        ]}
      />
      {children}
    </>
  );
}
