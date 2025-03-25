import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle, ChevronsDown, Diamond, GlassWater, Laptop, Music, Sparkles, UserRound, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Service categories
const serviceCategories = [
  {
    id: "mariages",
    icon: Diamond,
    title: "Mariages",
    description: "Nous prenons en charge tous les aspects de votre jour spécial, des premiers préparatifs à la dernière danse."
  },
  {
    id: "entreprise",
    icon: Laptop,
    title: "Événements d'entreprise",
    description: "Des séminaires aux lancements de produits, nous créons des événements professionnels impactants."
  },
  {
    id: "anniversaires",
    icon: Calendar,
    title: "Anniversaires",
    description: "Célébrez vos moments importants avec des fêtes d'anniversaire sur mesure pour tous les âges."
  },
  {
    id: "soirees",
    icon: GlassWater,
    title: "Soirées privées",
    description: "Nous organisons des soirées exclusives et élégantes dans des lieux d'exception."
  },
  {
    id: "concerts",
    icon: Music,
    title: "Concerts & Festivals",
    description: "De la recherche d'artistes à la production technique, nous gérons tous les aspects de votre événement musical."
  },
  {
    id: "sociaux",
    icon: Users,
    title: "Événements sociaux",
    description: "Rencontres, galas, événements caritatifs et toutes occasions spéciales."
  }
];

