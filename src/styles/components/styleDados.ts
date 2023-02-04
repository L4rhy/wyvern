import {
    Popover,
    PopoverArrow,
    PopoverDisclosure
} from "ariakit/popover";
import styled from "styled-components";
import { GiDiceTwentyFacesTwenty, GiSwordWound } from "react-icons/gi";
import { device } from "../devices";
import { FiArrowLeft } from "react-icons/fi";

export const Caixa = styled.div`    
    height: 98%;
    width: 98%;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 10px;
        background-color: ${(props) => props.theme.cores.psicodelicas[700]};
        border-radius: 10px
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme.cores.psicodelicas[900]};
        border-radius: 10px;
    }
    @media (max-width: 1000px) {
        height: 85%;
        width: 85%;
    }
`;
export const Caixinha = styled.div`
    height: 20%;
    width: 98%;
    margin: 1%;
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
export const Texto = styled.div`
    height: 90%;
    width: 30%;
    font-size: 1rem;
    padding: .5em;
    color:${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
export const BotaoIcon = styled.button`
    height: 50px;
    width: 50px;
    margin: 1%;
    border-radius: 100%;
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const Icon = styled(GiDiceTwentyFacesTwenty)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const IconAtaque = styled(GiSwordWound)`
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
export const BotaoAtaque = styled(PopoverDisclosure)`
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};

    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const Flechinha = styled(PopoverArrow)``;
export const CaixaOculta = styled(Popover)`
    height: auto;
    width: 15vw;
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;
export const BotaoInimigo = styled.button`
    width: 98%;
    height: auto;
    margin: .5em;
    padding: .5%;
    font-size: .7rem;
    color: ${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    }
`;
export const Caixona = styled.div`
    height: auto;
    width: 98%;
    margin: 1%;
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
export const DivisaoCaixa = styled.div`
    height: 99%;
    width: 48%;
    margin: 2%;
    background-color: ${(props) => props.theme.cores.psicodelicas[500]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
export const Textinho = styled.div`
    height: auto;
    width: 98%;
    margin: 1%;
    padding: 1%;
    font-size: 1rem;
    color:${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 50px;
`;
export const BotaoIconzinho = styled.button`
    height: 30px;
    width: 30px;
    margin: 1%;
    border-radius: 100%;
    background-color: ${(props) => props.theme.cores.psicodelicas[800]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    :hover{
        background-color: ${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const Iconzinho = styled(GiDiceTwentyFacesTwenty)`
    height: 20px;
    width: 20px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;
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
export const BotaoVolta = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    left: 5px;
    top: 5px;
    border: none;
    border-radius: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    background-color:${(props) => props.theme.cores.psicodelicas[800]};
    :hover{
        background-color:${(props) => props.theme.cores.psicodelicas[900]};
    }
`;
export const IconVolta = styled(FiArrowLeft)`
    height: 40px;
    width: 30px;
    color: ${(props) => props.theme.cores.rosinhas[50]};
`;