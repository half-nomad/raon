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
    title: t("contact.title"),
    description: t("contact.description"),
    keywords:
      locale === "ko"
        ? ["문의하기", "견적 문의", "기술 상담", "회전기계 부품 문의"]
        : [
            "contact us",
            "quote request",
            "technical consulting",
            "rotating equipment inquiry",
          ],
    openGraph: {
      title: t("contact.title"),
      description: t("contact.description"),
      url: `https://raontotalsolution.com/${locale}/contact`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/contact`,
      languages: {
        ko: "https://raontotalsolution.com/ko/contact",
        en: "https://raontotalsolution.com/en/contact",
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
          { name: "Contact", url: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
