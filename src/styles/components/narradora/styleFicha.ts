import styled from "styled-components";
import { FiRotateCcw } from "react-icons/fi";

export const Caixa = styled.div`
    height: 98%;
    width: 98%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-anchor: none;
    ::-webkit-scrollbar{
        width: 10px;
        background-color: ${(props) => props.theme.cores.psicodelicas[700]};
        border-radius: 10px
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme.cores.psicodelicas[900]};
        border-radius: 10px;
    } 
`;
export const CaixaAlidos = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const CaixaInimigos = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const CaixaAlido = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const CaixaInimigo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const TituloCaixas = styled.p`
    height: 20%;
    width: 98%;
    font-size: 2rem;
    margin:1%;
    padding: 1%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const NomeAtivo = styled.div`
    height: auto;
    width: 98%;
    margin:1%;
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const NomeNpc = styled.p`
    width: 48%;
    font-size: 1.5rem;
    margin:1%;
    padding: .5%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const Ativa = styled.button`
    width: 20%;
    font-size: 1.5rem;
    margin:1%;
    padding: .5%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[800]};  
    }
`;
export const AtributosStatus = styled.div`
    height: 50%;
    width: 99%;
    display: flex;
    margin: 1%;
    flex-direction: row;
    justify-content: space-around;  
`;
export const Atributos = styled.div`
    height: 98%;
    width: 40%;
    padding: .25em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
`;
export const Atributo = styled.p`
    padding: .25em;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const Status = styled.div`
    height: 98%;
    width: 58%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const Armaduras = styled.div`
    height: 100%;
    width: 32%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    justify-content: space-around;
`;
export const ArmaduraTotal = styled.p`
    padding: .25em;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const ArmaduraAtual = styled.p`
    padding: .25em;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const Vidas = styled.div`
    height: 100%;
    width: 32%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    justify-content: space-around;
`;
export const VidaTotal = styled.p`
    padding: .25em;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const VidaAtual = styled.p`
    padding: .25em;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const Manas = styled.div`
    height: 100%;
    width: 32%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    justify-content: space-around;
`;
export const ManaTotal = styled.p`
    padding: .25em;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const ManaAtual = styled.p`
    padding: .25em;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const CaixaHabilidades = styled.div`
    height: auto;
    width: 99%;
    height: auto;
    box-sizing: border-box;
`;
export const TituloHabilidades = styled.p`
    width: 98%;
    margin-left: 1%;
    margin-top:1%;
    padding: .25em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1.25rem;
`;
export const Habilidades = styled.div`
    width: 99%;
    height: auto;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
`;
export const Habilidade = styled.div`
    width: 99%;
    height: auto;
    display: flex;
    margin: 1%;
    padding: .5em;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const HabilidadeNome = styled.p`
    color:${(props) => props.theme.cores.rosinhas[100]};
    font-size: 1.25rem;
`;
export const HabilidadeDescricao = styled.p`
    width: 98%;
    padding: .25em;
    margin: 1%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1rem;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const TituloHabilidade = styled.div`
    width: 98%;
    height: 30%;
    padding: .25em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: inline-flex;
`;
export const CaixaMagias = styled.div`
    width: 99%;
    height: auto;
    margin-top:3%;
    box-sizing: border-box;
`;
export const TituloMagias = styled.div`
    width: 98%;
    margin-left: 1%;
    margin-top:1%;
    padding: .25em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1.25rem;
`;
export const Magias = styled.div`
    width: 99%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
`;
export const Magia = styled.div`
    width: 99%;
    height: auto;
    margin: 1%;
    padding: .5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const TituloMagia = styled.div`
    width: 98%;
    height: auto;
    margin: 1%;
    padding: .25em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: inline-flex;
`;
export const NomeMagia = styled.p`
    color:${(props) => props.theme.cores.rosinhas[100]};
    font-size: 1.25rem;
`;
export const DescricaoMagia = styled.p`
    width: 98%;
    height: auto;
    padding: .25em;
    margin: .5%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1rem;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const CaixaItens = styled.div`
    width: 99%;
    height: auto;
    margin-top:.5%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;
export const TituloIten = styled.div`
    width: 98%;
    margin-left: 1%;
    margin-top:1%;
    padding: .25em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1.25rem;
`;
export const Itens = styled.div`
    width: 99%;
    height: auto;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
`;
export const Iten = styled.div`
    width: 99%;
    height: auto;
    margin: 1%;
    padding: .5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const NomeIten = styled.div`
    width: 98%;
    height: auto;
    padding: .25em;
    margin: .5%;
    color:${(props) => props.theme.cores.rosinhas[100]};
    font-size: 1.25rem;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
export const DescricaoIten = styled.p`
    width: 98%;
    height: auto;
    padding: .25em;
    margin: .5%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1rem;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const IconRefresh = styled(FiRotateCcw)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const BotaoRefresh = styled.button`
    width: 98%;
    margin: 1%;
    padding: 1%;
    border-radius: .325em;
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    }
`;