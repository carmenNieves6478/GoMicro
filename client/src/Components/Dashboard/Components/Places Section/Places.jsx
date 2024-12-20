import React from 'react';
import './places.scss';
import Top from '../Body Section/Top Section/Top';


import lago from '../../Assets/lago.jpg'
import isla from '../../Assets/isla-Taquile.jpg'
import catedral from '../../Assets/catedral.jpg'; // Imagen de la Catedral de Puno
import amantani from '../../Assets/amantani.jpg'; // Imagen de Isla Amantaní
import sillustani from '../../Assets/sillustani.jpg'; // Imagen de Sillustani
import uros from '../../Assets/uros.jpg'; // Imagen de Islas Flotantes de los Uros
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Box
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const tourismPlaces = [
  {
    id: 1,
    name: 'Lago Titicaca',
    description: 'El lago navegable más alto del mundo. Hogar de las islas flotantes de los Uros.',
    image: lago,
    location: 'Puno, Perú',
  },
  {
    id: 2,
    name: 'Isla Taquile',
    description: 'Famosa por sus textiles artesanales y tradiciones culturales ancestrales.',
    image: isla,
    location: 'Lago Titicaca, Puno',
  },
  {
    id: 3,
    name: 'Islas Flotantes de los Uros',
    description: 'Islas artificiales hechas de totora donde vive la comunidad Uros.',
    image: uros,
    location: 'Puno, Perú' ,
  },
  {
    id: 4,
    name: 'Sillustani',
    description: 'Complejo arqueológico pre-inca famoso por sus chullpas o torres funerarias.',
    image: sillustani,
    location: 'Puno, Perú',
  },
  {
    id: 5,
    name: 'Isla Amantaní',
    description: 'Isla conocida por su hospitalidad y sus dos miradores ceremoniales pre-incas.',
    image: amantani,
    location: 'Lago Titicaca, Puno',
  },
  {
    id: 6,
    name: 'Catedral de Puno',
    description: 'Impresionante catedral barroca del siglo XVIII en la Plaza de Armas.',
    image: catedral,
    location: 'Centro de Puno',
  }
];

const Places = () => {
  return (
    <div className="mainContent">
      <Top />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 4, textAlign: 'center' }}
          className="section-title"
        >
          Destinos Turísticos en Puno
        </Typography>

        <Grid container spacing={4} className="places-grid">
          {tourismPlaces.map((place) => (
            <Grid item key={place.id} xs={12} sm={6} md={4}>
              <Card className="place-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={place.image}
                  alt={place.name}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    className="place-title"
                  >
                    {place.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="place-description"
                  >
                    {place.description}
                  </Typography>
                  <Box className="location-info">
                    <LocationOnIcon />
                    <Typography variant="body2">
                      {place.location}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                  >
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Places;