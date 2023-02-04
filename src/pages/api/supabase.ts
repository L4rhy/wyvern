import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../types/supabase"
export const supabase = createClient<Database>(
    "https://jzgmmkqkkgmpxlewjyfs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6Z21ta3Fra2dtcHhsZXdqeWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0OTQyMzIsImV4cCI6MTk5MDA3MDIzMn0.7K_riNGMM-3bPQdCJVPylKl2e1I-T5vnxlcdBl3lGzs"
)

