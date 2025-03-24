
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-playfair font-bold">
                <span className="text-gold">Baska</span> Events
              </h3>
            </Link>
            <p className="mb-4 text-gray-300 text-sm">
              Votre partenaire événementiel de confiance pour créer des moments inoubliables. Du concept à la réalisation, nous transformons vos rêves en expériences exceptionnelles.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-gold transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-gray-300 hover:text-gold transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/temoignages" className="text-gray-300 hover:text-gold transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Avenue des Événements<br />75001 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-gold transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gold shrink-0" />
                <a href="mailto:contact@baska-events.fr" className="text-gray-300 hover:text-gold transition-colors">
                  contact@baska-events.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres spéciales.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-md bg-charcoal-light text-white border border-gray-700 focus:outline-none focus:border-gold"
                required
              />
              <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-charcoal-dark">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Baska Events. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
