
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground mb-4 animate-fade-in">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-slide-down">
              Parlons de votre <span className="text-gold">projet</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Nous sommes impatients de vous entendre et de vous aider à créer un événement exceptionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeading
                title="Contactez-nous"
                subtitle="Plusieurs façons de nous joindre pour discuter de votre projet."
              />
              
              <div className="space-y-8 animate-on-scroll">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Notre adresse</h3>
                    <p className="text-muted-foreground">
                      2 Avenue Octave Gréard<br />
                      75007 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+33782491428" className="hover:text-gold transition-colors">
                        +33 7 82 49 14 28
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:contact@baska-events.fr" className="hover:text-gold transition-colors">
                        contact@baska-events.fr
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Heures d'ouverture</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi: Sur rendez-vous<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4 animate-on-scroll">Suivez-nous</h3>
                <div className="flex space-x-4 animate-on-scroll">
                  <a
                    href="https://www.instagram.com/baska.events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/baska-events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.mariages.net/musique-mariage/baska-events--e354227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                    aria-label="Mariages.net"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionHeading
                title="Envoyez-nous un message"
                subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
              />
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-champagne-light dark:bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            title="Nous trouver"
            subtitle="Venez nous rencontrer à notre bureau de Paris."
            centered
          />
          
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg animate-on-scroll">
            <iframe
              title="Carte Baska Events"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1634139182965!2d2.2956184!3d48.85603169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701b4f58251b%3A0x167f5a60fb94aa76!2s2%20Av.%20Octave%20Gr%C3%A9ard%2C%2075007%20Paris!5e0!3m2!1sfr!2sfr!4v1642424454899!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="container-custom">
          <SectionHeading
            title="Questions fréquentes"
            subtitle="Retrouvez ici les réponses aux questions les plus courantes."
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
            {[
              {
                question: "Comment se déroule le premier rendez-vous ?",
                answer: "Le premier rendez-vous est l'occasion de faire connaissance, de comprendre votre projet et vos attentes. Nous discutons de votre vision, de votre budget et des services qui correspondent le mieux à vos besoins. Ce rendez-vous peut se faire en personne, par téléphone ou visioconférence selon votre préférence."
              },
              {
                question: "Quels types d'événements organisez-vous ?",
                answer: "Nous organisons une grande variété d'événements : mariages, anniversaires, soirées privées, événements d'entreprise (séminaires, lancements de produits, conférences), concerts, festivals et événements sociaux (galas, événements caritatifs). Chaque événement est personnalisé selon vos besoins spécifiques."
              },
              {
                question: "Quelle est votre zone d'intervention ?",
                answer: "Nous intervenons principalement à Paris et en Île-de-France, mais aussi dans toute la France et à l'international. Notre équipe est mobile et s'adapte à vos besoins géographiques."
              },
              {
                question: "Comment est calculé le coût de vos services ?",
                answer: "Le coût varie en fonction de l'ampleur du projet, des services demandés et du niveau de détail requis. Après notre première consultation, nous établissons un devis personnalisé détaillant tous les services et les coûts associés. Nous travaillons avec transparence pour respecter votre budget."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-card shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
