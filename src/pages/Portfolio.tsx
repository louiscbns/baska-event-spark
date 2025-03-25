import SectionHeading from "@/components/SectionHeading";
import PortfolioItem from "@/components/PortfolioItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Portfolio items
const portfolioItems = [
  {
    id: "mariage-provence",
    title: "Mariage élégant en Provence",
    category: "Mariage",
    image: "/lovable-uploads/761ee18b-fa87-46a1-89a1-5fec3248fa2b.png",
    description: "Un mariage champêtre organisé dans un domaine provençal, avec une décoration florale somptueuse et une ambiance romantique pour 150 invités."
  },
  {
    id: "gala-entreprise",
    title: "Gala annuel d'entreprise",
    category: "Événement d'entreprise",
    image: "/lovable-uploads/soiree-annuelle-entreprise-otis-paris-a-la-terasse-du-stade.jpeg",
    description: "Gala de fin d'année pour une entreprise internationale, avec dîner de gala, remise de prix et animation musicale pour 200 collaborateurs."
  },
  {
    id: "anniversaire-surprise",
    title: "Anniversaire surprise 50 ans",
    category: "Anniversaire",
    image: "/lovable-uploads/tres-grande-tablee.jpeg",
    description: "Organisation complète d'une fête surprise pour un 50ème anniversaire avec thématique années 80, animations personnalisées et menu gastronomique."
  },
  {
    id: "soiree-pool-party",
    title: "Pool Party privée",
    category: "Soirée privée",
    image: "/lovable-uploads/soiree-exterieure-piscine-sud-de-la-france-avignon.png",
    description: "Soirée exclusive autour d'une piscine avec DJ international, cocktails signature et mise en lumière spectaculaire pour 80 invités."
  },
  {
    id: "festival-musique",
    title: "Festival de musique privé",
    category: "Concert & Festival",
    image: "/lovable-uploads/dj-set-louis-food-society.JPG",
    description: "Organisation d'un festival privé avec plusieurs artistes, espaces VIP et décoration bohème chic pour 300 personnes."
  },
  {
    id: "gala-charite",
    title: "Gala de charité",
    category: "Événement social",
    image: "/lovable-uploads/7151d6f0-4ffd-434a-9767-54aca5aae40d.png",
    description: "Événement caritatif élégant avec vente aux enchères, dîner gastronomique et spectacle live, ayant permis de récolter des fonds importants pour une association."
  },
  {
    id: "lancement-produit",
    title: "Lancement de produit luxe",
    category: "Événement d'entreprise",
    image: "/lovable-uploads/f84aac44-a554-4926-9381-0f18a6b84445.png",
    description: "Événement exclusif pour le lancement d'un produit de luxe, avec scénographie immersive, dégustation et expériences sensorielles pour la presse et les VIP."
  },
  {
    id: "mariage-plage",
    title: "Mariage pieds dans l'eau",
    category: "Mariage",
    image: "/lovable-uploads/19a40589-f9bd-4a67-a57e-925687b66a40.png",
    description: "Cérémonie et réception de mariage sur une plage privée, avec arche florale, dîner au coucher du soleil et piste de danse sous les étoiles."
  },
  {
    id: "seminaire-entreprise",
    title: "Séminaire d'entreprise",
    category: "Événement d'entreprise",
    image: "/lovable-uploads/soiree-annuelle-entreprise-otis-paris.jpeg",
    description: "Organisation d'un séminaire de trois jours pour une entreprise, avec conférences, ateliers team building et soirées thématiques."
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  // Get unique categories
  const categories = Array.from(
    new Set(portfolioItems.map((item) => item.category))
  );

  // Filter items based on selected category
  const filteredItems = filter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-fade-in">
              Nos réalisations
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-slide-down">
              Notre <span className="text-gold">portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Découvrez une sélection de nos événements les plus marquants et laissez-vous inspirer par notre savoir-faire.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <Tabs defaultValue="all" value={filter} onValueChange={setFilter} className="animate-on-scroll">
            <div className="flex justify-center mb-10">
              <TabsList>
                <TabsTrigger value="all">Tous</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={filter} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioItem
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    imageSrc={item.image}
                    description={item.description}
                    className="animate-on-scroll"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/50 dark:bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            title="Notre processus créatif"
            subtitle="Comment nous transformons vos idées en événements mémorables."
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-12 animate-on-scroll">
            {[
              {
                number: "01",
                title: "Consultation & Vision",
                description: "Nous commençons par comprendre vos objectifs, votre style et vos attentes pour créer une vision partagée."
              },
              {
                number: "02",
                title: "Concept & Design",
                description: "Notre équipe créative développe un concept sur mesure, avec moodboards et propositions visuelles."
              },
              {
                number: "03",
                title: "Réalisation & Coordination",
                description: "Nous gérons tous les aspects logistiques et coordonnons les prestataires pour une exécution parfaite."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-white font-playfair text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Pourquoi choisir Baska Events"
                subtitle="Des événements exceptionnels réalisés par des professionnels passionnés."
              />
              
              <div className="space-y-6 animate-on-scroll">
                {[
                  {
                    title: "Expertise et créativité",
                    description: "Notre équipe combine expertise technique et créativité pour donner vie à des concepts uniques."
                  },
                  {
                    title: "Attention aux détails",
                    description: "Nous soignons chaque détail pour créer une expérience cohérente et mémorable."
                  },
                  {
                    title: "Réseau de prestataires d'excellence",
                    description: "Nous collaborons avec les meilleurs prestataires pour garantir une qualité irréprochable."
                  },
                  {
                    title: "Accompagnement personnalisé",
                    description: "Nous vous accompagnons à chaque étape, de la conception à la réalisation de votre événement."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-gold font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 animate-on-scroll">
                <Button asChild className="btn-primary">
                  <Link to="/contact">Discuter de votre projet</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="absolute -top-4 -left-4 w-48 h-48 border-2 border-gold rounded-xl" />
              <img
                src="/lovable-uploads/baska-events-traiteur-evenementiel.jpg"
                alt="Baska Events - Expertise"
                className="w-full h-auto rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading animate-on-scroll">
              Prêt à créer votre événement de rêve ?
            </h2>
            <p className="section-paragraph mx-auto mb-8 text-white/80 animate-on-scroll">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons donner vie à votre vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                <Link to="/services">Explorer nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
