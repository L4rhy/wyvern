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
        height: 60%;
        width: 40%;
    }
    @media ${device.laptop}{
        height: 60%;
        width: 40%;
    }
    @media ${device.tablet}{
        height: 80%;
        width: 80%;
    }
    @media ${device.mobile}{
        height: 90%;
        width: 90%;
        flex-direction: column;
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
        height: 95%;
        width: 47.5%;
    }
    @media ${device.laptop}{
        height: 95%;
        width: 47.5%;
    }
    @media ${device.tablet}{
        height: 95%;
        width: 47.5%;
    }
    @media ${device.mobile}{
        height: 48%;
        width: 95%;
        
    }
`;
export const Texto = styled.h1`
    text-align: center;
    text-decoration: none;
    font-size: 2rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    @media ${device.mobile}{
        font-size: 3rem;
    }
`;
export const Botao = styled.a`
    padding: 5%;
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
        height: 20%;
        width: 95%;
    }
    @media ${device.laptop}{
        height: 20%;
        width: 95%;
    }
    @media ${device.tablet}{
        height: 12.5%;
        width: 90%;
    }
    @media ${device.mobile}{
        height: 25%;
        width: 95%;
        font-size: 2rem;
    }
`;
