import {
    Popover,
    PopoverArrow,
    PopoverDisclosure
} from "ariakit/popover";
import styled from "styled-components";
import { device } from "./devices";
import { FiUser, FiFileText, FiMessageSquare } from "react-icons/fi"
import { GiPolarStar, GiSwordWound, GiDiceTwentyFacesTwenty } from "react-icons/gi"
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
export const Mapa = styled.div`
    height: 90vh;
    width: 80vw;
    background: no-repeat center;
    background-size: contain;
    background-image: url("/AvisoDia27Mes1.svg");

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
export const IconFicha = styled(FiFileText)`
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
export const IconChat = styled(FiMessageSquare)`
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
export const IconMagia = styled(GiPolarStar)`
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
export const IconEspada = styled(GiSwordWound)`
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
export const IconDado = styled(GiDiceTwentyFacesTwenty)`
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
export const BotaoUser = styled(PopoverDisclosure)`
    border: none;
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
export const BotaoFicha = styled(PopoverDisclosure)`
    border: none;
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
        top: 110px;
    }
    @media ${device.laptopL}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 110px; 
    }
    @media ${device.laptop}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 110px;
    }
    @media ${device.tablet}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 110px;
    }
    @media ${device.mobileL}{
        height: 50px;
        width: 50px;
        left: 20px;
        top: 40px;
    }
`;
export const BotaoChat = styled(PopoverDisclosure)`
    border: none;
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
        top: 200px;
    }
    @media ${device.laptopL}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 200px; 
    }
    @media ${device.laptop}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 200px;
    }
    @media ${device.tablet}{
        height: 70px;
        width: 70px;
        left: 20px;
        top: 200px;
    }
    @media ${device.mobileL}{
        height: 50px;
        width: 50px;
        left: 20px;
        top: 40px;
    }
`;
export const BotaoMagia = styled(PopoverDisclosure)`
    border: none;
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
        right: 20px;
        top: 20px;
    }
    @media ${device.laptopL}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 20px; 
    }
    @media ${device.laptop}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 20px;
    }
    @media ${device.tablet}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 20px;
    }
    @media ${device.mobileL}{
        height: 50px;
        width: 50px;
        left: 20px;
        top: 40px;
    }
`;
export const BotaoEspada = styled(PopoverDisclosure)`
    border: none;
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
        right: 20px;
        top: 110px;
    }
    @media ${device.laptopL}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 110px; 
    }
    @media ${device.laptop}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 110px;
    }
    @media ${device.tablet}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 110px;
    }
    @media ${device.mobileL}{
        height: 50px;
        width: 50px;
        left: 20px;
        top: 40px;
    }
`;
export const BotaoDado = styled(PopoverDisclosure)`
    border: none;
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
        right: 20px;
        top: 200px;
    }
    @media ${device.laptopL}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 200px; 
    }
    @media ${device.laptop}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 200px;
    }
    @media ${device.tablet}{
        height: 70px;
        width: 70px;
        right: 20px;
        top: 200px;
    }
    @media ${device.mobileL}{
        height: 50px;
        width: 50px;
        left: 20px;
        top: 40px;
    }
`;
export const Flechinha = styled(PopoverArrow)``;
export const Caixa = styled(Popover)`
    height: 96vh;
    width: 46vw;
    background-color:${(props) => props.theme.cores.psicodelicas[800]}
`;