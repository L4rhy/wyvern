import { Caixa, CaixaUsuario, NomeUsuario, BotaoLogout, CaixaAcoes, Texto, Botao } from "@/styles/components/styleUsuario"
import { RootState } from "@/stack"
import { useSelector } from "react-redux"

export default function Usuario(){
    const stock = useSelector((state:RootState)=>state.stock)
    return(
        <Caixa>
            <CaixaUsuario>
                <NomeUsuario>{stock.usuario.nomeUsuario}</NomeUsuario>
                <BotaoLogout href="/">Logout</BotaoLogout>
            </CaixaUsuario>
            <CaixaAcoes>
                <Texto>Voltar a <br/>Pagina de Usuario</Texto>
                <Botao href="/usuario">Voltar</Botao>
            </CaixaAcoes>
        </Caixa>
    )
}