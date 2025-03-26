import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock, Music, Users, Calendar, Star } from "lucide-react";

const DjParis = () => {
  return (
    <>
      <Helmet>
        <title>DJ pour événements à Paris | Baska Events</title>
        <meta name="description" content="Services de DJ professionnel à Paris pour tous types d'événements : mariages, soirées d'entreprise, anniversaires, soirées privées. Expertise locale et répertoire adapté." />
        <meta name="keywords" content="DJ Paris, DJ soirée entreprise Paris, DJ mariage Paris, DJ anniversaire Paris, DJ soirée privée Paris, DJ afterwork Paris" />
        <meta property="og:title" content="DJ pour événements à Paris | Baska Events" />
        <meta property="og:description" content="Services de DJ professionnel à Paris pour tous types d'événements : mariages, soirées d'entreprise, anniversaires, soirées privées. Expertise locale et répertoire adapté." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baska-events.fr/dj-paris" />
        <link rel="canonical" href="https://www.baska-events.fr/dj-paris" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-fade-in">
              DJ à Paris
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-slide-down">
              DJ pour événements à <span className="text-gold">Paris</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Services de DJ professionnel pour tous vos événements à Paris. Expertise locale et répertoire adapté à vos besoins.
            </p>
            <Button asChild size="lg" className="btn-primary animate-on-scroll">
              <Link to="/contact">Réserver votre DJ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <SectionHeading
            title="Nos services DJ à Paris"
            subtitle="Des solutions adaptées pour chaque type d'événement"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Calendar,
                title: "DJ pour soirées d'entreprise",
                description: "Animation musicale professionnelle pour vos événements corporate à Paris. Répertoire adapté à votre image de marque."
              },
              {
                icon: Music,
                title: "DJ pour mariages",
                description: "Création d'une ambiance unique pour votre mariage à Paris. Répertoire personnalisé selon vos goûts."
              },
              {
                icon: Users,
                title: "DJ pour soirées privées",
                description: "Animation musicale sur mesure pour vos soirées privées à Paris. Ambiance garantie."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-secondary text-gold">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            title="Pourquoi nous choisir à Paris"
            subtitle="Notre expertise locale fait la différence"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: MapPin,
                title: "Expertise locale",
                description: "Connaissance approfondie des lieux et des tendances parisiennes"
              },
              {
                icon: Star,
                title: "Qualité professionnelle",
                description: "Équipement haut de gamme et répertoire varié"
              },
              {
                icon: Clock,
                title: "Ponctualité",
                description: "Arrivée en avance pour une installation parfaite"
              },
              {
                icon: Music,
                title: "Répertoire adapté",
                description: "Musique personnalisée selon vos goûts et votre public"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-secondary text-gold mx-auto">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Venues Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <SectionHeading
            title="Lieux populaires à Paris"
            subtitle="Nous intervenons dans les plus beaux lieux de la capitale"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Hôtels de luxe",
                description: "Intervention dans les plus prestigieux hôtels parisiens"
              },
              {
                title: "Salles de réception",
                description: "Animation dans les plus belles salles de réception de Paris"
              },
              {
                title: "Lieux atypiques",
                description: "Services DJ dans des lieux uniques et insolites"
              }
            ].map((venue, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
                <h3 className="text-xl font-playfair font-semibold mb-2">{venue.title}</h3>
                <p className="text-muted-foreground">{venue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading animate-on-scroll">
              Prêt à animer votre événement à Paris ?
            </h2>
            <p className="section-paragraph mx-auto mb-8 text-white/80 animate-on-scroll">
              Contactez-nous pour discuter de votre projet et recevoir une proposition personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
              <Button asChild size="lg" className="btn-primary">
                <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
                  Réserver un appel
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5 mr-2" />
                  Réserver un appel
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DjParis; 