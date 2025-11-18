import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({
  variant = "primary",
  size = "default",
  href,
  children,
  className,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5";

  const sizes = {
    default: "px-6 py-2.5 text-sm",
    large: "px-8 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-[#0A1628] text-white hover:bg-[#1A2D47] hover:shadow-lg hover:shadow-[#0A1628]/20",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[#0A1628]",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, sizes[size], variants[variant], className)}
    >
      {children}
    </Link>
  );
}
