import { supabase } from "./api/supabase.js";

export default function Mesa(){
    return(
        <div>
            oi
        </div>
    )
}
export async function getStaticProps() {
    const { data: usuarios } = await supabase.from("usuarios").select("*")
    const { data: campanhas } = await supabase.from("campanhas").select("*")
    const { data: personagens } = await supabase.from("personagens").select("*")
    return {
        props: {
            usuarios,
            campanhas,
            personagens
        }
    }
  }