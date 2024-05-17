import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Personagem } from '@/types/marvel_types';

interface CardPersonagemProps {
    personagem: Personagem
}

const CardPersonagem: React.FC<CardPersonagemProps> = ({ personagem }) => {
    console.log(personagem);
    return (
        <Card
            sx={{
                maxWidth: 245,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.10)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <CardMedia
                component="img"
                height="100"
                image={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {personagem.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Id do personagem: {personagem.id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Informações do {personagem.name}</Button>
            </CardActions>
        </Card>
    );
}

export default CardPersonagem;
