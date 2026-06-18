import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

export default function StarRating({ rating, max = 5, size = 14, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            "transition-colors",
            i < rating ? "text-brand-500 fill-brand-500" : "text-concrete-200 fill-concrete-200"
          )}
        />
      ))}
    </div>
  );
}
