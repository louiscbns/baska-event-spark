
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-champagne-light dark:bg-charcoal">
      <div className="container-custom py-20">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-9xl font-playfair font-bold text-gold mb-6 animate-fade-in">404</h1>
          <h2 className="text-3xl font-playfair font-semibold mb-4 animate-fade-in">Page non trouvée</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Retour à la page précédente
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
