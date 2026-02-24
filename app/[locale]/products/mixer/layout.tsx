import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ProductSchema } from "@/components/seo/product-schema";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("mixer.title"),
    description: t("mixer.description"),
    keywords:
      locale === "ko"
        ? ["산업용 믹서", "SPXFLOW", "Lightnin", "교반기", "혼합 솔루션"]
        : [
            "industrial mixer",
            "SPXFLOW",
            "Lightnin",
            "agitator",
            "mixing solution",
          ],
    openGraph: {
      title: t("mixer.title"),
      description: t("mixer.description"),
      url: `https://raontotalsolution.com/${locale}/products/mixer`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/products/mixer`,
      languages: {
        ko: "https://raontotalsolution.com/ko/products/mixer",
        en: "https://raontotalsolution.com/en/products/mixer",
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
          { name: "Products", url: "/products" },
          { name: "Mixer", url: "/products/mixer" },
        ]}
      />
      <ProductSchema
        name="Mixer & Agitator"
        description="산업용 Mixing Solution"
        category="Industrial Mixer"
        manufacturers={[{ name: "SPXFLOW" }]}
      />
      {children}
    </>
  );
}
