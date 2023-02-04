import { Caixa, Titulo, Texto, BotaoAtaque, IconAtaque, IconDefesa, BotaoIcon, BotaoInimigo} from "../../styles/components/styleAtaque"
import { useSelector } from "react-redux";
import { RootState } from "../../stack/";
import { useEffect, useState } from "react";
import { supabase } from "../api/supabase";
import { Soco, Chute, Atordoar, Imobilizar, Desarmar, AtaqueComArma, LevantaEscudo} from "../api/regras"
import { arma, armadura } from "types/supabase";

export default function Ataque(){
    const stock = useSelector((state: RootState) => state.stock)
    const [personagem, setPersonagem] = useState<any>()
    const [npcs, setNpcs] = useState<any>([])
    const [pcs, setPcs] = useState<any>([])
    const [inimigo, setInimigo] = useState<any>()
    useEffect(()=>{
        const getPersonagem = async () => {
            const { data: personagens } = await supabase
               .from("Personagens")
               .select("*")
               .eq("campanha", stock.campanhaUsuario)
               .eq("tipo", "PC")
            
            if(personagens){
                setPcs(personagens)
            }

            if(personagens){
                personagens.forEach((value)=>{
                    if(value.nome===stock.personagemUsuario){
                        setPersonagem(value)
                    }
                }) 
            }
            
        };
        const getNpcs = async () => {
            const { data: personagens } = await supabase
               .from("Personagens")
               .select("*")
               .eq("campanha", stock.campanhaUsuario)
               .eq("tipo", "NPC")
               .eq("ativo",[true])
            
            if(personagens){
                setNpcs(personagens)
            }

            if(personagens){
                personagens.forEach((value)=>{
                    if(value.nome===stock.personagemUsuario){
                        setPersonagem(value)
                    }
                }) 
            }
            
        };
        getPersonagem()
        getNpcs()
    },[stock])
    const EscolheInimigo = (value: any) => {
        setInimigo(value)
        alert("alvo Escolhido"+value.nome)
    }
    const CriaBotaoInimigo = (value:any) => {
        return(<BotaoInimigo onSelect={()=>EscolheInimigo(value)}>{value.nome}</BotaoInimigo>)
    }
    const CriaArmas = (value:arma) => {
        return(
        <Texto>
            {value.nome}
            <BotaoAtaque >
                <BotaoInimigo>Escolha um inimigo</BotaoInimigo>
                {npcs?.map(CriaBotaoInimigo)}
                <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                {pcs?.map(CriaBotaoInimigo)}
            </BotaoAtaque>
            <BotaoIcon onClick={()=>AtaqueComArma(stock,personagem,inimigo,value)}>
                <IconAtaque/>
            </BotaoIcon>
        </Texto>
        )
    }
    const CriaEscudo = (value:armadura) => {
        return(
        <Texto>
            {value.nome}
            <BotaoIcon onClick={()=>LevantaEscudo(stock,personagem,value)}>
                <IconDefesa/>
            </BotaoIcon>
        </Texto>
        )
    }
    return(
        <Caixa>
            <Titulo>Ataques desarmados</Titulo>
            <Texto>
                Soco 
                <BotaoAtaque>
                    <BotaoInimigo>Escolha um inimigo</BotaoInimigo>
                    {npcs?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Soco(stock,personagem,inimigo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Chute 
                <BotaoAtaque>
                    <BotaoInimigo>Escolha um inimigo</BotaoInimigo>
                    {npcs?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Chute(stock,personagem,inimigo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Desarmar 
                <BotaoAtaque>
                    <BotaoInimigo>Escolha um inimigo</BotaoInimigo>
                    {npcs?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Desarmar(stock,personagem,inimigo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Imobilizar 
                <BotaoAtaque>
                    <BotaoInimigo>Escolha um inimigo</BotaoInimigo>
                    {npcs?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Imobilizar(stock,personagem,inimigo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Texto>
                Atordoar 
                <BotaoAtaque>
                    <BotaoInimigo>Escolha um inimigo</BotaoInimigo>
                    {npcs?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Atordoar(stock,personagem,inimigo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Titulo>Armas de {personagem?.nome}</Titulo>
            {personagem?.armas.map(CriaArmas)}
        </Caixa>
    )
}