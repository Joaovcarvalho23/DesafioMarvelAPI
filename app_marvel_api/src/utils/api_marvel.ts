import { PacoteInformacoesDoPersonagem } from '@/types/marvel_types';
import md5 from 'md5';

const API_BASE_URL="https://gateway.marvel.com/v1/public"
const API_PUBLIC_KEY="3c4d51e6130be999dd41d81a37cc21e2"
const API_PRIVATE_KEY="65df57875e9abfa73c15943a78e36d01b00b9797"

const getTimestamp = () => Date.now().toString()
const ts = getTimestamp()

const getHash = (ts: string) => 
    md5(ts+API_PRIVATE_KEY+API_PUBLIC_KEY)

const hash = getHash(ts);
const consulta = `ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}`


const handleResponse = async <T>(res: Response) => {
    if(!res.ok) 
        throw new Error(res.statusText)

    const dados = await res.json()
    return dados.data as T
}

export const buscarTodosPersonagens = async (): Promise<PacoteInformacoesDoPersonagem> => {
    const url = `${API_BASE_URL}/characters?${consulta}`
    const res = await fetch(url)
    return handleResponse<PacoteInformacoesDoPersonagem>(res);
}



export const buscarInformacoesPersonagem = async (idPersonagem: string): Promise<PacoteInformacoesDoPersonagem> => {
    const url = `${API_BASE_URL}/characters/${idPersonagem}?${consulta}`
    const res = await fetch(url)
    return handleResponse<PacoteInformacoesDoPersonagem>(res);
}



export const pesquisarPersonagens = async (querySearch: string | null): Promise<PacoteInformacoesDoPersonagem> => {
    const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${consulta}`
    const res = await fetch(url)
    return handleResponse<PacoteInformacoesDoPersonagem>(res);
}
