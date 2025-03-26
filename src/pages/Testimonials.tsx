import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Star, Users, Laptop, Gift, GlassWater } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// Testimonials data
const testimonials = [
  {
    category: "Mariage",
    items: [
      {
        quote: "Baska Events a transformé notre mariage en un événement magique. Chaque détail était parfait et nos invités en parlent encore!",
        author: "S & T",
        position: "Mariage à Saint-Tropez",
        rating: 5 as const
      },
      {
        quote: "L'équipe de Baska Events a su capturer notre vision et la transformer en une réalité qui dépassait nos attentes. Un grand merci pour ce jour parfait!",
        author: "M & J",
        position: "Mariage en Provence",
        rating: 5 as const
      },
      {
        quote: "Nous avons pu profiter pleinement de notre journée sans stress grâce à la coordination impeccable de Baska Events. Professionnalisme et créativité au rendez-vous!",
        author: "C & A",
        position: "Mariage à Paris",
        rating: 5 as const
      }
    ]
  },
  {
    category: "Événement d'entreprise",
    items: [
      {
        quote: "Notre séminaire d'entreprise a été un véritable succès grâce à Baska Events. Organisation impeccable et réactivité exemplaire.",
        author: "J. D",
        position: "Directeur Marketing",
        rating: 5 as const
      },
      {
        quote: "Le lancement de notre produit organisé par Baska Events a eu un impact considérable sur notre image de marque. Un événement mémorable!",
        author: "A. R",
        position: "CEO",
        rating: 5 as const
      },
      {
        quote: "Professionnalisme, créativité et efficacité: Baska Events a parfaitement compris nos enjeux et a créé un événement corporate qui a dépassé nos attentes.",
        author: "P. M",
        position: "Directeur Général",
        rating: 5 as const
      }
    ]
  },
  {
    category: "Anniversaire",
    items: [
      {
        quote: "La fête d'anniversaire organisée pour mes 40 ans était exactement ce que j'avais imaginé. Je recommande vivement!",
        author: "C. M",
        position: "Anniversaire 40 ans",
        rating: 5 as const
      },
      {
        quote: "Baska Events a créé une fête d'anniversaire surprise pour mon mari qui restera gravée dans nos mémoires.",
        author: "I. D",
        position: "Anniversaire 50 ans",
        rating: 5 as const
      },
      {
        quote: "Pour mes 18 ans, Baska Events a créé une soirée magique et élégante qui restera gravée dans ma mémoire. Une soirée exceptionnelle!",
        author: "N. L",
        position: "Anniversaire 18 ans",
        rating: 5 as const
      }
    ]
  },
  {
    category: "Soirée privée",
    items: [
      {
        quote: "Notre soirée privée organisée par Baska Events était tout simplement exceptionnelle. Ambiance, décoration, service: tout était parfait!",
        author: "A. L",
        position: "Soirée d'été",
        rating: 5 as const
      },
      {
        quote: "Baska Events a transformé ma vision en une soirée élégante et mémorable. Leur attention aux détails fait toute la différence.",
        author: "V. M",
        position: "Soirée de gala",
        rating: 5 as const
      },
      {
        quote: "Pour ma pool party annuelle, Baska Events a créé une ambiance festive et sophistiquée qui a ravi tous mes invités.",
        author: "N. B",
        position: "Pool Party",
        rating: 4 as const
      }
    ]
  }
];

