import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Réalisations", path: "/realisations" },
    { name: "Témoignages", path: "/temoignages" },
    { name: "À propos", path: "/a-propos" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-charcoal-dark/90"
          : "bg-transparent"
      )}
    >
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-playfair font-bold text-charcoal-dark dark:text-white"
        >
          <span className="text-gold">Baska</span> Events
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors relative",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:transform after:scale-x-0 after:transition-transform after:duration-300",
                location.pathname === link.path
                  ? "text-gold after:scale-x-100"
                  : "text-foreground hover:text-gold hover:after:scale-x-100"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button asChild className="btn-primary">
            <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
              Discuter de votre projet
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container-custom py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-3 px-4 text-base font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-gold bg-muted"
                    : "text-foreground hover:text-gold hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-4">
              <Button asChild className="btn-primary w-full">
                <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
                  Discuter de votre projet
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
