import React, { useState } from "react";
import {
   Botao,
   Caixa,
   Fundo,
   Input,
   Texto,
   BotaoIcon,
   IconHome,
} from "@/styles/styleLogin";
import { useFormState } from "ariakit/form";
import Head from "next/head";
import { useRouter } from "next/router";
import { supabase } from "./api/supabase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stack";
import { login, atualizaUsuario } from "../stack/stock";
import { Usuario } from "../../types/supabase"
export default function Login({usuarios}:Usuario) {
   //estado do form
   const form = useFormState({ defaultValues: { nome: "", senha: "" } });
   //variaves da pagina
   const [nomeUsuario, setNomeUsuario] = useState("");
   const [senha, setSenha] = useState("");
   //rotas
   const router = useRouter();
   //redux
   const stock = useSelector((state: RootState) => state.stock);
   const dispatch = useDispatch();
   //atualizacao variaveis
   const handleUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNomeUsuario(e.target.value);
   };
   const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSenha(e.target.value);
   };
   //botao form submission
   const verificaUser = () =>{
      usuarios.forEach((value) => {
         if (value.nomeUsuario === nomeUsuario && value.senha != senha) {
            alert("senha incorreta");
         }
         if (value.nomeUsuario === nomeUsuario && value.senha === senha) {
            dispatch(atualizaUsuario(value));
            dispatch(login());
         }
      });
      if (stock.logged == true) {
         router.push(`/usuario`);
      }
   }
   //pagina
   return (
      <>
         <Head>
            <title>Login - Feary Wyvern</title>
         </Head>
         <Fundo>
            <BotaoIcon onClick={() => router.push("/")}>
               <IconHome />
            </BotaoIcon>
            <Caixa state={form}>
               <Texto name={form.names.nome}>Login</Texto>
               <Input
                  name={form.names.nome}
                  value={nomeUsuario}
                  placeholder="Nome de Usuario"
                  onChange={(e) => handleUsuario(e)}
               />
               <Input
                  name={form.names.senha}
                  type="password"
                  value={senha}
                  placeholder="Sua Senha"
                  onChange={(e) => handleSenha(e)}
               />
               <Botao onClick={()=>verificaUser} onTouchEnd={()=>verificaUser}>Entrar</Botao>
            </Caixa>
         </Fundo>
      </>
   );
}
export async function getStaticProps() {
   const { data: usuarios } = await supabase.from("usuarios").select("*");
   return {
      props: {
         usuarios,
      },
   };
}
