import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Personagem } from '@/types/marvel_types';
import Link from 'next/link';

interface CardPersonagemProps {
    personagem: Personagem
}

const CardPersonagem: React.FC<CardPersonagemProps> = ({ personagem }) => {
    console.log(personagem);
    return (
        <Link href={`informacoes_personagem/${personagem.id}`} passHref>
            <Card
                sx={{
                    width: 245,
                    height: 350, // Define uma altura fixa
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Distribui espaço entre os elementos
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer', // Indica que o card é clicável
                    '&:hover': {
                        transform: 'scale(1.10)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="140" // Ajusta a altura da imagem
                    image={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {personagem.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Id do personagem: {personagem.id}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}

export default CardPersonagem;
