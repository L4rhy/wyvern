import { supabase } from "./api/supabase";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { useRouter } from "next/router.js";
import {RootState} from "../stack"
import { Fundo, Mapa, BotaoUser, BotaoChat, BotaoFicha, BotaoMagia, BotaoEspada, BotaoDado,
     IconUser, IconFicha, IconChat, IconMagia, IconEspada, IconDado, Caixa, Flechinha, 
     ContainerMapa, BotaoChatMobile, BotaoDadoMobile, BotaoEspadaMobile, BotaoFichaMobile, BotaoMagiaMobile, BotaoUserMobile
 } from "@/styles/styleMesa";
import { usePopoverState } from "ariakit";
import Usuario from "./components/usuario"
import Ficha from "./components/ficha"
import Chat from "./components/chat"
import Magia from "./components/magia"
import Ataque from "./components/ataque"
import Dados from "./components/dados"
import { useMediaQuery } from 'react-responsive'


export default function Mesa(){
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [campanhaAtual, setCampanhaAtual] = useState<any>()
    const stock = useSelector((state:RootState)=>state.stock)
    const nomeCampanha = stock.campanhaUsuario
    const router = useRouter()
    
    useEffect(()=>{
        const pegaCampanha = async () =>{
            const { data: campanhas } = await supabase
            .from("campanhas")
            .select("*")
            
            if(campanhas){
                campanhas.forEach((value)=>{
                    if(value.nomeCampanha===nomeCampanha){
                        setCampanhaAtual(value)
                    }
                })
            }
        }
        pegaCampanha()
    }, [nomeCampanha])
    useEffect(()=>{
        const subscription = supabase
        .channel('public:campanhas')
        .on('postgres_changes', { 
            event: 'UPDATE', 
            schema: 'public', 
            table: 'campanhas',
            filter: `nomeCampanha=eq.${nomeCampanha}`
        }, payload => {
            setCampanhaAtual(payload.new)
        })
        .subscribe()

        return () =>{
            supabase.removeChannel(subscription)
        }
    }, [nomeCampanha])
    useEffect(()=>{
        if(!stock.logged){
            router.push("/login")
        }
    },[stock, router])

    const stateUser = usePopoverState({placement:"right-start"})
    const stateFicha = usePopoverState({placement:"right-start"})
    const stateChat = usePopoverState({placement:"right-start"})
    const stateMagia = usePopoverState({placement:"left-start"})
    const stateEspada = usePopoverState({placement:"left-start"})
    const stateDado = usePopoverState({placement:"left-start"})
    return(
        <>
            <Head>
                <title>Jogando - {stock.campanhaUsuario}</title>
            </Head>
            <Fundo>
                {!isMobile
                ?
                <>
                    <BotaoUser state={stateUser}>
                        <IconUser/>
                    </BotaoUser>
                        <Caixa state={stateUser}>
                            <Flechinha/>
                            <Usuario/>
                        </Caixa>
                    <BotaoFicha state={stateFicha}>
                        <IconFicha/>
                    </BotaoFicha>
                        <Caixa state={stateFicha}>
                            <Flechinha/>
                            <Ficha/>
                        </Caixa>
                    <BotaoChat state={stateChat}>
                        <IconChat/>
                    </BotaoChat>
                        <Caixa state={stateChat}>
                            <Flechinha/>
                            <Chat/>
                        </Caixa>
                    <BotaoMagia state={stateMagia}>
                        <IconMagia/>
                    </BotaoMagia>
                        <Caixa state={stateMagia}>
                            <Flechinha/>
                            <Magia/>
                        </Caixa>
                    <BotaoEspada state={stateEspada}>
                        <IconEspada/>
                    </BotaoEspada>
                        <Caixa state={stateEspada}>
                            <Flechinha/>
                            <Ataque/>
                        </Caixa>
                    <BotaoDado state={stateDado}>
                        <IconDado/>
                    </BotaoDado>
                        <Caixa state={stateDado}>
                            <Flechinha/>
                            <Dados/>
                        </Caixa>
                </>
                :
                <>
                    <BotaoUserMobile onClick={()=>router.push("/usuarioMobile")}>
                        <IconUser/>
                    </BotaoUserMobile>
                    <BotaoFichaMobile onClick={()=>router.push("/fichaMobile")}>
                        <IconFicha/>
                    </BotaoFichaMobile>
                    <BotaoChatMobile onClick={()=>router.push("/chatMobile")}>
                        <IconChat/>
                    </BotaoChatMobile>
                    <BotaoMagiaMobile onClick={()=>router.push("/magiaMobile")}>
                        <IconMagia/>
                    </BotaoMagiaMobile>
                    <BotaoEspadaMobile onClick={()=>router.push("/ataqueMobile")}>
                        <IconEspada/>
                    </BotaoEspadaMobile>
                    <BotaoDadoMobile onClick={()=>router.push("/dadosMobile")}>
                        <IconDado/>
                    </BotaoDadoMobile>
                </>
                }
                <ContainerMapa>
                    <Mapa defaultValue={campanhaAtual.mapaAtual}>
                        
                    </Mapa>
                </ContainerMapa>
            </Fundo>
        </>
    )
}

