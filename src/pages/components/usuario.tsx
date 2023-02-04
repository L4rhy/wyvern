import { Caixa, CaixaUsuario, NomeUsuario, BotaoLogout, CaixaAcoes, Texto, Botao } from "@/styles/components/styleUsuario"
import { RootState } from "@/stack"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { logout } from "@/stack/stock"

export default function Usuario(){
    const stock = useSelector((state:RootState)=>state.stock)
    const router = useRouter()
    const dispatch = useDispatch()
    const VoltaUsuario = () =>{
        router.push("/usuario")
    }
    const Logout = () =>{
        dispatch(logout())
        router.push("/login")
    }
    return(
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
    )
}