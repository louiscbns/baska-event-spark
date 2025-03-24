
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, User, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

// Blog posts mock data (same as in Blog.tsx)
const blogPosts = [
  {
    id: "tendances-mariage-2024",
    title: "Les tendances mariage incontournables pour 2024",
    slug: "tendances-mariage-2024",
    excerpt: "Découvrez les tendances qui marqueront les mariages en 2024, de la décoration aux animations, pour un jour J parfaitement dans l'air du temps.",
    content: `
      <p>Le monde du mariage est en constante évolution, s'adaptant aux nouvelles préférences des couples et aux influences culturelles. Pour 2024, plusieurs tendances se dessinent déjà, promettant des célébrations à la fois personnalisées, durables et visuellement époustouflantes.</p>
      
      <h2>1. La durabilité au cœur des célébrations</h2>
      
      <p>Les mariages éco-responsables continuent de gagner en popularité. Les couples cherchent à réduire l'empreinte écologique de leur grand jour en optant pour des fleurs locales et de saison, des décorations réutilisables ou biodégradables, et des traiteurs proposant des menus biologiques et locaux.</p>
      
      <p>Les invitations digitales et les cadeaux d'invités durables (plantes, produits artisanaux locaux) font également partie de cette tendance verte qui ne cesse de croître.</p>
      
      <h2>2. La personnalisation poussée à l'extrême</h2>
      
      <p>Fini le temps des mariages formatés ! En 2024, la personnalisation atteint de nouveaux sommets. Chaque élément du mariage raconte une histoire – celle du couple. Des cocktails signature aux animations sur mesure, en passant par des cérémonies totalement personnalisées, les mariés veulent que leur journée reflète parfaitement leur personnalité et leur histoire d'amour.</p>
      
      <h2>3. Des palettes de couleurs audacieuses</h2>
      
      <p>Les tons neutres et pastels qui ont dominé ces dernières années cèdent progressivement la place à des couleurs plus affirmées. Les tons terreux riches, les teintes joyeuses et même les combinaisons de couleurs contrastées feront sensation en 2024. L'association du terracotta, de l'ocre et du bleu profond promet d'être particulièrement tendance.</p>
      
      <h2>4. L'expérience des invités au premier plan</h2>
      
      <p>Les couples accordent une attention particulière au confort et à l'expérience de leurs invités. Coins détente, stations d'hydratation élégantes, menus interactifs et animations surprenantes... Tout est pensé pour que les convives gardent un souvenir mémorable de l'événement.</p>
      
      <h2>5. La technologie au service de l'émotion</h2>
      
      <p>Les mariages hybrides avec des éléments virtuels pour inclure les invités qui ne peuvent pas être présents physiquement sont désormais monnaie courante. Les couples utilisent également la réalité augmentée pour créer des expériences immersives, des filtres Instagram personnalisés et des installations photo/vidéo interactives.</p>
      
      <h2>6. Des weeks-ends de célébration</h2>
      
      <p>Plutôt qu'une simple journée, de plus en plus de couples optent pour un week-end entier de festivités. Dîner de bienvenue la veille, cérémonie et réception le jour J, et brunch décontracté le lendemain – cette approche permet de profiter pleinement de chaque moment avec les proches.</p>
      
      <h2>7. Le retour du glamour</h2>
      
      <p>Après plusieurs années de mariages bohèmes et rustiques, on observe un retour à plus d'élégance et de raffinement. Cristal, chandeliers, vaisselle fine et tissus luxueux créent une atmosphère de glamour intemporel qui promet d'être très recherchée en 2024.</p>
      
      <p>Chez Baska Events, nous sommes passionnés par ces nouvelles tendances et nous nous réjouissons de les intégrer dans les mariages que nous organiserons en 2024. Notre équipe reste à l'affût des dernières innovations pour vous proposer un événement à la fois dans l'air du temps et parfaitement adapté à votre vision.</p>
      
      <p>N'hésitez pas à nous contacter pour discuter de votre projet de mariage et découvrir comment nous pouvons vous aider à créer une célébration mémorable qui vous ressemble.</p>
    `,
    imageSrc: "/lovable-uploads/761ee18b-fa87-46a1-89a1-5fec3248fa2b.png",
    date: new Date("2024-03-15"),
    category: "Mariage",
    author: "Sophie Dubois",
    readTime: "6 min"
  },
  {
    id: "evenements-entreprise-impact",
    title: "Comment organiser un événement d'entreprise à fort impact ?",
    slug: "evenements-entreprise-impact",
    excerpt: "Les clés pour créer un événement corporate mémorable qui renforce votre marque et atteint vos objectifs stratégiques.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl.",
    imageSrc: "/lovable-uploads/2b6347ae-2c8d-4535-98c4-f53e391fbdc4.png",
    date: new Date("2024-02-28"),
    category: "Événement d'entreprise",
    author: "Marc Laurent",
    readTime: "8 min"
  },
  {
    id: "lieux-exceptionnels-sud",
    title: "10 lieux exceptionnels pour votre événement dans le Sud de la France",
    slug: "lieux-exceptionnels-sud",
    excerpt: "Notre sélection des plus beaux domaines, châteaux et espaces insolites pour organiser votre événement dans le Sud de la France.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, vitae aliquam nisl nisl eget nisl.",
    imageSrc: "/lovable-uploads/19a40589-f9bd-4a67-a57e-925687b66a40.png",
    date: new Date("2024-02-10"),
    category: "Lieux",
    author: "Julie Moreau",
    readTime: "10 min"
  }
];

