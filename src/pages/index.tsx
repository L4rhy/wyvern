import { Botao, Caixa, CaixaBotao, Fundo, Texto } from "@/styles/styleIndex";
import Head from "next/head";

export default function Home() {
  //pagina
  return (
    <>
        <Head>
          <title>Home - Feary Wyvern</title>
        </Head>
        <Fundo>
          <Caixa>
            <CaixaBotao>
              <Texto>Entre</Texto>
              <Botao href="/login">Login</Botao>
            </CaixaBotao>
            <CaixaBotao>
              <Texto>Cadastre</Texto>
              <Botao href="/singin">SingIn</Botao>
            </CaixaBotao>
          </Caixa>
        </Fundo>
    </>
  );
}
