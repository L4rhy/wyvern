import {
   Fundo,
   BotaoVolta,
   IconVolta,
   Caixa,
   NomeNivel,
   Nome,
   Nivel,
   EspecieClasse,
   Especie,
   Classe,
   Aspecto,
   AtributosStatus,
   Atributos,
   Atributo,
   Armaduras,
   ArmaduraAtual,
   ArmaduraTotal,
   Vidas,
   VidaTotal,
   VidaAtual,
   Manas,
   ManaAtual,
   ManaTotal,
   Status,
   Moedas,
   StatusMoedas,
   CaixaMoedas,
   CaixaProeficiencia,
   TituloProeficiencia,
   Proeficiencia,
   P,
   CaixaProeficiencias1,
   CaixaProeficiencias2,
   CaixaAnimais,
   CaixasProeficiencias,
   ProeficienciaAnimais,
   CaixaHabilidades,
   CaixaLinguas,
   Linguas,
   TituloHabilidades,
   Habilidades,
   Habilidade,
   HabilidadeNome,
   HabilidadeDescricao,
   TituloHabilidade,
   BotaoIcon,
   Icon,
   CaixaMagias,
   TituloMagias,
   Magias,
   Magia,
   TituloMagia,
   NomeMagia,
   DescricaoMagia,
   CaixaItens,
   TituloIten,
   Itens,
   Iten,
   NomeIten,
   DescricaoIten,
   CaixaHistoria,
   TituloHistoria,
   Historia,
   CaixaAparencia,
   TituloAparencia,
   Aparencia,
   StatusPersonagem,
   BotaoEquipa,
   BotaoDesEquipa
} from "@/styles/components/styleFicha";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stack";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabase";
import { enviaMensagem } from "./chatMobile";
import { atualizaBonus } from "../stack/stock";
import { useRouter } from "next/router";
import Head from "next/head";
import { DescobreBonus, UpdateDesEquipaArmadura, UpdateEquipaArmadura } from "./api/regras";

