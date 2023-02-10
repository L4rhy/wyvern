import styled from "styled-components";
import { GiPentagramRose } from "react-icons/gi";

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
export const Titulo = styled.div`
    height: auto;
    width: 98%;
    font-size: 1.5rem;
    margin:1%;
    padding: 1%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const Texto = styled.div`
    height: 15%;
    width: 98%;
    font-size: 1rem;
    margin:1%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap:40px;
`;
export const Input = styled.input`
    width: 20%;
    margin: 1%;
    padding: 1%;
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    color: ${(props) => props.theme.cores.rosinhas[50]}; 
`;
export const Icon = styled(GiPentagramRose)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const BotaoIcon = styled.button`
    height: 50px;
    width: 50px;
    margin: 1%;
    border-radius: 100%;
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoEscolha = styled.select`
    height: 50%;
    width: 20%;
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    color: ${(props) => props.theme.cores.rosinhas[50]}; 
    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoOpcao = styled.option`
    width: 96%;
    height: auto;
    margin: .5em;
    padding: 1%;
    font-size: 1rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    }
`;