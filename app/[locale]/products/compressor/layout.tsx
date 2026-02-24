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
    title: t("compressor.title"),
    description: t("compressor.description"),
    keywords:
      locale === "ko"
        ? [
            "왕복동 압축기",
            "컴프레서 부품",
            "NEUMAN & ESSER",
            "FIMA",
            "CASTANET",
            "터보 컴프레서",
          ]
        : [
            "reciprocating compressor",
            "compressor parts",
            "NEUMAN & ESSER",
            "FIMA",
            "turbo compressor",
          ],
    openGraph: {
      title: t("compressor.title"),
      description: t("compressor.description"),
      url: `https://raontotalsolution.com/${locale}/products/compressor`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}/products/compressor`,
      languages: {
        ko: "https://raontotalsolution.com/ko/products/compressor",
        en: "https://raontotalsolution.com/en/products/compressor",
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
          { name: "Compressor", url: "/products/compressor" },
        ]}
      />
      <ProductSchema
        name="Compressor & Parts"
        description="왕복동 압축기 부품 및 신규 터보 컴프레서 솔루션"
        category="Industrial Compressor"
        manufacturers={[
          { name: "NEUMAN & ESSER" },
          { name: "FIMA" },
          { name: "CASTANET" },
        ]}
      />
      {children}
    </>
  );
}
