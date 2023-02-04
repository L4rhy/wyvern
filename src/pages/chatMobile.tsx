import {
   Fundo,
   BotaoVolta,
   IconVolta,
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
import { RootState } from "../stack";
import { useState, useEffect } from "react";
import { supabase } from "./api/supabase";
import { useRouter } from "next/router";
import Head from "next/head";
export const enviaMensagem = async (usuario: string, novaMensagem: string) => {
   const mensagens = await supabase
      .from("chatCampanhaVilaEsquecida")
      .insert({ nomeMensagem: usuario, textoMensagem: novaMensagem });
};
export default function Chat() {
   const form = useFormState({ defaultValues: { texto: "" } });
   const router = useRouter()
   const stock = useSelector((state: RootState) => state.stock);
   const [novaMensagem, setNovaMensagem] = useState("");
   const [listaMensagens, setListaMensagens] = useState<any>([
      {
         id: 0,
         nomeMensagem: "",
         textoMensagem: "",
      },
   ]);
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
   form.useSubmit(() => {
      enviaMensagem(stock.usuario.nomeUsuario, novaMensagem);
   });
   useEffect(() => {
      const getMensagens = async () => {
         const { data: mensagens } = await supabase
            .from("chatCampanhaVilaEsquecida")
            .select("*")
            .order("id", { ascending: true });

         setListaMensagens(mensagens);
      };
      getMensagens();
   }, []);
   useEffect(() => {
      const subscribe = supabase
         .channel("public:chatCampanhaVilaEsquecida")
         .on(
            "postgres_changes",
            {
               event: "INSERT",
               schema: "public",
               table: "chatCampanhaVilaEsquecida",
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
   }, [])
   return (
      <>
         <Head>
            <title>Chat</title>
         </Head>
      <Fundo>
            <BotaoVolta onClick={()=>router.push("/mesa")}>
                <IconVolta/>
            </BotaoVolta>
         <Caixa>
            <CaixaMensagens>
               <ListaMensagens>
                  {listaMensagens?.map(ListaMensagem)}
               </ListaMensagens>
            </CaixaMensagens>
            <CaixaEnvio state={form}>
               <Input
                  name={form.names.texto}
                  onChange={(value) => HandleNovaMensagem(value)}
               ></Input>
               <BotaoIcon>
                  <IconEnviar />
               </BotaoIcon>
            </CaixaEnvio>
         </Caixa>
      </Fundo>
   </>
   );
}
