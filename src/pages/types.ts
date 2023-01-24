export interface typeUsuario {
    id:number
    nomeUsuario:string
    senha:string
    campanhas:object
    personagens:object
}
export interface typeTabelas{
        usuarios:typeUsuario[]
}