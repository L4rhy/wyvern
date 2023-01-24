import Head from "next/head"
import {useRouter} from "next/router"
import { useState } from "react"
import {typeTabelas} from "./types"
import {Fundo, Caixa} from "../styles/styleSelecao"
import { useFormState } from 'ariakit/form'
import { useMenuState } from "ariakit/menu";
export default function Selecao({usuarios}:typeTabelas){
    const router = useRouter()
    const [usuario, setUsuario]=useState({})
    const id = parseInt(router.query.id as string)
    const form = useFormState({defaultValues:{campanha:"",personagem:""}})
    const menu = useMenuState({gutter: 8})
    usuarios.forEach((value)=>{
        if(value.id==id){
            setUsuario(value)
        }
    })
    return(
        <>
            <Head>
                <title>Selicione - Faery Wyvern</title>
            </Head>
            <Fundo>
                <Caixa state={form}>
                    
                </Caixa>
            </Fundo>
        </>
    )
}
