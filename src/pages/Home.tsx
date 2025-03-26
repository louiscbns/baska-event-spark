import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioItem from "@/components/PortfolioItem";
import { CalendarCheck, Diamond, Gift, GlassWater, Laptop, Music, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Mock data
const services = [
  {
    title: "Mariages",
    description: "Organisation complète de votre mariage, de la cérémonie à la réception.",
    icon: Diamond,
    link: "/services#mariages"
  },
  {
    title: "Événements d'entreprise",
    description: "Séminaires, lancements de produits et conférences professionnelles.",
    icon: Laptop,
    link: "/services#entreprise"
  },
  {
    title: "Anniversaires",
    description: "Célébrations d'anniversaires mémorables pour tous les âges.",
    icon: Gift,
    link: "/services#anniversaires"
  },
  {
    title: "Soirées privées",
    description: "Soirées exclusives sur mesure selon vos envies.",
    icon: GlassWater,
    link: "/services#soirees"
  },
  {
    title: "Concerts & Festivals",
    description: "Organisation de performances musicales et festivals.",
    icon: Music,
    link: "/services#concerts"
  },
  {
    title: "Événements sociaux",
    description: "Rencontres, galas et événements caritatifs.",
    icon: Users,
    link: "/services#sociaux"
  }
];

const testimonials = [
  {
    quote: "Baska Events a transformé notre mariage en un événement magique. Chaque détail était parfait et nos invités en parlent encore!",
    author: "S & T",
    position: "Mariage à Saint-Tropez",
    rating: 5 as const
  },
  {
    quote: "Notre séminaire d'entreprise a été un véritable succès grâce à Baska Events. Organisation impeccable et réactivité exemplaire.",
    author: "J-M D",
    position: "Directeur Marketing",
    rating: 5 as const
  },
  {
    quote: "La fête d'anniversaire organisée pour mes 40 ans était exactement ce que j'avais imaginé. Je recommande vivement!",
    author: "C M",
    position: "Anniversaire 40 ans",
    rating: 5 as const
  }
];

const portfolioItems = [
  {
    title: "Mariage élégant au Château",
    category: "Mariage",
    imageSrc: "/images/types/mariages/mariage-chateau-jardin.webp",
    description: "Un mariage somptueux dans un cadre d'exception, alliant élégance et raffinement dans les jardins d'un château."
  },
  {
    title: "Soirée annuelle Otis Paris",
    category: "Événement d'entreprise",
    imageSrc: "/images/types/entreprises/entreprises-soiree-annuelle-entreprise-otis-paris-a-la-terasse-du-stade.jpeg",
    description: "Une soirée corporate prestigieuse sur la terrasse du stade, mêlant networking et divertissement."
  },
  {
    title: "Soirée au Tennis Club du 16ème",
    category: "Événement privé",
    imageSrc: "/images/types/tennis-club/tennis-club-soiree-exte-tennis-club-du-16e-small.webp",
    description: "Un dîner exclusif en extérieur dans le cadre prestigieux du Tennis Club du 16ème arrondissement de Paris."
  }
];

const Home = () => {
  const aboutRef = useIntersectionObserver();
  const servicesRef = useIntersectionObserver();
  const portfolioRef = useIntersectionObserver();
  const testimonialsRef = useIntersectionObserver();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/accueil/evenement-piscine-avignon.webp"
            alt="Baska Events - Organisation d'événements"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gold/80 text-white mb-4 animate-fade-in">
              Votre agence événementielle de référence
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 animate-slide-down text-shadow">
              Créons ensemble<br />
              vos <span className="text-gradient">moments</span> inoubliables
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up max-w-xl">
              De l'idée à la réalisation, Baska Events transforme vos rêves en expériences exceptionnelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild size="lg" className="btn-primary">
                <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
                  Discuter de votre projet
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark" ref={aboutRef}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-on-scroll">
                À propos de nous
              </span>
              <h2 className="section-heading animate-on-scroll">
                Votre vision, notre expertise
              </h2>
              <p className="section-paragraph mb-6 animate-on-scroll">
                Baska Events est née d'une passion pour l'excellence et d'un amour pour les détails. Depuis notre création, nous nous engageons à transformer chaque événement en une expérience unique et mémorable.
              </p>
              <p className="section-paragraph mb-8 animate-on-scroll">
                Notre équipe de professionnels passionnés travaille avec créativité et précision pour assurer que chaque aspect de votre événement dépasse vos attentes. De la conception initiale à l'exécution finale, nous sommes à vos côtés à chaque étape.
              </p>
              <Button asChild className="btn-primary animate-on-scroll">
                <Link to="/a-propos">En savoir plus</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 rounded-xl border-2 border-gold animate-on-scroll" />
              <img
                src="/images/services/service-baska-events-traiteur-evenementiel.jpg"
                alt="Baska Events - À propos"
                className="w-full h-auto rounded-xl shadow-lg relative z-10 animate-on-scroll"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-champagne-light dark:bg-charcoal" ref={servicesRef}>
        <div className="container-custom">
          <SectionHeading
            title="Nos services"
            subtitle="Baska Events propose une gamme complète de services événementiels personnalisés pour répondre à tous vos besoins."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Button asChild className="btn-primary">
              <Link to="/services">Tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark" ref={portfolioRef}>
        <div className="container-custom">
          <SectionHeading
            title="Nos réalisations"
            subtitle="Découvrez nos événements récents et laissez-vous inspirer par notre savoir-faire."
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                {...item}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Button asChild className="btn-primary">
              <Link to="/realisations">Voir plus de réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/50 dark:bg-charcoal" ref={testimonialsRef}>
        <div className="container-custom">
          <SectionHeading
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre priorité absolue. Voici ce qu'ils pensent de nos services."
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Button asChild className="btn-primary">
              <Link to="/temoignages">Voir tous les témoignages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Logos Section */}
      <section className="py-12 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <SectionHeading
            title="Ils nous font confiance"
            subtitle="Découvrez les entreprises qui nous font confiance pour leurs événements"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center mt-12">
            <img src="/images/clients/otis.png" alt="Otis" className="h-12 w-auto" />
            <img src="/images/clients/tennis club du 16.png" alt="Tennis Club du 16" className="h-12 w-auto" />
            <img src="/images/clients/rock-la-casbah.jpg" alt="Rock La Casbah" className="h-12 w-auto" />
            <img src="/images/clients/pure-trade.jpg" alt="Pure Trade" className="h-12 w-auto" />
            <img src="/images/clients/nanoxplore.jpg" alt="Nanoxplore" className="h-12 w-auto" />
            <img src="/images/clients/les-ateliers-gaité.png" alt="Les Ateliers Gaîté" className="h-12 w-auto" />
            <img src="/images/clients/hippodrome paris longchamp.jpg" alt="Hippodrome Paris Longchamp" className="h-12 w-auto" />
            <img src="/images/clients/food society.png" alt="Food Society" className="h-12 w-auto" />
            <img src="/images/clients/doritos.png" alt="Doritos" className="h-12 w-auto" />
            <img src="/images/clients/Digame.jpg" alt="Digame" className="h-12 w-auto" />
            <img src="/images/clients/Bar-Arena.png" alt="Bar Arena" className="h-12 w-auto" />
            <img src="/images/clients/course croisiere edhec.png" alt="Course Croisière EDHEC" className="h-12 w-auto" />
            <img src="/images/clients/annette k.png" alt="Annette K" className="h-12 w-auto" />
            <img src="/images/clients/logo-asso-boule_dassas.png" alt="La boule d'assas" className="h-12 w-auto" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading animate-on-scroll">
              Prêt à organiser votre prochain événement ?
            </h2>
            <p className="section-paragraph mx-auto mb-8 text-white/80 animate-on-scroll">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé. Notre équipe est impatiente de vous aider à créer un événement mémorable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
              <Button asChild size="lg" className="btn-primary">
                <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
                  Discuter de votre projet
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
