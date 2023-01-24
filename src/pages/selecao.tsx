import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { typeTabelas } from "./api/types";
import { Fundo, Caixa } from "../styles/styleSelecao";
import { useFormState } from "ariakit/form";
import { useMenuState } from "ariakit/menu";
import { supabase } from "./api/supabase.js";

export default function Selecao(props: typeTabelas) {
   const router = useRouter();
   const [usuario, setUsuario] = useState({});
   const id = parseInt(router.query.id as string);
   const form = useFormState({
      defaultValues: { campanha: "", personagem: "" },
   });
   const menu = useMenuState({ gutter: 8 });
   props.usuarios.forEach((value) => {
      if (value.id == id) {
         setUsuario(value);
      }
   });
   return (
      <>
         <Head>
            <title>Selicione - Faery Wyvern</title>
         </Head>
         <Fundo>
            <Caixa state={form}></Caixa>
         </Fundo>
      </>
   );
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