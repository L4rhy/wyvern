import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import {Json} from "../../types/supabase"

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
        bonus:{
            forca: 0,
            destreza: 0,
            precisao: 0,
            constituicao: 0,
            inteligencia: 0,
            carisma: 0
        }
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
        state.usuario.campanhas=[""],
        state.usuario.personagens=[""],
        state.personagemUsuario="",
        state.campanhaUsuario=""
       },
       atualizaUsuario(state,action: PayloadAction<{
            id:number,
            nomeUsuario:string,
            senha:string,
            campanhas:string[],
            personagens:string[]
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
        },
        atualizaBonus(state,action: PayloadAction<{
            forca: number,
            destreza: number,
            precisao: number,
            constituicao: number,
            inteligencia: number,
            carisma: number
        }>){
            state.bonus.forca=action.payload.forca
            state.bonus.destreza=action.payload.destreza
            state.bonus.precisao=action.payload.precisao
            state.bonus.constituicao=action.payload.constituicao
            state.bonus.inteligencia=action.payload.inteligencia
            state.bonus.carisma=action.payload.carisma
        }
    }
})
export const {login,logout,atualizaUsuario,atualizaPersonagem,atualizaCampanha, atualizaEscolha, atualizaBonus} = stock.actions
export default stock.reducer
