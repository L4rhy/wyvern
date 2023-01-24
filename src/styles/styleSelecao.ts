import {
    Form,
    FormLabel,
    FormSubmit,
 } from "ariakit/form";
 import {
    Menu,
    MenuButton,
    MenuButtonArrow,
    MenuItem,
    MenuSeparator,
  } from "ariakit/menu";
import styled from "styled-components"
import { device } from "./devices"

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
