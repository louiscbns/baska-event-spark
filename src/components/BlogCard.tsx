
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  date: Date;
  category: string;
  className?: string;
  style?: React.CSSProperties;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  imageSrc,
  date,
  category,
  className,
  style,
}: BlogCardProps) => {
  const formattedDate = new Intl.DateTimeFormat('fr-FR', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  }).format(date);

  return (
    <Link
      to={`/blog/${slug}`}
      className={cn(
        "block overflow-hidden rounded-lg shadow-md transition-all card-hover animate-on-scroll",
        className
      )}
      style={style}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-gold/80 text-white text-xs font-medium py-1 px-2 rounded">
          {category}
        </div>
      </div>
      
      <div className="p-5 bg-card">
        <p className="text-sm text-muted-foreground mb-2">
          {formattedDate}
        </p>
        <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
