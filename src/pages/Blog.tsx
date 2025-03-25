import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

// Blog posts mock data
const blogPosts = [
  {
    id: "tendances-mariage-2024",
    title: "Les tendances mariage incontournables pour 2024",
    slug: "tendances-mariage-2024",
    excerpt: "Découvrez les tendances qui marqueront les mariages en 2024, de la décoration aux animations, pour un jour J parfaitement dans l'air du temps.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl.",
    imageSrc: "/lovable-uploads/mariage-jardin-chateau.jpeg",
    date: new Date("2024-03-15"),
    category: "Mariage",
    author: "Sophie Dubois"
  },
  {
    id: "evenements-entreprise-impact",
    title: "Comment organiser un événement d'entreprise à fort impact ?",
    slug: "evenements-entreprise-impact",
    excerpt: "Les clés pour créer un événement corporate mémorable qui renforce votre marque et atteint vos objectifs stratégiques.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl.",
    imageSrc: "/lovable-uploads/soiree-annuelle-entreprise-otis-paris-a-la-terasse-du-stade.jpeg",
    date: new Date("2024-02-28"),
    category: "Événement d'entreprise",
    author: "Marc Laurent"
  },
  {
    id: "lieux-exceptionnels-sud",
    title: "10 lieux exceptionnels pour votre événement dans le Sud de la France",
    slug: "lieux-exceptionnels-sud",
    excerpt: "Notre sélection des plus beaux domaines, châteaux et espaces insolites pour organiser votre événement dans le Sud de la France.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl.",
    imageSrc: "/lovable-uploads/soiree-exte-tennis-club-du-16e.jpeg",
    date: new Date("2024-02-10"),
    category: "Lieux",
    author: "Julie Moreau"
  },
  {
    id: "eco-responsable-evenements",
    title: "Organiser un événement éco-responsable : nos conseils pratiques",
    slug: "eco-responsable-evenements",
    excerpt: "Comment réduire l'impact environnemental de vos événements tout en créant une expérience mémorable pour vos invités.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl.",
    imageSrc: "/lovable-uploads/preparation-evenement-Rock-la-casbah.jpeg",
    date: new Date("2024-01-25"),
    category: "Conseils",
    author: "Sophie Dubois"
  },
  {
    id: "musique-soiree-reussie",
    title: "L'importance de la musique pour une soirée réussie",
    slug: "musique-soiree-reussie",
    excerpt: "Comment choisir la bonne ambiance musicale et les meilleurs prestataires pour créer l'atmosphère parfaite lors de votre événement.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl.",
    imageSrc: "/lovable-uploads/dj-set-louis-food-society.JPG",
    date: new Date("2024-01-12"),
    category: "Entertainment",
    author: "Thomas Leclerc"
  },
  {
    id: "gastronomie-evenementielle",
    title: "Les dernières tendances en gastronomie événementielle",
    slug: "gastronomie-evenementielle",
    excerpt: "Un tour d'horizon des innovations culinaires et des concepts food & beverage qui font sensation dans le monde de l'événementiel.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl.",
    imageSrc: "/lovable-uploads/baska-events-traiteur-evenementiel.jpg",
    date: new Date("2023-12-18"),
    category: "Gastronomie",
    author: "Julie Moreau"
  }
];

// Get unique categories
const categories = Array.from(
  new Set(blogPosts.map((post) => post.category))
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Tous" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-fade-in">
              Notre blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-slide-down">
              Inspirations & <span className="text-gold">conseils</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Découvrez nos articles sur les tendances, conseils et inspirations pour vos événements.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8 animate-on-scroll">
                {/* Search */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recherche</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Rechercher..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Catégories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setActiveCategory("Tous")}
                        className={`text-sm ${
                          activeCategory === "Tous"
                            ? "text-gold font-medium"
                            : "text-foreground hover:text-gold"
                        } transition-colors`}
                      >
                        Tous les articles
                      </button>
                    </li>
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`text-sm ${
                            activeCategory === category
                              ? "text-gold font-medium"
                              : "text-foreground hover:text-gold"
                          } transition-colors`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Articles récents</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="flex gap-3">
                        <img
                          src={post.imageSrc}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <a
                            href={`/blog/${post.slug}`}
                            className="text-sm font-medium hover:text-gold transition-colors line-clamp-2"
                          >
                            {post.title}
                          </a>
                          <p className="text-xs text-muted-foreground">
                            {new Intl.DateTimeFormat('fr-FR', { 
                              day: 'numeric', 
                              month: 'short', 
                              year: 'numeric' 
                            }).format(post.date)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <BlogCard
                      key={post.id}
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      imageSrc={post.imageSrc}
                      date={post.date}
                      category={post.category}
                      className="animate-on-scroll"
                      style={{ animationDelay: `${index * 100}ms` }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 animate-on-scroll">
                  <h3 className="text-xl font-semibold mb-2">Aucun article trouvé</h3>
                  <p className="text-muted-foreground mb-4">
                    Aucun article ne correspond à votre recherche. Essayez avec d'autres termes.
                  </p>
                  <Button onClick={() => { setSearchTerm(""); setActiveCategory("Tous"); }}>
                    Réinitialiser la recherche
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Restez inspiré
            </h2>
            <p className="text-muted-foreground mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles, conseils et tendances en matière d'événementiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow"
              />
              <Button className="btn-primary whitespace-nowrap">
                S'abonner
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
              Prêt à concrétiser vos idées ?
            </h2>
            <p className="section-paragraph mx-auto mb-8 text-white/80 animate-on-scroll">
              Contactez-nous dès aujourd'hui pour transformer vos inspirations en un événement exceptionnel.
            </p>
            <Button asChild size="lg" className="btn-primary animate-on-scroll">
              <a href="/contact">Nous contacter</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
