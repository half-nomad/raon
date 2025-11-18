import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({
  variant = "primary",
  href,
  children,
  className,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5";

  const variants = {
    primary:
      "bg-[#0A1628] text-white hover:bg-[#1A2D47] hover:shadow-lg hover:shadow-[#0A1628]/20",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[#0A1628]",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </Link>
  );
}
