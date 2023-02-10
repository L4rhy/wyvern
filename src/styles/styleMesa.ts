import {
    Popover,
    PopoverArrow,
    PopoverDisclosure
} from "ariakit/popover";
import styled from "styled-components";
import { device } from "./devices";
import { FiUser, FiFileText, FiMessageSquare } from "react-icons/fi"
import { GiPolarStar, GiAxeSword, GiDiceTwentyFacesTwenty } from "react-icons/gi"

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
export const ContainerMapa = styled.div`
    width: 60%;
`;
export const Mapa = styled.div`
    width: 100%;
    padding-top: 75%;
    background: no-repeat center;
    background-size: contain;
    background-image: url(${(props)=>props.defaultValue});

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
export const IconFicha = styled(FiFileText)`
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
export const IconChat = styled(FiMessageSquare)`
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
export const IconMagia = styled(GiPolarStar)`
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
export const IconEspada = styled(GiAxeSword)`
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
export const IconDado = styled(GiDiceTwentyFacesTwenty)`
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
    @media ${device.mobile}{
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
    @media ${device.mobile}{
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
    @media ${device.mobile}{
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
    @media ${device.mobile}{
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
    @media ${device.mobile}{
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
    @media ${device.mobile}{
        height: 50px;
        width: 50px;
        left: 20px;
        top: 40px;
    }
`;
export const BotaoUserMobile = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    left: 20px;
    top: 70px;
    border: none;
    border-radius: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoFichaMobile = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    left: 20px;
    top: 140px;
    border: none;
    border-radius: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoChatMobile = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    left: 20px;
    top: 210px;
    border: none;
    border-radius: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoMagiaMobile = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    right: 20px;
    top: 70px;
    border: none;
    border-radius: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoEspadaMobile = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    right: 20px;
    top: 140px;
    border: none;
    border-radius: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoDadoMobile = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    right: 20px;
    top: 210px;
    border: none;
    border-radius: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const Flechinha = styled(PopoverArrow)``;
export const Caixa = styled(Popover)`
    height: 96vh;
    width: 50vw;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    display: flex;
    align-items: center;
    justify-content: center;
`;