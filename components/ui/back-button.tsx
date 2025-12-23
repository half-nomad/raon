import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label?: string;
  variant?: "light" | "dark";
}

export default function BackButton({ href, label = "제품 목록으로", variant = "light" }: BackButtonProps) {
  const colorClasses = variant === "dark"
    ? "text-white/80 hover:text-white"
    : "text-gray-600 hover:text-[#3B82F6]";

  return (
    <div className="mb-4">
      <Link
        href={href}
        className={`inline-flex items-center text-sm ${colorClasses} transition-colors group`}
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        {label}
      </Link>
    </div>
  );
}
