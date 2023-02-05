import { Caixa, Titulo, Texto, BotaoEscolheInimigo, IconMagia, IconHabilidade, BotaoIcon, BotaoInimigo} from "../../styles/components/styleMagia"
import { useSelector } from "react-redux";
import { RootState } from "../../stack/";
import { useEffect, useState } from "react";
import { supabase } from "../api/supabase";
import { habilidade, magia } from "types/supabase";
import { UsaHabilidade, UsaMagia} from "../api/regras"

export default function Magia(){
    const stock = useSelector((state: RootState) => state.stock)
    const [personagem, setPersonagem] = useState<any>([])
    const [npcs, setNpcs] = useState<any>([])
    const [pcs, setPcs] = useState<any>([])
    const [inimigo, setInimigo] = useState<any>()
    useEffect(() => {
        const getPersonagem = async () => {
           const { data: personagens } = await supabase
              .from("Personagens")
              .select("*")
              .eq("nome", stock.personagemUsuario)
  
           setPersonagem(personagens)
           
        };
        const getPcs = async () => {
           const { data: personagens } = await supabase
              .from("Personagens")
              .select("*")
              .eq("campanha", stock.campanhaUsuario)
              .eq("tipo", "PC");
  
           setPcs(personagens)
           
        };
        const getNpcs = async () => {
           const { data: personagens } = await supabase
              .from("Personagens")
              .select("*")
              .eq("campanha", stock.campanhaUsuario)
              .eq("tipo", "NPC")
              .eq("ativo", [true]);
  
           setNpcs(personagens)
           
        };
        getPersonagem();
        getPcs()
        getNpcs();
     }, [stock]);
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
                <BotaoIcon onClick={()=>UsaHabilidade(stock,personagem[0],inimigo,value)}>
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
                <BotaoIcon onClick={()=>UsaMagia(stock,personagem[0],inimigo,value)}>
                    <IconMagia/>
                </BotaoIcon>
            </Texto>
        )
    }
    return(
        <Caixa>
            <Titulo>Habilidades de {personagem[0]?.nome}</Titulo>
            {personagem[0]?.habilidades.map(CriaHabilidades)}
            <Titulo>Magias de {personagem[0]?.nome}</Titulo>
            {personagem[0]?.magias.map(CriaMagias)}
        </Caixa>
    )
}