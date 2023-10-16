import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qzqcxgmnxjcjnbwhbqhi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6cWN4Z21ueGpjam5id2hicWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MTA5ODQsImV4cCI6MjAxMTQ4Njk4NH0.8JHarwBI_kSnMYjgVU3kiNznWbIkV4RDXtUqc1fdWKg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
