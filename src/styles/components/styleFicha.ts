import styled from "styled-components";
import { FiArrowLeft, FiMessageCircle } from "react-icons/fi"
import { device } from "../devices";

export const Caixa = styled.div`    
    height: 98%;
    width: 98%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 10px;
        background-color: ${(props) => props.theme.cores.psicodelicas[700]};
        border-radius: 10px
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme.cores.psicodelicas[900]};
        border-radius: 10px;
    }
    @media (max-width: 1000px) {
        height: 85%;
        width: 85%;
    }
`;
export const NomeNivel = styled.div`
    height: 20%;
    width: 99%;
    display: flex;
    margin-top: .5em;
    margin-left: 1%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
export const Nome = styled.p`
    width: 50%;
    padding: .5em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
`;
export const Nivel = styled.p`
    width: 18%;
    padding: .5em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
`;
export const StatusPersonagem = styled.p`
    width: 28%;
    padding: .5em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
`;
export const EspecieClasse = styled.div`
    height: 20%;
    width: 99%;
    display: flex;
    margin-top: .5em;
    margin-left: 1%;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
`;
export const Especie = styled.p`
    width: 41%;
    padding: .5em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
`;
export const Classe = styled.p`
    width: 28%;
    padding: .5em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
`;
export const Aspecto = styled.p`
    width: 28%;
    padding: .5em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
`;
export const AtributosStatus = styled.div`
    height: 50%;
    width: 99%;
    display: flex;
    margin-top: .5em;
    margin-left: 1%;
    flex-direction: row;
    justify-content: space-around;
`;
export const Atributos = styled.div`
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
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const StatusMoedas = styled.div`
    width: 100%;
    height: 100%;
    margin-left: .5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const Armaduras = styled.div`
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
export const Moedas = styled.p`
    padding: .25em;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const CaixaMoedas = styled.div`
    height: 28%;
    width: 98%;
    margin-left: 1%;
    margin-top:1%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const CaixaProeficiencia = styled.div`
    width: 99%;
    height: 60%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1000px) {
        height: auto;
        width: 98%;
    }
`;
export const TituloProeficiencia = styled.p`
    width: 99%;
    height: 10%;
    margin-left: 1%;
    margin-top:1%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1.25rem;
`;
export const CaixasProeficiencias = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;
export const CaixaProeficiencias1 = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 1%;
    margin-top:1%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const CaixaProeficiencias2 = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 1%;
    margin-top:1%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const Proeficiencia = styled.p`
    width: 98%;
    height: 10%;
    margin: 1%;
    padding: .2em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1rem;
`;
export const ProeficienciaAnimais = styled.p`
    width: 98%;
    height: 90%;
    margin: 1%;
    padding: .2em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1rem;
`;
export const P = styled.p`
    color:${(props) => props.theme.cores.rosinhas[100]};
    font-size: 1.25rem;
    display: inline-flex;
`;
export const CaixaAnimais = styled.div`
    width: 99%;
    height: 15%;
    margin-left: 1%;
    margin-top: .7em;
    padding: .1em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CaixaLinguas = styled.div`
    width: 98%;
    height: 40%;
    margin-left: 1%;
    margin-top: 1em;
    padding: .2em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
export const Linguas = styled.p`
    width: 32%;
    height: 92%;
    padding-bottom: .5em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[50]};
    font-size: 1rem;
    text-align: center;
`;
export const CaixaHabilidades = styled.div`
    width: 99%;
    height: auto;
    box-sizing: border-box;
`;
export const TituloHabilidades = styled.div`
    width: 98%;
    height: 25%;
    margin: 1%;
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
export const Icon = styled(FiMessageCircle)`
    width: 15px;
    height: 15px;
    color:${(props) => props.theme.cores.rosinhas[50]};
`;
export const BotaoIcon = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
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
export const NomeIten = styled.p`
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
export const CaixaHistoria = styled.div`
    width: 99%;
    height: auto;
    margin-top:.5%;
    margin-left: .5%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;
export const TituloHistoria = styled.p`
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
export const Historia = styled.p`
    width: 98%;
    height: auto;
    padding: .25em;
    margin-left: 1%;
    margin-top: .5%;
    margin-bottom: .5%;
    color:${(props) => props.theme.cores.rosinhas[100]};
    font-size: 1.25rem;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const CaixaAparencia = styled.div`
    width: 99%;
    height: auto;
    margin-top:.5%;
    margin-left: .5%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;
export const TituloAparencia = styled.p`
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
export const Aparencia = styled.p`
    width: 98%;
    height: auto;
    padding: .25em;
    margin-left: 1%;
    margin-top: .5%;
    margin-bottom: .5%;
    color:${(props) => props.theme.cores.rosinhas[100]};
    font-size: 1.25rem;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const Fundo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: radial-gradient(
        circle,
        ${(props) => props.theme.cores.psicodelicas[400]},
        ${(props) => props.theme.cores.psicodelicas[700]});
`;
export const BotaoVolta = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    left: 5px;
    top: 5px;
    border: none;
    border-radius: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const IconVolta = styled(FiArrowLeft)`
    height: 40px;
    width: 30px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;