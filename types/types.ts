export type stock ={
        usuario:{
            id:number,
            nomeUsuario:string,
            senha:string,
            campanhas:Array<string>,
            personagens:Array<string>
        },
        logged: boolean,
        personagemUsuario:string,
        campanhaUsuario: string,
        bonus:{
            forca: number
            destreza: number
            precisao: number
            constituicao: number
            inteligencia: number
            carisma: number
        }
}