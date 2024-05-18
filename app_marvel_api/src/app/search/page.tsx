'use client';

import CardPersonagem from '@/Components/CardPersonagem';
import { Personagem } from '@/types/marvel_types';
import { pesquisarPersonagens } from '@/utils/api_marvel';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState, Suspense } from 'react';

const PaginaPesquisa: FC = () => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get('query');
  const [personagens, setPersonagens] = useState<Personagem[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setCarregando(true);
      try {
        const data = await pesquisarPersonagens(querySearch);
        setPersonagens(data.results);
      } catch (error) {
        console.error(error);
      }
      setCarregando(false);
    };

    if (querySearch) fetchData();
  }, [querySearch]);

  return (
    <div className='container text-center mt-10' style={{ paddingLeft: '16px', paddingRight: '16px' }}>
      <h1 style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: "1.5rem", color: "yellow", textAlign: "center" }}>
        Resultados para <span>"{querySearch}"</span>
      </h1>
      {carregando ? (
        <div className='mt-10'>
          <Typography variant="body1">Carregando lista de personagens...</Typography>
          <CircularProgress />
        </div>
      ) : (
        personagens.length > 0 ? (
          <Grid container spacing={3} style={{ marginLeft: '-16px', marginRight: '-16px' }}>
            {personagens.map(personagem => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={personagem.id}>
                <Box>
                  <CardPersonagem personagem={personagem} />
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">
            Desculpe, não encontramos nada para a busca "<span>{querySearch}</span>" :(
          </Typography>
        )
      )}
    </div>
  );
};

const PaginaPesquisaWrapper: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaginaPesquisa />
    </Suspense>
  );
};

export default PaginaPesquisaWrapper;
