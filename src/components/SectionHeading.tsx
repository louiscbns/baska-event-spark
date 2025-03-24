
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-10",
        centered && "text-center",
        className
      )}
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
