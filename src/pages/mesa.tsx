import { supabase } from "./api/supabase.js";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../stack"
import { Fundo, Mapa, BotaoUser, BotaoChat, BotaoFicha, BotaoMagia, BotaoEspada, BotaoDado,
     IconUser, IconFicha, IconChat, IconMagia, IconEspada, IconDado, Caixa, Flechinha
 } from "@/styles/styleMesa";
import { usePopoverState } from "ariakit";
import Usuario from "./components/usuario"
import Ficha from "./components/ficha"
import Chat from "./components/chat"
import Magia from "./components/magia"
import Ataque from "./components/ataque"
import Dados from "./components/dados"

export default function Mesa(){
    const router = useRouter();
    const stock = useSelector((state:RootState)=>state.stock)
    const stateUser = usePopoverState({placement:"right-start"})
    const stateFicha = usePopoverState({placement:"right-start"})
    const stateChat = usePopoverState({placement:"right-start"})
    const stateMagia = usePopoverState({placement:"left-start"})
    const stateEspada = usePopoverState({placement:"left-start"})
    const stateDado = usePopoverState({placement:"left-start"})
    return(
        <>
            <Head>
                <title>Jogando - {stock.campanhaUsuario}</title>
            </Head>
            <Fundo>
                <BotaoUser state={stateUser}>
                    <IconUser/>
                </BotaoUser>
                    <Caixa state={stateUser}>
                        <Flechinha/>
                        <Usuario/>
                    </Caixa>
                <BotaoFicha state={stateFicha}>
                    <IconFicha/>
                </BotaoFicha>
                    <Caixa state={stateFicha}>
                        <Flechinha/>
                        <Ficha/>
                    </Caixa>
                <BotaoChat state={stateChat}>
                    <IconChat/>
                </BotaoChat>
                    <Caixa state={stateChat}>
                        <Flechinha/>
                        <Chat/>
                    </Caixa>
                <BotaoMagia state={stateMagia}>
                    <IconMagia/>
                </BotaoMagia>
                    <Caixa state={stateMagia}>
                        <Flechinha/>
                        <Magia/>
                    </Caixa>
                <BotaoEspada state={stateEspada}>
                    <IconEspada/>
                </BotaoEspada>
                    <Caixa state={stateEspada}>
                        <Flechinha/>
                        <Ataque/>
                    </Caixa>
                <BotaoDado state={stateDado}>
                    <IconDado/>
                </BotaoDado>
                    <Caixa state={stateDado}>
                        <Flechinha/>
                        <Dados/>
                    </Caixa>
                <Mapa>
                </Mapa>
            </Fundo>
        </>
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