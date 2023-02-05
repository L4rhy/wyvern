import { Caixa, Caixinha, Texto, BotaoIcon, Icon, IconAtaque, BotaoAtaque, Flechinha, CaixaOculta, 
    BotaoInimigo, Caixona, DivisaoCaixa, Textinho, BotaoIconzinho, Iconzinho
} from "@/styles/components/styleDados";
import { Iniciativa, Sorte, Oportunidade, D20, D10, D2, Acrobacia, Arcanismo, Atletismo, Atuacao, Construcao,
    Enganacao, Furtividade, Historia, Ilusionismo, Intimidacao, Intuicao, Investigacao, LidarComAnimais,
    Medicina, Natureza, Percepcao, Persuasao, Religiao, Sobrevivencia, RolaAtributo } from "../api/regras";
import { useSelector } from "react-redux";
import { RootState } from "../../stack/";
import { useEffect, useState } from "react";
import { supabase } from "../api/supabase";
import { usePopoverState } from "ariakit";

export default function Dados() {
    const stock = useSelector((state: RootState) => state.stock)
    const [personagem, setPersonagem] = useState<any>([])
    const [npcs, setNpcs] = useState<any>([])
    const [pcs, setPcs] = useState<any>([])
    const [inimigo, setInimigo] = useState<any>()
    const state = usePopoverState()
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
    const CriaBotaoInimigo = (value:any) => {
        return(<BotaoInimigo onClick={()=>setInimigo(value)}>{value.nome}</BotaoInimigo>)
    }
    return (
        <Caixa>
            <Caixinha>
                <Texto>
                    Iniciativa
                    <BotaoIcon onClick={() =>Iniciativa(stock, personagem[0].nome)}>
                        <Icon />
                    </BotaoIcon>
                </Texto>
                <Texto>
                    Sorte
                    <BotaoIcon onClick={()=>Sorte(stock, personagem[0].nome)}>
                        <Icon/>
                    </BotaoIcon>
                </Texto>
                <Texto>
                    Oportunidade
                    <BotaoAtaque state={state}>
                        <IconAtaque/>
                    </BotaoAtaque>
                        <CaixaOculta state={state}>
                            <Flechinha/>
                            Inimigos
                            {npcs?.map(CriaBotaoInimigo)}
                            Amigos
                            {pcs?.map(CriaBotaoInimigo)}
                            <BotaoIcon onClick={()=>Oportunidade(stock,personagem[0],inimigo)}>
                                <Icon/>
                            </BotaoIcon>
                        </CaixaOculta>
                </Texto>
            </Caixinha>
            <Caixinha>
                <Texto>
                    D20
                    <BotaoIcon onClick={()=>D20(stock,personagem[0].nome)}>
                        <Icon />
                    </BotaoIcon>
                </Texto>
                <Texto>
                    D10
                    <BotaoIcon onClick={()=>D10(stock,personagem[0].nome)}>
                        <Icon/>
                    </BotaoIcon>
                </Texto>
                <Texto>
                    D2 
                    <BotaoIcon onClick={()=>D2(stock,personagem[0].nome)}>
                        <Icon/>
                    </BotaoIcon>
                </Texto>
            </Caixinha>
            <Caixona>
                <DivisaoCaixa>
                    <Textinho>
                        Força
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,personagem[0], stock.bonus.forca,"força")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Destreza
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,personagem[0], stock.bonus.destreza,"destreza")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Precisão
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,personagem[0], stock.bonus.precisao,"precisão")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                </DivisaoCaixa>
                <DivisaoCaixa>
                <Textinho>
                        Constituição
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,personagem[0], stock.bonus.constituicao,"constituição")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Inteligencia
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,personagem[0], stock.bonus.inteligencia,"inteligencia")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Carisma
                        <BotaoIconzinho onClick={()=>RolaAtributo(stock,personagem[0], stock.bonus.carisma,"carisma")}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                </DivisaoCaixa>
            </Caixona>
            <Caixona>
                <DivisaoCaixa>
                    <Textinho>
                        Acrobacia
                        <BotaoIconzinho onClick={()=>Acrobacia(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Arcanismo
                        <BotaoIconzinho onClick={()=>Arcanismo(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Atletismo
                        <BotaoIconzinho onClick={()=>Atletismo(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Atuação
                        <BotaoIconzinho onClick={()=>Atuacao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Construção
                        <BotaoIconzinho onClick={()=>Construcao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Enganação
                        <BotaoIconzinho onClick={()=>Enganacao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Furtividade
                        <BotaoIconzinho onClick={()=>Furtividade(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        História
                        <BotaoIconzinho onClick={()=>Historia(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Ilusionismo
                        <BotaoIconzinho onClick={()=>Ilusionismo(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Intimidação
                        <BotaoIconzinho onClick={()=>Intimidacao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                </DivisaoCaixa>
                <DivisaoCaixa>
                    <Textinho>
                        Intuição
                        <BotaoIconzinho onClick={()=>Intuicao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Investigação
                        <BotaoIconzinho onClick={()=>Investigacao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Lidar Com<br/>
                        Animais
                        <BotaoIconzinho onClick={()=>LidarComAnimais(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Medicina
                        <BotaoIconzinho onClick={()=>Medicina(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Natureza
                        <BotaoIconzinho onClick={()=>Natureza(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Percepção
                        <BotaoIconzinho onClick={()=>Percepcao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Persuasão
                        <BotaoIconzinho onClick={()=>Persuasao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Religião
                        <BotaoIconzinho onClick={()=>Religiao(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                    <Textinho>
                        Sobrevivencia
                        <BotaoIconzinho onClick={()=>Sobrevivencia(stock,personagem[0])}>
                            <Iconzinho/>
                        </BotaoIconzinho>
                    </Textinho>
                </DivisaoCaixa>
            </Caixona>
        </Caixa>
    );
}
