import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getTranslations } from "next-intl/server";

export default async function ProductsPage() {
  const t = await getTranslations();
  const products = [
    {
      id: "compressor",
      title: "Compressor & Spare parts",
      brand: "WTQ, Castanet SA, KB Delta",
      description: t("products.categories.compressor.description"),
      features: [
        t("products.categories.compressor.features.0"),
        t("products.categories.compressor.features.1"),
        t("products.categories.compressor.features.2"),
      ],
      slug: "/products/compressor",
      image: "/images/category/compressor-parts_cat.jpg",
    },
    {
      id: "mixer",
      title: "Mixer & Agitator",
      brand: "SPX FLOW (Lightnin, Plenty, Stelzer)",
      description: t("products.categories.mixer.description"),
      features: [
        t("products.categories.mixer.features.0"),
        t("products.categories.mixer.features.1"),
        t("products.categories.mixer.features.2"),
      ],
      slug: "/products/mixer",
      image: "/images/category/Mixer & Agitator_cat.jpg",
    },
    {
      id: "motor",
      title: "Motor",
      brand: "NIDEC",
      description: t("products.categories.motor.description"),
      features: [
        t("products.categories.motor.features.0"),
        t("products.categories.motor.features.1"),
        t("products.categories.motor.features.2"),
      ],
      slug: "/products/motor",
      image: "/images/category/motor_cat.jpg",
    },
    {
      id: "pump",
      title: "Pump",
      brand: "CP Pumpen",
      description: t("products.categories.pump.description"),
      features: [
        t("products.categories.pump.features.0"),
        t("products.categories.pump.features.1"),
        t("products.categories.pump.features.2"),
      ],
      slug: "/products/pump",
      image: "/images/category/pump_cat.jpg",
    },
    {
      id: "bearing",
      title: "Bearing",
      brand: t("products.categories.bearing.brand"),
      description: t("products.categories.bearing.description"),
      features: [
        t("products.categories.bearing.features.0"),
        t("products.categories.bearing.features.1"),
        t("products.categories.bearing.features.2"),
      ],
      slug: "/products/bearing",
      image: "/images/category/bearing_cat.jpg",
    },
    {
      id: "cylinder-liner",
      title: "Cylinder Liner for Ship",
      brand: "WTQ (Yangzhou Wuting Qiao)",
      description: t("products.categories.cylinderLiner.description"),
      features: [
        t("products.categories.cylinderLiner.features.0"),
        t("products.categories.cylinderLiner.features.1"),
        t("products.categories.cylinderLiner.features.2"),
      ],
      slug: "/products/cylinder-liner",
      image: "/images/category/cylinder-liner_cat.jpg",
    },
    {
      id: "oil-purifier",
      title: "Oil Purifier",
      brand: t("products.categories.oilPurifier.brand"),
      description: t("products.categories.oilPurifier.description"),
      features: [
        t("products.categories.oilPurifier.features.0"),
        t("products.categories.oilPurifier.features.1"),
        t("products.categories.oilPurifier.features.2"),
      ],
      slug: "/products/oil-purifier",
      image: "/images/category/Oil Purifier_cat.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1628] via-[#1A2D47] to-[#0A1628] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("products.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t("products.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-200 bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Brand */}
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full mb-3">
                    {product.brand}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-3">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-slate-700"
                      >
                        <span className="text-[#3B82F6] mr-2 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={product.slug}
                    className="inline-flex items-center text-[#3B82F6] font-semibold hover:text-[#2563EB] transition-colors group"
                  >
                    <span>{t("common.learnMore")}</span>
                    <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a2942] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("products.main.ctaTitle")}
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {t("products.main.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              {t("common.contact")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {t("common.productInquiry")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
