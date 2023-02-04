import { Fundo, BotaoVolta, IconVolta,Caixa, CaixaUsuario, NomeUsuario, BotaoLogout, CaixaAcoes, Texto, Botao } from "@/styles/components/styleUsuario"
import { RootState } from "@/stack"
import { useDispatch,useSelector } from "react-redux"
import { useRouter } from "next/router"
import { logout } from "@/stack/stock"
import Head from "next/head"
export default function Usuario(){
    const stock = useSelector((state:RootState)=>state.stock)
    const dispatch = useDispatch()
    const router = useRouter()
    const VoltaUsuario = () =>{
        router.push("/usuario")
    }
    const Logout = () =>{
        dispatch(logout())
        router.push("/login")
    }
    const VoltaMesa = () =>{
        router.push("/mesa")
    }
    return(
        <>
         <Head>
            <title>Perfil de Usuario</title>
         </Head>
        <Fundo>
            <BotaoVolta onClick={()=>VoltaMesa}>
                <IconVolta/>
            </BotaoVolta>
            <Caixa>
                <CaixaUsuario>
                    <NomeUsuario>{stock.usuario.nomeUsuario}</NomeUsuario>
                    <BotaoLogout onClick={()=>Logout}>Logout</BotaoLogout>
                </CaixaUsuario>
                <CaixaAcoes>
                    <Texto>Voltar a <br/>Pagina de Usuario</Texto>
                    <Botao onClick={()=>VoltaUsuario}>Voltar</Botao>
                </CaixaAcoes>
            </Caixa>
        </Fundo>
        </>
    )
}