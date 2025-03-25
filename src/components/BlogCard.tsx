import { Link } from "react-router-dom";
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
  style?: React.CSSProperties;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  imageSrc,
  date,
  category,
  className = "",
  style,
}: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className={`group block rounded-lg overflow-hidden border border-border card-hover ${className}`}
      style={style}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={`Image illustrant l'article : ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="800"
          height="450"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-2">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        <time className="text-xs text-muted-foreground">
          {format(date, "d MMMM yyyy", { locale: fr })}
        </time>
      </div>
    </Link>
  );
};

export default BlogCard;
