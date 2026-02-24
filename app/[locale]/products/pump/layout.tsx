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
    title: t("pump.title"),
    description: t("pump.description"),
    keywords:
      locale === "ko"
        ? ["마그네틱 펌프", "CP Pump", "Sealless 펌프", "부식성 유체 펌프"]
        : [
            "magnetic driven pump",
            "CP Pump",
            "sealless pump",
            "corrosive fluid pump",
          ],
    openGraph: {
      title: t("pump.title"),
      description: t("pump.description"),
      url: `https://raontotalsolution.com/${locale}/products/pump`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/products/pump`,
      languages: {
        ko: "https://raontotalsolution.com/ko/products/pump",
        en: "https://raontotalsolution.com/en/products/pump",
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
          { name: "Pump", url: "/products/pump" },
        ]}
      />
      <ProductSchema
        name="Pump"
        description="Magnetic Driven Pump 전문 솔루션"
        category="Industrial Pump"
        manufacturers={[{ name: "CP Pump" }]}
      />
      {children}
    </>
  );
}
