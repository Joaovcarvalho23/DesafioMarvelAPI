'use client'
import { useState, useEffect } from 'react';
import CardPersonagem from "@/Components/CardPersonagem";
import { buscarTodosPersonagens } from "@/utils/api_marvel"; // Certifique-se de importar corretamente os tipos da sua API
import { Grid, Container } from "@mui/material";
import Pagination from '@/Components/Pagination';
import { PacoteInformacoesDoPersonagem, Personagem } from '@/types/marvel_types';

export default function Home() {
  const [personagens, setPersonagens] = useState<PacoteInformacoesDoPersonagem | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function fetchPersonagens() {
      try {
        const result = await buscarTodosPersonagens(offset); // Passa o offset para a função de busca
        setPersonagens(result);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    }
    fetchPersonagens();
  }, [offset]); // Adiciona offset como dependência para refletir as alterações na paginação

  if (!personagens) {
    // Caso os dados ainda não tenham sido carregados, retorne um carregador ou uma mensagem de carregamento
    return <div>Carregando...</div>;
  }

  return (
    <main>
      <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <div className="container mt-10">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
            <img src="/deadpool.png" alt="Marvel" style={{ width: "95px", marginBottom: "20px" }} />
            <h1 style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: "2.0rem", color: "yellow", textAlign: "center" }}>
              Confira abaixo a lista de personagens mais famosos da Marvel Comics!
            </h1>
          </div>
          <Grid container spacing={3} justifyContent="center">
            {personagens.results.map((personagem: Personagem) => (
              <Grid item xs={9} sm={5} md={4} lg={3} key={personagem.id}>
                <CardPersonagem personagem={personagem} />
              </Grid>
            ))}
          </Grid>
          {personagens.total > 0 && (
            <Pagination
              limit={personagens.limit}
              total={personagens.total}
              offset={offset}
              setOffset={setOffset}
            />
          )}
        </div>
      </Container>
    </main>
  );
}
