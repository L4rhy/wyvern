import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Fundo, Caixa, Texto, Botao, BotaoMenu, BotaoIcon, IconUser, Menuzito, ItemMenu, 
    CaixaOculta, Flechinha, CaixaOcultaTitulo, BotaoOculto
} from "../styles/styleUsuario";
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../stack"
import {logout, atualizaEscolha} from "../stack/stock"
import { usePopoverState } from "ariakit";

export default function Selecao() {
    const [campanhaEscolhida,setCampanhaEscolhida] = useState("")
    const [personagemEscolhido,setPersonagemEscolhido] = useState("")
    const router = useRouter();
    const stock = useSelector((state:RootState)=>state.stock)
    const dispatch = useDispatch()
    const stateUser = usePopoverState({placement:"right-start"})
    const stateCampanhas = usePopoverState()
    const statePersonagens = usePopoverState()
    //const personagens = stock.usuario.personagens

    const ativaLogout = () =>{
        dispatch(logout)
        router.push("/")
    }
    const listaCampanhas = (valor:string, index:number) =>{
        return(<ItemMenu key={index} onClick={()=>setCampanhaEscolhida(valor)}>{valor}</ItemMenu>)
    }  
    const listaPersonagens = (valor:string, index:number) =>{
        return(<ItemMenu key={index} onClick={()=>setPersonagemEscolhido(valor)}>{valor}</ItemMenu>)
    }       

        

    const entrarMapa = () =>{
        const escolha = {personagem:personagemEscolhido,campanha:campanhaEscolhida}
        dispatch(atualizaEscolha(escolha))
        if(personagemEscolhido==="Narradora"){
            router.push("/mesaNarradora")
        }else{
            router.push("/mesa")
        }
    }
    
    return (
        <>
            <Head>
                <title>Selicione - Faery Wyvern</title>
            </Head>
            <Fundo>
                <BotaoIcon state={stateUser}>
                    <IconUser/>
                </BotaoIcon>
                <CaixaOculta state={stateUser}>
                    <Flechinha/>
                    <CaixaOcultaTitulo>{stock.usuario.nomeUsuario}</CaixaOcultaTitulo>
                    <BotaoOculto onClick={()=>ativaLogout()}>Sair</BotaoOculto>
                </CaixaOculta>
                <Caixa>
                    <Texto>Escolha Oque Jogar <br/>{stock.usuario.nomeUsuario}</Texto>
                    <BotaoMenu state={stateCampanhas}>
                        {campanhaEscolhida===""?
                        <div>
                        Escolha sua Campanha
                        </div>
                        :
                        <div>
                        {campanhaEscolhida}
                        </div>
                        }
                        <Menuzito state={stateCampanhas}>
                        
                            {stock.usuario.campanhas.map(listaCampanhas)}
                        </Menuzito>
                    </BotaoMenu>
                    <BotaoMenu state={statePersonagens}>
                    {personagemEscolhido===""?
                        <div>
                        Escolha sua Campanha
                        </div>
                        :
                        <div>
                        {personagemEscolhido}
                        </div>
                        }
                        
                        <Menuzito state={statePersonagens}>
                            {stock.usuario.personagens.map(listaPersonagens)}
                        </Menuzito>
                    </BotaoMenu>
                    <Botao onClick={()=>entrarMapa()}>Jogar</Botao>
                </Caixa>
            </Fundo>
        </>
   );
}
