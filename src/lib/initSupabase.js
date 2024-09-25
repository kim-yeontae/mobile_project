import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://krxrxkndldqffyoecoed.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeHJ4a25kbGRxZmZ5b2Vjb2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMzk1NjYsImV4cCI6MjA0MjgxNTU2Nn0.ZY0cuRVAbip5Q0fz5IEjSCx-Ow33e6vGIP7owygRoZ0"
);
