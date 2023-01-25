import { createSlice , PayloadAction } from "@reduxjs/toolkit"

const stock = createSlice({
    name:"stock",
    initialState: {
        usuario:{
            id:100,
            nomeUsuario:"",
            senha:"",
            campanhas:[""],
            personagens:[""]
        },
        logged: false,
        personagemUsuario:"",
        campanhaUsuario:"",
    },
    reducers:{
       login(state){
        state.logged=true
       },
       logout(state){
        state.logged=false,
        state.usuario.id=100,
        state.usuario.nomeUsuario="",
        state.usuario.senha="",
        state.usuario.campanhas=[],
        state.usuario.personagens=[]
        state.personagemUsuario="",
        state.campanhaUsuario=""
       },
       atualizaUsuario(state,action: PayloadAction<{
            id:number,
            nomeUsuario:string,
            senha:string,
            campanhas:Array<string>,
            personagens:Array<string>
       }>){
        state.usuario.id=action.payload.id
        state.usuario.nomeUsuario=action.payload.nomeUsuario
        state.usuario.senha=action.payload.senha
        state.usuario.campanhas=action.payload.campanhas
        state.usuario.personagens=action.payload.personagens
       },
       atualizaPersonagem(state,action: PayloadAction<{
        personagem:string
       }>){
        state.personagemUsuario=action.payload.personagem
       },
       atualizaCampanha(state,action: PayloadAction<{
        campanha:string
        }>){
        state.campanhaUsuario=action.payload.campanha
        },
        atualizaEscolha(state,action: PayloadAction<{
            personagem:string,
            campanha:string
        }>){
            state.personagemUsuario=action.payload.personagem
            state.campanhaUsuario=action.payload.campanha
        }
    }
})
export const {login,logout,atualizaUsuario,atualizaPersonagem,atualizaCampanha, atualizaEscolha} = stock.actions
export default stock.reducer
