import { supabase } from "@/pages/api/supabase";
import { Caixa, NomeNpc, AtributosStatus, Atributos, Atributo, Status, 
    Armaduras, ArmaduraTotal, ArmaduraAtual, Vidas, VidaTotal, VidaAtual, 
    Manas, ManaTotal, ManaAtual, CaixaHabilidades, TituloHabilidades, Habilidades, 
    Habilidade, TituloHabilidade, HabilidadeNome, HabilidadeDescricao, CaixaMagias,
    Magias, TituloMagias, Magia, TituloMagia, NomeMagia, DescricaoMagia, CaixaItens,
    Itens, TituloIten, Iten, NomeIten, DescricaoIten, IconRefresh, BotaoRefresh, TituloCaixas,
    CaixaAlidos, CaixaAlido, CaixaInimigos, CaixaInimigo, Ativa, NomeAtivo
} from "@/styles/components/narradora/styleFicha";
import { useState, useEffect} from "react"


export default function Fichas(){
    const [inimigos, setInimigos] = useState<any>([])
    const [aliados, setAliados] = useState<any>([])

    useEffect(()=>{
        const getInimigos = async () =>{
            const {data: inimigos} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", false)
            .order("id",{ascending: true})

            setInimigos(inimigos)
        }
        const getAlidados = async () =>{
            const {data: aliados} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", true)
            .order("id",{ascending: true})

            setAliados(aliados)
        }
        getInimigos()
        getAlidados()
    },[])
    const Refresh = () =>{
        const getInimigos = async () =>{
            const {data: inimigos} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", false)
            .order("id",{ascending: true})

            setInimigos(inimigos)
        }
        const getAlidados = async () =>{
            const {data: aliados} = await supabase
            .from("Personagens")
            .select("*")
            .eq("tipo", "NPC")
            .eq("aliado", true)
            .order("id",{ascending: true})

            setAliados(aliados)
        }
        getInimigos()
        getAlidados()
    }
    const Ativar = (value:any) =>{
        const update = async () => {
            const { error } = await supabase
               .from("Personagens")
               .update({ ativo: true })
               .eq("nome", value.nome)
               .select();
             
            if (error) {
               console.log(error);
            }
         };
         update();
    }
    const Desativar = (value:any) =>{
        const update = async () => {
            const { error } = await supabase
               .from("Personagens")
               .update({ ativo: false })
               .eq("nome", value.nome)
               .select();
             
            if (error) {
               console.log(error);
            }
         };
         update();
    }
    const CriaHabilidades = (value:any) => {
        return (
           <Habilidade >
              <TituloHabilidade>
                 <HabilidadeNome>{value.nome}</HabilidadeNome>
              </TituloHabilidade>
              <HabilidadeDescricao>{value.descricao}</HabilidadeDescricao>
           </Habilidade>
        );
    };
    const CriaMagias = (value:any) => {
    return (
        <Magia>
            <TituloMagia>
                <NomeMagia>{value.nome}</NomeMagia>
            </TituloMagia>
            <DescricaoMagia>{value.descricao}</DescricaoMagia>
        </Magia>
    );
    };
    const CriaArmas = (value:any) => {
    return (
        <Iten>
            <NomeIten>
                {value.nome}
            </NomeIten>
            <DescricaoIten>{value.descricao}</DescricaoIten>
        </Iten>
    );
    };
    const CriaAliados = (value:any)=>{
        return(
            <CaixaAlido>
                <NomeAtivo>
                    <NomeNpc>{value?.nome}</NomeNpc>
                    <Ativa
                    onClick={()=>Ativar(value)}
                    >Ativar</Ativa>
                    <Ativa
                    onClick={()=>Desativar(value)}
                    >Desativar</Ativa>
                </NomeAtivo>
                <AtributosStatus>
                    <Atributos>
                        <Atributo>Força: {value?.forca}</Atributo>
                        <Atributo>Destreza: {value?.destreza}</Atributo>
                        <Atributo>Precisão: {value?.precisao}</Atributo>
                        <Atributo>Contituição: {value?.constituicao}</Atributo>
                        <Atributo>Inteligencia: {value?.inteligencia}</Atributo>
                        <Atributo>Precisão: {value?.precisao}</Atributo>
                    </Atributos>
                    <Status>
                        <Armaduras>
                            <ArmaduraTotal>
                                Armadura<br/>
                                Total<br/>
                                {value?.armaduraTotal}
                            </ArmaduraTotal>
                            <ArmaduraAtual>
                                Armadura<br/>
                                Atual<br/>
                                {value?.armaduraAtual}
                            </ArmaduraAtual>
                        </Armaduras>
                        <Vidas>
                            <VidaTotal>
                                Vida<br/>
                                Total<br/>
                                {value?.vidaTotal}
                            </VidaTotal>
                            <VidaAtual>
                                Vida<br/>
                                Atual<br/>
                                {value?.vidaAtual}
                            </VidaAtual>
                        </Vidas>
                        <Manas>
                            <ManaTotal>
                                Mana<br/>
                                Total<br/>
                                {value?.manaTotal}
                            </ManaTotal>
                            <ManaAtual>
                                Mana<br/>
                                Atual<br/>
                                {value?.manaAtual}
                            </ManaAtual>
                        </Manas>
                    </Status>
                </AtributosStatus>
                {value.habilidades
                ?
                <CaixaHabilidades>
                    <TituloHabilidades>
                    Habilidades de {value?.nome}
                    </TituloHabilidades>
                    <Habilidades>
                    {value?.habilidades?.map(CriaHabilidades)}
                    </Habilidades>
                </CaixaHabilidades>
                :
                <CaixaHabilidades>
                    <TituloHabilidades>
                    Sem habilidades
                    </TituloHabilidades>
                </CaixaHabilidades>
                }
                {value.magias
                ?
                <CaixaMagias>
                    <TituloMagias>Magias de {value?.nome}</TituloMagias>
                    <Magias>{value?.magias?.map(CriaMagias)}</Magias>
                </CaixaMagias>
                :
                <CaixaMagias>
                    <TituloMagias>Sem Magias</TituloMagias>
                </CaixaMagias>
                }
                <CaixaItens>
                    <TituloIten>Armas de {value?.nome}</TituloIten>
                    <Itens>{value?.armas?.map(CriaArmas)}</Itens>
                </CaixaItens>
            </CaixaAlido>
        )
    }
    const CriaInimigos = (value:any)=>{
        return(
            <CaixaAlido>
                <NomeAtivo>
                    <NomeNpc>{value?.nome}</NomeNpc>
                    <Ativa
                    onClick={()=>Ativar(value)}
                    >Ativar</Ativa>
                    <Ativa
                    onClick={()=>Desativar(value)}
                    >Desativar</Ativa>
                </NomeAtivo>
                <AtributosStatus>
                    <Atributos>
                        <Atributo>Força: {value?.forca}</Atributo>
                        <Atributo>Destreza: {value?.destreza}</Atributo>
                        <Atributo>Precisão: {value?.precisao}</Atributo>
                        <Atributo>Contituição: {value?.constituicao}</Atributo>
                        <Atributo>Inteligencia: {value?.inteligencia}</Atributo>
                        <Atributo>Precisão: {value?.precisao}</Atributo>
                    </Atributos>
                    <Status>
                        <Armaduras>
                            <ArmaduraTotal>
                                Armadura<br/>
                                Total<br/>
                                {value?.armaduraTotal}
                            </ArmaduraTotal>
                            <ArmaduraAtual>
                                Armadura<br/>
                                Atual<br/>
                                {value?.armaduraAtual}
                            </ArmaduraAtual>
                        </Armaduras>
                        <Vidas>
                            <VidaTotal>
                                Vida<br/>
                                Total<br/>
                                {value?.vidaTotal}
                            </VidaTotal>
                            <VidaAtual>
                                Vida<br/>
                                Atual<br/>
                                {value?.vidaAtual}
                            </VidaAtual>
                        </Vidas>
                        <Manas>
                            <ManaTotal>
                                Mana<br/>
                                Total<br/>
                                {value?.manaTotal}
                            </ManaTotal>
                            <ManaAtual>
                                Mana<br/>
                                Atual<br/>
                                {value?.manaAtual}
                            </ManaAtual>
                        </Manas>
                    </Status>
                </AtributosStatus>
                {value.habilidades
                ?
                <CaixaHabilidades>
                    <TituloHabilidades>
                    Habilidades de {value?.nome}
                    </TituloHabilidades>
                    <Habilidades>
                    {value?.habilidades?.map(CriaHabilidades)}
                    </Habilidades>
                </CaixaHabilidades>
                :
                <CaixaHabilidades>
                    <TituloHabilidades>
                    Sem habilidades
                    </TituloHabilidades>
                </CaixaHabilidades>
                }
                {value.magias
                ?
                <CaixaMagias>
                    <TituloMagias>Magias de {value?.nome}</TituloMagias>
                    <Magias>{value?.magias?.map(CriaMagias)}</Magias>
                </CaixaMagias>
                :
                <CaixaMagias>
                    <TituloMagias>Sem Magias</TituloMagias>
                </CaixaMagias>
                }
                <CaixaItens>
                    <TituloIten>Armas de {value?.nome}</TituloIten>
                    <Itens>{value?.armas?.map(CriaArmas)}</Itens>
                </CaixaItens>
            </CaixaAlido>
        )
    }
    
    return(
        <Caixa>
            <BotaoRefresh 
            onClick={()=>Refresh()}>
                <IconRefresh/>
            </BotaoRefresh>
            <TituloCaixas>Aliados</TituloCaixas>
            <CaixaAlidos>
                {aliados?.map(CriaAliados)}
            </CaixaAlidos>
            <TituloCaixas>Inimigos</TituloCaixas>
            <CaixaInimigos>
                {inimigos?.map(CriaInimigos)}
            </CaixaInimigos>
        </Caixa>
    )
}