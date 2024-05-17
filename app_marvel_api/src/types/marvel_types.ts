export interface Personagem {
    id: number,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }
}


export interface PacoteInformacoesDoPersonagem {
    results: Personagem[]
}