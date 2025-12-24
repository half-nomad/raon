"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

const locales = [
  { code: "ko", label: "KO", fullLabel: "한국어" },
  { code: "en", label: "EN", fullLabel: "English" },
] as const;

export function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-1">
      <Globe
        className={`h-4 w-4 ${
          scrolled ? "text-gray-500" : "text-white/70"
        } ${isPending ? "animate-spin" : ""}`}
      />
      <div className="flex items-center">
        {locales.map((loc, index) => (
          <span key={loc.code} className="flex items-center">
            {index > 0 && (
              <span
                className={`mx-1 ${
                  scrolled ? "text-gray-300" : "text-white/50"
                }`}
              >
                |
              </span>
            )}
            <button
              onClick={() => handleLocaleChange(loc.code)}
              disabled={isPending}
              className={`text-sm font-medium transition-colors ${
                locale === loc.code
                  ? scrolled
                    ? "text-[#3B82F6]"
                    : "text-white"
                  : scrolled
                  ? "text-gray-500 hover:text-[#0A1628]"
                  : "text-white/60 hover:text-white"
              } ${isPending ? "opacity-50 cursor-wait" : ""}`}
              title={loc.fullLabel}
            >
              {loc.label}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
