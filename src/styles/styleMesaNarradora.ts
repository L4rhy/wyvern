import {
    Popover,
    PopoverArrow,
    PopoverDisclosure
} from "ariakit/popover";
import styled from "styled-components";
import { FiFileText, FiImage, FiMessageSquare, FiUser} from "react-icons/fi"
import { GiPolarStar, GiAxeSword, GiDiceTwentyFacesTwenty, GiAzulFlake } from "react-icons/gi"

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
    width: 65%;
`;
export const Mapa = styled.div`
    width: 100%;
    padding-top: 75%;
    background: no-repeat center;
    background-size: contain;
    background-image: url(${(props)=>props.defaultValue});

`;
export const IconUser = styled(FiUser)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const IconFicha = styled(FiFileText)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const IconChat = styled(FiMessageSquare)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const IconMapa = styled(FiImage)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const IconMagia = styled(GiPolarStar)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const IconEspada = styled(GiAxeSword)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const IconDado = styled(GiDiceTwentyFacesTwenty)`
    height: 40px;
    width: 40px;    
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const IconNarradora = styled(GiAzulFlake)`
    height: 40px;
    width: 40px;    
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const BotaoUser = styled(PopoverDisclosure)`
    height: 70px;
    width: 70px;
    left: 20px;
    top: 20px;
    border: none;
    border-radius: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoFicha = styled(PopoverDisclosure)`
    height: 70px;
    width: 70px;
    left: 20px;
    top: 110px;
    border: none;
    border-radius: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoChat = styled(PopoverDisclosure)`
    height: 70px;
    width: 70px;
    left: 20px;
    top: 200px;
    border: none;
    border-radius: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoMapa = styled(PopoverDisclosure)`
    height: 70px;
    width: 70px;
    left: 20px;
    top: 290px;
    border: none;
    border-radius: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoMagia = styled(PopoverDisclosure)`
    height: 70px;
    width: 70px;
    right: 20px;
    top: 20px;
    border: none;
    border-radius: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoEspada = styled(PopoverDisclosure)`
    height: 70px;
    width: 70px;
    right: 20px;
    top: 110px;
    border: none;
    border-radius: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoDado = styled(PopoverDisclosure)`
    height: 70px;
    width: 70px;
    right: 20px;
    top: 200px;
    border: none;
    border-radius: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const BotaoNarradora = styled(PopoverDisclosure)`
    height: 70px;
    width: 70px;
    right: 20px;
    top: 290px;
    border: none;
    border-radius: 100%;
    position: fixed;
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
    width: 46vw;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    display: flex;
    align-items: center;
    justify-content: center;
`;