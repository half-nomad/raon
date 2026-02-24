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
    title: t("bearingLubrication.title"),
    description: t("bearingLubrication.description"),
    keywords:
      locale === "ko"
        ? [
            "틸팅패드 베어링",
            "터보링크",
            "윤활유 정제",
            "유체윤활베어링",
          ]
        : [
            "tilting pad bearing",
            "Turbolink",
            "oil purification",
            "fluid bearing",
          ],
    openGraph: {
      title: t("bearingLubrication.title"),
      description: t("bearingLubrication.description"),
      url: `https://raontotalsolution.com/${locale}/products/bearing-lubrication`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/products/bearing-lubrication`,
      languages: {
        ko: "https://raontotalsolution.com/ko/products/bearing-lubrication",
        en: "https://raontotalsolution.com/en/products/bearing-lubrication",
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
          {
            name: "Bearing & Lubrication",
            url: "/products/bearing-lubrication",
          },
        ]}
      />
      <ProductSchema
        name="Bearing & Lubrication"
        description="유체윤활베어링 및 윤활유 정제 솔루션"
        category="Industrial Bearing"
        manufacturers={[{ name: "터보링크" }, { name: "삼영필텍" }]}
      />
      {children}
    </>
  );
}
