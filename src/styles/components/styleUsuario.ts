import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";
import { device } from "../devices";

export const Caixa = styled.div`
    height: 98%;
    width: 98%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    @media (max-width: 1000px) {
        height: 85%;
        width: 85%;
    }
`;
export const CaixaUsuario = styled.div`
    width: 98%;
    height: 30%;
    margin: 1%;;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    font-size: 1.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 1000px) {
        height: 48%;
        width: 98%;
    }
`;
export const NomeUsuario = styled.p`
    width: 60%;
    height: 50%;
    padding: 1em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[100]};
    font-size: 2rem; 
    @media (max-width: 1000px) {
        height: 89%;
        width: 70%;
    }
`;
export const BotaoLogout = styled.button`
    cursor: pointer;
    padding: 5%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]}; 
    }
`;
export const CaixaAcoes = styled.div`
    width: 98%;
    height: 30%;
    margin: 1%;;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border-radius: .375rem;
    box-sizing: border-box;
    font-size: 1.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 1000px) {
        height: 48%;
        width: 98%;
    }
`;
export const Texto = styled.p`
    width: 60%;
    height: 65%;
    padding: 1em;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    border-radius: .375rem;
    box-sizing: border-box;
    color:${(props) => props.theme.cores.rosinhas[100]};
    font-size: 2rem;
    @media (max-width: 1000px) {
        height: 89%;
        width: 70%;
    }
`;
export const Botao = styled.button`
    cursor: pointer;
    padding: 5%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]}; 
    }
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