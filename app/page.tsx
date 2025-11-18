import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { IndustriesHighlight } from "@/components/home/industries-highlight";
import { ProductsSnapshot } from "@/components/home/products-snapshot";
import { PartnersClients } from "@/components/home/partners-clients";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <IndustriesHighlight />
      <ProductsSnapshot />
      <PartnersClients />
      <ContactCTA />
      <Footer />
    </div>
  );
}
