import {
   Form,
   FormInput,
   FormLabel,
   FormSubmit,
} from "ariakit/form";
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
        ${(props) => props.theme.cores.psicodelicas[500]},
        ${(props) => props.theme.cores.psicodelicas[900]});
`;
export const Caixa = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
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
export const Texto = styled(FormLabel)`
    font-size:3rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};

`;
export const Input = styled(FormInput)`
    margin: 2.5%;
    font-size: 2rem;
    color: ${(props) => props.theme.cores.psicodelicas[900]};
    background-color:${(props) => props.theme.cores.rosinhas[700]};
    :hover{
        background-color:${(props) => props.theme.cores.rosinhas[800]}; 
    }
    :focus{
        background-color:${(props) => props.theme.cores.rosinhas[800]};
    }
    @media ${device.desktop}{
        height: 5vh;
        width: 20vw;
    }
    @media ${device.laptopL}{
        height: 5vh;
        width: 20vw;
    }
    @media ${device.laptop}{
        height: 5vh;
        width: 20vw;
    }
    @media ${device.tablet}{
        height: 5vh;
        width: 20vw;
    }
    @media ${device.mobileL}{
        height: 10vh;
        width: 60vw;
    }
`;
export const Botao = styled(FormSubmit)`
    margin: 2.5%;   
    font-size: 3rem;
    border: none;
    color: ${(props) => props.theme.cores.psicodelicas[900]};
    background-color:${(props) => props.theme.cores.rosinhas[700]};
    :hover{
        background-color:${(props) => props.theme.cores.rosinhas[800]}; 
    }
    @media ${device.desktop}{
        height: 10vh;
        width: 20vw;
    }
    @media ${device.laptopL}{
        height: 10vh;
        width: 20vw;
    }
    @media ${device.laptop}{
        height: 10vh;
        width: 20vw;
    }
    @media ${device.tablet}{
        height: 10vh;
        width: 20vw;
    }
    @media ${device.mobileL}{
        height: 10vh;
        width: 60vw;
    }
`;
