import CardPersonagem from "@/Components/CardPersonagem";
import { buscarTodosPersonagens } from "@/utils/api_marvel";
import { Grid, Container } from "@mui/material";

export default async function Home() {
  const personagens = await buscarTodosPersonagens();
  console.log(personagens);

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
            {personagens.results.map(personagem => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={personagem.id}>
                <CardPersonagem personagem={personagem} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </main>
  );
}
