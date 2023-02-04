import {
   Caixa,
   CaixaMensagens,
   CaixaEnvio,
   Input,
   BotaoIcon,
   IconEnviar,
   ListaMensagens,
   UsuarioMensagem,
   TextoMensagem,
   CaixaMensagem,
} from "@/styles/components/styleChat";
import { useFormState } from "ariakit/form";
import { useSelector } from "react-redux";
import { RootState } from "../../stack/";
import { useState, useEffect } from "react";
import { supabase } from "../api/supabase";

export const enviaMensagem = async (usuario: string, novaMensagem: string, campanha:string) => {
   const mensagens = await supabase
      .from("chatCampanhaVilaEsquecida")
      .insert({ nomeMensagem: usuario, textoMensagem: novaMensagem, campanha: campanha});
};
export default function Chat() {
   const stock = useSelector((state: RootState) => state.stock);
   const [novaMensagem, setNovaMensagem] = useState("");
   const [listaMensagens, setListaMensagens] = useState<any>([]);
   const HandleNovaMensagem = (value: React.ChangeEvent<HTMLInputElement>) => {
      setNovaMensagem(value.target.value);
   };
   const ListaMensagem = (value: any) => {
      return (
         <CaixaMensagem>
            <UsuarioMensagem>{value.nomeMensagem}</UsuarioMensagem>
            <TextoMensagem>{value.textoMensagem}</TextoMensagem>
         </CaixaMensagem>
      );
   };
   const Envio = (e:any) =>{
      e.preventDefault()
      enviaMensagem(stock.usuario.nomeUsuario, novaMensagem, stock.campanhaUsuario)
   }
   useEffect(() => {
      const getMensagens = async () => {
         const { data: mensagens } = await supabase
            .from("chatCampanhaVilaEsquecida")
            .select("*")
            .eq("campanha", stock.campanhaUsuario)
            .order("id", { ascending: true });

         setListaMensagens(mensagens);
      };
      getMensagens();
   }, [stock]);
   useEffect(() => {
      const subscribe = supabase
         .channel("public:chatCampanhaVilaEsquecida")
         .on(
            "postgres_changes",
            {
               event: "INSERT",
               schema: "public",
               table: "chatCampanhaVilaEsquecida",
               filter: `campanha=eq.${stock.campanhaUsuario}`
            },
            (payload) => {
               setListaMensagens((listaMensagens: any) => {
                  return [...listaMensagens, payload.new];
               });
            }
         )
         .subscribe();
      return () => {
         supabase.removeChannel(subscribe);
      };
   }, [stock]);
   return (
      <Caixa>
         <CaixaMensagens>
            <ListaMensagens>
               {listaMensagens?.map(ListaMensagem)}
            </ListaMensagens>
         </CaixaMensagens>
         <CaixaEnvio as="form" onSubmit={(e)=>Envio(e)}>
            <Input
               onChange={(value) => HandleNovaMensagem(value)}
            ></Input>
            <BotaoIcon type="submit">
               <IconEnviar />
            </BotaoIcon>
         </CaixaEnvio>
      </Caixa>
   );
}
