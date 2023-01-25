export interface typeUsuario {
    id:number
    nomeUsuario:string
    senha:string
    campanhas:Array<string>
    personagens:Array<string>
}
export interface typePersonagem {
    id:number

}
export interface typeCamapanha {
    id:number

}
export interface typeTabelas{
        usuarios:typeUsuario[],
        campanhas: typeCamapanha[],
        personagens: typePersonagem[],
}