// Detailed service data
const serviceDetails = {
  mariages: {
    image: "/lovable-uploads/mariage-chateau-jardin.jpeg",
    title: "Des mariages aussi uniques que votre amour",
    description: "Nous transformons votre vision en une célébration parfaite, reflétant votre personnalité et votre histoire d'amour.",
    features: [
      "Coordination complète du jour J",
      "Sélection des meilleurs prestataires",
      "Conception et décoration personnalisées",
      "Gestion des invités et de la logistique",
      "Planification de la cérémonie et de la réception",
      "Coordination des divertissements et animations"
    ],
    process: [
      {
        title: "Consultation initiale",
        description: "Nous prenons le temps de comprendre votre vision, vos préférences et votre budget."
      },
      {
        title: "Proposition de concept",
        description: "Nous élaborons un concept unique qui reflète votre personnalité et votre histoire."
      },
      {
        title: "Planification détaillée",
        description: "Nous gérons tous les aspects logistiques, des prestataires aux moindres détails."
      },
      {
        title: "Coordination du jour J",
        description: "Notre équipe s'assure que tout se déroule parfaitement pour que vous puissiez profiter pleinement."
      }
    ]
  },
  entreprise: {
    image: "/lovable-uploads/soiree-annuelle-entreprise-otis-paris.jpeg",
    title: "Des événements professionnels qui marquent",
    description: "Nous concevons des événements d'entreprise stratégiques qui renforcent votre image de marque et atteignent vos objectifs.",
    features: [
      "Séminaires et conférences",
      "Lancements de produits",
      "Team buildings et incentives",
      "Soirées d'entreprise et galas",
      "Congrès et salons professionnels",
      "Événements virtuels et hybrides"
    ],
    process: [
      {
        title: "Analyse des besoins",
        description: "Nous définissons précisément vos objectifs et les messages à transmettre."
      },
      {
        title: "Conception stratégique",
        description: "Nous élaborons un concept d'événement aligné sur votre image de marque et vos objectifs."
      },
      {
        title: "Production complète",
        description: "Nous gérons tous les aspects techniques, logistiques et créatifs."
      },
      {
        title: "Mesure des résultats",
        description: "Nous évaluons le succès de l'événement selon les KPIs définis ensemble."
      }
    ]
  },
  anniversaires: {
    image: "/lovable-uploads/tres-grande-tablee.jpeg",
    title: "Célébrez vos moments spéciaux avec éclat",
    description: "Qu'il s'agisse d'un premier anniversaire ou d'une grande fête pour vos 50 ans, nous créons des célébrations personnalisées et mémorables.",
    features: [
      "Conception thématique originale",
      "Décoration sur mesure",
      "Divertissements et animations adaptés",
      "Gâteaux et traiteurs de qualité",
      "Photographie et vidéographie",
      "Cadeaux et souvenirs personnalisés"
    ],
    process: [
      {
        title: "Discussion des envies",
        description: "Nous explorons vos idées, préférences et le message que vous souhaitez transmettre."
      },
      {
        title: "Création d'un thème",
        description: "Nous développons un concept créatif qui reflète la personnalité de la personne célébrée."
      },
      {
        title: "Organisation complète",
        description: "Nous coordonnons tous les éléments, de la décoration au divertissement."
      },
      {
        title: "Exécution parfaite",
        description: "Nous veillons à ce que tout soit impeccable pour une célébration réussie."
      }
    ]
  },
  soirees: {
    image: "/lovable-uploads/soiree-club-arc-de-triomphe.jpeg",
    title: "Des soirées exclusives dans des lieux d'exception",
    description: "Nous concevons et organisons des soirées privées élégantes, raffinées et inoubliables dans des cadres exceptionnels.",
    features: [
      "Sélection de lieux prestigieux",
      "Concepts créatifs originaux",
      "Gastronomie et mixologie haut de gamme",
      "Entertainment exclusif",
      "Décoration et scénographie",
      "Service personnalisé"
    ],
    process: [
      {
        title: "Définition du concept",
        description: "Nous élaborons ensemble le concept de votre soirée selon vos envies."
      },
      {
        title: "Sélection du lieu",
        description: "Nous trouvons le lieu parfait qui correspond à votre vision et au nombre d'invités."
      },
      {
        title: "Création d'ambiance",
        description: "Nous développons une ambiance unique à travers la décoration, la musique et les animations."
      },
      {
        title: "Coordination complète",
        description: "Nous gérons tous les aspects de votre soirée pour que vous puissiez en profiter pleinement."
      }
    ]
  },
  concerts: {
    image: "/lovable-uploads/louis-et-sebastien-au-festival-locomotives-normandes.jpg",
    title: "Des expériences musicales exceptionnelles",
    description: "De l'organisation de concerts privés aux festivals complets, nous créons des expériences musicales immersives et mémorables.",
    features: [
      "Booking d'artistes et programmation",
      "Production technique complète",
      "Scénographie et éclairage",
      "Gestion des autorisations et sécurité",
      "Billetterie et accréditations",
      "Hospitalité et zones VIP"
    ],
    process: [
      {
        title: "Conception artistique",
        description: "Nous définissons la programmation et l'identité artistique de votre événement."
      },
      {
        title: "Production technique",
        description: "Nous assurons tous les aspects techniques, du son à l'éclairage."
      },
      {
        title: "Logistique et sécurité",
        description: "Nous gérons les aspects réglementaires, la sécurité et le confort du public."
      },
      {
        title: "Expérience complète",
        description: "Nous créons une expérience immersive qui va au-delà de la simple performance musicale."
      }
    ]
  },
  sociaux: {
    image: "/lovable-uploads/balle-annuel-officiers-millitaires.jpeg",
    title: "Des événements sociaux qui rassemblent",
    description: "Nous organisons des événements sociaux élégants qui favorisent les rencontres et créent des liens durables.",
    features: [
      "Galas et soirées de charité",
      "Événements de networking",
      "Cérémonies de remise de prix",
      "Inaugurations et ouvertures",
      "Événements associatifs",
      "Rencontres communautaires"
    ],
    process: [
      {
        title: "Définition des objectifs",
        description: "Nous clarifions le but de votre événement social et les résultats attendus."
      },
      {
        title: "Conception stratégique",
        description: "Nous élaborons un concept qui favorise les interactions et les connexions."
      },
      {
        title: "Organisation complète",
        description: "Nous gérons tous les aspects, de la logistique à la programmation."
      },
      {
        title: "Évaluation du succès",
        description: "Nous mesurons l'impact de votre événement selon les objectifs définis."
      }
    ]
  }
};

