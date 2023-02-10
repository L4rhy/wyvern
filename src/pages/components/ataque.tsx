import { Caixa, Titulo, Texto, BotaoAtaque, IconAtaque, IconDefesa, BotaoIcon, BotaoInimigo, IconRefresh, BotaoRefresh} from "../../styles/components/styleAtaque"
import { useSelector } from "react-redux";
import { RootState } from "../../stack/";
import { useEffect, useState } from "react";
import { supabase } from "../api/supabase";
import { Soco, Chute, Atordoar, Imobilizar, Desarmar, AtaqueComArma, LevantaEscudo, usaUtilidade} from "../api/regras"
import { arma, armadura, utilidade } from "types/supabase";

export default function Ataque(){
    const stock = useSelector((state: RootState) => state.stock)
    const nomePersonagem = stock.personagemUsuario
    const [armasEquipadas, setArmasEquipadas] = useState<any[]>()
    const [utilidadesEquipadas, setUtilidadesEquipadas] = useState<any[]>()
    const [personagem, setPersonagem] = useState<any>([])
    const [inimigos, setInimigos] = useState<any>([])
    const [aliados, setAliados] = useState<any>([])
    const [pcs, setPcs] = useState<any>([])
    const [inimigo, setInimigo] = useState<any>()
   
    const ArmasEquipadas = () =>{
        const getPersonagem = async () => {
            const { data: personagens } = await supabase
               .from("Personagens")
               .select("*")
               .eq("nome", stock.personagemUsuario)
   
            setPersonagem(personagens)
            
        };
        getPersonagem()
        setArmasEquipadas([])
        personagem[0]?.armas?.map((value: any)=>{
            if(value.equipada){
                setArmasEquipadas((antigo: any)=>{
                    return[
                        ...antigo, value
                    ]
                })
            }
        })
    }
    const UtilidadesEquipadas = () =>{
        const getPersonagem = async () => {
            const { data: personagens } = await supabase
               .from("Personagens")
               .select("*")
               .eq("nome", stock.personagemUsuario)
   
            setPersonagem(personagens)
            
        };
        getPersonagem()
        setUtilidadesEquipadas([])
        personagem[0]?.utilidades?.map((value: any)=>{
            if(value.equipada){
                setUtilidadesEquipadas((antigo: any)=>{
                    return[
                        ...antigo, value
                    ]
                })
            }
        })
    }

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
        const getInimigos = async () => {
           const { data: personagens } = await supabase
              .from("Personagens")
              .select("*")
              .eq("campanha", stock.campanhaUsuario)
              .eq("tipo", "NPC")
              .eq("ativo", true)
              .eq("aliado", false)
  
           setInimigos(personagens)
           
        };
        const getAliados = async () => {
            const { data: personagens } = await supabase
               .from("Personagens")
               .select("*")
               .eq("campanha", stock.campanhaUsuario)
               .eq("tipo", "NPC")
               .eq("ativo", true)
               .eq("aliado", true)
   
            setAliados(personagens)
            
         };
        getPersonagem()
        getPcs()
        getInimigos()
        getAliados()
    }, [stock]);
    

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
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
            <BotaoIcon onClick={()=>AtaqueComArma(stock,personagem[0],inimigo,value)}>
                <IconAtaque/>
            </BotaoIcon>
        </Texto>
        )
    }
    const CriaUtilidades = (value:utilidade)=>{
        return(
            <Texto>
                {value.nome}
                <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>usaUtilidade(stock,personagem[0],inimigo,value)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            )
    }
    const CriaEscudo = (value:armadura) => {
        return(
        <Texto>
            {value.nome}
            <BotaoIcon onClick={()=>LevantaEscudo(stock,personagem[0],value)}>
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
                <BotaoAtaque >
                    <BotaoInimigo>--INIMIGOS--</BotaoInimigo>
                    {inimigos?.map(CriaBotaoInimigo)}
                    <BotaoInimigo>--AMIGOS--</BotaoInimigo>
                    {pcs?.map(CriaBotaoInimigo)}
                    {aliados?.map(CriaBotaoInimigo)}
                </BotaoAtaque>
                <BotaoIcon onClick={()=>Soco(stock,personagem[0],inimigo)}>
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
                <BotaoIcon onClick={()=>Chute(stock,personagem[0],inimigo)}>
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
                <BotaoIcon onClick={()=>Desarmar(stock,personagem[0],inimigo)}>
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
                <BotaoIcon onClick={()=>Imobilizar(stock,personagem[0],inimigo)}>
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
                <BotaoIcon onClick={()=>Atordoar(stock,personagem[0],inimigo)}>
                    <IconAtaque/>
                </BotaoIcon>
            </Texto>
            <Titulo>
                Armas de {personagem[0]?.nome}
                <BotaoRefresh onClick={()=>ArmasEquipadas()}>
                    <IconRefresh/>
                </BotaoRefresh>
            </Titulo>
            {armasEquipadas?.map(CriaArmas)}
            <Titulo>
                Utilidades de {personagem[0]?.nome}
                <BotaoRefresh onClick={()=>UtilidadesEquipadas()}>
                    <IconRefresh/>
                </BotaoRefresh>
            </Titulo>
            {utilidadesEquipadas?.map(CriaUtilidades)}
        </Caixa>
    )
}