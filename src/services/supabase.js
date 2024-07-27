import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ehahpqmcowuaznsxuhkt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoYWhwcW1jb3d1YXpuc3h1aGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MDAzMjEsImV4cCI6MjAzNzQ3NjMyMX0.J790grhUIdkiGc_pxrb_LWZ9lw6ssVNdOO-5EsOyqhc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