// Featured testimonial
const featuredTestimonial = {
  quote: "Travailler avec Baska Events a été une expérience exceptionnelle du début à la fin. Leur équipe a écouté nos besoins, compris notre vision et l'a transformée en un événement qui a dépassé toutes nos attentes. Leur professionnalisme, leur créativité et leur souci du détail sont vraiment impressionnants. Grâce à eux, nous avons pu profiter pleinement de notre journée sans stress, sachant que tout était entre de bonnes mains. Je ne peux que les recommander chaleureusement à quiconque souhaite organiser un événement mémorable.",
  author: "E. & L. D",
  position: "Mariage au Château de Versailles",
  rating: 5 as const,
  image: "/images/types/mariages/mariage-chateau-jardin.webp"
};

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mariage");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-fade-in">
              Témoignages clients
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-slide-down">
              Ce que disent <span className="text-gold">nos clients</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Découvrez les expériences de nos clients et leur satisfaction suite à nos collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-6 animate-on-scroll">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="text-xl italic text-foreground">"{featuredTestimonial.quote}"</p>
              </div>
              <div className="animate-on-scroll">
                <p className="text-lg font-semibold">{featuredTestimonial.author}</p>
                <p className="text-muted-foreground">{featuredTestimonial.position}</p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative animate-on-scroll">
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl border-2 border-gold" />
              <img
                src={featuredTestimonial.image}
                alt={featuredTestimonial.author}
                className="w-full h-auto rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Grid */}
      <section className="py-20 bg-secondary/50 dark:bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            title="L'expérience Baska Events"
            subtitle="Témoignages de clients satisfaits pour tous types d'événements."
            centered
          />
          
          <div className="md:hidden mb-8">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionner une catégorie" />
              </SelectTrigger>
              <SelectContent>
                {testimonials.map((category) => (
                  <SelectItem key={category.category} value={category.category}>
                    <div className="flex items-center gap-2">
                      {category.category === "Mariage" && <Heart className="h-4 w-4" />}
                      {category.category === "Événement d'entreprise" && <Laptop className="h-4 w-4" />}
                      {category.category === "Anniversaire" && <Gift className="h-4 w-4" />}
                      {category.category === "Soirée privée" && <GlassWater className="h-4 w-4" />}
                      <span>{category.category}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="animate-on-scroll">
            <div className="flex justify-center mb-10">
              <TabsList className="hidden md:flex">
                {testimonials.map((category) => (
                  <TabsTrigger key={category.category} value={category.category} className="flex items-center gap-2">
                    {category.category === "Mariage" && <Heart className="h-4 w-4" />}
                    {category.category === "Événement d'entreprise" && <Laptop className="h-4 w-4" />}
                    {category.category === "Anniversaire" && <Gift className="h-4 w-4" />}
                    {category.category === "Soirée privée" && <GlassWater className="h-4 w-4" />}
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {testimonials.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      {...testimonial}
                      className="animate-on-scroll"
                      style={{ animationDelay: `${index * 100}ms` }}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <SectionHeading
            title="Ils nous recommandent"
            subtitle="Découvrez les témoignages vidéo de nos clients satisfaits."
            centered
          />
          
          <div className="flex justify-center animate-on-scroll">
            <div className="aspect-video w-full max-w-4xl bg-muted rounded-xl shadow-lg">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src="/images/types/entreprises/entreprises-soiree-annuelle-entreprise-otis-paris-a-la-terasse-du-stade.jpeg"
                  alt="Témoignage vidéo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-gold/90 flex items-center justify-center cursor-pointer hover:bg-gold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
            {[
              { label: "Clients satisfaits", value: "150+" },
              { label: "Événements organisés", value: "100+" },
              { label: "Taux de satisfaction", value: "98%" },
              { label: "Recommandations", value: "95%" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <p className="text-3xl md:text-4xl font-playfair font-bold text-gold mb-2">{stat.value}</p>
                <p className="text-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Partagez votre expérience"
              subtitle="Vous avez travaillé avec nous ? Nous serions ravis de connaître votre avis."
              centered
            />
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
              <Button asChild size="lg" className="btn-primary">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0xfV2FkoGzYBioG5Pl17ZzLa0kVPlrK73R7uYtGRaqKhZwQ/viewform?usp=pp_url" target="_blank" rel="noopener noreferrer">
                  Partager mon témoignage
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="https://maps.app.goo.gl/khr3QxX531KpPKM66" target="_blank" rel="noopener noreferrer">
                  Laisser un avis Google
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading animate-on-scroll">
              Prêt à créer votre propre expérience avec nous ?
            </h2>
            <p className="section-paragraph mx-auto mb-8 text-white/80 animate-on-scroll">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et rejoindre notre liste de clients satisfaits.
            </p>
            <Button asChild size="lg" className="btn-primary animate-on-scroll">
              <a href="http://calendly.com/baska-events" target="_blank" rel="noopener noreferrer">
                Discuter de votre projet
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