export default function Ficha() {
   const stock = useSelector((state: RootState) => state.stock);
   const router = useRouter()
   const dispatch = useDispatch();
   const usuario = stock.usuario.nomeUsuario;
   const [personagem, setPersonagem] = useState<any>([]);
   const [bonusForca, setBonusForca] = useState(0);
   const [bonusDestreza, setBonusDestreza] = useState(0);
   const [bonusPrecisao, setBonusPrecisao] = useState(0);
   const [bonusConstituicao, setBonusConstituicao] = useState(0);
   const [bonusInteligencia, setBonusInteligencia] = useState(0);
   const [bonusCarisma, setBonusCarisma] = useState(0);
   
   const EquipaArma = (novoValor:any) =>{
      const armas:any[] = personagem[0]?.armas
      const atualizaArmas = () =>{
         armas.forEach((value)=>{
            if(value===novoValor){
               value.equipada=true
            }
         })
      }
      
      const update = async () => {
         const { error } = await supabase
            .from("Personagens")
            .update({ armas: armas})
            .eq("nome", personagem[0]?.nome)
            .select()

         if (error) {
            console.log(error);
         }
      };
      atualizaArmas()
      update();
   }
   const DesEquipaArma = (novoValor:any) =>{
      const armas:any[] = personagem[0]?.armas
      const atualizaArmas = () =>{
         armas.forEach((value)=>{
            if(value===novoValor){
               value.equipada=false
            }
         })
      }
      
      const update = async () => {
         const { error } = await supabase
            .from("Personagens")
            .update({ armas: armas})
            .eq("nome", personagem[0]?.nome)
            .select()

         if (error) {
            console.log(error);
         }
      };
      atualizaArmas()
      update();
   }
   const EquipaArmadura = (novoValor:any) =>{
      const armaduras:any[] = personagem[0]?.armaduras
      const atualizaArmaduras = () =>{
         armaduras.forEach((value)=>{
            if(value===novoValor){
               value.equipada=true
            }
         })
      }
      
      const update = async () => {
         const { error } = await supabase
            .from("Personagens")
            .update({ armaduras: armaduras})
            .eq("nome", personagem[0]?.nome)
            .select()

         if (error) {
            console.log(error);
         }
      };
      atualizaArmaduras()
      update();
   }
   const DesEquipaArmadura = (novoValor:any) =>{
      const armaduras:any[] = personagem[0]?.armaduras
      const atualizaArmaduras = () =>{
         armaduras.forEach((value)=>{
            if(value===novoValor){
               value.equipada=false
            }
         })
      }
      
      const update = async () => {
         const { error } = await supabase
            .from("Personagens")
            .update({ armaduras: armaduras})
            .eq("nome", personagem[0]?.nome)
            .select()

         if (error) {
            console.log(error);
         }
      };
      atualizaArmaduras()
      update();
   }
   const EquipaUtilidade = (novoValor:any) =>{
      const utilidades:any[] = personagem[0]?.utilidades
      const atualizaUtilidades = () =>{
         utilidades.forEach((value)=>{
            if(value===novoValor){
               value.equipada=true
            }
         })
      }
      
      const update = async () => {
         const { error } = await supabase
            .from("Personagens")
            .update({ utilidades: utilidades})
            .eq("nome", personagem[0]?.nome)
            .select()

         if (error) {
            console.log(error);
         }
      };
      atualizaUtilidades()
      update();
   }
   const DesEquipaUtilidade = (novoValor:any) =>{
      const utilidades:any[] = personagem[0]?.utilidades
      const atualizaUtilidades = () =>{
         utilidades.forEach((value)=>{
            if(value===novoValor){
               value.equipada=false
            }
         })
      }
      
      const update = async () => {
         const { error } = await supabase
            .from("Personagens")
            .update({ utilidades: utilidades})
            .eq("nome", personagem[0]?.nome)
            .select()

         if (error) {
            console.log(error);
         }
      };
      atualizaUtilidades()
      update();
   }
   const CriaBonus = () => {
      setBonusForca(DescobreBonus(personagem[0]?.forca))
      setBonusDestreza(DescobreBonus(personagem[0]?.destreza))
      setBonusPrecisao(DescobreBonus(personagem[0]?.precisao))
      setBonusConstituicao(DescobreBonus(personagem[0]?.constituicao))
      setBonusInteligencia(DescobreBonus(personagem[0]?.inteligencia))
      setBonusCarisma(DescobreBonus(personagem[0]?.carisma))
      dispatch(atualizaBonus({
         forca:bonusForca,
         destreza:bonusDestreza,
         precisao:bonusPrecisao,
         constituicao: bonusConstituicao,
         inteligencia:bonusInteligencia,
         carisma:bonusCarisma}))
   };
   useEffect(() => {
      const getPersonagem = async () => {
         const { data: Personagem, error } = await supabase
            .from("Personagens")
            .select("*")
            .eq("nome", stock.personagemUsuario)

            setPersonagem(Personagem)
      };
      getPersonagem();
      CriaBonus();
   }, [stock, personagem, CriaBonus]);
   useEffect(() => {
      const subscribe = supabase
         .channel(`public:Personagens`)
         .on(
            "postgres_changes",
            {
               event: "UPDATE",
               schema: "public",
               table: "Personagens",
               filter: `nome=eq.${stock.personagemUsuario}`
            },
            (payload) => {
               personagem.unshift(payload.new);
            }
         )
         .subscribe()
      return () => {
         supabase.removeChannel(subscribe);
      };
   }, [stock, personagem]);
   const CriaProeficiencias1 = () => {
      return (
         <>
            <Proeficiencia>
               Acrobacia:{" "}
               {personagem[0]?.proeficiencias.acrobacia[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.acrobacia[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Arcanismo:{" "}
               {personagem[0]?.proeficiencias.arcanismo[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.arcanismo[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Atletismo:{" "}
               {personagem[0]?.proeficiencias.atletismo[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.atletismo[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Atuação:{" "}
               {personagem[0]?.proeficiencias.atuacao[0] ? <P>(x)</P> : <P>( )</P>}{" "}
               {personagem[0]?.proeficiencias.atuacao[1] ? <P>(x)</P> : <P>( )</P>}
            </Proeficiencia>
            <Proeficiencia>
               Construção:{" "}
               {personagem[0]?.proeficiencias.construcao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.construcao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Enganação:{" "}
               {personagem[0]?.proeficiencias.enganacao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.enganacao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Furtividade:{" "}
               {personagem[0]?.proeficiencias.furtividade[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.furtividade[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               História:{" "}
               {personagem[0]?.proeficiencias.historia[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.historia[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Ilusionismo:{" "}
               {personagem[0]?.proeficiencias.ilusionismo[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.ilusionismo[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
         </>
      );
   };
   const CriaProeficiencias2 = () => {
      return (
         <>
            <Proeficiencia>
               Intimidação:{" "}
               {personagem[0]?.proeficiencias.intimidacao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.intimidacao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Intuição:{" "}
               {personagem[0]?.proeficiencias.intuicao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.intuicao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Investigação:{" "}
               {personagem[0]?.proeficiencias.investigacao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.investigacao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Medicina:{" "}
               {personagem[0]?.proeficiencias.medicina[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.medicina[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Natureza:{" "}
               {personagem[0]?.proeficiencias.natureza[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.natureza[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Percepção:{" "}
               {personagem[0]?.proeficiencias.percepcao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.percepcao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Persuasão:{" "}
               {personagem[0]?.proeficiencias.persuasao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.persuasao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Religião:{" "}
               {personagem[0]?.proeficiencias.religiao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.religiao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Sobrevivencia:{" "}
               {personagem[0]?.proeficiencias.sobrevivencia[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem[0]?.proeficiencias.sobrevivencia[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
         </>
      );
   };
   const CriaHabilidades = (value:any) => {
      return (
         <Habilidade >
            <TituloHabilidade>
               <HabilidadeNome>{value.nome}</HabilidadeNome>
               <BotaoIcon
                  onClick={() => {
                     const texto = `${value.nome}: ${value.descricao}`;
                     enviaMensagem(usuario, texto, stock.campanhaUsuario);
                  }}
               >
                  <Icon/>
               </BotaoIcon>
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
               <BotaoIcon
                  onClick={() => {
                     const texto = `${value.nome}: ${value.descricao}`;
                     enviaMensagem(usuario, texto, stock.campanhaUsuario);
                  }}
               >
                  <Icon/>
               </BotaoIcon>
            </TituloMagia>
            <DescricaoMagia>{value.descricao}</DescricaoMagia>
         </Magia>
      );
   };
   const CriaArmaduras = (value:any) => {
      return (
         <Iten>
            <NomeIten>
               {value.nome}
               <BotaoEquipa 
               onClick={()=>{
                  EquipaArmadura(value)
                  UpdateEquipaArmadura(personagem[0],value)
                  }}>
                     Equipar
               </BotaoEquipa>
               <BotaoDesEquipa 
               onClick={()=>{
                  DesEquipaArmadura(value)
                  UpdateDesEquipaArmadura(personagem[0],value)
                  }}>
                     Desequipar
               </BotaoDesEquipa>
            </NomeIten>
            <DescricaoIten>{value.descricao}</DescricaoIten>
         </Iten>
      );
   };
   const CriaArmas = (value:any) => {
      return (
         <Iten>
            <NomeIten>
               {value.nome}
               <BotaoEquipa onClick={()=>EquipaArma(value)}>Equipar</BotaoEquipa>
               <BotaoDesEquipa onClick={()=>DesEquipaArma(value)}>Desequipar</BotaoDesEquipa>
            </NomeIten>
            <DescricaoIten>{value.descricao}</DescricaoIten>
         </Iten>
      );
   };
   const CriaUtilidades = (value:any) => {
      return (
         <Iten>
            <NomeIten>
               {value.nome}
               <BotaoEquipa onClick={()=>EquipaUtilidade(value)}>Equipar</BotaoEquipa>
               <BotaoDesEquipa onClick={()=>DesEquipaUtilidade(value)}>Desequipar</BotaoDesEquipa>
            </NomeIten>
            <DescricaoIten>{value.descricao}</DescricaoIten>
         </Iten>
      );
   };
   return (
      <>
         <Head>
            <title>Ficha</title>
         </Head>
         <Fundo>
            <BotaoVolta onClick={()=>router.push("/mesa")}>
                  <IconVolta/>
            </BotaoVolta>
               <Caixa>
            <NomeNivel>
               <Nome>Nome: {personagem[0]?.nome}</Nome>
               <Nivel>Nivel: {personagem[0]?.nivel}</Nivel>
            </NomeNivel>
               <StatusPersonagem>{personagem[0]?.statusPersonagem}</StatusPersonagem>
            <EspecieClasse>
               <Especie>Espécie: {personagem[0]?.especie}</Especie>
               <Classe>Classe: {personagem[0]?.classe}</Classe>
               <Aspecto>Aspecto: {personagem[0]?.aspectoAfinidade}</Aspecto>
            </EspecieClasse>
            <AtributosStatus>
               <Atributos>
                  <Atributo>
                     Força: {personagem[0]?.forca} ({bonusForca})
                  </Atributo>
                  <Atributo>
                     Destreza: {personagem[0]?.destreza} ({bonusDestreza})
                  </Atributo>
                  <Atributo>
                     Precisão: {personagem[0]?.precisao} ({bonusPrecisao})
                  </Atributo>
                  <Atributo>
                     Constituiçao: {personagem[0]?.constituicao} ({bonusConstituicao})
                  </Atributo>
                  <Atributo>
                     Inteligência: {personagem[0]?.inteligencia} ({bonusInteligencia})
                  </Atributo>
                  <Atributo>
                     Carisma: {personagem[0]?.carisma} ({bonusCarisma})
                  </Atributo>
               </Atributos>
               <StatusMoedas>
                  <Status>
                     <Armaduras>
                        <ArmaduraTotal>
                           Armadura <br />
                           Total: <br />
                           {personagem[0]?.armaduraTotal}
                        </ArmaduraTotal>
                        <ArmaduraAtual>
                           Armadura <br />
                           Atual: <br />
                           {personagem[0]?.armaduraAtual}
                        </ArmaduraAtual>
                     </Armaduras>
                     <Vidas>
                        <VidaTotal>
                           Vida <br />
                           Total: <br />
                           {personagem[0]?.vidaTotal}
                        </VidaTotal>
                        <VidaAtual>
                           Vida <br />
                           Atual: <br />
                           {personagem[0]?.vidaAtual}
                        </VidaAtual>
                     </Vidas>
                     <Manas>
                        <ManaTotal>
                           Mana <br />
                           Total: <br />
                           {personagem[0]?.manaTotal}
                        </ManaTotal>
                        <ManaAtual>
                           Mana <br />
                           Atual: <br />
                           {personagem[0]?.manaAtual}
                        </ManaAtual>
                     </Manas>
                  </Status>
                  <CaixaMoedas>
                     <Moedas>Moedas: {personagem[0]?.moedas}</Moedas>
                  </CaixaMoedas>
               </StatusMoedas>
            </AtributosStatus>
            <CaixaProeficiencia>
               <TituloProeficiencia>
                  Proeficiencias de {personagem[0]?.nome}
               </TituloProeficiencia>
               <CaixasProeficiencias>
                  <CaixaProeficiencias1>
                     {CriaProeficiencias1()}
                  </CaixaProeficiencias1>
                  <CaixaProeficiencias2>
                     {CriaProeficiencias2()}
                  </CaixaProeficiencias2>
               </CaixasProeficiencias>
               <CaixaAnimais>
                  <ProeficienciaAnimais>
                     Lidar Com Animais:{" "}
                     {personagem[0]?.proeficiencias.lidarComAnimais[0] ? (
                        <P>(x)</P>
                     ) : (
                        <P>( )</P>
                     )}{" "}
                     {personagem[0]?.proeficiencias.lidarComAnimais[1] ? (
                        <P>(x)</P>
                     ) : (
                        <P>( )</P>
                     )}
                  </ProeficienciaAnimais>
               </CaixaAnimais>
            </CaixaProeficiencia>
            <CaixaLinguas>
               <Linguas>
                  Dwarv: {personagem[0]?.linguas.dwarv ? <P>(x)</P> : <P>( )</P>}
                  <br />
                  Orc: {personagem[0]?.linguas.orc ? <P>(x)</P> : <P>( )</P>}
                  <br />
                  Élfico: {personagem[0]?.linguas.elfico ? <P>(x)</P> : <P>( )</P>}
                  <br />
               </Linguas>
               <Linguas>
                  Faerico: {personagem[0]?.linguas.faerico ? <P>(x)</P> : <P>( )</P>}
                  <br />
                  Silvestre:{" "}
                  {personagem[0]?.linguas.silvestre ? <P>(x)</P> : <P>( )</P>}
                  <br />
                  Daedra: {personagem[0]?.linguas.daedra ? <P>(x)</P> : <P>( )</P>}
                  <br />
               </Linguas>
               <Linguas>
                  Celestial:{" "}
                  {personagem[0]?.linguas.celestial ? <P>(x)</P> : <P>( )</P>}
                  <br />
                  Comum: {personagem[0]?.linguas.comum ? <P>(x)</P> : <P>( )</P>}
                  <br />
                  Ramush: {personagem[0]?.linguas.ramush ? <P>(x)</P> : <P>( )</P>}
                  <br />
               </Linguas>
            </CaixaLinguas>
            <CaixaHabilidades>
               <TituloHabilidades>
                  Habilidades de {personagem[0]?.nome}
               </TituloHabilidades>
               <Habilidades>
                  {personagem[0]?.habilidades.map(CriaHabilidades)}
               </Habilidades>
            </CaixaHabilidades>
            <CaixaMagias>
               <TituloMagias>Magias de {personagem[0]?.nome}</TituloMagias>
               <Magias>{personagem[0]?.magias.map(CriaMagias)}</Magias>
            </CaixaMagias>
            <CaixaItens>
               <TituloIten>Armaduras de {personagem[0]?.nome}</TituloIten>
               <Itens>{personagem[0]?.armaduras.map(CriaArmaduras)}</Itens>
            </CaixaItens>
            <CaixaItens>
               <TituloIten>Armas de {personagem[0]?.nome}</TituloIten>
               <Itens>{personagem[0]?.armas.map(CriaArmas)}</Itens>
            </CaixaItens>
            <CaixaItens>
               <TituloIten>Utilidades de {personagem[0]?.nome}</TituloIten>
               <Itens>{personagem[0]?.utilidades.map(CriaUtilidades)}</Itens>
            </CaixaItens>
            <CaixaHistoria>
               <TituloHistoria>Historia de {personagem[0]?.nome}</TituloHistoria>
               <Historia>{personagem[0]?.historiaPersonagem}</Historia>
            </CaixaHistoria>
            <CaixaAparencia>
               <TituloAparencia>Aparencia de {personagem[0]?.nome}</TituloAparencia>
               <Aparencia>{personagem[0]?.aparenciaPersonagem}</Aparencia>
            </CaixaAparencia>
         </Caixa>
         </Fundo>
      </>
   );
}
