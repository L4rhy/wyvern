import { Caixa, Titulo, Texto, BotaoEscolheInimigo, IconMagia, IconHabilidade, BotaoIcon, BotaoInimigo} from "../../styles/components/styleMagia"
import { useSelector } from "react-redux";
import { RootState } from "../../stack/";
import { useEffect, useState } from "react";
import { supabase } from "../api/supabase";
import { habilidade, magia } from "types/supabase";
export default function Magia(){
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
    const CriaHabilidades = (value:habilidade) =>{
        return(
            <Texto>
                {value.nome}
                <BotaoEscolheInimigo>
                    <BotaoInimigo>Escolha um inimigo</BotaoInimigo>
                    {npcs?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoEscolheInimigo>
                <BotaoIcon>
                    <IconHabilidade/>
                </BotaoIcon>
            </Texto>
        )
    }
    const CriaMagias = (value:magia) =>{
        return(
            <Texto>
                {value.nome}
                <BotaoEscolheInimigo>
                    <BotaoInimigo>Escolha um inimigo</BotaoInimigo>
                    {npcs?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                </BotaoEscolheInimigo>
                <BotaoIcon>
                    <IconMagia/>
                </BotaoIcon>
            </Texto>
        )
    }
    return(
        <Caixa>
            <Titulo>Habilidades de {personagem?.nome}</Titulo>
            {personagem?.habilidades.map(CriaHabilidades)}
            <Titulo>Magias de {personagem?.nome}</Titulo>
            {personagem?.magias.map(CriaMagias)}
        </Caixa>
    )
}