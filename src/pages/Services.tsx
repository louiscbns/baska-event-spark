import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle, ChevronsDown, Diamond, GlassWater, Laptop, Music, Sparkles, UserRound, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// Service categories
const serviceCategories = [
  {
    id: "mariages",
    icon: Diamond,
    title: "Mariages",
    description: "Solutions DJ et sonorisation professionnelle pour votre mariage, de la cérémonie à la soirée dansante."
  },
  {
    id: "entreprise",
    icon: Laptop,
    title: "Événements d'entreprise",
    description: "Services DJ et sonorisation adaptés à vos événements professionnels, des conférences aux soirées de gala."
  },
  {
    id: "anniversaires",
    icon: Calendar,
    title: "Anniversaires",
    description: "Animation DJ et ambiance musicale personnalisée pour célébrer vos moments spéciaux."
  },
  {
    id: "soirees",
    icon: GlassWater,
    title: "Soirées privées",
    description: "Solutions DJ et éclairage sur mesure pour créer l'ambiance parfaite de vos soirées."
  },
  {
    id: "concerts",
    icon: Music,
    title: "Concerts & Festivals",
    description: "Prestations DJ professionnelles et équipement technique complet pour vos événements musicaux."
  },
  {
    id: "sociaux",
    icon: Users,
    title: "Événements sociaux",
    description: "Services DJ et sonorisation adaptés à vos événements sociaux et réceptions."
  }
];

