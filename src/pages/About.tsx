
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ChevronRight, Coffee, HandHeart, Paperclip, Target, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Trophy,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque détail, de la planification à l'exécution."
    },
    {
      icon: Target,
      title: "Précision",
      description: "Chaque projet est géré avec une attention méticuleuse aux détails et à la logistique."
    },
    {
      icon: HandHeart,
      title: "Passion",
      description: "Notre passion pour l'événementiel se reflète dans l'enthousiasme que nous mettons dans chaque projet."
    },
    {
      icon: Coffee,
      title: "Créativité",
      description: "Nous innovons constamment pour créer des expériences uniques et mémorables."
    }
  ];

  const team = [
    {
      name: "Sophie Dubois",
      position: "Fondatrice & Directrice",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
      bio: "Avec plus de 15 ans d'expérience dans l'événementiel de luxe, Sophie a fondé Baska Events avec la vision de créer des moments d'exception."
    },
    {
      name: "Marc Laurent",
      position: "Directeur Artistique",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&h=500&fit=crop",
      bio: "Marc transforme les concepts en réalités visuelles époustouflantes, apportant une touche unique à chaque événement."
    },
    {
      name: "Julie Moreau",
      position: "Responsable Logistique",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=500&fit=crop",
      bio: "Experte en logistique, Julie s'assure que chaque événement se déroule sans accroc, de la planification à l'exécution."
    },
    {
      name: "Thomas Leclerc",
      position: "Responsable Commercial",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
      bio: "Thomas comprend parfaitement les besoins des clients et s'assure que chaque projet répond exactement à leurs attentes."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-fade-in">
                À propos de nous
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-slide-down">
                Notre histoire,<br />notre <span className="text-gold">passion</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-slide-up max-w-xl">
                Découvrez l'équipe passionnée qui se cache derrière Baska Events et notre engagement envers l'excellence événementielle.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="/lovable-uploads/19a40589-f9bd-4a67-a57e-925687b66a40.png"
                alt="Équipe Baska Events"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl border-2 border-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-xl border-2 border-gold animate-on-scroll" />
              <img
                src="/lovable-uploads/59f18ff6-a759-4c77-b856-46a643d9d8f4.png"
                alt="Notre histoire"
                className="w-full h-auto rounded-xl shadow-lg relative z-10 animate-on-scroll"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading
                title="Notre histoire"
                subtitle="De l'idée à la réalité, l'histoire de Baska Events."
              />
              <p className="text-foreground mb-4 animate-on-scroll">
                Fondée en 2015 par Sophie Dubois, Baska Events est née d'une passion pour l'organisation d'événements exceptionnels. Après plus de 10 ans d'expérience dans l'événementiel de luxe à Paris et à l'international, Sophie a décidé de créer sa propre agence avec une vision claire : transformer chaque événement en une expérience inoubliable.
              </p>
              <p className="text-foreground mb-4 animate-on-scroll">
                Le nom "Baska" est inspiré d'un lieu spécial où Sophie a organisé son premier événement majeur, symbolisant l'engagement de l'agence à créer des moments uniques et personnalisés.
              </p>
              <p className="text-foreground mb-8 animate-on-scroll">
                Aujourd'hui, Baska Events est reconnue comme une agence de référence dans l'organisation d'événements privés et professionnels, avec une équipe talentueuse et passionnée qui partage la même vision d'excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            title="Nos valeurs"
            subtitle="Les principes qui guident chacune de nos actions et décisions."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-card shadow-sm animate-on-scroll">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <SectionHeading
            title="Notre équipe"
            subtitle="Des professionnels passionnés qui transforment vos idées en réalité."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="rounded-lg border border-border bg-card shadow-sm overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-1">{member.name}</h3>
                  <p className="text-gold text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/50 dark:bg-charcoal">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Pourquoi nous choisir"
                subtitle="Ce qui nous distingue et fait de nous votre partenaire événementiel idéal."
              />
              
              <div className="space-y-4">
                {[
                  "Expertise événementielle complète et diversifiée",
                  "Approche personnalisée pour chaque client",
                  "Réseau solide de partenaires et fournisseurs de confiance",
                  "Équipe créative et réactive à votre écoute",
                  "Engagement envers l'excellence et la qualité",
                  "Gestion rigoureuse des budgets"
                ].map((point, index) => (
                  <div key={index} className="flex items-start animate-on-scroll">
                    <div className="mt-1 shrink-0">
                      <Check className="h-5 w-5 text-gold" />
                    </div>
                    <p className="ml-3 text-foreground">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 animate-on-scroll">
                <Button asChild className="btn-primary">
                  <Link to="/contact">Discuter de votre projet</Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll">
              {[
                {
                  number: "200+",
                  label: "Événements réussis",
                  description: "Plus de 200 événements organisés avec succès depuis notre création."
                },
                {
                  number: "95%",
                  label: "Clients satisfaits",
                  description: "Un taux de satisfaction client exceptionnel, attesté par des avis positifs."
                },
                {
                  number: "15+",
                  label: "Années d'expérience",
                  description: "Une expertise cumulée de plus de 15 ans dans l'industrie événementielle."
                }
              ].map((stat, index) => (
                <div key={index} className="p-6 rounded-lg border border-border bg-card shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-3xl font-playfair font-bold text-gold">{stat.number}</span>
                      <h3 className="text-lg font-semibold">{stat.label}</h3>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading animate-on-scroll">
              Prêt à créer des moments inoubliables avec nous ?
            </h2>
            <p className="section-paragraph mx-auto mb-8 text-white/80 animate-on-scroll">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment notre équipe peut vous aider à réaliser l'événement de vos rêves.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explorer nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
