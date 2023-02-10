import { supabase } from "@/pages/api/supabase";
import { Caixa, CaixaNpc, Titulo, Texto, BotaoInimigo, BotaoAtaque, BotaoIcon,
BotaoRefresh, IconAtaque, IconRefresh, IconDefesa
} from "@/styles/components/narradora/styleAtaque";
import { useEffect, useState } from "react";
import { Soco, Chute, Atordoar, Imobilizar, Desarmar, AtaqueComArma, LevantaEscudo, usaUtilidade} from "../../api/regras"
import { useSelector } from "react-redux";
import { RootState } from "../../../stack/";
import { arma, personagem, utilidade } from "types/supabase";

export default function Ataques(){
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

            setInimigos(inimigos)
        }
        const getAlidados = async () =>{
            const {data: aliados} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", true)

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
    const CriaArmas = (arma:arma) => {
        return(
        <Texto>
            {arma?.nome}
            <BotaoAtaque>
                    <BotaoInimigo>--DEFINA--</BotaoInimigo>
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoDefinido)}
                    <BotaoInimigo>--ALIADOS--</BotaoInimigo>
                    {aliados?.map(CriaBotaoDefinido)}
            </BotaoAtaque>
            <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
            <BotaoIcon onClick={()=>AtaqueComArma(stock,definido,alvo,arma)}>
                <IconAtaque/>
            </BotaoIcon>
        </Texto>
        )
    }
    const CriaUtilidades = (utilidade:utilidade)=>{
        return(
            <Texto>
                {utilidade.nome}
                <BotaoAtaque>
                    <BotaoInimigo>--DEFINA--</BotaoInimigo>
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoDefinido)}
                    <BotaoInimigo>--ALIADOS--</BotaoInimigo>
                    {aliados?.map(CriaBotaoDefinido)}
                </BotaoAtaque>
                <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>usaUtilidade(stock,definido,alvo,utilidade)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            )
    }
    const CriaAtaques = (value:personagem ) =>{
        return(
        <CaixaNpc>
            <Titulo>Ataques fisicos de {value.nome}</Titulo>
            <Texto>
                Soco 
                <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Soco(stock,value,alvo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Chute 
                <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Chute(stock,value,alvo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Desarmar 
                <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Desarmar(stock,value,alvo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Imobilizar 
                <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Imobilizar(stock,value,alvo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Atordoar 
                <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Atordoar(stock,value,alvo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Titulo>
                Armas de {value?.nome}
            </Titulo>
            {value?.armas?.map(CriaArmas)}
            <Titulo>
                Utilidades de {value?.nome}
            </Titulo>
            {value?.utilidades?.map(CriaUtilidades)}
        </CaixaNpc>)
    }
    return(
        <Caixa>
            <BotaoRefresh 
            onClick={()=>Refresh()}>
                <IconRefresh/>
            </BotaoRefresh>
            <Titulo>Aliados</Titulo>
                {aliados?.map(CriaAtaques)}
            <Titulo>Inimigos</Titulo>
                {inimigos?.map(CriaAtaques)}
        </Caixa>
    )
}