// Detailed service data
const serviceDetails = {
  mariages: {
    image: "/images/types/mariages/mariage-chateau-jardin.webp",
    title: "Nos solutions DJ pour votre Mariage",
    description: "Notre but est de vous accompagner durant tous les préparatifs. Nous pourrons vous apporter de précieux conseils, ne serait-ce aussi dans d'autres domaines que la soirée DJ animation de Mariage, car nos compétences s'étendent bien au-delà.",
    features: [
      "Coordination de votre Cérémonie avec sonorisation optimisée",
      "Ambiance musicale au vin d'honneur",
      "Accompagnement de vos interventions",
      "Équipements de pointe pour un résultat optimal",
      "Animation musicale personnalisée",
      "Éclairage et ambiance lumineuse"
    ],
    process: [
      {
        title: "Consultation initiale",
        description: "Nous prenons le temps de comprendre vos attentes musicales et vos préférences pour créer une ambiance parfaite."
      },
      {
        title: "Proposition de concept",
        description: "Nous élaborons un concept musical unique qui reflète votre personnalité et votre histoire."
      },
      {
        title: "Planification détaillée",
        description: "Nous gérons tous les aspects techniques, de la sonorisation à l'éclairage, pour une prestation parfaite."
      },
      {
        title: "Coordination du jour J",
        description: "Notre équipe de DJ professionnels s'assure que tout se déroule parfaitement pour une soirée mémorable."
      }
    ]
  },
  entreprise: {
    image: "/images/types/entreprises/entreprises-soiree-annuelle-entreprise-otis-paris-a-la-terasse-du-stade.jpeg",
    title: "Solutions DJ pour vos événements d'entreprise",
    description: "Nous créons des ambiances musicales professionnelles adaptées à vos événements d'entreprise, des séminaires aux soirées de gala.",
    features: [
      "Sonorisation professionnelle pour conférences",
      "Ambiance musicale pour cocktails et réceptions",
      "Animation DJ pour soirées d'entreprise",
      "Éclairage et effets visuels sur mesure",
      "Coordination avec vos autres prestataires",
      "Solutions techniques adaptées à vos lieux"
    ],
    process: [
      {
        title: "Analyse des besoins",
        description: "Nous définissons vos besoins en termes d'ambiance musicale et d'éclairage."
      },
      {
        title: "Conception technique",
        description: "Nous élaborons une solution technique adaptée à votre événement."
      },
      {
        title: "Production complète",
        description: "Nous gérons l'installation et la coordination technique."
      },
      {
        title: "Suivi et ajustements",
        description: "Nous assurons un suivi constant pour une prestation optimale."
      }
    ]
  },
  anniversaires: {
    image: "/images/types/anniversaires/anniversaire-grande-table-small.webp",
    title: "Animation DJ pour vos anniversaires",
    description: "Nous créons des ambiances musicales personnalisées pour rendre vos anniversaires mémorables.",
    features: [
      "Animation DJ adaptée à tous les âges",
      "Éclairage et effets visuels festifs",
      "Playlist personnalisée selon vos goûts",
      "Sonorisation de qualité",
      "Coordination des moments forts",
      "Ambiance musicale continue"
    ],
    process: [
      {
        title: "Discussion des envies",
        description: "Nous explorons vos préférences musicales et vos attentes."
      },
      {
        title: "Création d'ambiance",
        description: "Nous développons une ambiance musicale unique."
      },
      {
        title: "Organisation technique",
        description: "Nous coordonnons l'installation et les aspects techniques."
      },
      {
        title: "Animation de soirée",
        description: "Nous assurons une animation musicale parfaite."
      }
    ]
  },
  soirees: {
    image: "/images/types/club/club-food-society-sebastien-small.webp",
    title: "Solutions DJ pour vos soirées privées",
    description: "Nous créons des ambiances musicales exclusives pour vos soirées privées.",
    features: [
      "Animation DJ professionnelle",
      "Éclairage et effets visuels sur mesure",
      "Sonorisation haut de gamme",
      "Playlist personnalisée",
      "Coordination technique complète",
      "Ambiance musicale adaptée"
    ],
    process: [
      {
        title: "Définition du concept",
        description: "Nous élaborons ensemble le concept musical de votre soirée."
      },
      {
        title: "Préparation technique",
        description: "Nous préparons l'installation et les équipements."
      },
      {
        title: "Création d'ambiance",
        description: "Nous développons une ambiance unique."
      },
      {
        title: "Animation de soirée",
        description: "Nous assurons une prestation musicale parfaite."
      }
    ]
  },
  concerts: {
    image: "/images/types/festival/festival-locomotives.webp",
    title: "Solutions DJ pour vos événements musicaux",
    description: "Nous fournissons des prestations DJ professionnelles pour vos événements musicaux.",
    features: [
      "Animation DJ de qualité",
      "Équipement son et lumière professionnel",
      "Coordination technique complète",
      "Effets visuels sur mesure",
      "Gestion des transitions",
      "Solutions adaptées à tous les formats"
    ],
    process: [
      {
        title: "Conception technique",
        description: "Nous définissons les besoins techniques de votre événement."
      },
      {
        title: "Production technique",
        description: "Nous assurons l'installation et la configuration."
      },
      {
        title: "Coordination",
        description: "Nous gérons la coordination avec les autres prestataires."
      },
      {
        title: "Animation",
        description: "Nous assurons une prestation DJ professionnelle."
      }
    ]
  },
  sociaux: {
    image: "/images/types/galas/galas-balle-annuel-officiers-millitaires-small.webp",
    title: "Solutions DJ pour vos événements sociaux",
    description: "Nous créons des ambiances musicales adaptées à vos événements sociaux.",
    features: [
      "Animation DJ professionnelle",
      "Éclairage et effets visuels élégants",
      "Sonorisation de qualité",
      "Coordination technique",
      "Playlist adaptée à l'événement",
      "Solutions sur mesure"
    ],
    process: [
      {
        title: "Analyse des besoins",
        description: "Nous définissons vos besoins en animation musicale."
      },
      {
        title: "Conception technique",
        description: "Nous élaborons une solution adaptée."
      },
      {
        title: "Organisation",
        description: "Nous coordonnons l'installation et la technique."
      },
      {
        title: "Animation",
        description: "Nous assurons une prestation musicale parfaite."
      }
    ]
  }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState("mariages");

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
                <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
                  Discuter de votre projet
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
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
          
          <div className="md:hidden mb-8">
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez un service" />
              </SelectTrigger>
              <SelectContent>
                {serviceCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4" />
                      <span>{category.title}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full animate-on-scroll">
            <TabsList className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 mb-8">
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  <span>{category.title}</span>
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
                      <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
                        Discuter de votre projet
                      </a>
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
                question: "Quel type d'équipement utilisez-vous ?",
                answer: "Nous utilisons du matériel professionnel haut de gamme, incluant des systèmes de sonorisation de qualité, des éclairages LED modernes et des équipements DJ dernière génération. Notre matériel est régulièrement entretenu et mis à jour pour garantir des prestations optimales."
              },
              {
                question: "Comment se déroule la consultation initiale ?",
                answer: "Lors de notre première rencontre, nous discutons de vos attentes musicales, du type d'événement, du nombre d'invités et du lieu. Nous vous présentons nos différentes solutions techniques et nous élaborons ensemble un concept adapté à vos besoins."
              },
              {
                question: "Proposez-vous des playlists personnalisées ?",
                answer: "Oui, nous créons des playlists sur mesure en fonction de vos goûts musicaux et de l'ambiance souhaitée. Nous prenons en compte le type d'événement, l'âge des invités et vos préférences pour créer une programmation musicale parfaite."
              },
              {
                question: "Comment gérez-vous les transitions musicales ?",
                answer: "Nos DJs professionnels maîtrisent parfaitement l'art des transitions musicales. Ils adaptent le rythme et le style en fonction de l'ambiance, des moments clés de l'événement et des réactions du public pour maintenir une énergie constante."
              },
              {
                question: "Proposez-vous des solutions d'éclairage ?",
                answer: "Oui, nous proposons des solutions d'éclairage complètes avec des effets visuels sur mesure. Nous utilisons des éclairages LED programmables, des projecteurs et des effets spéciaux pour créer l'ambiance parfaite."
              },
              {
                question: "Comment assurez-vous la qualité du son ?",
                answer: "Nous effectuons une analyse acoustique du lieu avant chaque événement pour optimiser la disposition du matériel. Nos DJs professionnels effectuent des réglages précis pour garantir une qualité sonore optimale dans toute la salle."
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
              Prêt à créer l'ambiance parfaite pour votre événement ?
            </h2>
            <p className="section-paragraph mx-auto mb-8 text-white/80 animate-on-scroll">
              Contactez-nous pour discuter de vos besoins en animation musicale et sonorisation. Notre équipe de DJs professionnels vous accompagnera dans la création d'une ambiance unique et mémorable.
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

export default Services;
