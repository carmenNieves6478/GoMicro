import React from 'react'
import './favoritos.css'
import Top from '../Body Section/Top Section/Top'
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

import rest from '../../Assets/labonita.jpg'; // Imagen de Posadas Inca
import plaza from '../../Assets/plazaMayor.jpeg'; // Imagen de Premium Hotel
import hotel from '../../Assets/hotelCentral.jpg'; // Imagen de Lago Hotel

import { MdLocationOn } from 'react-icons/md'; // Asegúrate de que esta importación esté aquí

const Favoritos = () => {
    // Datos de ejemplo de favoritos (puedes reemplazar esto con tus datos reales)
    const favoritos = [
        {
            id: 1,
            title: 'Restaurante La Bonita',
            description: 'Restaurante de comida mexicana.',
            imageUrl: rest,
            type: 'Restaurante',
        },
        {
            id: 2,
            title: 'Hotel Central',
            description: 'Hotel de lujo en el centro de la ciudad.',
            imageUrl: hotel,
            type: 'Hotel',
        },
        {
            id: 3,
            title: 'Plaza Mayor',
            description: 'Lugar turístico famoso en la ciudad.',
            imageUrl: plaza,
            type: 'Lugar',
        },
    ];

    return (
        <div className="mainContent">
            <Typography variant="h4" gutterBottom>Favoritos</Typography>
            <Grid container spacing={4} className="places-grid">
                {favoritos.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card className="place-card">
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.imageUrl}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h6" className="place-title">
                                    {item.title}
                                </Typography>
                                <div className="location-info">
                                    <MdLocationOn />
                                    <Typography variant="body2" color="textSecondary">
                                        {item.type}
                                    </Typography>
                                </div>
                                <Typography variant="body2" className="place-description">
                                    {item.description}
                                </Typography>
                                <Button size="small" color="primary">
                                    Ver más
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Favoritos;