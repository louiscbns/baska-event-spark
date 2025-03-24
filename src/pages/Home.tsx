
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioItem from "@/components/PortfolioItem";
import { CalendarCheck, Gift, GlassWater, Laptop, Music, Ring, Users } from "lucide-react";

// Mock data
const services = [
  {
    title: "Mariages",
    description: "Organisation complète de votre mariage, de la cérémonie à la réception.",
    icon: Ring,
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
    author: "Sophie & Thomas",
    position: "Mariage à Saint-Tropez",
    rating: 5 as const
  },
  {
    quote: "Notre séminaire d'entreprise a été un véritable succès grâce à Baska Events. Organisation impeccable et réactivité exemplaire.",
    author: "Jean-Marc Dupont",
    position: "Directeur Marketing, TechFuture",
    rating: 5 as const
  },
  {
    quote: "La fête d'anniversaire organisée pour mes 40 ans était exactement ce que j'avais imaginé. Je recommande vivement!",
    author: "Claire Martin",
    position: "Anniversaire 40 ans",
    rating: 5 as const
  }
];

const portfolioItems = [
  {
    title: "Mariage élégant en Provence",
    category: "Mariage",
    imageSrc: "/lovable-uploads/761ee18b-fa87-46a1-89a1-5fec3248fa2b.png",
    description: "Un mariage champêtre dans un domaine provençal, avec une décoration florale somptueuse et une ambiance romantique."
  },
  {
    title: "Soirée corporate à Paris",
    category: "Événement d'entreprise",
    imageSrc: "/lovable-uploads/2b6347ae-2c8d-4535-98c4-f53e391fbdc4.png",
    description: "Lancement de produit pour une entreprise de luxe dans un lieu d'exception à Paris, avec cocktail dînatoire et animation musicale."
  },
  {
    title: "Festival privé au bord de mer",
    category: "Concert",
    imageSrc: "/lovable-uploads/a9827da5-6cf6-4ef6-aa9d-d2b56d50f8df.png",
    description: "Un festival privé sur une plage exclusive avec plusieurs artistes, espaces VIP et décoration bohème chic."
  }
];

const upcomingEvents = [
  {
    title: "Workshop Événementiel",
    date: new Date("2024-06-15"),
    location: "Paris",
    description: "Découvrez les dernières tendances en matière d'organisation d'événements.",
    link: "/blog/workshop-evenementiel"
  },
  {
    title: "Salon du Mariage",
    date: new Date("2024-09-10"),
    location: "Lyon",
    description: "Rencontrez notre équipe et découvrez nos services pour votre mariage de rêve.",
    link: "/blog/salon-mariage"
  }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/f84aac44-a554-4926-9381-0f18a6b84445.png"
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
                <Link to="/contact">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
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
                src="/lovable-uploads/7151d6f0-4ffd-434a-9767-54aca5aae40d.png"
                alt="Baska Events - À propos"
                className="w-full h-auto rounded-xl shadow-lg relative z-10 animate-on-scroll"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-champagne-light dark:bg-charcoal">
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
      <section className="py-20 bg-white dark:bg-charcoal-dark">
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
      <section className="py-20 bg-secondary/50 dark:bg-charcoal">
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
            <Button asChild size="lg" className="btn-primary animate-on-scroll">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <SectionHeading
            title="Événements à venir"
            subtitle="Retrouvez-nous sur ces événements prochains et restez informés de nos activités."
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg border border-border bg-card shadow-sm animate-on-scroll">
                <div className="shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-secondary text-gold">
                  <CalendarCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {new Intl.DateTimeFormat('fr-FR', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    }).format(event.date)} • {event.location}
                  </p>
                  <p className="text-foreground mb-2">{event.description}</p>
                  <Link to={event.link} className="text-gold hover:text-gold-dark transition-colors font-medium">
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
