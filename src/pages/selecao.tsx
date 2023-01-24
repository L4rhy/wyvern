import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { typeTabelas, typeUsuario } from "./api/types";
import { Fundo, Caixa, Texto, Botao, Menuzito, BotaoMenu, ItemMenu } from "../styles/styleSelecao";
import { useFormState } from "ariakit/form";
import { useComboboxState } from "ariakit/combobox";
import { supabase } from "./api/supabase.js";
import { useUserContext } from "../context/userContext"

export default function Selecao(props: typeTabelas) {
    const router = useRouter();
    const form = useFormState({
        defaultValues: { campanha: "", personagem: "" },
    });
    const {usuario} = useUserContext()
    
    const menu = useComboboxState({ gutter: 8, sameWidth: true });

    const CriadorCampanhas = () =>{
        usuario.personagens.personagens.forEach((value:string)=>{
            <ItemMenu value={value}>{value}</ItemMenu>
        })
    }
    const CriadorPersonagens = () =>{
        usuario.campanhas.campanhas.forEach((value:string)=>{
            <ItemMenu value={value}>{value}</ItemMenu>
        })
    }
  
    form.useSubmit(async()=>{
        
    })
    return (
        <>
            <Head>
                <title>Selicione - Faery Wyvern</title>
            </Head>
            <Fundo>
                <Caixa>
                    <Texto>Escolha Oque Jogar {usuario.nomeUsuario}</Texto>
                    <BotaoMenu 
                    state={menu}
                    placeholder="Escolha sua Campanha"
                    />
                    {CriadorCampanhas()}
                    <BotaoMenu 
                    state={menu}
                    placeholder="Escolha seu Personagem"
                    />
                    {CriadorPersonagens()}
                    <Botao>Jogar</Botao>
                </Caixa>
            </Fundo>
        </>
   );
}
export async function getStaticProps() {
    const { data: campanhas } = await supabase.from("campanhas").select("*")
    const { data: personagens } = await supabase.from("personagens").select("*")
    return {
        props: {
            campanhas,
            personagens
        }
    }
  }