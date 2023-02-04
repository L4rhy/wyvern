import { Fundo, ContainerMapa, Mapa, BotaoUser, BotaoFicha, BotaoChat, BotaoMapa,
BotaoMagia, BotaoEspada, BotaoDado, BotaoNarradora, IconUser, IconFicha, IconChat,
IconMapa, IconMagia, IconEspada, IconDado, IconNarradora, Caixa, Flechinha} from "@/styles/styleMesaNarradora"
import { usePopoverState } from "ariakit";
import Head from "next/head";
import { useRouter } from "next/router.js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { campanha } from "types/supabase";
import {RootState} from "../stack"
import { supabase } from "./api/supabase";

export default function MesaNarradora(){
    const stock = useSelector((state:RootState)=>state.stock)
    const router = useRouter()
    const stateUser = usePopoverState({placement:"right-start"})
    const stateFicha = usePopoverState({placement:"right-start"})
    const stateChat = usePopoverState({placement:"right-start"})
    const stateMapa = usePopoverState({placement:"right-start"})
    const stateMagia = usePopoverState({placement:"left-start"})
    const stateEspada = usePopoverState({placement:"left-start"})
    const stateDado = usePopoverState({placement:"left-start"})
    const stateNarradora = usePopoverState({placement:"left-start"})

    const [campanhaAtual, setCampanhaAtual] = useState<any>()
    const nomeCampanha = stock.campanhaUsuario


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
    return(
        <>
            <Head>
                <title>Jogando - {stock.campanhaUsuario}</title>
            </Head>
            <Fundo>
                <BotaoUser state={stateUser}>
                    <IconUser/>
                </BotaoUser>
                    <Caixa state={stateUser}>
                        <Flechinha/>
                    </Caixa>
                <BotaoFicha state={stateFicha}>
                    <IconFicha/>
                </BotaoFicha>
                    <Caixa state={stateFicha}>
                        <Flechinha/>
                    </Caixa>
                <BotaoChat state={stateChat}>
                    <IconChat/>
                </BotaoChat>
                    <Caixa state={stateChat}>
                        <Flechinha/>
                    </Caixa>
                <BotaoMapa state={stateMapa}>
                    <IconMapa/>
                </BotaoMapa>
                    <Caixa state={stateMapa}>
                        <Flechinha/>
                    </Caixa>
                <BotaoMagia state={stateMagia}>
                    <IconMagia/>
                </BotaoMagia>
                    <Caixa state={stateMagia}>
                        <Flechinha/>
                    </Caixa>
                <BotaoEspada state={stateEspada}>
                    <IconEspada/>
                </BotaoEspada>
                    <Caixa state={stateEspada}>
                        <Flechinha/>
                    </Caixa>
                <BotaoDado state={stateDado}>
                    <IconDado/>
                </BotaoDado>
                    <Caixa state={stateDado}>
                        <Flechinha/>
                    </Caixa>
                <BotaoNarradora state={stateNarradora}>
                    <IconNarradora/>
                </BotaoNarradora>
                    <Caixa state={stateNarradora}>
                        <Flechinha/>
                    </Caixa>
                <ContainerMapa>
                    <Mapa defaultValue={campanhaAtual?.mapaAtual}>
                        
                    </Mapa>
                </ContainerMapa>
            </Fundo>
        </>
    )
}