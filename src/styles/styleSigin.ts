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
    @media ${device.laptop}{
        height: 60vh;
        width: 40vw;
    }
    @media ${device.tablet}{
        height: 60vh;
        width: 40vw;
    }
    @media ${device.mobile}{
        height: 90vh;
        width: 90vw;
    }
`;
export const Texto = styled.h1`
     font-size:2rem;
     color: ${(props) => props.theme.cores.rosinhas[50]};
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