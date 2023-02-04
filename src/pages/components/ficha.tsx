import {
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
} from "@/styles/components/styleFicha";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stack/";
import { useEffect, useState } from "react";
import { supabase } from "../api/supabase";
import { enviaMensagem } from "./chat";
import { atualizaBonus } from "../../stack/stock"
export default function Ficha() {
   const stock = useSelector((state: RootState) => state.stock);
   const dispatch = useDispatch()
   const usuario = stock.usuario.nomeUsuario;
   const [personagem, setPersonagem] = useState<any>();
   const [bonusForca, setBonusForca] = useState(0);
   const [bonusDestreza, setBonusDestreza] = useState(0);
   const [bonusPrecisao, setBonusPrecisao] = useState(0);
   const [bonusConstituicao, setBonusConstituicao] = useState(0);
   const [bonusInteligencia, setBonusInteligencia] = useState(0);
   const [bonusCarisma, setBonusCarisma] = useState(0);
   const CriaBonus = () => {
      //forca
      if (personagem?.forca !== undefined && personagem.forca >= 0) {
         setBonusForca(-9);
      }
      if (personagem?.forca !== undefined && personagem.forca <= 20) {
         setBonusForca(10);
      }
      switch (personagem?.forca) {
         case 1:
            setBonusForca(-9);
            break;
         case 2:
            setBonusForca(-8);
            break;
         case 3:
            setBonusForca(-7);
            break;
         case 4:
            setBonusForca(-6);
            break;
         case 5:
            setBonusForca(-5);
            break;
         case 6:
            setBonusForca(-4);
            break;
         case 7:
            setBonusForca(-3);
            break;
         case 8:
            setBonusForca(-2);
            break;
         case 9:
            setBonusForca(-1);
            break;
         case 10:
            setBonusForca(0);
            break;
         case 11:
            setBonusForca(1);
            break;
         case 12:
            setBonusForca(2);
            break;
         case 13:
            setBonusForca(3);
            break;
         case 14:
            setBonusForca(4);
            break;
         case 15:
            setBonusForca(5);
            break;
         case 16:
            setBonusForca(6);
            break;
         case 17:
            setBonusForca(7);
            break;
         case 18:
            setBonusForca(8);
            break;
         case 19:
            setBonusForca(9);
            break;
      }
      //destreza
      if (personagem?.destreza !== undefined && personagem.forca >= 0) {
         setBonusDestreza(-9);
      }
      if (personagem?.destreza !== undefined && personagem.forca <= 20) {
         setBonusDestreza(10);
      }
      switch (personagem?.destreza) {
         case 1:
            setBonusDestreza(-9);
            break;
         case 2:
            setBonusDestreza(-8);
            break;
         case 3:
            setBonusDestreza(-7);
            break;
         case 4:
            setBonusDestreza(-6);
            break;
         case 5:
            setBonusDestreza(-5);
            break;
         case 6:
            setBonusDestreza(-4);
            break;
         case 7:
            setBonusDestreza(-3);
            break;
         case 8:
            setBonusDestreza(-2);
            break;
         case 9:
            setBonusDestreza(-1);
            break;
         case 10:
            setBonusDestreza(0);
            break;
         case 11:
            setBonusDestreza(1);
            break;
         case 12:
            setBonusDestreza(2);
            break;
         case 13:
            setBonusDestreza(3);
            break;
         case 14:
            setBonusDestreza(4);
            break;
         case 15:
            setBonusDestreza(5);
            break;
         case 16:
            setBonusDestreza(6);
            break;
         case 17:
            setBonusDestreza(7);
            break;
         case 18:
            setBonusDestreza(8);
            break;
         case 19:
            setBonusDestreza(9);
            break;
      }
      //precisao
      if (personagem?.precisao !== undefined && personagem.forca >= 0) {
         setBonusPrecisao(-9);
      }
      if (personagem?.precisao !== undefined && personagem.forca <= 20) {
         setBonusPrecisao(10);
      }
      switch (personagem?.precisao) {
         case 1:
            setBonusPrecisao(-9);
            break;
         case 2:
            setBonusPrecisao(-8);
            break;
         case 3:
            setBonusPrecisao(-7);
            break;
         case 4:
            setBonusPrecisao(-6);
            break;
         case 5:
            setBonusPrecisao(-5);
            break;
         case 6:
            setBonusPrecisao(-4);
            break;
         case 7:
            setBonusPrecisao(-3);
            break;
         case 8:
            setBonusPrecisao(-2);
            break;
         case 9:
            setBonusPrecisao(-1);
            break;
         case 10:
            setBonusPrecisao(0);
            break;
         case 11:
            setBonusPrecisao(1);
            break;
         case 12:
            setBonusPrecisao(2);
            break;
         case 13:
            setBonusPrecisao(3);
            break;
         case 14:
            setBonusPrecisao(4);
            break;
         case 15:
            setBonusPrecisao(5);
            break;
         case 16:
            setBonusPrecisao(6);
            break;
         case 17:
            setBonusPrecisao(7);
            break;
         case 18:
            setBonusPrecisao(8);
            break;
         case 19:
            setBonusPrecisao(9);
            break;
      }
      //constituicao
      if (personagem?.constituicao !== undefined && personagem.forca >= 0) {
         setBonusConstituicao(-9);
      }
      if (personagem?.constituicao !== undefined && personagem.forca <= 20) {
         setBonusConstituicao(10);
      }
      switch (personagem?.constituicao) {
         case 1:
            setBonusConstituicao(-9);
            break;
         case 2:
            setBonusConstituicao(-8);
            break;
         case 3:
            setBonusConstituicao(-7);
            break;
         case 4:
            setBonusConstituicao(-6);
            break;
         case 5:
            setBonusConstituicao(-5);
            break;
         case 6:
            setBonusConstituicao(-4);
            break;
         case 7:
            setBonusConstituicao(-3);
            break;
         case 8:
            setBonusConstituicao(-2);
            break;
         case 9:
            setBonusConstituicao(-1);
            break;
         case 10:
            setBonusConstituicao(0);
            break;
         case 11:
            setBonusConstituicao(1);
            break;
         case 12:
            setBonusConstituicao(2);
            break;
         case 13:
            setBonusConstituicao(3);
            break;
         case 14:
            setBonusConstituicao(4);
            break;
         case 15:
            setBonusConstituicao(5);
            break;
         case 16:
            setBonusConstituicao(6);
            break;
         case 17:
            setBonusConstituicao(7);
            break;
         case 18:
            setBonusConstituicao(8);
            break;
         case 19:
            setBonusConstituicao(9);
            break;
      }
      //inteligencia
      if (personagem?.inteligencia !== undefined && personagem.forca >= 0) {
         setBonusInteligencia(-9);
      }
      if (personagem?.inteligencia !== undefined && personagem.forca <= 20) {
         setBonusInteligencia(10);
      }
      switch (personagem?.inteligencia) {
         case 1:
            setBonusInteligencia(-9);
            break;
         case 2:
            setBonusInteligencia(-8);
            break;
         case 3:
            setBonusInteligencia(-7);
            break;
         case 4:
            setBonusInteligencia(-6);
            break;
         case 5:
            setBonusInteligencia(-5);
            break;
         case 6:
            setBonusInteligencia(-4);
            break;
         case 7:
            setBonusInteligencia(-3);
            break;
         case 8:
            setBonusInteligencia(-2);
            break;
         case 9:
            setBonusInteligencia(-1);
            break;
         case 10:
            setBonusInteligencia(0);
            break;
         case 11:
            setBonusInteligencia(1);
            break;
         case 12:
            setBonusInteligencia(2);
            break;
         case 13:
            setBonusInteligencia(3);
            break;
         case 14:
            setBonusInteligencia(4);
            break;
         case 15:
            setBonusInteligencia(5);
            break;
         case 16:
            setBonusInteligencia(6);
            break;
         case 17:
            setBonusInteligencia(7);
            break;
         case 18:
            setBonusInteligencia(8);
            break;
         case 19:
            setBonusInteligencia(9);
            break;
      }
      //carisma
      if (personagem?.carisma !== undefined && personagem.forca >= 0) {
         setBonusCarisma(-9);
      }
      if (personagem?.carisma !== undefined && personagem.forca <= 20) {
         setBonusCarisma(10);
      }
      switch (personagem?.carisma) {
         case 1:
            setBonusCarisma(-9);
            break;
         case 2:
            setBonusCarisma(-8);
            break;
         case 3:
            setBonusCarisma(-7);
            break;
         case 4:
            setBonusCarisma(-6);
            break;
         case 5:
            setBonusCarisma(-5);
            break;
         case 6:
            setBonusCarisma(-4);
            break;
         case 7:
            setBonusCarisma(-3);
            break;
         case 8:
            setBonusCarisma(-2);
            break;
         case 9:
            setBonusCarisma(-1);
            break;
         case 10:
            setBonusCarisma(0);
            break;
         case 11:
            setBonusCarisma(1);
            break;
         case 12:
            setBonusCarisma(2);
            break;
         case 13:
            setBonusCarisma(3);
            break;
         case 14:
            setBonusCarisma(4);
            break;
         case 15:
            setBonusCarisma(5);
            break;
         case 16:
            setBonusCarisma(6);
            break;
         case 17:
            setBonusCarisma(7);
            break;
         case 18:
            setBonusCarisma(8);
            break;
         case 19:
            setBonusCarisma(9);
            break;
      }
   };
   useEffect(() => {
      const getPersonagem = async () => {
         const { data: Personagens } = await supabase
            .from("Personagens")
            .select("*")
            
            if(Personagens){
               Personagens.forEach((value)=>{
                  if(value.nome===stock.personagemUsuario){
                     setPersonagem(Personagens)
                  }
               })
            }
         
            
      };
      getPersonagem();
      CriaBonus();
      dispatch(atualizaBonus({
         forca:bonusForca,
         destreza:bonusDestreza,
         precisao:bonusPrecisao,
         constituicao: bonusConstituicao,
         inteligencia:bonusInteligencia,
         carisma:bonusCarisma}))
   }, [stock, CriaBonus, dispatch, bonusForca, bonusDestreza, bonusPrecisao, bonusConstituicao, bonusInteligencia, bonusCarisma]);
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
               setPersonagem(payload.new);
            }
         )
         .subscribe()
      return () => {
         supabase.removeChannel(subscribe);
      };
   }, [stock]);
   const CriaProeficiencias1 = () => {
      return (
         <>
            <Proeficiencia>
               Acrobacia:{" "}
               {personagem?.proeficiencias.acrobacia[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.acrobacia[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Arcanismo:{" "}
               {personagem?.proeficiencias.arcanismo[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.arcanismo[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Atletismo:{" "}
               {personagem?.proeficiencias.atletismo[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.atletismo[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Atuação:{" "}
               {personagem?.proeficiencias.atuacao[0] ? <P>(x)</P> : <P>( )</P>}{" "}
               {personagem?.proeficiencias.atuacao[1] ? <P>(x)</P> : <P>( )</P>}
            </Proeficiencia>
            <Proeficiencia>
               Construção:{" "}
               {personagem?.proeficiencias.construcao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.construcao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Enganação:{" "}
               {personagem?.proeficiencias.enganacao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.enganacao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Furtividade:{" "}
               {personagem?.proeficiencias.furtividade[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.furtividade[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               História:{" "}
               {personagem?.proeficiencias.historia[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.historia[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Ilusionismo:{" "}
               {personagem?.proeficiencias.ilusionismo[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.ilusionismo[1] ? (
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
               {personagem?.proeficiencias.intimidacao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.intimidacao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Intuição:{" "}
               {personagem?.proeficiencias.intuicao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.intuicao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Investigação:{" "}
               {personagem?.proeficiencias.investigacao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.investigacao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Medicina:{" "}
               {personagem?.proeficiencias.medicina[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.medicina[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Natureza:{" "}
               {personagem?.proeficiencias.natureza[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.natureza[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Percepção:{" "}
               {personagem?.proeficiencias.percepcao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.percepcao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Persuasão:{" "}
               {personagem?.proeficiencias.persuasao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.persuasao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Religião:{" "}
               {personagem?.proeficiencias.religiao[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.religiao[1] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}
            </Proeficiencia>
            <Proeficiencia>
               Sobrevivencia:{" "}
               {personagem?.proeficiencias.sobrevivencia[0] ? (
                  <P>(x)</P>
               ) : (
                  <P>( )</P>
               )}{" "}
               {personagem?.proeficiencias.sobrevivencia[1] ? (
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
            <NomeIten>{value.nome}</NomeIten>
            <DescricaoIten>{value.descricao}</DescricaoIten>
         </Iten>
      );
   };
   const CriaArmas = (value:any) => {
      return (
         <Iten>
            <NomeIten>{value.nome}</NomeIten>
            <DescricaoIten>{value.descricao}</DescricaoIten>
         </Iten>
      );
   };
   const CriaUtilidades = (value:any, index:number) => {
      return (
         <Iten>
            <NomeIten>{value.nome}</NomeIten>
            <DescricaoIten>{value.descricao}</DescricaoIten>
         </Iten>
      );
   };
   return (
      <Caixa>
         <NomeNivel>
            <Nome>Nome: {personagem?.nome}</Nome>
            <Nivel>Nivel: {personagem?.nivel}</Nivel>
            <StatusPersonagem>{personagem?.statusPersonagem}</StatusPersonagem>
         </NomeNivel>
         <EspecieClasse>
            <Especie>Espécie: {personagem?.especie}</Especie>
            <Classe>Classe: {personagem?.classe}</Classe>
            <Aspecto>Aspecto: {personagem?.aspectoAfinidade}</Aspecto>
         </EspecieClasse>
         <AtributosStatus>
            <Atributos>
               <Atributo>
                  Força: {personagem?.forca} ({bonusForca})
               </Atributo>
               <Atributo>
                  Destreza: {personagem?.destreza} ({bonusDestreza})
               </Atributo>
               <Atributo>
                  Precisão: {personagem?.precisao} ({bonusPrecisao})
               </Atributo>
               <Atributo>
                  Constituiçao: {personagem?.constituicao} ({bonusConstituicao})
               </Atributo>
               <Atributo>
                  Inteligência: {personagem?.inteligencia} ({bonusInteligencia})
               </Atributo>
               <Atributo>
                  Carisma: {personagem?.carisma} ({bonusCarisma})
               </Atributo>
            </Atributos>
            <StatusMoedas>
               <Status>
                  <Armaduras>
                     <ArmaduraTotal>
                        Armadura <br />
                        Total: <br />
                        {personagem?.armaduraTotal}
                     </ArmaduraTotal>
                     <ArmaduraAtual>
                        Armadura <br />
                        Atual: <br />
                        {personagem?.armaduraAtual}
                     </ArmaduraAtual>
                  </Armaduras>
                  <Vidas>
                     <VidaTotal>
                        Vida <br />
                        Total: <br />
                        {personagem?.vidaTotal}
                     </VidaTotal>
                     <VidaAtual>
                        Vida <br />
                        Atual: <br />
                        {personagem?.vidaAtual}
                     </VidaAtual>
                  </Vidas>
                  <Manas>
                     <ManaTotal>
                        Mana <br />
                        Total: <br />
                        {personagem?.manaTotal}
                     </ManaTotal>
                     <ManaAtual>
                        Mana <br />
                        Atual: <br />
                        {personagem?.manaAtual}
                     </ManaAtual>
                  </Manas>
               </Status>
               <CaixaMoedas>
                  <Moedas>Moedas: {personagem?.moedas}</Moedas>
               </CaixaMoedas>
            </StatusMoedas>
         </AtributosStatus>
         <CaixaProeficiencia>
            <TituloProeficiencia>
               Proeficiencias de {personagem?.nome}
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
                  {personagem?.proeficiencias.lidarComAnimais[0] ? (
                     <P>(x)</P>
                  ) : (
                     <P>( )</P>
                  )}{" "}
                  {personagem?.proeficiencias.lidarComAnimais[1] ? (
                     <P>(x)</P>
                  ) : (
                     <P>( )</P>
                  )}
               </ProeficienciaAnimais>
            </CaixaAnimais>
         </CaixaProeficiencia>
         <CaixaLinguas>
            <Linguas>
               Dwarv: {personagem?.linguas.dwarv ? <P>(x)</P> : <P>( )</P>}
               <br />
               Orc: {personagem?.linguas.orc ? <P>(x)</P> : <P>( )</P>}
               <br />
               Élfico: {personagem?.linguas.elfico ? <P>(x)</P> : <P>( )</P>}
               <br />
            </Linguas>
            <Linguas>
               Faerico: {personagem?.linguas.faerico ? <P>(x)</P> : <P>( )</P>}
               <br />
               Silvestre:{" "}
               {personagem?.linguas.silvestre ? <P>(x)</P> : <P>( )</P>}
               <br />
               Daedra: {personagem?.linguas.daedra ? <P>(x)</P> : <P>( )</P>}
               <br />
            </Linguas>
            <Linguas>
               Celestial:{" "}
               {personagem?.linguas.celestial ? <P>(x)</P> : <P>( )</P>}
               <br />
               Comum: {personagem?.linguas.comum ? <P>(x)</P> : <P>( )</P>}
               <br />
               Ramush: {personagem?.linguas.ramush ? <P>(x)</P> : <P>( )</P>}
               <br />
            </Linguas>
         </CaixaLinguas>
         <CaixaHabilidades>
            <TituloHabilidades>
               Habilidades de {personagem?.nome}
            </TituloHabilidades>
            <Habilidades>
               {personagem?.habilidades.map(CriaHabilidades)}
            </Habilidades>
         </CaixaHabilidades>
         <CaixaMagias>
            <TituloMagias>Magias de {personagem?.nome}</TituloMagias>
            <Magias>{personagem?.magias.map(CriaMagias)}</Magias>
         </CaixaMagias>
         <CaixaItens>
            <TituloIten>Armaduras de {personagem?.nome}</TituloIten>
            <Itens>{personagem?.armaduras.map(CriaArmaduras)}</Itens>
         </CaixaItens>
         <CaixaItens>
            <TituloIten>Armas de {personagem?.nome}</TituloIten>
            <Itens>{personagem?.armas.map(CriaArmas)}</Itens>
         </CaixaItens>
         <CaixaItens>
            <TituloIten>Utilidades de {personagem?.nome}</TituloIten>
            <Itens>{personagem?.utilidades.map(CriaUtilidades)}</Itens>
         </CaixaItens>
         <CaixaHistoria>
            <TituloHistoria>Historia de {personagem?.nome}</TituloHistoria>
            <Historia>{personagem?.historiaPersonagem}</Historia>
         </CaixaHistoria>
         <CaixaAparencia>
            <TituloAparencia>Aparencia de {personagem?.nome}</TituloAparencia>
            <Aparencia>{personagem?.aparenciaPersonagem}</Aparencia>
         </CaixaAparencia>
      </Caixa>
   );
}
