import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export default function Breadcrumb({ items, variant = "light" }: BreadcrumbProps) {
  const linkClasses = variant === "dark"
    ? "text-white/70 hover:text-white"
    : "text-gray-600 hover:text-[#3B82F6]";

  const currentClasses = variant === "dark"
    ? "font-semibold text-white"
    : "font-semibold text-[#0A1628]";

  const separatorClasses = variant === "dark"
    ? "text-white/40"
    : "text-gray-400";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-base md:text-lg">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className={`w-5 h-5 mx-2 ${separatorClasses}`} />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`${linkClasses} transition-colors`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? currentClasses : linkClasses}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
