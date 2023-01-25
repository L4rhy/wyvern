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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: ${(props) => props.theme.cores.psicodelicas[900]};
    @media ${device.desktop}{
        height: 60vh;
        width: 40vw;
    }
    @media ${device.laptopL}{
        height: 60vh;
        width: 40vw;
    }
    @media ${device.laptop}{
        height: 60vh;
        width: 40vw;
    }
    @media ${device.tablet}{
        height: 60vh;
        width: 40vw;
    }
    @media ${device.mobileL}{
        height: 90vh;
        width: 90vw;
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
        height: 10vh;
        width: 30vw;
    }
    @media ${device.laptopL}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.laptop}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.tablet}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.mobileL}{
        height: 10vh;
        width: 60vw;
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
        height: 10vh;
        width: 30vw;
    }
    @media ${device.laptopL}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.laptop}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.tablet}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.mobileL}{
        height: 10vh;
        width: 60vw;
    }
`;

export const Menuzito = styled(Popover)`
    border: 1px solid ${(props) => props.theme.cores.rosinhas[50]};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30vw;
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
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
        height: 10vh;
        width: 25vw;
    }
    @media ${device.laptopL}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.laptop}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.tablet}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.mobileL}{
        height: 10vh;
        width: 60vw;
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
        height: 70px;
        width: 70px;
        left: 20px;
        top: 20px;
    }
    @media ${device.laptopL}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 20px; 
    }
    @media ${device.laptop}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 20px;
    }
    @media ${device.tablet}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 20px;
    }
    @media ${device.mobileL}{
        height: 50px;
        width: 50px;
        left: 20px;
        top: 40px;
    }
`;

export const IconUser = styled(FiUser)`
    color: ${(props) => props.theme.cores.rosinhas[50]};
    @media ${device.desktop}{
        height: 40px;
        width: 40px;
    }
    @media ${device.laptopL}{
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
    @media ${device.mobileL}{
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
        height: 20vh;
        width: 20vw;

    }
    @media ${device.laptopL}{
        
    }
    @media ${device.laptop}{
        
    }
    @media ${device.tablet}{
        
    }
    @media ${device.mobileL}{
        height: 90vh;
        width: 90vw;
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
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]}; 
    }
    @media ${device.desktop}{
        height: 30%;
        width: 60%;
    }
    @media ${device.laptopL}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.laptop}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.tablet}{
        height: 10vh;
        width: 30vw;
    }
    @media ${device.mobileL}{
        height: 10vh;
        width: 60vw;
    }
`;