import {
    Form,
    FormInput,
    FormLabel,
    FormSubmit,
 } from "ariakit/form";
import styled from "styled-components";
import { device } from "./devices";
import { FiHome } from "react-icons/fi"

export const Fundo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: radial-gradient(
        circle,
        ${(props) => props.theme.cores.psicodelicas[400]},
        ${(props) => props.theme.cores.psicodelicas[800]});
`;

export const Caixa = styled(Form)`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: ${(props) => props.theme.cores.psicodelicas[900]};
    @media ${device.desktop}{
        height: 70%;
        width: 50%;
    }
    @media ${device.laptop}{
        height: 70%;
        width: 50%;
    }
    @media ${device.tablet}{
        height: 80%;
        width: 80%;
    }
    @media ${device.mobile}{
        height: 90%;
        width: 90%;
    }
`;

export const Texto = styled(FormLabel)`
    font-size:3rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;

export const Input = styled(FormInput)`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    margin: 2.5%;
    padding: 1%;
    font-size: 2rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]}; 
    }
    :focus{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
    ::placeholder{
        color: ${(props) => props.theme.cores.rosinhas[50]};
        font-size: 1.5rem;
    }
    @media ${device.desktop}{
        height: 15%;
        width: 90%;
    }
    @media ${device.laptop}{
        height: 15%;
        width: 90%;
    }
    @media ${device.tablet}{
        height: 12.5%;
        width: 90%;
    }
    @media ${device.mobile}{
        height: 12.5%;
        width: 90%;
    }
`;

export const Botao = styled(FormSubmit)`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-size: 3rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]}; 
    }
    @media ${device.desktop}{
        height: 15%;
        width: 90%;
    }
    @media ${device.laptop}{
        height: 15%;
        width: 90%;
    }
    @media ${device.tablet}{
        height: 12.5%;
        width: 90%;
        cursor: pointer;
    }
    @media ${device.mobile}{
        height: 12.5%;
        width: 90%;
        cursor: pointer;
    }
`;

export const BotaoIcon = styled.button`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    box-sizing: border-box;
    border-radius: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
    @media ${device.desktop}{
        height: 80px;
        width: 80px;
        left: 20px;
        top: 20px;
    }
    @media ${device.laptop}{
        height: 80px;
        width: 80px;
        left: 20px;
        top: 20px;
    }
    @media ${device.tablet}{
        height: 80px;
        width: 80px;
        left: 20px;
        top: 20px;
    }
    @media ${device.mobile}{
        height: 60px;
        width: 60px;
        left: 10%;
        top: 8%;
    }
`;

export const IconHome = styled(FiHome)`
    color: ${(props) => props.theme.cores.rosinhas[50]};
    @media ${device.desktop}{
        height: 40px;
        width: 40px;
    }
    @media ${device.laptop}{
        height: 40px;
        width: 40px;
    }
    @media ${device.tablet}{
        height: 40px;
        width: 40px;
    }
    @media ${device.mobile}{
    height: 25px;
    width: 25px;
    }
`;