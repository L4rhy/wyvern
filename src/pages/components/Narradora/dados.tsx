import { Caixa, BotaoAlvo, Alvo, BotaoIcon, BotaoIconzinho, Caixinha,
Caixona, DivisaoCaixa, Icon, Iconzinho, Textinho, Texto, 
BotaoRefresh, IconRefresh
 } from "@/styles/components/narradora/styleDados";
import { useSelector } from "react-redux";
import { RootState } from "../../../stack/";
import { useEffect, useState } from "react";
import { supabase } from "@/pages/api/supabase";
import { Iniciativa, Sorte, Oportunidade, D20, D10, D2, Acrobacia, Arcanismo, Atletismo, Atuacao, Construcao,
    Enganacao, Furtividade, Historia, Ilusionismo, Intimidacao, Intuicao, Investigacao, 
    LidarComAnimais, Medicina, Natureza, Percepcao, Persuasao, Religiao, Sobrevivencia, 
    RolaAtributo 
} from "../../api/regras";

export default function Dados(){
    const stock = useSelector((state: RootState) => state.stock)
    const [inimigos, setInimigos] = useState<any>([])
    const [aliados, setAliados] = useState<any>([])
    const [pcs, setPcs] = useState<any>([])
    const [alvo, setAlvo] = useState<any>()
    const [definido, setDefinido] = useState<any>()

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
        getInimigos()
        getAlidados()
    }
    const EscolheInimigo = (value:any) =>{
        setAlvo(value)
        alert("Definido "+value.nome)
    }
    const EscolheDefinido = (value:any) =>{
        setDefinido(value)
        alert("Definido "+value.nome)
    }
    const CriaBotaoOpcao = (value:any) =>{
        return(
            <Alvo onSelect={()=>EscolheDefinido(value)}>{value.nome}</Alvo>
        )
    }
    const CriaBotaoInimigo = (value:any) =>{
        return(
            <Alvo onSelect={()=>EscolheInimigo(value)}>{value.nome}</Alvo>
        )
    }
    return(
        <Caixa>
            <BotaoRefresh
            onClick={()=>Refresh}
            >
                <IconRefresh/>
            </BotaoRefresh>
            <Caixinha>
                <Texto>
                    Iniciativa
                    <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                        {inimigos?.map(CriaBotaoOpcao)}
                        {aliados?.map(CriaBotaoOpcao)}
                    </BotaoAlvo>
                    <BotaoIcon onClick={() =>Iniciativa(stock, definido.nome)}>
                        <Icon />
                    </BotaoIcon>
                </Texto>
                <Texto>
                    Sorte
                    <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                        {inimigos?.map(CriaBotaoOpcao)}
                        {aliados?.map(CriaBotaoOpcao)}
                    </BotaoAlvo>
                    <BotaoIcon onClick={()=>Sorte(stock, definido.nome)}>
                        <Icon/>
                    </BotaoIcon>
                </Texto>
                <Texto>
                    Oportunidade
                    <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                        {inimigos?.map(CriaBotaoOpcao)}
                        {aliados?.map(CriaBotaoOpcao)}
                    </BotaoAlvo>
                    <BotaoAlvo>
                        <Alvo>--INIMIGOS--</Alvo>
                        {inimigos?.map(CriaBotaoInimigo)}
                        <Alvo>--AMIGOS--</Alvo>
                        {aliados?.map(CriaBotaoInimigo)}
                    </BotaoAlvo>
                    <BotaoIcon onClick={()=>Oportunidade(stock,definido,alvo)}>
                        <Icon/>
                    </BotaoIcon>
                </Texto>
            </Caixinha>
            <Caixinha>
                <Texto>
                    D20
                    <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                        {inimigos?.map(CriaBotaoOpcao)}
                        {aliados?.map(CriaBotaoOpcao)}
                    </BotaoAlvo>
                    <BotaoIcon onClick={()=>D20(stock,definido.nome)}>
                        <Icon />
                    </BotaoIcon>
                </Texto>
                <Texto>
                    D10
                    <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                        {inimigos?.map(CriaBotaoOpcao)}
                        {aliados?.map(CriaBotaoOpcao)}
                    </BotaoAlvo>
                    <BotaoIcon onClick={()=>D10(stock,definido.nome)}>
                        <Icon/>
                    </BotaoIcon>
                </Texto>
                <Texto>
                    D2 
                    <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                        {inimigos?.map(CriaBotaoOpcao)}
                        {aliados?.map(CriaBotaoOpcao)}
                    </BotaoAlvo>
                    <BotaoIcon onClick={()=>D2(stock,definido.nome)}>
                        <Icon/>
                    </BotaoIcon>
                </Texto>
            </Caixinha>
            <Caixona>
                <DivisaoCaixa>
                    <Textinho>
                        Força
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,definido, stock.bonus.forca,"força")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Destreza
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,definido, stock.bonus.destreza,"destreza")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Precisão
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,definido, stock.bonus.precisao,"precisão")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                </DivisaoCaixa>
                <DivisaoCaixa>
                <Textinho>
                        Constituição
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,definido, stock.bonus.constituicao,"constituição")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Inteligencia
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,definido, stock.bonus.inteligencia,"inteligencia")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Carisma
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,definido, stock.bonus.carisma,"carisma")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                </DivisaoCaixa>
            </Caixona>
            <Caixona>
                <DivisaoCaixa>
                    <Textinho>
                        Acrobacia
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Acrobacia(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Arcanismo
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Arcanismo(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Atletismo
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Atletismo(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Atuação
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Atuacao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Construção
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Construcao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Enganação
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Enganacao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Furtividade
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Furtividade(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        História
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Historia(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Ilusionismo
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Ilusionismo(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Intimidação
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Intimidacao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                </DivisaoCaixa>
                <DivisaoCaixa>
                    <Textinho>
                        Intuição
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Intuicao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Investigação
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Investigacao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Lidar Com<br/>
                        Animais
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>LidarComAnimais(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Medicina
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Medicina(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Natureza
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Natureza(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Percepção
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Percepcao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Persuasão
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Persuasao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Religião
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Religiao(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Sobrevivencia
                        <BotaoAlvo>
                        <Alvo>--D--</Alvo>
                            {inimigos?.map(CriaBotaoOpcao)}
                            {aliados?.map(CriaBotaoOpcao)}
                        </BotaoAlvo>
                        <BotaoIconzinho onClick={()=>Sobrevivencia(stock,definido)}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                </DivisaoCaixa>
            </Caixona>
        </Caixa>
    )
}