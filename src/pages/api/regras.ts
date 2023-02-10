import { stock } from './../../../types/types';
import { supabase } from "./supabase";
import { enviaMensagem } from "../components/chat";
import { magia,habilidade, arma, armadura, utilidade } from "../../../types/supabase"

function DescobreAcrobacia(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.acrobacia[0]){
      bonus = 2
      if(personagem.proeficiencias?.acrobacia[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreAcanismo(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.arcanismo[0]){
      bonus = 2
      if(personagem.proeficiencias?.arcanismo[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreAtletismo(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.atletismo[0]){
      bonus = 2
      if(personagem.proeficiencias?.atletismo[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreAtuacao(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.atuacao[0]){
      bonus = 2
      if(personagem.proeficiencias?.atuacao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreConstrucao(personagem:any){
   var bonus = 0 
   if(personagem.proeficiencias?.construcao[0]){
      bonus = 2
      if(personagem.proeficiencias?.construcao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreEnganacao(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.enganacao[0]){
      bonus = 2
      if(personagem.proeficiencias?.enganacao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreFurtividade(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.furtividade[0]){
      bonus = 2
      if(personagem.proeficiencias?.furtividade[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreHistoria(personagem:any){
   var bonus = 0 
   if(personagem.proeficiencias?.historia[0]){
      bonus = 2 
      if(personagem.proeficiencias?.historia[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreIlusionismo(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.ilusionismo[0]){
      bonus = 2
      if(personagem.proeficiencias?.ilusionismo[1]){
         bonus =4
      }
   }
   return bonus
}
function DescobreIntimidacao(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.intimidacao[0]){
      bonus = 2
      if(personagem.proeficiencias?.intimidacao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreIntuicao(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.intuicao[0]){
      bonus = 2
      if(personagem.proeficiencias?.intuicao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreInvestigacao(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.investigacao[0]){
      bonus = 2
      if(personagem.proeficiencias?.investigacao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreLidarComAnimais(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.lidarComAnimais[0]){
      bonus = 2
      if(personagem.proeficiencias?.lidarComAnimais[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreMedicina(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.medicina[0]){
      bonus = 2
      if(personagem.proeficiencias?.medicina[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreNatureza(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.natureza[0]){
      bonus = 2
      if(personagem.proeficiencias?.natureza[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobrePercepcao(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.percepcao[0]){
      bonus = 2
      if(personagem.proeficiencias?.percepcao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobrePersuacao(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.persuasao[0]){
      bonus = 2
      if(personagem.proeficiencias?.persuasao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreReligiao(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.religiao[0]){
      bonus = 2
      if(personagem.proeficiencias?.religiao[1]){
         bonus = 4
      }
   }
   return bonus
}
function DescobreSobrevivencia(personagem:any){
   var bonus = 0
   if(personagem.proeficiencias?.sobrevivencia[0]){
      bonus =2
      if(personagem.proeficiencias?.sobrevivencia[1]){
         bonus =4
      }
   }
   return bonus
}
export function DescobreBonus(atributo:number){
   var bonus = 0
   if (atributo >= 0) {
      bonus = -9
   }
   if (atributo <= 20) {
      bonus = 10
   }
   switch (atributo) {
      case 1:
         bonus = -9
         break;
      case 2:
         bonus = -8
         break;
      case 3:
         bonus = -7
         break;
      case 4:
         bonus = -6
         break;
      case 5:
         bonus = -5
         break;
      case 6:
         bonus = -4
         break;
      case 7:
         bonus = -3
         break;
      case 8:
         bonus = -2
         break;
      case 9:
         bonus = -1
         break;
      case 10:
         bonus = 0
         break;
      case 11:
         bonus = 1
         break;
      case 12:
         bonus = 2
         break;
      case 13:
         bonus = 3
         break;
      case 14:
         bonus = 4
         break;
      case 15:
         bonus = 5
         break;
      case 16:
         bonus = 6
         break;
      case 17:
         bonus = 7
         break;
      case 18:
         bonus = 8
         break;
      case 19:
         bonus = 9
         break;
   }
   return bonus
}
function DescobreBonusClasse(stock:stock,personagem:any){
   var bonus = 0
   if(personagem.classe==="Alquimista"||personagem.classe==="Arqueiro"||
   personagem.classe||"Assassino"||personagem.classe==="Artificer"||
   personagem.classe==="Bardo"||personagem.classe==="Espadachim"||
   personagem.classe==="Ladino"){
      bonus = stock.bonus.destreza
   }
   if(personagem.classe==="Bárbaro"||personagem.classe==="Clérigo"||
   personagem.classe==="Guerreiro"||personagem.classe==="Monge"||
   personagem.classe==="Paladino"){
      bonus = stock.bonus.forca
   }
   if(personagem.classe==="Druida"||personagem.classe==="Feiticeiro"||
   personagem.classe==="Mago"||personagem.classe==="Sacerdote"){
      bonus = -4
   }
   return bonus
}
export function Rolagem(dado: number) {
   const resultado = Math.floor(Math.random() * dado) + 1;
   return resultado;
}
export function Iniciativa(stock: stock, personagemNome: string) {
   const iniciativa = Rolagem(20);
   if(iniciativa===20){
      const mensagem = personagemNome + " rolou Iniciativa e tirou um ACERTO CRITICO" + iniciativa;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(iniciativa===1){
      const mensagem = personagemNome + " rolou Iniciativa e tirou um ERRO CRITICO" + iniciativa;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(iniciativa>1 && iniciativa<20){
      const mensagem = personagemNome + " rolou Iniciativa " + iniciativa;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   UpdateIniciativa(stock, iniciativa, personagemNome);
}
function UpdateIniciativa(
   stock: stock,
   iniciativa: number,
   personagemNome: string
) {
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ iniciativa: iniciativa })
         .eq("nome", personagemNome)
         .select();
      
      if (error) {
         console.log(error);
      }
   };
   update();
}
function DefineOrdem(stock: stock) {
   const pegaIniciativas = async () => {
      const { data: iniciativas } = await supabase
         .from("Personagens")
         .select("*")
         .eq("campanha", stock.campanhaUsuario);
      const comparado:Array<object> = [{}];
      if (iniciativas) {
         iniciativas.forEach((value) => {
            comparado.push({ iniciativa: value.iniciativa, nome: value.nome });
         });
      }
      return comparado;
   };
   const iniciativas = pegaIniciativas()
}
export function Sorte(stock: stock, personagemNome: string) {
   const sorte = Rolagem(20);
   if(sorte===20){
      const mensagem = personagemNome + " rolou muita sorte " + sorte;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(sorte===1){
      const mensagem = personagemNome + " rolou azar" + sorte;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(sorte>1 && sorte<20){
      const mensagem = personagemNome + " rolou sorte " + sorte;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
}
export function D20(stock: stock, personagemNome: string) {
   const d20 = Rolagem(20);
   if(d20===20){
      const mensagem = personagemNome + " rolou D20, ACERTO CRITICO " + d20;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(d20===1){
      const mensagem = personagemNome + " rolou D20, ERRO CRITICO " + d20;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(d20>1 && d20<20){
      const mensagem = personagemNome + " rolou D20 " + d20;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
}
export function D10(stock: stock, personagemNome: string) {
   const d10 = Rolagem(20);
   if(d10===20){
      const mensagem = personagemNome + " rolou D10, ACERTO CRITICO " + d10;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(d10===1){
      const mensagem = personagemNome + " rolou D10, ERRO CRITICO " + d10;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(d10>1 && d10<20){
      const mensagem = personagemNome + " rolou D10 " + d10;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
}
export function D2(stock: stock, personagemNome: string) {
   const d2 = Rolagem(20);
   if(d2===20){
      const mensagem = personagemNome + " rolou D2, ACERTO CRITICO " + d2;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(d2===1){
      const mensagem = personagemNome + " rolou D2, ERRO CRITICO " + d2;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(d2>1 && d2<20){
      const mensagem = personagemNome + " rolou D2 " + d2;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
}
export function Oportunidade(stock: stock, personagem:any, inimigo:any){
   const dado = Rolagem(20);
   const bonusInimigo = DescobrePercepcao(inimigo)
   if(dado>1 && dado<20){
      if(dado+stock.bonus.destreza>=bonusInimigo+10){
      const mensagem = personagem.nome + " rolou um Ataque de oportunidade e ACERTOU"
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      }else{
         const mensagem = personagem.nome + " rolou um Ataque de oportunidade e ERROU"
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);   
      }
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou um Ataque de oportunidade e ACERTO CRITICO"
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   } 
   if(dado===1){
      const mensagem = personagem.nome + " rolou um Ataque de oportunidade e ERRO CRITICO"
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario); 
   }
}
export function Acrobacia(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreAcrobacia(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou acrobacia " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou acrobacia, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou acrobacia, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Arcanismo(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreAcanismo(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou arcanismo " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou arcanismo, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou arcanismo, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Atletismo(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreAtletismo(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou atletismo " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou atletismo, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou atletismo, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Atuacao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreAtuacao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou atuação " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou atuação, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou atuação, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Construcao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreConstrucao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou construção " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou construção, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou construção, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Enganacao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreEnganacao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou enganação " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou enganação, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou enganação, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Furtividade(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreFurtividade(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou furtividade " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou furtividade, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou furtividade, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Historia(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreHistoria(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou historia " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou historia, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou historia, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Ilusionismo(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreIlusionismo(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou ilusionismo " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou ilusionismo, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou ilusionismo, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Intimidacao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreIntimidacao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou intimidação " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou intimidação, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou intimidação, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Intuicao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreIntuicao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou intuição " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou intuição, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou intuição, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Investigacao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreInvestigacao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou investigação " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou investigação, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou investigação, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function LidarComAnimais(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreLidarComAnimais(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou lidar com animais " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou lidar com animais, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou lidar com animais, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Medicina(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreMedicina(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou medicina " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou medicina, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou medicina, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Natureza(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreNatureza(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou natureza " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou natureza, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou natureza, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Percepcao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobrePercepcao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou percepção " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou percepção, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou percepção, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Persuasao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobrePersuacao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou persuasão " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou persuasão, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou persuasão, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Religiao(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreReligiao(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou religião " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou religião, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou religião, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Sobrevivencia(stock:stock,personagem:any){
   const dado = Rolagem(20)
   const bonus = DescobreSobrevivencia(personagem)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou sobrevivencia " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou sobrevivencia, ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou sobrevivencia, ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function RolaAtributo(stock:stock,personagem:any,bonus:number,tipo:string){
   const dado = Rolagem(20)
   const total = dado+bonus
   if(dado>1 && dado<20){
      const mensagem = personagem.nome + " rolou "+tipo+ total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===20){
      const mensagem = personagem.nome + " rolou "+tipo+", ACERTO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
   }
   if(dado===1){
      const mensagem = personagem.nome + " rolou "+tipo+", ERRO CRITICO " + total;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
function UpdateVida(stock:stock,personagem:any, dano:number){
   const armaduraInicial = personagem.armaduraAtual
   const vidaInicial = personagem.vidaAtual
   if(armaduraInicial-dano<0){
      const mensagem = "A armadura de: "+personagem.nome+", Quebrou"
      enviaMensagem("sistema",mensagem, stock.campanhaUsuario)
   }
   if(armaduraInicial<=0){
      const vidaFinal = vidaInicial-dano
      if(vidaFinal<0){
         const mensagem = "O: "+personagem.nome+", Morreu"
         enviaMensagem("sistema",mensagem, stock.campanhaUsuario)
      }
      const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ vidaAtual: vidaFinal })
         .eq("nome", personagem.nome)
         .select();
       
         if (error) {
            console.log(error);
         }
      };
      update();
   }else{
      const armaduraFinal = armaduraInicial-dano
      const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ armaduraAtual: armaduraFinal })
         .eq("nome", personagem.nome)
         .select();
       
         if (error) {
            console.log(error);
         }
      };
      update();
   }
   
}
function UpdateDanoHabilidade(personagem:any, dano:number){
   const novoDano = personagem.danoHabilidade+dano
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ danoHabilidade: novoDano })
         .eq("nome", personagem.nome)
         .select()
      if (error) {
         console.log(error);
      }
   };
   update();
}
function UpdateVidaCura(personagem:any, cura:number){
   const vidaInicial = personagem.vidaAtual
   const vidaFinal = vidaInicial+cura
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ vidaAtual: vidaFinal })
         .eq("nome", personagem.nome)
         .select();
      
      if (error) {
         console.log(error);
      }
   };
   update();
}
function UpdateMana(personagem:any, mana:number){
   const novaMana = personagem.manaAtual+mana
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ manaAtual: novaMana })
         .eq("nome", personagem.nome)
         .select();
      
      if (error) {
         console.log(error);
      }
   };
   update();
}
function UpdateManaN(personagem:any, mana:number){
   const novaMana = personagem.manaAtual-mana
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ manaAtual: novaMana })
         .eq("nome", personagem.nome)
         .select();
      
      if (error) {
         console.log(error);
      }
   };
   update();
}
function UpdateStatus(personagem:any, status:string){
   const statusInicial = personagem.statusPersonagem
   const statusFinal = statusInicial.unshift(status)
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ statusPersonagem: statusFinal })
         .eq("nome", personagem.nome)
         .select();
       
      if (error) {
         console.log(error);
      }
   };
   update();
}
function UpdateDefesa(personagem:any, defesa:number){
   const novaProtecao = personagem.armaduraAtual+defesa
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ armaduraAtual: novaProtecao })
         .eq("nome", personagem.nome)
         .select();
       
      if (error) {
         console.log(error);
      }
   };
   update();
}
export function UpdateEquipaArmadura(personagem:any, armadura:armadura){
   const proteçãoTotal = personagem.armaduraTotal+armadura.efeito.protecao
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ armaduraTotal: proteçãoTotal })
         .eq("nome", personagem.nome)
         .select();
       
      if (error) {
         console.log(error);
      }
   };
   update();
}
export function UpdateDesEquipaArmadura(personagem:any, armadura:armadura){
   const proteçãoTotal = personagem.armaduraTotal-armadura.efeito.protecao
   const update = async () => {
      const { error } = await supabase
         .from("Personagens")
         .update({ armaduraTotal: proteçãoTotal })
         .eq("nome", personagem.nome)
         .select();
       
      if (error) {
         console.log(error);
      }
   };
   update();
}
export function Soco(stock:stock, personagem:any, inimigo: any){
   const dado = Rolagem(20)
   const BDInimigo = DescobreBonus(inimigo?.destreza)
   if(dado>1 && dado<20){
      if(dado+stock.bonus.forca>10+BDInimigo){
         const mensagem = personagem.nome + " atacou com um soco " + dado+"+"+stock.bonus.forca;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
         if(personagem.statusPersonagem[0]==="normal"){
            const dano = 5+stock.bonus.forca
            UpdateVida(stock,inimigo,dano)
         }
         if(personagem.statusPersonagem[0]==="berserker1"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 5+stock.bonus.forca
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 2*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker2"){
            const dano = 2*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
         if(personagem.statusPersonagem[0]==="berserker3"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 3*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 2*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker4"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 2*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 3*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker5"){
            const dano = 3*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
      }else{
         const mensagem = personagem.nome + " atacou com um soco, e errou " + dado+"+"+stock.bonus.forca;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      }
   }
   if(dado===20){
      const mensagem = personagem.nome + " atacou com um soco, ACERTO CRITICO " + dado+"+"+stock.bonus.forca;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      if(personagem.statusPersonagem[0]==="normal"){
         const dano = 2*(5+stock.bonus.forca)
         UpdateVida(stock,inimigo,dano)
      }
      if(personagem.statusPersonagem[0]==="berserker1"){
         const por = Rolagem(2)
         if(por===1){
            const dano = 2*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }else{
            const dano = 4*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
      }
      if(personagem.statusPersonagem[0]==="berserker2"){
         const dano = 4*(5+stock.bonus.forca)
         UpdateVida(stock,inimigo,dano)
      }
      if(personagem.statusPersonagem[0]==="berserker3"){
         const por = Rolagem(2)
         if(por===1){
            const dano = 6*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }else{
            const dano = 4*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
      }
      if(personagem.statusPersonagem[0]==="berserker4"){
         const por = Rolagem(2)
         if(por===1){
            const dano = 6*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }else{
            const dano = 4*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
      }
      if(personagem.statusPersonagem[0]==="berserker5"){
         const dano = 6*(5+stock.bonus.forca)
         UpdateVida(stock,inimigo,dano)
      }
   }
   if(dado===1){
      const mensagem = personagem.nome + " atacou com um soco, ERRO CRITICO " + dado+"+"+stock.bonus.forca;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Chute(stock:stock, personagem:any, inimigo: any){
   const dado = Rolagem(20)
   const BDInimigo = DescobreBonus(inimigo?.destreza)
   if(dado>1 && dado<20){
      if(dado+stock.bonus.forca>10+BDInimigo){
         const mensagem = personagem.nome + " atacou com um chute " + dado+"+"+stock.bonus.forca;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
         if(personagem.statusPersonagem[0]==="normal"){
            const dano = 5+stock.bonus.forca
            UpdateVida(stock,inimigo,dano)
         }
         if(personagem.statusPersonagem[0]==="berserker1"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 5+stock.bonus.forca
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 2*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker2"){
            const dano = 2*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
         if(personagem.statusPersonagem[0]==="berserker3"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 3*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 2*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker4"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 2*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 3*(5+stock.bonus.forca)
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker5"){
            const dano = 3*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
      }else{
         const mensagem = personagem.nome + " atacou com um chute, e errou " + dado+"+"+stock.bonus.forca;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      }
   }
   if(dado===20){
      const mensagem = personagem.nome + " atacou com um chute, ACERTO CRITICO " + dado+"+"+stock.bonus.forca;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      if(personagem.statusPersonagem[0]==="normal"){
         const dano = 2*(5+stock.bonus.forca)
         UpdateVida(stock,inimigo,dano)
      }
      if(personagem.statusPersonagem[0]==="berserker1"){
         const por = Rolagem(2)
         if(por===1){
            const dano = 2*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }else{
            const dano = 4*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
      }
      if(personagem.statusPersonagem[0]==="berserker2"){
         const dano = 4*(5+stock.bonus.forca)
         UpdateVida(stock,inimigo,dano)
      }
      if(personagem.statusPersonagem[0]==="berserker3"){
         const por = Rolagem(2)
         if(por===1){
            const dano = 6*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }else{
            const dano = 4*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
      }
      if(personagem.statusPersonagem[0]==="berserker4"){
         const por = Rolagem(2)
         if(por===1){
            const dano = 6*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }else{
            const dano = 4*(5+stock.bonus.forca)
            UpdateVida(stock,inimigo,dano)
         }
      }
      if(personagem.statusPersonagem[0]==="berserker5"){
         const dano = 6*(5+stock.bonus.forca)
         UpdateVida(stock,inimigo,dano)
      }
   }
   if(dado===1){
      const mensagem = personagem.nome + " atacou com um chute, ERRO CRITICO " + dado+"+"+stock.bonus.forca;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Desarmar(stock:stock, personagem:any, inimigo: any){
   const dado = Rolagem(20)
   const BDInimigo = DescobreBonus(inimigo?.destreza)
   if(dado>1 && dado<20){
      if(dado+stock.bonus.destreza>10+BDInimigo){
         const mensagem = personagem.nome + " desarmou o inimigo " + dado+"+"+stock.bonus.destreza;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
         UpdateStatus(inimigo,"desarmado")
      }else{
         const mensagem = personagem.nome + " tentou desarmar o inimigo " + dado+"+"+stock.bonus.destreza;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      }
   }
   if(dado===20){
      const mensagem = personagem.nome + " tentou desarmar  o inimigo, ACERTO CRITICO " + dado+"+"+stock.bonus.destreza;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      UpdateStatus(inimigo,"desarmado")
   }
   if(dado===1){
      const mensagem = personagem.nome + " tentou desarmar  o inimigo, ERRO CRITICO " + dado+"+"+stock.bonus.destreza;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Imobilizar(stock:stock, personagem:any, inimigo: any){
   const dado = Rolagem(20)
   const BFInimigo = DescobreBonus(inimigo?.forca)
   if(dado>1 && dado<20){
      if(dado+stock.bonus.forca>10+BFInimigo){
         const mensagem = personagem.nome + " Imobilizou o inimigo " + dado+"+"+stock.bonus.forca;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
         UpdateStatus(inimigo,"imobilizado")
      }else{
         const mensagem = personagem.nome + " tentou imobilizar o inimigo " + dado+"+"+stock.bonus.forca;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      }
   }
   if(dado===20){
      const mensagem = personagem.nome + " tentou imobilizar  o inimigo, ACERTO CRITICO " + dado+"+"+stock.bonus.forca;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      UpdateStatus(inimigo,"imobilizado")
   }
   if(dado===1){
      const mensagem = personagem.nome + " tentou imobilizar  o inimigo, ERRO CRITICO " + dado+"+"+stock.bonus.forca;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function Atordoar(stock:stock, personagem:any, inimigo: any){
   const dado = Rolagem(20)
   const BCInimigo = DescobreBonus(inimigo?.constituicao)
   if(dado>1 && dado<20){
      if(dado+stock.bonus.forca>10+BCInimigo){
         const mensagem = personagem.nome + " atordoou o inimigo " + dado+"+"+stock.bonus.forca;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
         UpdateStatus(inimigo,"atordoado")
      }else{
         const mensagem = personagem.nome + " tentou atordoar o inimigo " + dado+"+"+stock.bonus.forca;
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      }
   }
   if(dado===20){
      const mensagem = personagem.nome + " tentou atordoar  o inimigo, ACERTO CRITICO " + dado+"+"+stock.bonus.forca;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
      UpdateStatus(inimigo,"atordoado")
   }
   if(dado===1){
      const mensagem = personagem.nome + " tentou imobilizar  o inimigo, ERRO CRITICO " + dado+"+"+stock.bonus.forca;
      enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);     
   }
}
export function AtaqueComArma(
   stock:stock,
   personagem:any, 
   inimigo:any, 
   arma:arma){
   const dado = Rolagem(20)
   const BDInimigo = DescobreBonus(inimigo?.destreza)

   if(!arma.aDistancia){
      const danoArma = arma.dano+personagem.danoHabilidade
      const BCPersonagem = DescobreBonusClasse(stock,personagem)
      if(dado>1 && dado<20){
         if(dado+BCPersonagem>10+BDInimigo){
            if(personagem.statusPersonagem[0]==="normal"){
               const dano = danoArma
               const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }
            if(personagem.statusPersonagem[0]==="berserker1"){
               const por = Rolagem(2)
               if(por===1){
                  const dano = danoArma
                  const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
                  enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
                  UpdateVida(stock,inimigo,dano)
               }else{
                  const dano = 2*danoArma
                  const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
                  enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
                  UpdateVida(stock,inimigo,dano)
               }
            }
            if(personagem.statusPersonagem[0]==="berserker2"){
               const dano = 2*danoArma
               const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }
            if(personagem.statusPersonagem[0]==="berserker3"){
               const por = Rolagem(2)
               if(por===1){
                  const dano = 3*danoArma
                  const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
                  enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
                  UpdateVida(stock,inimigo,dano)
               }else{
                  const dano = 2*danoArma
                  const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
                  enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
                  UpdateVida(stock,inimigo,dano)
               }
            }
            if(personagem.statusPersonagem[0]==="berserker4"){
               const por = Rolagem(2)
               if(por===1){
                  const dano = 2*danoArma
                  const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
                  enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
                  UpdateVida(stock,inimigo,dano)
               }else{
                  const dano = 3*danoArma
                  const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
                  enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
                  UpdateVida(stock,inimigo,dano)
               }
            }
            if(personagem.statusPersonagem[0]==="berserker5"){
               const dano = 3*danoArma
               const mensagem = personagem.nome + " atacou com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }
         }else{
            const mensagem = personagem.nome + " atacou com um soco, e errou " + dado;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
         }
      }
      if(dado===20){
         if(personagem.statusPersonagem[0]==="normal"){
            const dano = 2*danoArma
            const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
         }
         if(personagem.statusPersonagem[0]==="berserker1"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 2*danoArma
               const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 4*danoArma
               const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker2"){
            const dano = 4*danoArma
            const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
         }
         if(personagem.statusPersonagem[0]==="berserker3"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 6*danoArma
               const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 4*danoArma
               const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker4"){
            const por = Rolagem(2)
            if(por===1){
               const dano = 6*danoArma
               const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }else{
               const dano = 4*danoArma
               const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
               enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
               UpdateVida(stock,inimigo,dano)
            }
         }
         if(personagem.statusPersonagem[0]==="berserker5"){
            const dano = 6*danoArma
            const mensagem = personagem.nome + " ACERTO CRITICO com arma: "+arma?.nome+" "+ dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
         }
      }
      if(dado===1){
         const mensagem = personagem.nome + " ERRO CRITICO com arma: "+arma?.nome+" "+ dado
         enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);   
      }
   }
   if(arma.aDistancia){
      const flechas:arma[] = []
      const virotes:arma[] = []
      const balas:arma[] = []
      personagem.armas.forEach((value:any)=>{
         if(value.municaoArco){
            if(value.equipada){
               flechas.push(value)
            }
         }
         if(value.municaoBesta){
            if(value.equipada){
               virotes.push(value)
            }
         }
         if(value.municaoFogo){
            if(value.equipada){
               balas.push(value)
            }
         }
      })
      if(arma.tipo==="arco"){
         flechas[0].quantidade = flechas[0].quantidade-1
         if(dado>1 && dado<20){
            if(dado+stock.bonus.precisao>10+BDInimigo){
            const dano = arma.dano*flechas[0].dano
            const mensagem = personagem.nome + " atacou com arco: "+arma?.nome+" "+dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
            }
         }
         if(dado===20){
            const dano = 2*(arma.dano*flechas[0].dano)
            const mensagem = personagem.nome + " atacou com arco: "+arma?.nome+" "+dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
         }
         if(dado===1){
            const mensagem = personagem.nome + " ERRO CRITICO com arco: "+arma?.nome+" "+ dado
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);   
         }
      }
      if(arma.tipo==="besta"){
         virotes[0].quantidade = virotes[0].quantidade-1
         if(dado>1 && dado<20){
            if(dado+stock.bonus.precisao>10+BDInimigo){
            const dano = arma.dano*virotes[0].dano
            const mensagem = personagem.nome + " atacou com arco: "+arma?.nome+" "+dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
            }
         }
         if(dado===20){
            const dano = 2*(arma.dano*virotes[0].dano)
            const mensagem = personagem.nome + " atacou com arco: "+arma?.nome+" "+dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
         }
         if(dado===1){
            const mensagem = personagem.nome + " ERRO CRITICO com arco: "+arma?.nome+" "+ dado
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);   
         }
      }
      if(arma.tipo==="fogo"){
         balas[0].quantidade = balas[0].quantidade-1
         if(dado>1 && dado<20){
            if(dado+stock.bonus.precisao>10+BDInimigo){
            const dano = arma.dano*balas[0].dano
            const mensagem = personagem.nome + " atacou com arco: "+arma?.nome+" "+dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
            }
         }
         if(dado===20){
            const dano = 2*(arma.dano*balas[0].dano)
            const mensagem = personagem.nome + " atacou com arco: "+arma?.nome+" "+dado+", dano: "+dano;
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);
            UpdateVida(stock,inimigo,dano)
         }
         if(dado===1){
            const mensagem = personagem.nome + " ERRO CRITICO com arco: "+arma?.nome+" "+ dado
            enviaMensagem(stock.usuario.nomeUsuario, mensagem, stock.campanhaUsuario);   
         }
      }
   }
}
export function LevantaEscudo(stock:stock,personagem:any,escudo:armadura){

}
export function UsaHabilidade(stock:stock, personagem:any, alvo:any, habilidade:habilidade){
   if(habilidade.efeito.narrativo){
      const mensagem = personagem.nome+" usou a habilidade: "+habilidade.nome
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
   }
   if(habilidade.efeito.defesa>0){
      UpdateDefesa(alvo,habilidade.efeito.defesa)
      const mensagem = personagem.nome+" usou a habilidade: "+habilidade.nome
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)  
   }
   if(habilidade.efeito.debuff!==""){
      UpdateStatus(alvo,habilidade.efeito.debuff)
      const mensagem = personagem.nome+" usou a habilidade: "+habilidade.nome
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
   }
   if(habilidade.efeito.buff!==""){
      UpdateStatus(alvo,habilidade.efeito.buff)
      const mensagem = personagem.nome+" usou a habilidade: "+habilidade.nome
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
   }
   if(habilidade.efeito.dano>0){
      UpdateDanoHabilidade(alvo,habilidade.efeito.dano)
      const mensagem = personagem.nome+" usou a habilidade: "+habilidade.nome
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
   }
   if(habilidade.efeito.cura>0){
      UpdateVidaCura(alvo,habilidade.efeito.cura)
      const mensagem = personagem.nome+" usou a habilidade: "+habilidade.nome
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
   }
}
export function UsaMagia(stock:stock, personagem:any, alvo:any, magia:magia){
   const dado = Rolagem(20)

   if(dado<10&&dado>1){
      const mensagem = personagem.nome+" falhou em usar a magia: "+magia.nome+" , tirou: "+dado 
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
   }
   if(dado>10&&dado<20){
      UpdateManaN(personagem,magia.custo.mana)
      if(magia.efeito.narrativo){
         const mensagem = personagem.nome+" usou a magia: "+magia.nome+" , tirou: "+dado 
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.defesa>0){
         UpdateDefesa(alvo,magia.efeito.defesa)
         const mensagem = personagem.nome+" usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)  
      }
      if(magia.efeito.debuff!==""){
         UpdateStatus(alvo,magia.efeito.debuff)
         const mensagem = personagem.nome+" usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.buff!==""){
         UpdateStatus(alvo,magia.efeito.buff)
         const mensagem = personagem.nome+" usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.dano>0){
         UpdateVida(stock,alvo,magia.efeito.dano)
         const mensagem = personagem.nome+" usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.cura>0){
         UpdateVidaCura(alvo,magia.efeito.cura)
         const mensagem = personagem.nome+" usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      } 
   }
   if(dado===20){
      UpdateManaN(personagem,magia.custo.mana)
      if(magia.efeito.narrativo){
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado 
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.defesa>0){
         UpdateDefesa(alvo,magia.efeito.defesa)
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)  
      }
      if(magia.efeito.debuff!==""){
         UpdateStatus(alvo,magia.efeito.debuff)
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.buff!==""){
         UpdateStatus(alvo,magia.efeito.buff)
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.dano>0){
         UpdateVida(stock,alvo,magia.efeito.dano)
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.cura>0){
         UpdateVidaCura(alvo,magia.efeito.cura)
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      } 
   }
   if(dado===1){
      if(magia.efeito.narrativo){
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado 
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.defesa>0){
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)  
      }
      if(magia.efeito.debuff!==""){
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.buff!==""){
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.dano>0){
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
      if(magia.efeito.cura>0){
         const mensagem = personagem.nome+" ACERTO CRITICO ao usou a magia: "+magia.nome+" , tirou: "+dado
         enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
      }
   }
}
export function usaUtilidade(stock:stock, personagem:any, alvo:any, utilidade:utilidade){
   if(utilidade.cura>0){
      UpdateVidaCura(alvo,utilidade.cura)
      const mensagem = personagem.nome+" usou a utilidade: "+utilidade.nome 
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
   }
   if(utilidade.mana>0){
      UpdateMana(alvo,utilidade.mana)
      const mensagem = personagem.nome+" usou a utilidade: "+utilidade.nome 
      enviaMensagem(stock.usuario.nomeUsuario,mensagem, stock.campanhaUsuario)
   }
}  
export function Matar(stock:stock, alvo:any){
   const mensagem = "O personagem: "+alvo.nome+", morreu"
   enviaMensagem("sistema", mensagem,stock.campanhaUsuario)
   const update = async () =>{
      const {error} = await supabase
      .from("Personagens")
      .update({ vidaAtual: 0})
      .select()

      if(error){
         console.log(error)
      }
   }
   update()
}
export function DarDano(stock:stock, alvo:any, dano:number){
   const novaVida = alvo.vidaAtual-dano
   const mensagem = "O personagem: "+alvo.nome+", tomou: "+dano+" de dano"
   enviaMensagem("sistema", mensagem,stock.campanhaUsuario)
   const update = async () =>{
      const {error} = await supabase
      .from("Personagens")
      .update({ vidaAtual: novaVida})
      .select()

      if(error){
         console.log(error)
      }
   }
   update()
}
export function DarCura(stock:stock, alvo:any, cura:number){
   const novaVida = alvo.vidaAtual+cura
   const mensagem = "O personagem: "+alvo.nome+", recebeu: "+cura+" de cura"
   enviaMensagem("sistema", mensagem,stock.campanhaUsuario)
   const update = async () =>{
      const {error} = await supabase
      .from("Personagens")
      .update({ vidaAtual: novaVida})
      .select()

      if(error){
         console.log(error)
      }
   }
   update()
}
export function DarMana(stock:stock, alvo:any, mana:number){
   const novaMana = alvo.manaAtual+mana
   const mensagem = "O personagem: "+alvo.nome+", recebeu: "+mana+" de mana"
   enviaMensagem("sistema", mensagem,stock.campanhaUsuario)
   const update = async () =>{
      const {error} = await supabase
      .from("Personagens")
      .update({ manaAtual: novaMana})
      .select()

      if(error){
         console.log(error)
      }
   }
   update()
}
export function TirarMana(stock:stock, alvo:any, mana:number){
   const novaMana = alvo.manaAtual-mana
   const mensagem = "O personagem: "+alvo.nome+", perdeu: "+mana+" de mana"
   enviaMensagem("sistema", mensagem,stock.campanhaUsuario)
   const update = async () =>{
      const {error} = await supabase
      .from("Personagens")
      .update({ manaAtual: novaMana})
      .select()

      if(error){
         console.log(error)
      }
   }
   update()
}
export function DarArmadura(stock:stock, alvo:any, armadura:number){
   const novaArmadura = alvo.armaduraAtual+armadura
   const mensagem = "O personagem: "+alvo.nome+", recebeu: "+armadura+" de armadura"
   enviaMensagem("sistema", mensagem,stock.campanhaUsuario)
   const update = async () =>{
      const {error} = await supabase
      .from("Personagens")
      .update({ armaduraAtual: novaArmadura})
      .select()

      if(error){
         console.log(error)
      }
   }
   update()
}
export function TirarArmadura(stock:stock, alvo:any, armadura:number){
   const novaArmadura = alvo.armaduraAtual-armadura
   const mensagem = "O personagem: "+alvo.nome+", perdeu: "+armadura+" de armadura"
   enviaMensagem("sistema", mensagem,stock.campanhaUsuario)
   const update = async () =>{
      const {error} = await supabase
      .from("Personagens")
      .update({ armaduraAtual: novaArmadura})
      .select()

      if(error){
         console.log(error)
      }
   }
   update()
}