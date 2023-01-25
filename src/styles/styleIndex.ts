import styled from "styled-components";
import { device } from "./devices";

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
    flex-direction: row;
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
export const CaixaBotao = styled.div`
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    @media ${device.desktop}{
        height: 58vh;
        width: 19vw;
    }
    @media ${device.laptopL}{
        height: 25vh;
        width: 20vw;
    }
    @media ${device.laptop}{
        height: 25vh;
        width: 20vw;
    }
    @media ${device.tablet}{
        height: 60vh;
        width: 40vw;
    }
    @media ${device.mobileL}{
        height: 40vh;
        width: 78vw;
        
    }
`;
export const Texto = styled.h1`
    text-align: center;
    text-decoration: none;
    font-size: 2rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const Botao = styled.a`
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
    width: 16vw;
    }
    @media ${device.laptopL}{
    height: 10vh;
    width: 16vw;
    }
    @media ${device.laptop}{
    height: 10vh;
    width: 16vw;
    }
    @media ${device.tablet}{
        height: 10vh;
        width: 20vw;
    }
    @media ${device.mobileL}{
        height: 10vh;
        width: 76vw;
        font-size: 2rem;
    }
`;
