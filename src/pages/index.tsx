import { useState } from "react";
import { Botao, Caixa, Fundo, Input, Texto } from "@/styles/styleIndex";
import { useFormState } from "ariakit/form";
import Head from "next/head";
import { useRouter } from "next/router";
import { typeTabelas } from "./api/types";
import { supabase } from "./api/supabase.js";
import {useUserContext} from "../context/userContext"

export default function Home( {usuarios}: typeTabelas) {
  const form = useFormState({ defaultValues: { nome: "", senha: "" } });
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();
  const {atualizaUsuario, logged, setLogged}=useUserContext()
  const handleUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomeUsuario(e.target.value);
  };
  const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };
  form.useSubmit(async () => {
    usuarios.forEach((value) => { 
        if (value.nomeUsuario===nomeUsuario && value.senha!=senha){
          alert("senha incorreta")
        }
        if (value.nomeUsuario === nomeUsuario && value.senha === senha) {
          atualizaUsuario(value)
          setLogged(true)
        }
    })
    if (logged==true){
      router.push(`/selecao`);
    }
  });
  return (
    <>
        <Head>
          <title>Login - Feary Wyvern</title>
        </Head>
        <Fundo>
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
              <Botao>Entrar</Botao>
          </Caixa>
        </Fundo>
    </>
  );
}
export async function getStaticProps() {
  const { data: usuarios } = await supabase.from("usuarios").select("*")
  return {
      props: {
          usuarios,
      }
  }
}