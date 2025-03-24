
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  date: Date;
  category: string;
  className?: string;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  imageSrc,
  date,
  category,
  className,
}: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className={cn(
        "block rounded-lg overflow-hidden border border-border bg-card shadow-sm card-hover animate-on-scroll",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-foreground">
            {category}
          </span>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarIcon className="h-3 w-3 mr-1" />
            <span>{format(date, "d MMMM yyyy", { locale: fr })}</span>
          </div>
        </div>
        <h3 className="text-xl font-playfair font-semibold mb-2 line-clamp-2 hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
