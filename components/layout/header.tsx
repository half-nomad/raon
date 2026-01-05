"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
      style={{ height: "72px" }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`text-2xl font-bold transition-colors ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              RAON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHomeOpen(true)}
              onMouseLeave={() => setHomeOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-[#3B82F6] flex items-center gap-1 ${
                  scrolled ? "text-[#0A1628]" : "text-white"
                }`}
              >
                {t("home")}
                <ChevronDown className="h-4 w-4" />
              </button>
              {homeOpen && (
                <div
                  className="absolute top-full left-0 w-[280px] z-50"
                  onMouseEnter={() => setHomeOpen(true)}
                  onMouseLeave={() => setHomeOpen(false)}
                >
                  <div className="h-2 w-full" />
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in duration-200">
                    <div className="p-2">
                      <Link
                        href="/products/compressor"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("compressor")}
                        </div>
                      </Link>
                      <Link
                        href="/products/pump"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("pump")}
                        </div>
                      </Link>
                      <Link
                        href="/products/mixer"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("mixer")}
                        </div>
                      </Link>
                      <Link
                        href="/products/bearing"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("bearing")}
                        </div>
                      </Link>
                      <Link
                        href="/products/motor"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("motor")}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-[#3B82F6] flex items-center gap-1 ${
                  scrolled ? "text-[#0A1628]" : "text-white"
                }`}
              >
                {t("company")}
                <ChevronDown className="h-4 w-4" />
              </button>
              {companyOpen && (
                <div
                  className="absolute top-full left-0 w-[200px] z-50"
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  <div className="h-2 w-full" />
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in duration-200">
                    <div className="p-2">
                      <Link
                        href="/company#greeting"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("greeting")}
                        </div>
                      </Link>
                      <Link
                        href="/company#history"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("history")}
                        </div>
                      </Link>
                      <Link
                        href="/company#location"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("location")}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries (Business Field) Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-[#3B82F6] flex items-center gap-1 ${
                  scrolled ? "text-[#0A1628]" : "text-white"
                }`}
              >
                {t("industries")}
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Dropdown Menu Container with hover bridge */}
              {industriesOpen && (
                <div
                  className="absolute top-full left-0 w-[280px] z-50"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  {/* Invisible hover bridge */}
                  <div className="h-2 w-full" />
                  {/* Actual menu */}
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in duration-200">
                    <div className="p-2">
                      <Link
                        href="/industries/oil-refinery"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("oilRefinery")}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Oil Refinery & Petrochemical
                        </p>
                      </Link>
                      <Link
                        href="/industries/power-plant"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("powerPlant")}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Power Plant
                        </p>
                      </Link>
                      <Link
                        href="/industries/shipbuilding"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("shipbuilding")}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Ship Building
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products (Business Item) Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-[#3B82F6] flex items-center gap-1 ${
                  scrolled ? "text-[#0A1628]" : "text-white"
                }`}
              >
                {t("products")}
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Dropdown Menu Container with hover bridge */}
              {productsOpen && (
                <div
                  className="absolute top-full left-0 w-[280px] z-50"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  {/* Invisible hover bridge */}
                  <div className="h-2 w-full" />
                  {/* Actual menu */}
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in duration-200">
                    <div className="p-2">
                      <Link
                        href="/products/compressor"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("compressor")}
                        </div>
                      </Link>
                      <Link
                        href="/products/pump"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("pump")}
                        </div>
                      </Link>
                      <Link
                        href="/products/mixer"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("mixer")}
                        </div>
                      </Link>
                      <Link
                        href="/products/bearing"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("bearing")}
                        </div>
                      </Link>
                      <Link
                        href="/products/motor"
                        className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-sm font-medium text-[#0A1628]">
                          {t("motor")}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/partners"
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              {t("partners")}
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              {t("contact")}
            </Link>
          </nav>

          {/* CTA Button + Language Switcher + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher scrolled={scrolled} />
            </div>

            {/* Desktop CTA */}
            <Button
              asChild
              className="hidden lg:flex bg-[#0A1628] hover:bg-[#1A2D47] text-white rounded-full px-6"
            >
              <Link href="/contact">{t("cta")}</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label={t("menu")}
                >
                  <Menu
                    className={`h-6 w-6 ${
                      scrolled ? "text-[#0A1628]" : "text-white"
                    }`}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-[#0A1628]">{t("menu")}</SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    <div className="space-y-2">
                      <AccordionItem value="home" className="border-0">
                        <AccordionTrigger className="py-3 px-4 hover:bg-gray-100 rounded-lg">
                          {t("home")}
                        </AccordionTrigger>
                        <AccordionContent className="pl-8 space-y-2">
                          <Link
                            href="/products/compressor"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("compressor")}
                          </Link>
                          <Link
                            href="/products/pump"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("pump")}
                          </Link>
                          <Link
                            href="/products/mixer"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("mixer")}
                          </Link>
                          <Link
                            href="/products/bearing"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("bearing")}
                          </Link>
                          <Link
                            href="/products/motor"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("motor")}
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="company" className="border-0">
                        <AccordionTrigger className="py-3 px-4 hover:bg-gray-100 rounded-lg">
                          {t("company")}
                        </AccordionTrigger>
                        <AccordionContent className="pl-8 space-y-2">
                          <Link
                            href="/company#greeting"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("greeting")}
                          </Link>
                          <Link
                            href="/company#history"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("history")}
                          </Link>
                          <Link
                            href="/company#location"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("location")}
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="industries" className="border-0">
                        <AccordionTrigger className="py-3 px-4 hover:bg-gray-100 rounded-lg">
                          {t("industries")}
                        </AccordionTrigger>
                        <AccordionContent className="pl-8 space-y-2">
                          <Link
                            href="/industries/oil-refinery"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("oilRefinery")}
                          </Link>
                          <Link
                            href="/industries/power-plant"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("powerPlant")}
                          </Link>
                          <Link
                            href="/industries/shipbuilding"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("shipbuilding")}
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="products" className="border-0">
                        <AccordionTrigger className="py-3 px-4 hover:bg-gray-100 rounded-lg">
                          {t("products")}
                        </AccordionTrigger>
                        <AccordionContent className="pl-8 space-y-2">
                          <Link
                            href="/products/compressor"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("compressor")}
                          </Link>
                          <Link
                            href="/products/pump"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("pump")}
                          </Link>
                          <Link
                            href="/products/mixer"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("mixer")}
                          </Link>
                          <Link
                            href="/products/bearing"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("bearing")}
                          </Link>
                          <Link
                            href="/products/motor"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            {t("motor")}
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <Link
                        href="/partners"
                        onClick={() => setOpen(false)}
                        className="block py-3 px-4 text-[#0A1628] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {t("partners")}
                      </Link>

                      <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="block py-3 px-4 text-[#0A1628] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {t("contact")}
                      </Link>
                    </div>
                  </Accordion>

                  {/* Mobile Language Switcher */}
                  <div className="mt-6 pt-6 border-t flex items-center justify-center">
                    <LanguageSwitcher scrolled={true} />
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-[#0A1628] hover:bg-[#1A2D47] text-white rounded-full"
                    >
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        {t("cta")}
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
