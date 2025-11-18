import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  aspectRatio?: "video" | "square" | "4/3";
  className?: string;
  text?: string;
}

export function PlaceholderImage({
  aspectRatio = "4/3",
  className,
  text = "이미지 삽입 예정",
}: PlaceholderImageProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    "4/3": "aspect-[4/3]",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 text-gray-400 text-sm",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <span>{text}</span>
    </div>
  );
}
