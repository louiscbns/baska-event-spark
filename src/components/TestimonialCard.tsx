
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard = ({
  quote,
  author,
  position,
  rating,
  className,
  style,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-lg border border-border bg-card shadow-sm animate-on-scroll",
        className
      )}
      style={style}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={cn(
              "h-5 w-5",
              i < rating ? "text-gold fill-gold" : "text-muted stroke-muted"
            )}
          />
        ))}
      </div>
      <p className="italic text-foreground mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        {position && <p className="text-sm text-muted-foreground">{position}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
