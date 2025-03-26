import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blogPosts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <Helmet>
        <title>Blog Baska Events - Conseils et inspirations pour vos événements</title>
        <meta name="description" content="Découvrez nos articles sur les tendances, conseils et inspirations pour vos événements. Expertise en organisation d'événements à Paris." />
        <meta name="keywords" content="événementiel, organisation événements, Paris, mariage, soirée entreprise, DJ, animation" />
        <meta property="og:title" content="Blog Baska Events - Conseils et inspirations pour vos événements" />
        <meta property="og:description" content="Découvrez nos articles sur les tendances, conseils et inspirations pour vos événements. Expertise en organisation d'événements à Paris." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baska-events.fr/blog" />
        <link rel="canonical" href="https://www.baska-events.fr/blog" />
      </Helmet>

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
                
                {/* Categories - Mobile */}
                <div className="lg:hidden">
                  <h3 className="text-lg font-semibold mb-4">Catégories</h3>
                  <Select value={activeCategory} onValueChange={setActiveCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionner une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tous">Tous les articles</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Categories - Desktop */}
                <div className="hidden lg:block">
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

export default Blog;