// Our approach steps
const approachSteps = [
  {
    icon: UserRound,
    title: "1. Consultation personnalisée",
    description: "Nous commençons par comprendre votre vision, vos objectifs et vos attentes pour créer un événement qui vous ressemble."
  },
  {
    icon: Sparkles,
    title: "2. Conception créative",
    description: "Notre équipe développe un concept unique et sur mesure qui reflète votre personnalité ou l'image de votre entreprise."
  },
  {
    icon: CheckCircle,
    title: "3. Planification détaillée",
    description: "Nous élaborons un plan précis, sélectionnons les meilleurs fournisseurs et gérons tous les aspects logistiques."
  },
  {
    icon: Calendar,
    title: "4. Exécution impeccable",
    description: "Le jour J, notre équipe assure une coordination parfaite pour que vous puissiez profiter pleinement de votre événement."
  }
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-fade-in">
              Nos services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-slide-down">
              Créons ensemble des<br /><span className="text-gold">événements exceptionnels</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              De la conception à la réalisation, nous vous accompagnons pour créer des moments uniques et inoubliables adaptés à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark relative">
        <div className="container-custom">
          <SectionHeading
            title="Nos domaines d'expertise"
            subtitle="Découvrez notre large gamme de services événementiels personnalisés."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="p-6 rounded-lg border border-border bg-card shadow-sm card-hover animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-secondary text-gold">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </a>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <a
              href="#services-details"
              className="flex flex-col items-center text-muted-foreground hover:text-gold transition-colors animate-on-scroll"
            >
              <span className="mb-2">Découvrir en détail</span>
              <ChevronsDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-secondary/50 dark:bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            title="Notre approche"
            subtitle="Une méthodologie éprouvée pour des événements réussis."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card shadow-sm animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-gold text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services-details" className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <SectionHeading
            title="Nos services en détail"
            subtitle="Explorez nos services spécialisés pour chaque type d'événement."
            centered
          />
          
          <Tabs defaultValue="mariages" className="w-full animate-on-scroll">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  <span className="hidden md:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(serviceDetails).map(([id, service]) => (
              <TabsContent key={id} value={id} id={id} className="animate-on-scroll">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-3xl font-playfair font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Ce que nous proposons</h4>
                      <ul className="grid gap-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-gold" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild className="btn-primary">
                      <Link to="/contact">Discuter de votre projet</Link>
                    </Button>
                  </div>
                  
                  <div className="order-1 md:order-2 relative">
                    <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl border-2 border-gold" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-xl shadow-lg relative z-10"
                    />
                  </div>
                </div>
                
                <div className="mt-16">
                  <h4 className="text-2xl font-playfair font-semibold mb-6 text-center">Notre processus</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="p-6 rounded-lg border border-border bg-card shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-secondary text-gold flex items-center justify-center mb-4">
                          <span className="font-semibold">{index + 1}</span>
                        </div>
                        <h5 className="text-lg font-semibold mb-2">{step.title}</h5>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            title="Questions fréquentes"
            subtitle="Trouvez les réponses aux questions les plus courantes sur nos services événementiels."
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
            {[
              {
                question: "Combien de temps à l'avance dois-je réserver vos services ?",
                answer: "Nous recommandons de réserver nos services au moins 3 à 6 mois à l'avance pour les événements importants comme les mariages, et 2 à 3 mois pour les autres types d'événements. Cependant, nous pouvons également gérer des projets avec des délais plus courts selon notre disponibilité."
              },
              {
                question: "Comment se déroule le processus de devis ?",
                answer: "Après un premier contact, nous organisons une consultation pour comprendre vos besoins. Nous élaborons ensuite une proposition personnalisée détaillant les services et le budget. Après d'éventuels ajustements, le devis final vous est présenté pour approbation."
              },
              {
                question: "Travaillez-vous dans toute la France ?",
                answer: "Oui, nous organisons des événements dans toute la France et à l'international. Notre équipe est mobile et s'adapte à vos besoins géographiques, avec une expertise particulière en région parisienne et sur la Côte d'Azur."
              },
              {
                question: "Quels types de budgets pouvez-vous gérer ?",
                answer: "Nous travaillons avec des budgets variés et adaptons nos prestations en fonction de vos moyens. Notre priorité est de créer un événement qui répond à vos attentes tout en respectant votre enveloppe budgétaire."
              },
              {
                question: "Proposez-vous des formules ou tout est sur mesure ?",
                answer: "Nous privilégions les prestations sur mesure pour répondre exactement à vos besoins. Cependant, nous proposons également des formules de base pour certains types d'événements, qui peuvent être personnalisées selon vos souhaits."
              },
              {
                question: "Comment assurez-vous la coordination le jour J ?",
                answer: "Notre équipe est présente du début à la fin de votre événement. Un coordinateur dédié supervise tous les aspects logistiques, gère les prestataires et résout les éventuels imprévus, vous permettant de profiter pleinement de votre événement sans stress."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-card shadow-sm">
                <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
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
              Prêt à concrétiser votre projet événementiel ?
            </h2>
            <p className="section-paragraph mx-auto mb-8 text-white/80 animate-on-scroll">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons créer un événement sur mesure qui dépasse vos attentes.
            </p>
            <Button asChild size="lg" className="btn-primary animate-on-scroll">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
