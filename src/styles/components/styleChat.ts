import {
    Form,
    FormInput,
    FormSubmit,
 } from "ariakit/form";
import styled from "styled-components";
import { device } from "../devices";
import { FiArrowLeft, FiSend } from "react-icons/fi"

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
export const CaixaMensagens = styled.div`
    height: 88%;
    width: 98%;
    background-color:${(props) => props.theme.cores.psicodelicas[700]};
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
export const ListaMensagens = styled.div`
    height:20%;
    width: 99%;
    display: flex;
    flex-direction: column;
`;
export const UsuarioMensagem = styled.p`
    font-size: .9rem;
    color:${(props) => props.theme.cores.rosinhas[100]};
`;
export const TextoMensagem = styled.p`
    font-size: 1rem;
    color:${(props) => props.theme.cores.rosinhas[50]};
`;
export const CaixaMensagem = styled.div`
    height: auto;
    width: 99%;
    margin-top: 10px;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    gap: 10px;
`;
export const CaixaEnvio = styled(Form)`
    height: 10%;
    width: 98%;
    flex-direction: row;
`;
export const Input = styled(FormInput)`
    height: 96%;
    width: 90%;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    :focus{
        border: 2px solid ${(props) => props.theme.cores.rosinhas[200]};
    }
`;
export const BotaoIcon = styled(FormSubmit)`
    height: 9.5%;
    width: 10%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    box-sizing: border-box;
    border-radius: .375rem;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[700]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
    @media (max-width: 1000px) {
        height: 34px;
        width: 34px;
    }
`;

export const IconEnviar = styled(FiSend)`
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    @media (max-width: 1000px) {
        height: 20px;
        width: 20px;
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