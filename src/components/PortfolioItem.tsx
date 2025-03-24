
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PortfolioItemProps {
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  className?: string;
}

const PortfolioItem = ({
  title,
  category,
  imageSrc,
  description,
  className,
}: PortfolioItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "group cursor-pointer overflow-hidden rounded-lg shadow-sm animate-on-scroll",
          className
        )}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm font-medium text-gold mb-1">{category}</p>
            <h3 className="text-xl font-playfair font-semibold">{title}</h3>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-64 md:h-full">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-gold mb-1">{category}</p>
              <h3 className="text-2xl font-playfair font-semibold mb-4">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioItem;
