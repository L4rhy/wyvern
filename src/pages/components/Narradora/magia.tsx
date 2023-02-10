import { Caixa, CaixaNpc, Titulo, BotaoIcon, IconHabilidade, IconMagia, Texto,
BotaoEscolheInimigo, BotaoInimigo, BotaoRefresh, IconRefresh } from "@/styles/components/narradora/styleMagia";
import { useSelector } from "react-redux";
import { RootState } from "../../../stack/";
import { useEffect, useState } from "react";
import { supabase } from "@/pages/api/supabase";
import { UsaHabilidade, UsaMagia } from "@/pages/api/regras";

export default function Magia(){
    const stock = useSelector((state: RootState) => state.stock)
    const [inimigos, setInimigos] = useState<any>([])
    const [aliados, setAliados] = useState<any>([])
    const [pcs, setPcs] = useState<any>([])
    const [alvo, setAlvo] = useState<any>()
    const [definido, setDefindo] = useState<any>() 

    useEffect(()=>{
        const getInimigos = async () =>{
            const {data: inimigos} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", false)
            .eq("ativo", true)

            setInimigos(inimigos)
        }
        const getAlidados = async () =>{
            const {data: aliados} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", true)
            .eq("ativo", true)
            
            setAliados(aliados)
        }
        const getPersonagens = async () =>{
            const {data: aliados} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "PC")

            setPcs(aliados)
        }
        getInimigos()
        getAlidados()
        getPersonagens()
    },[])
    const Refresh = () =>{
        const getInimigos = async () =>{
            const {data: inimigos} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", false)
            .eq("ativo", true)

            setInimigos(inimigos)
        }
        const getAlidados = async () =>{
            const {data: aliados} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", true)
            .eq("ativo", true)

            setAliados(aliados)
        }
        const getPersonagens = async () =>{
            const {data: aliados} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "PC")

            setPcs(aliados)
        }
        getInimigos()
        getAlidados()
        getPersonagens()
    }
    const EscolheInimigo = (value: any) => {
        setAlvo(value)
        alert("alvo Escolhido"+value.nome)
    }
    const EscolheDefinido = (value: any) => {
        setDefindo(value)
        alert("Usuario Escolhido"+value.nome)
    }
    const CriaBotaoInimigo = (value:any) => {
        return(<BotaoInimigo onSelect={()=>EscolheInimigo(value)}>{value.nome}</BotaoInimigo>)
    }
    const CriaBotaoDefinido = (value:any) => {
        return(<BotaoInimigo onSelect={()=>EscolheDefinido(value)}>{value.nome}</BotaoInimigo>)
    }
    const CriaHabilidades = (habilidade:any) =>{
        return(
            <Texto>
                {habilidade?.nome}
                <BotaoEscolheInimigo>
                    <BotaoInimigo>--DEFINA--</BotaoInimigo>
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoDefinido)}
                    <BotaoInimigo>--ALIADOS--</BotaoInimigo>
                    {aliados?.map(CriaBotaoDefinido)}
                </BotaoEscolheInimigo>
                <BotaoEscolheInimigo>
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {aliados?.map(CriaBotaoInimigo)}
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoEscolheInimigo>
                <BotaoIcon onClick={()=>UsaHabilidade(stock,definido,alvo,habilidade)}>
                    <IconHabilidade/>
                </BotaoIcon>
            </Texto>
        )
    }
    const CriaMagias = (magia:any, personagem: any) =>{
        return(
            <Texto>
                {magia?.nome}
                <BotaoEscolheInimigo>
                    <BotaoInimigo>--DEFINA--</BotaoInimigo>
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoDefinido)}
                    <BotaoInimigo>--ALIADOS--</BotaoInimigo>
                    {aliados?.map(CriaBotaoDefinido)}
                </BotaoEscolheInimigo>
                <BotaoEscolheInimigo>
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {aliados?.map(CriaBotaoInimigo)}
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoEscolheInimigo>
                <BotaoIcon onClick={()=>UsaMagia(stock,definido,alvo,magia)}>
                    <IconMagia/>
                </BotaoIcon>
            </Texto>
        )
    }
    const CriaNpcMagias = (value:any)=>{
        return(
        <CaixaNpc>
            <Titulo>Habilidades de {value?.nome}</Titulo>
            {value?.habilidades?.map(CriaHabilidades)}
            <Titulo>Magias de {value?.nome}</Titulo>
            {value?.magias?.map(CriaMagias)}
        </CaixaNpc>)
    }
    return(
        <Caixa>
            <BotaoRefresh 
            onClick={()=>Refresh()}>
            <IconRefresh/>
            </BotaoRefresh>
            <Titulo>Aliados</Titulo>
            {aliados?.map(CriaNpcMagias)}
            <Titulo>Inimigos</Titulo>
            {inimigos?.map(CriaNpcMagias)}
        </Caixa>
    )
}