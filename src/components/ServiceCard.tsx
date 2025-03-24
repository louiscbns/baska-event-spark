
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  link,
  className,
}: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className={cn(
        "block group p-6 rounded-lg border border-border bg-card shadow-sm card-hover animate-on-scroll",
        className
      )}
    >
      <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-secondary text-gold group-hover:bg-gold group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
};

export default ServiceCard;
