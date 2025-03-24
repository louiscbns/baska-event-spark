
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
  style,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-10",
        centered && "text-center",
        className
      )}
      style={style}
    >
      <h2 className="section-heading animate-on-scroll">{title}</h2>
      {subtitle && (
        <p className={cn(
          "section-paragraph max-w-2xl animate-on-scroll",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
