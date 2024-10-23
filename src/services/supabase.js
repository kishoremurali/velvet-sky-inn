import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://srcshgeajswxpvrhgcos.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyY3NoZ2VhanN3eHB2cmhnY29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MDM1MTMsImV4cCI6MjA0NTI3OTUxM30.vTzKsc1Ftms00to3i5Tc5bqXhFF_RoMp25w2wPER_Eo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
