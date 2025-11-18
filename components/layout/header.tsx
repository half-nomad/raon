"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
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
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/company"
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              COMPANY
            </Link>
            <Link
              href="/industries"
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              INDUSTRIES
            </Link>
            <Link
              href="/products"
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              PRODUCTS
            </Link>
            <Link
              href="/partners"
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              PARTNERS
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <Button
              asChild
              className="hidden lg:flex bg-[#0A1628] hover:bg-[#1A2D47] text-white rounded-full px-6"
            >
              <Link href="/contact">상담 문의</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="메뉴 열기"
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
                  <SheetTitle className="text-[#0A1628]">메뉴</SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    <div className="space-y-2">
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="block py-3 px-4 text-[#0A1628] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        HOME
                      </Link>

                      <AccordionItem value="company" className="border-0">
                        <AccordionTrigger className="py-3 px-4 hover:bg-gray-100 rounded-lg">
                          COMPANY
                        </AccordionTrigger>
                        <AccordionContent className="pl-8 space-y-2">
                          <Link
                            href="/company#greeting"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            인사말
                          </Link>
                          <Link
                            href="/company#history"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            연혁
                          </Link>
                          <Link
                            href="/company#location"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            오시는 길
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="industries" className="border-0">
                        <AccordionTrigger className="py-3 px-4 hover:bg-gray-100 rounded-lg">
                          INDUSTRIES
                        </AccordionTrigger>
                        <AccordionContent className="pl-8 space-y-2">
                          <Link
                            href="/industries/refinery"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            정유·석유화학
                          </Link>
                          <Link
                            href="/industries/shipbuilding"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#3B82F6]"
                          >
                            조선
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <Link
                        href="/products"
                        onClick={() => setOpen(false)}
                        className="block py-3 px-4 text-[#0A1628] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        PRODUCTS
                      </Link>

                      <Link
                        href="/partners"
                        onClick={() => setOpen(false)}
                        className="block py-3 px-4 text-[#0A1628] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        PARTNERS
                      </Link>

                      <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="block py-3 px-4 text-[#0A1628] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        CONTACT
                      </Link>
                    </div>
                  </Accordion>

                  {/* Mobile CTA */}
                  <div className="mt-8 pt-6 border-t">
                    <Button
                      asChild
                      className="w-full bg-[#0A1628] hover:bg-[#1A2D47] text-white rounded-full"
                    >
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        상담 문의
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
