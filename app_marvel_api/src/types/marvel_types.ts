export interface Thumbnail {
    path: string
    extension: string
  }
  
  export interface ComicItem {
    resourceURI: string
    name: string
    thumbnail: Thumbnail
  }
  
  
  export interface Comics {
    available: number
    collectionURI: string
    items: ComicItem[]
    returned: number
  }
  
  export interface Personagem {
    id: number
    name: string
    description: string
    thumbnail: Thumbnail
    comics: Comics
  }
  
  export interface PacoteInformacoesDoPersonagem {
    results: Personagem[]
  }
  