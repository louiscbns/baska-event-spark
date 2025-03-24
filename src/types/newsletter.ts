export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
  status: 'active' | 'inactive';
  confirmed: boolean;
}

export interface NewsletterFormData {
  email: string;
} 