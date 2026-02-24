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
    title: t("motor.title"),
    description: t("motor.description"),
    keywords:
      locale === "ko"
        ? ["대형 모터", "LDW", "NIDEC", "방폭인증", "산업용 전동기"]
        : [
            "large motor",
            "LDW",
            "NIDEC",
            "explosion proof",
            "industrial motor",
          ],
    openGraph: {
      title: t("motor.title"),
      description: t("motor.description"),
      url: `https://raontotalsolution.com/${locale}/products/motor`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/products/motor`,
      languages: {
        ko: "https://raontotalsolution.com/ko/products/motor",
        en: "https://raontotalsolution.com/en/products/motor",
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
          { name: "Motor", url: "/products/motor" },
        ]}
      />
      <ProductSchema
        name="Motor"
        description="대형 Motor 부품 및 방폭인증서비스"
        category="Industrial Motor"
        manufacturers={[{ name: "LDW" }, { name: "NIDEC" }]}
      />
      {children}
    </>
  );
}
