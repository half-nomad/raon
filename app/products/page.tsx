import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ProductsPage() {
  const products = [
    {
      id: "compressor",
      title: "Compressor & Spare parts",
      brand: "WTQ, Castanet SA, KB Delta",
      description:
        "왕복동, 로터리 스크류, 원심식 등 다양한 산업용 압축기와 관련 핵심 부품 일체를 공급합니다.",
      features: [
        "Cylinder liner, Piston, Piston Rod",
        "Crosshead, Consumable parts",
        "Valve Assy & Internal Parts",
      ],
      slug: "/products/compressor",
      image: "/images/category/compressor-parts_cat.jpg",
    },
    {
      id: "mixer",
      title: "Mixer & Agitator",
      brand: "SPX FLOW (Lightnin, Plenty, Stelzer)",
      description:
        "다양한 유체(액체 또는 혼합물)를 효과적으로 섞고, 균질화하며, 일정한 상태로 유지하기 위한 장치입니다.",
      features: [
        "산업용 믹서 및 교반기",
        "고점도 유체 처리",
        "맞춤형 솔루션 제공",
      ],
      slug: "/products/mixer",
      image: "/images/category/Mixer & Agitator_cat.jpg",
    },
    {
      id: "motor",
      title: "Motor",
      brand: "NIDEC",
      description:
        "전기 에너지를 기계 에너지로 변환하여 기계를 움직이게 하는 장치. Nidec은 고품질의 정밀 모터를 설계 및 제조합니다.",
      features: [
        "Inverter motor, Vector motor",
        "Three-phase motor",
        "Anti-explosion motor",
      ],
      slug: "/products/motor",
      image: "/images/category/motor_cat.jpg",
    },
    {
      id: "pump",
      title: "Pump",
      brand: "CP Pumpen",
      description:
        "액체를 한 장소에서 다른 장소로 이동시키는 장치. 화학, 식품, 제약 등 분야에서 널리 사용됩니다.",
      features: [
        "15개 모델, 105개 이상 펌프 사이즈",
        "Magnetic Drive (MKP)",
        "PFA-Lined (MKPL), Self-Priming (MKP-S)",
      ],
      slug: "/products/pump",
      image: "/images/category/pump_cat.jpg",
    },
    {
      id: "bearing",
      title: "Bearing",
      brand: "터보링크 (TURBO LINK)",
      description:
        "회전하거나 움직이는 기계 부품을 지지하고, 마찰을 줄이며, 안정적으로 작동하도록 돕는 장치입니다.",
      features: [
        "Tilting Pad Thrust Bearing",
        "Vertical Bearing",
        "Journal & Thrust Combined Bearing",
      ],
      slug: "/products/bearing",
      image: "/images/category/bearing_cat.jpg",
    },
    {
      id: "cylinder-liner",
      title: "Cylinder Liner for Ship",
      brand: "WTQ (Yangzhou Wuting Qiao)",
      description:
        "선박용 실린더 라이너는 엔진 내부의 피스톤이 움직이는 공간을 감싸는 부품으로, 엔진 실린더를 보호하고 마모를 줄이며 엔진 수명을 연장합니다.",
      features: [
        "선박용 대형 엔진 부품",
        "직경 480~1500mm 공급",
        "고내구성 소재",
      ],
      slug: "/products/cylinder-liner",
      image: "/images/category/cylinder-liner_cat.jpg",
    },
    {
      id: "oil-purifier",
      title: "Oil Purifier",
      brand: "삼영필텍 (SYT)",
      description:
        "오염된 오일(윤활유, 유압유 등)을 정화하여 재사용 가능하도록 만드는 장치. 수분, 불순물, 미세 입자를 제거합니다.",
      features: [
        "수분 및 불순물 제거",
        "오일 수명 연장",
        "설비 보호 및 유지비용 절감",
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
              Products & Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              정유·석유화학, 조선, 발전 산업 전반에 걸쳐 최고 품질의 회전기계
              부품과 솔루션을 공급합니다.
              <br />
              30년 축적된 전문성으로 귀사의 설비 안정성과 효율성을 책임집니다.
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
                    <span>자세히 보기</span>
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
            필요하신 제품을 찾지 못하셨나요?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            부품 도면, 사진만 있어도 최적 솔루션을 제안해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1628] rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              상담 문의
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              제품 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
