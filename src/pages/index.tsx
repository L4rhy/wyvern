import { useState } from "react";
import { Botao, Caixa, Fundo, Input, Texto } from "@/styles/styleIndex";
import { useFormState } from "ariakit/form";
import Head from "next/head";
import { useRouter } from "next/router";
import { typeTabelas } from "./api/types";
import { supabase } from "./api/supabase.js";

export default function Home( {usuarios}: typeTabelas) {
  const form = useFormState({ defaultValues: { nome: "", senha: "" } });
  const [usuario, setUsuario] = useState("");
  const [idUsuario, setIdUsuario] = useState(0);
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(e.target.value);
  };
  const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };
  form.useSubmit(async () => {
    usuarios.forEach((value) => {
        if (value.nomeUsuario === usuario && value.senha === senha) {
          setIdUsuario(value.id);
          router.push(`/selecao?=${idUsuario}`);
        }
    });
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
                value={usuario}
                onChange={(e) => handleUsuario(e)}
              />
              <Input
                name={form.names.senha}
                type="password"
                value={senha}
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