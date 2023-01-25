import { Fundo, Caixa, Texto, BotaoIcon, IconHome } from "@/styles/styleSigin";

import { useRouter } from "next/router";
import Head from "next/head";

export default function SingIn(){
    const router = useRouter();
    return(
        <>
            <Head>
                <title>Cadastro - Feary Wyvern</title>
            </Head>
            <Fundo>
            <BotaoIcon onClick={()=>router.push("/")}>
                <IconHome/>
            </BotaoIcon>
                <Caixa>
                    <Texto>Sistema de cadatro em construção</Texto>
                </Caixa>
            </Fundo>
        </>
    )
}