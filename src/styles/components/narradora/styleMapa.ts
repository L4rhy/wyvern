import styled from "styled-components";

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
`;
export const Titulo = styled.p`
    height: auto;
    width: 98%;
    font-size: 1.5rem;
    margin:1%;
    padding: 1%;
    color:${(props) => props.theme.cores.rosinhas[50]};
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    box-sizing: border-box;
`;
export const CaixaMapas = styled.div`
    height:auto;
    width: 98%;
    margin: 1%;
    background-color: ${(props) => props.theme.cores.psicodelicas[600]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    border-radius: .375rem;
    display: flex;
    flex-direction: column;
`;
export const CaixaMapa = styled.div`
    height: auto;
    width: 98%;
    margin: 1%;
    background-color: ${(props) => props.theme.cores.psicodelicas[700]};
    border: 2px solid ${(props) => props.theme.cores.rosinhas[50]};
    color: ${(props) => props.theme.cores.rosinhas[50]};
    font-size: 2rem;
    border-radius: .375rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`
export const BotaoMapa = styled.button`
    width: 20%;
    height: auto;
    margin: 1%;
`;
export const ContainerMapa = styled.div`
    width: 100%;
`;
export const Mapinha = styled.div`
    width: 100%;
    padding-top: 75%;
    background: no-repeat center;
    background-size: contain;
    background-image: url(${(props)=>props.defaultValue});
`;