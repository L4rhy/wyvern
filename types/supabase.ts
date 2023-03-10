export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Usuario {
  usuarios: [ {
      campanhas: string[]
      id: number
      nomeUsuario: string
      personagens: string[]
      senha: string
    }]
}
export interface usuario{
  campanhas: string[]
  id: number
  nomeUsuario: string
  personagens: string[]
  senha: string
}
export interface Campanhas{
  campanhas:[{
    combateOrdem: {
      nome:string
      iniciativa:number
    }
    id: number
    mapaAtual: string
    mapas: [
      {
        url:string
        nome:string
        batalha:boolean
      }
    ]
    nomeCampanha: string
    npcs: string[]
    personagens: string[]
    tokenNpc: [{
      personagem:string
      url:string
    }]
    tokensPersonagens: [{
      personagem:string
      url:string
    }]
  }]
}
export interface campanha{
  combateOrdem: {
    nome:string
    iniciativa:number
  }
  id: number
  mapaAtual: string
  mapas: [
    {
      url:string
      nome:string
      batalha:boolean
    }
  ]
  nomeCampanha: string
  npcs: string[]
  personagens: string[]
  tokenNpc: [{
    personagem:string
    url:string
  }]
  tokensPersonagens: [{
    personagem:string
    url:string
  }]
}
export interface mapa{
  url:string
  nome:string
  batalha:boolean
}
export interface Personagens{
  Personagens:[{
    aparenciaPersonagem: string 
    armaduraAtual: number 
    armaduras: [{
      nome: string
      tipo: string
      efeito: {
        debuff: number
        protecao: number
      }
      descricao: string
      equipada: boolean
    }]
    armaduraTotal: number 
    armas: [{
      dano: number
      nome: string
      descricao: string
      quantidade: number
      tipo: string
      aDistancia: boolean
      municaoArco: boolean
      municaoBesta: boolean
      municaoFogo: boolean
      equipada:boolean
    }]
    aspectoAfinidade: string
    ativo: boolean
    aliado: boolean
    campanha: string 
    carisma: number 
    classe: string 
    constituicao: number
    danoHabilidade:number 
    destreza: number
    especie: string
    forca: number 
    habilidades: [{
        nome: string
        efeito: {
          area: number
          buff: string
          cura: number
          dano: number
          debuff: string
          defesa: number
          narrativo: boolean
        }
        descricao: string
    }]
    historiaPersonagem: string 
    id: number
    iniciativa: number 
    inteligencia: number 
    linguas: {
      orc: boolean
      comum: boolean
      dwarv: boolean
      daedra: boolean
      elfico: boolean
      ramush: boolean
      faerico: boolean
      celestial: boolean
      silvestre: boolean
    }
    magias: [{
      nome: string
      tipo: string
      custo: {
        mana: number
        turnos: number
      }
      efeito: {
        area: number
        buff: string
        cura: number
        dano: number
        debuff: string
        defesa: number
        narrativo: boolean
      }
      aspecto: string
      descricao: string
    }]
    manaAtual: number 
    manaTotal: number 
    moedas: number 
    nivel: number
    nome: string 
    precisao: number 
    proeficiencias: {
      acrobacia:Array<boolean>
      arcanismo:Array<boolean>
      atletismo:Array<boolean>
      atuacao:Array<boolean>
      construcao:Array<boolean>
      enganacao:Array<boolean>
      furtividade:Array<boolean>
      historia:Array<boolean>
      ilusionismo:Array<boolean>
      intimidacao:Array<boolean>
      intuicao:Array<boolean>
      investigacao:Array<boolean>
      lidarComAnimais:Array<boolean>
      medicina:Array<boolean>
      natureza:Array<boolean>
      percepcao:Array<boolean>
      persuasao:Array<boolean>
      religiao:Array<boolean>
      sobrevivencia:Array<boolean>
    }
    statusPersonagem: string[]
    utilidades: [{
      nome: string
      descricao: string
      mana:number
      cura: number
      quantidade: number
      equipada: boolean
    }]
    vidaAtual: number 
    vidaTotal: number 
    tipo: string
}]
}
export interface personagem{
    aparenciaPersonagem: string 
    armaduraAtual: number 
    armaduras: [{
      nome: string
      tipo: string
      efeito: {
        debuff: number
        protecao: number
      }
      descricao: string
      equipada: boolean
    }]
    armaduraTotal: number 
    armas: [{
      dano: number
      nome: string
      descricao: string
      quantidade: number
      tipo: string
      aDistancia: boolean
      municaoArco: boolean
      municaoBesta: boolean
      municaoFogo: boolean
      equipada:boolean
    }]
    aspectoAfinidade: string
    ativo: boolean
    aliado: boolean
    campanha: string 
    carisma: number 
    classe: string 
    constituicao: number
    danoHabilidade:number 
    destreza: number
    especie: string
    forca: number 
    habilidades: [{
        nome: string
        efeito: {
          area: number
          buff: string
          cura: number
          dano: number
          debuff: string
          defesa: number
          narrativo: boolean
        }
        descricao: string
    }]
    historiaPersonagem: string 
    id: number
    iniciativa: number 
    inteligencia: number 
    linguas: {
      orc: boolean
      comum: boolean
      dwarv: boolean
      daedra: boolean
      elfico: boolean
      ramush: boolean
      faerico: boolean
      celestial: boolean
      silvestre: boolean
    }
    magias: [{
      nome: string
      tipo: string
      custo: {
        mana: number
        turnos: number
      }
      efeito: {
        area: number
        buff: string
        cura: number
        dano: number
        debuff: string
        defesa: number
        narrativo: boolean
      }
      aspecto: string
      descricao: string
    }]
    manaAtual: number 
    manaTotal: number 
    moedas: number 
    nivel: number
    nome: string 
    precisao: number 
    proeficiencias: {
      acrobacia:Array<boolean>
      arcanismo:Array<boolean>
      atletismo:Array<boolean>
      atuacao:Array<boolean>
      construcao:Array<boolean>
      enganacao:Array<boolean>
      furtividade:Array<boolean>
      historia:Array<boolean>
      ilusionismo:Array<boolean>
      intimidacao:Array<boolean>
      intuicao:Array<boolean>
      investigacao:Array<boolean>
      lidarComAnimais:Array<boolean>
      medicina:Array<boolean>
      natureza:Array<boolean>
      percepcao:Array<boolean>
      persuasao:Array<boolean>
      religiao:Array<boolean>
      sobrevivencia:Array<boolean>
    }
    statusPersonagem: string[] 
    utilidades: [{
      nome: string
      descricao: string
      mana:number
      cura: number
      quantidade: number
      equipada: boolean
    }]
    vidaAtual: number 
    vidaTotal: number 
    tipo: string
}
export interface arma{
  dano: number
  nome: string
  descricao: string
  quantidade: number
  tipo: string
  aDistancia: boolean
  municaoArco: boolean
  municaoBesta: boolean
  municaoFogo: boolean
  equipada:boolean
}
export interface armadura{
  nome: string
  tipo: string
  efeito: {
    debuff: number
    protecao: number
  }
  descricao: string
  equipada: boolean
} 
export interface magia{
  nome: string
  tipo: string
  custo: {
    mana: number
    turnos: number
  }
  efeito: {
    area: number
    buff: string
    cura: number
    dano: number
    debuff: string
    defesa: number
    narrativo: boolean
  }
  aspecto: string
  descricao: string
}
export interface habilidade{
  nome: string
  efeito: {
    area: number
    buff: string
    cura: number
    dano: number
    debuff: string
    defesa: number
    narrativo: boolean
  }
  descricao: string
} 
export interface utilidade{
  nome: string
  descricao: string
  mana:number
  cura: number
  quantidade: number
  equipada: boolean
}
export interface Chat{
  chat:[{
      id: number
      nomeMensagem: string | null
      textoMensagem: string | null
    }]
}
export interface Database {
  public: {
    Tables: {
      campanhas: {
        Row: {
          combateOrdem: Json 
          id: number
          mapaAtual: string
          mapas: Json
          nomeCampanha: string
          npcs: Json
          personagens: Json
          tokenNpc: Json
          tokensPersonagens: Json
        }
        Insert: {
          combateOrdem?: Json 
          id?: number
          mapaAtual: string
          mapas: Json
          nomeCampanha?: string
          npcs: Json
          personagens: Json
          tokenNpc: Json
          tokensPersonagens: Json
        }
        Update: {
          combateOrdem?: Json 
          id?: number
          mapaAtual?: string
          mapas?: Json
          nomeCampanha?: string
          npcs?: Json
          personagens?: Json
          tokenNpc?: Json
          tokensPersonagens?: Json
        }
      }
      chatCampanhaVilaEsquecida: {
        Row: {
          id: number
          nomeMensagem: string 
          textoMensagem: string 
          campanha: string
        }
        Insert: {
          id?: number
          nomeMensagem?: string 
          textoMensagem?: string 
          campanha?: string
        }
        Update: {
          id?: number
          nomeMensagem?: string 
          textoMensagem?: string
          campanha?: string 
        }
      }
      Personagens: {
        Row: {
          aparenciaPersonagem: string
          armaduraAtual: number
          armaduras: Json
          armaduraTotal: number
          armas: Json
          aspectoAfinidade: string
          ativo: boolean
          aliado: boolean
          campanha: string
          carisma: number 
          classe: string 
          constituicao: number
          danoHabilidade: number
          destreza: number 
          especie: string 
          forca: number 
          habilidades: Json 
          historiaPersonagem: string 
          id: number
          iniciativa: number 
          inteligencia: number 
          linguas: Json 
          magias: Json 
          manaAtual: number 
          manaTotal: number 
          moedas: number 
          nivel: number
          nome: string 
          precisao: number 
          proeficiencias: Json 
          statusPersonagem: Json 
          utilidades: Json 
          vidaAtual: number 
          vidaTotal: number 
          tipo: string
        }
        Insert: {
          aparenciaPersonagem?: string 
          armaduraAtual?: number 
          armaduras?: Json 
          armaduraTotal?: number 
          armas?: Json 
          aspectoAfinidade?: string
          ativo?: boolean
          aliado?: boolean
          campanha?: string
          carisma?: number 
          classe?: string 
          constituicao?: number 
          danoHabilidade?:number
          destreza?: number 
          especie?: string 
          forca?: number
          habilidades?: Json 
          historiaPersonagem?: string 
          id?: number
          iniciativa?: number 
          inteligencia?: number 
          linguas?: Json 
          magias?: Json 
          manaAtual?: number 
          manaTotal?: number 
          moedas?: number 
          nivel: number
          nome?: string 
          precisao?: number 
          proeficiencias?: Json 
          statusPersonagem?: Json 
          utilidades?: Json 
          vidaAtual?: number 
          vidaTotal?: number 
          tipo: string
        }
        Update: {
          aparenciaPersonagem?: string
          armaduraAtual?: number 
          armaduras?: Json 
          armaduraTotal?: number 
          armas?: Json 
          aspectoAfinidade?: string
          ativo?: boolean
          aliado?: boolean
          campanha?: string 
          carisma?: number 
          classe?: string 
          constituicao?: number
          danoHabilidade?:number 
          destreza?: number 
          especie?: string 
          forca?: number 
          habilidades?: Json 
          historiaPersonagem?: string 
          id?: number
          iniciativa?: number 
          inteligencia?: number
          linguas?: Json 
          magias?: Json 
          manaAtual?: number 
          manaTotal?: number
          moedas?: number 
          nivel?: number
          nome?: string 
          precisao?: number
          proeficiencias?: Json
          statusPersonagem?: Json
          utilidades?: Json 
          vidaAtual?: number 
          vidaTotal?: number
          tipo?: string 
        }
      }
      usuarios: {
        Row: {
          campanhas: Json
          id: number
          nomeUsuario: string
          personagens: Json
          senha: string
        }
        Insert: {
          campanhas: Json
          id?: number
          nomeUsuario: string
          personagens: Json
          senha: string
        }
        Update: {
          campanhas?: Json
          id?: number
          nomeUsuario?: string
          personagens?: Json
          senha?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
