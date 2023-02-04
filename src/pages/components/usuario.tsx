import { Caixa, CaixaUsuario, NomeUsuario, BotaoLogout, CaixaAcoes, Texto, Botao } from "@/styles/components/styleUsuario"
import { RootState } from "@/stack"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { logout } from "@/stack/stock"

export default function Usuario(){
    const stock = useSelector((state:RootState)=>state.stock)
    const router = useRouter()
    const dispatch = useDispatch()
    return(
        <Caixa>
            <CaixaUsuario>
                <NomeUsuario>{stock.usuario.nomeUsuario}</NomeUsuario>
                <BotaoLogout onClick={()=>{
                    dispatch(logout())
                    router.push("/login")
                }}>
                    Logout
                </BotaoLogout>
            </CaixaUsuario>
            <CaixaAcoes>
                <Texto>Voltar a <br/>Pagina de Usuario</Texto>
                <Botao onClick={()=>router.push("/usuario")}>Voltar</Botao>
            </CaixaAcoes>
        </Caixa>
    )
}