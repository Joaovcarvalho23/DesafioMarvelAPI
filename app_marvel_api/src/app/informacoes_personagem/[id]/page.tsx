import { buscarInformacoesPersonagem } from '@/utils/api_marvel'
import { Box, Container, Grid, Typography, Card, CardMedia } from '@mui/material'
import { FC } from 'react'
import { Personagem, PacoteInformacoesDoPersonagem } from '@/types/marvel_types'

interface PaginaPersonagemProps {
  params: {
    id: string
  }
}

const styles = {
  root: {
    color: 'white',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '5vh',
  },
  container: {
    backgroundColor: 'rgba(1, 0, 0, 0.7)',
    padding: 26,
    borderRadius: 8,
  },
  infoBox: {
    padding: 8,
  },
  card: {
    maxWidth: 500,
    marginRight: 16,
  },
  cardMedia: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
}

const PaginaPersonagem: FC<PaginaPersonagemProps> = async ({ params }) => {
  const { id } = params

  const pacoteInformacoes: PacoteInformacoesDoPersonagem = await buscarInformacoesPersonagem(id)
  const personagem: Personagem = pacoteInformacoes.results[0]
  const { name, description, thumbnail, comics } = personagem
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div style={{ ...styles.root, backgroundImage: `url(${imageUrl})` }}>
      <Container maxWidth="md" style={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box style={styles.infoBox}>
              <Card sx={styles.card}>
                <CardMedia
                  component="img"
                  sx={styles.cardMedia}
                  image={imageUrl}
                  alt={name}
                />
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={styles.infoBox}>
            <Typography variant="h5">
                <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Nome do personagem:</span> {name}
            </Typography>

              <Typography variant="h5" fontStyle="italic" gutterBottom>
                <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Descrição:</span> {description ? description : 'Desculpe, sem detalhes sobre este personagem.'}
              </Typography>
              <Typography variant="h5" gutterBottom>
                <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Lista de HQ's:</span>
              </Typography>
              <ul>
                {comics.items.map((comic, index) => (
                  <li key={index}>
                    <Typography variant="body1">{comic.name}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PaginaPersonagem
