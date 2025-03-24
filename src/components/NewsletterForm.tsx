import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const NewsletterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const subscriberData = {
        email,
        created_at: new Date().toISOString(),
        status: 'active',
        confirmed: false
      };
      
      // Vérifier si l'email existe déjà
      const { data: existingSubscriber, error: checkError } = await supabase
        .from('newsletter_subscribers')
        .select('id, status')
        .eq('email', email)
        .single();

      if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = not found, which is expected for new subscribers
        console.error("Error checking existing subscriber:", checkError);
        throw checkError;
      }

      if (existingSubscriber) {
        if (existingSubscriber.status === 'active') {
          toast.error("Cette adresse email est déjà inscrite à notre newsletter.");
          return;
        } else {
          // Réactiver l'abonnement si désactivé
          const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({ status: 'active' })
            .eq('id', existingSubscriber.id);
          
          if (updateError) {
            console.error("Error updating subscriber:", updateError);
            throw updateError;
          }
          toast.success("Votre inscription a été réactivée avec succès !");
        }
      } else {
        // Insérer le nouvel abonné
        const { error: insertError } = await supabase
          .from('newsletter_subscribers')
          .insert(subscriberData);
        
        if (insertError) {
          console.error("Error inserting new subscriber:", insertError);
          throw insertError;
        }
        toast.success("Merci pour votre inscription à notre newsletter !");
      }
      
      // Réinitialiser le formulaire
      setEmail("");
    } catch (error: any) {
      console.error("Error details:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
      
      if (error.code === '42P01') {
        toast.error("La configuration de la newsletter n'est pas terminée. Veuillez réessayer plus tard.");
      } else if (error.code === '23505') { // Unique violation
        toast.error("Cette adresse email est déjà inscrite à notre newsletter.");
      } else {
        toast.error("Une erreur s'est produite. Veuillez réessayer.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        required
        className="flex-grow"
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className="btn-primary whitespace-nowrap"
      >
        {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? "Inscription..." : "S'inscrire"}
      </Button>
    </form>
  );
};

export default NewsletterForm; 