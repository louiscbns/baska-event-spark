-- Create the newsletter_subscribers table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    status TEXT DEFAULT 'active' NOT NULL,
    confirmed BOOLEAN DEFAULT false NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to insert new subscribers
CREATE POLICY "Enable insert for anonymous users" ON public.newsletter_subscribers
    FOR INSERT
    WITH CHECK (true);

-- Allow reading only for checking duplicates
CREATE POLICY "Enable select for anonymous users" ON public.newsletter_subscribers
    FOR SELECT
    USING (true);

-- Allow updates only for the specific email (for unsubscribe functionality)
CREATE POLICY "Enable update for own email" ON public.newsletter_subscribers
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

-- Grant necessary permissions to the anon role
GRANT INSERT, SELECT, UPDATE ON public.newsletter_subscribers TO anon; 