// Find related posts (same category)
const getRelatedPosts = (currentPost: typeof blogPosts[0]) => {
  return blogPosts
    .filter(post => post.category === currentPost.category && post.id !== currentPost.id)
    .slice(0, 2);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the current post
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center py-12">
            <h1 className="text-3xl font-playfair font-bold mb-4">Article non trouvé</h1>
            <p className="text-muted-foreground mb-6">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
            <Button asChild>
              <Link to="/blog">Retour au blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <Link to="/blog" className="inline-flex items-center text-foreground hover:text-gold transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-fade-in">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 animate-slide-down">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-6 animate-fade-in">
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(post.date, "d MMMM yyyy", { locale: fr })}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime} de lecture
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Tag className="mr-2 h-4 w-4" />
                {post.category}
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-10 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              {/* Featured Image */}
              <div className="rounded-xl overflow-hidden mb-8 animate-on-scroll">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Article Content */}
              <article className="prose prose-lg max-w-none animate-on-scroll">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Tags & Share */}
              <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-on-scroll">
                <div>
                  <span className="text-sm font-medium mr-2">Tags:</span>
                  <Link
                    to={`/blog?category=${post.category}`}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground hover:bg-primary/20 transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-3">Partager:</span>
                  <div className="flex space-x-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      aria-label="Partager sur Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      aria-label="Partager sur Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      aria-label="Partager sur LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Lien copié !");
                      }}
                      className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      aria-label="Copier le lien"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Author Box */}
              <div className="mt-10 p-6 rounded-xl bg-secondary/50 dark:bg-charcoal animate-on-scroll">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-champagne overflow-hidden">
                    <div className="h-full w-full bg-gold text-white flex items-center justify-center text-2xl font-bold">
                      {post.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{post.author}</h3>
                    <p className="text-sm text-muted-foreground">Expert événementiel chez Baska Events</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Passionné par l'organisation d'événements, notre expert partage ses connaissances et son expérience pour vous aider à créer des moments inoubliables.
                </p>
              </div>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16 animate-on-scroll">
                  <h2 className="text-2xl font-playfair font-semibold mb-6">Articles similaires</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group block rounded-lg overflow-hidden border border-border card-hover"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedPost.imageSrc}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-foreground">
                            {relatedPost.category}
                          </span>
                          <h3 className="text-lg font-semibold mt-2 group-hover:text-gold transition-colors">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-8 animate-on-scroll">
                {/* Recent Posts */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Articles récents</h3>
                  <ul className="space-y-4">
                    {blogPosts.filter(p => p.id !== post.id).slice(0, 4).map((recentPost) => (
                      <li key={recentPost.id}>
                        <Link
                          to={`/blog/${recentPost.slug}`}
                          className="flex gap-3 group"
                        >
                          <img
                            src={recentPost.imageSrc}
                            alt={recentPost.title}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-gold transition-colors line-clamp-2">
                              {recentPost.title}
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              {format(recentPost.date, "d MMM yyyy", { locale: fr })}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Catégories</h3>
                  <ul className="space-y-2">
                    {Array.from(new Set(blogPosts.map(p => p.category))).map((category) => (
                      <li key={category}>
                        <Link
                          to={`/blog?category=${category}`}
                          className="text-foreground hover:text-gold transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA */}
                <div className="p-6 rounded-xl bg-gold/10 border border-gold/30">
                  <h3 className="text-lg font-semibold mb-2">Besoin d'aide pour votre événement ?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Notre équipe d'experts est là pour vous accompagner dans la création de votre événement sur mesure.
                  </p>
                  <Button asChild className="w-full btn-primary">
                    <Link to="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
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
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider.
            </p>
            <Button asChild size="lg" className="btn-primary animate-on-scroll">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
