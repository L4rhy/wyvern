import {
    Popover,
    PopoverArrow,
    PopoverDisclosure,
    PopoverHeading,
} from "ariakit/popover";
import { Button } from "ariakit";
import styled from "styled-components"
import { device } from "./devices"
import { FiUser } from "react-icons/fi"

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
export const Caixa = styled.div`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5%;
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
export const Texto = styled.h1`
    font-size:2.5rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};

`;
export const Botao = styled(Button)`
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
        width: 80%;
    }
    @media ${device.laptop}{
        height: 15%;
        width: 80%;
    }
    @media ${device.tablet}{
        height: 10%;
        width: 90%;
    }
    @media ${device.mobile}{
        height: 10%;
        width: 90%;
        cursor: pointer;
    }
`;
export const BotaoMenu = styled(PopoverDisclosure)`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]}; 
    }
    @media ${device.desktop}{
        height: 15%;
        width: 80%;
    }
    @media ${device.laptop}{
        height: 15%;
        width: 80%;
    }
    @media ${device.tablet}{
        height: 10%;
        width: 90%;
    }
    @media ${device.mobile}{
        height: 10%;
        width: 90%;
    }
`;

export const Menuzito = styled(Popover)`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    @media ${device.desktop}{
        width: 40vw;
    }
    @media ${device.laptop}{
        width: 40vw;
    }
    @media ${device.tablet}{
        width: 70vw;
    }
    @media ${device.mobile}{
        width: 75vw;
    }
`;
export const ItemMenu = styled(Button)`
    border: 1px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 10px;
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
        height: 10%;
        width: 90%;
    }
    @media ${device.mobile}{
        height: 10%;
        width: 90%;
    }
`;
export const BotaoIcon = styled(PopoverDisclosure)`
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

export const IconUser = styled(FiUser)`
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
export const CaixaOculta = styled(Popover)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: ${(props) => props.theme.cores.psicodelicas[900]};
    @media ${device.desktop}{
        height: 40vh;
        width: 40vw;

    }
    @media ${device.laptop}{
        height: 40vh;
        width: 40vw;
    }
    @media ${device.tablet}{
        height: 50vh;
        width: 50vw;
        background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    }
    @media ${device.mobile}{
        height: 30vh;
        width: 30vw;
        background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    }
`;
export const Flechinha = styled(PopoverArrow)``;
export const CaixaOcultaTitulo = styled(PopoverHeading)`
    font-size:2.5rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const BotaoOculto = styled(Button)`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[700]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]}; 
    }
    @media ${device.desktop}{
        height: 30%;
        width: 60%;
    }
    @media ${device.laptop}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.tablet}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.mobile}{
        height: 5vh;
        width: 20vw;
    }
`;