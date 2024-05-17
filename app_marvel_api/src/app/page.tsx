import CardPersonagem from "@/Components/CardPersonagem";
import { buscarTodosPersonagens } from "@/utils/api_marvel";
import { Box, Grid, Container } from "@mui/material";

export default async function Home() {
  const personagens = await buscarTodosPersonagens();
  console.log(personagens);

  return (
    <main>
      <div className="container text-center mt-10">
        <h1 className="text-xl font-bold">Confira abaixo a lista de personagens mais famosos da Marvel Comics!</h1>
        <Grid container spacing={3}>
          {personagens.results.map(personagem => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={personagem.id}>
              <Box>
                <CardPersonagem personagem={personagem} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}
