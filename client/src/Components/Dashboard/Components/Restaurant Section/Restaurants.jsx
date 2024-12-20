import React from 'react';
import './restaurants.css';
import Top from '../Body Section/Top Section/Top';


import donGiorgio from '../../Assets/don-giorgo.jpg'; // Imagen de Don Giorgio
import balconesPuno from '../../Assets/balcones-de-puno.jpg'; // Imagen de Balcones de Puno
import colors from '../../Assets/colors.jpg'; // Imagen de Colors
import mojsaRestaurant from '../../Assets/mojsa-restaurant.jpg'; // Imagen de Mojsa Restaurant
import restaurant1 from '../../Assets/restaurant1.jpg'; // Imagen de Restaurant 1
import table from '../../Assets/table.jpg'; // Imagen de Restaurant 1


import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Container,
    Box,
    Rating,
    Chip
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const restaurants = [
    {
        id: 1,
        name: 'La Casona',
        description: 'Restaurante especializado en comida típica puneña y alpaca a la parrilla.',
        image: restaurant1,
        location: 'Jr. Lima 418, Puno',
        rating: 4.5,
        cuisine: 'Comida Típica',
        priceRange: '$$',
        hours: '12:00 PM - 10:00 PM',
        specialties: ['Trucha frita', 'Alpaca a la parrilla', 'Chairo']
    },
    {
        id: 2,
        name: 'Mojsa Restaurant',
        description: 'Restaurante gourmet con vista al Lago Titicaca. Fusión de cocina moderna y andina.',
        image: mojsaRestaurant,
        location: 'Jr. Libertad 354, Puno',
        rating: 4.7,
        cuisine: 'Fusión Andina',
        priceRange: '$$$',
        hours: '12:30 PM - 11:00 PM',
        specialties: ['Quinotto', 'Ceviche de trucha', 'Carpaccio de alpaca']
    },
    {
        id: 3,
        name: 'La Table del Inca',
        description: 'Cocina internacional y peruana en un ambiente elegante.',
        image: table,
        location: 'Av. Sesquicentenario 1970, Puno',
        rating: 4.4,
        cuisine: 'Internacional/Peruana',
        priceRange: '$$$',
        hours: '1:00 PM - 10:30 PM',
        specialties: ['Lomo saltado', 'Pescado a la marinera', 'Risotto de quinua']
    },
    {
        id: 4,
        name: 'Colors Restaurant',
        description: 'Restaurante con vista panorámica al lago y cocina regional.',
        image: colors,
        location: 'Jr. Tacna 290, Puno',
        rating: 4.3,
        cuisine: 'Regional',
        priceRange: '$$',
        hours: '11:30 AM - 9:30 PM',
        specialties: ['Trucha al ajillo', 'Sopa de quinua', 'Cancacho']
    },
    {
        id: 5,
        name: 'Balcones de Puno',
        description: 'Restaurante tradicional con los mejores platos típicos de la región.',
        image: balconesPuno,
        location: 'Jr. Deustua 576, Puno',
        rating: 4.6,
        cuisine: 'Tradicional Puneña',
        priceRange: '$$',
        hours: '12:00 PM - 9:00 PM',
        specialties: ['Chupe de camarones', 'Cuy chactado', 'Pesque de quinua']
    },
    {
        id: 6,
        name: 'Don Giorgio',
        description: 'Pizza artesanal y pasta fresca con ingredientes locales.',
        image: donGiorgio,
        location: 'Jr. Lima 542, Puno',
        rating: 4.4,
        cuisine: 'Italiana/Fusión',
        priceRange: '$$',
        hours: '12:30 PM - 10:00 PM',
        specialties: ['Pizza de alpaca', 'Pasta al pesto andino', 'Lasagna de trucha']
    }
];

const Restaurants = () => {
    return (
        <div className="mainContent">
            <Top />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    className="section-title"
                >
                    Restaurantes en Puno
                </Typography>

                <Grid container spacing={4} className="restaurants-grid">
                    {restaurants.map((restaurant) => (
                        <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
                            <Card className="restaurant-card">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={restaurant.image}
                                    alt={restaurant.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" className="restaurant-title">
                                        {restaurant.name}
                                    </Typography>

                                    <Box className="restaurant-rating">
                                        <Rating value={restaurant.rating} precision={0.5} readOnly />
                                        <Typography variant="body2">
                                            ({restaurant.rating})
                                        </Typography>
                                    </Box>

                                    <Box className="restaurant-tags">
                                        <Chip
                                            label={restaurant.cuisine}
                                            size="small"
                                            icon={<RestaurantIcon />}
                                        />
                                        <Chip
                                            label={restaurant.priceRange}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>

                                    <Typography className="restaurant-description">
                                        {restaurant.description}
                                    </Typography>

                                    <Box className="info-item">
                                        <LocationOnIcon />
                                        <Typography variant="body2">
                                            {restaurant.location}
                                        </Typography>
                                    </Box>

                                    <Box className="info-item">
                                        <AccessTimeIcon />
                                        <Typography variant="body2">
                                            {restaurant.hours}
                                        </Typography>
                                    </Box>

                                    <Box className="specialties">
                                        <Typography variant="subtitle2" className="specialties-title">
                                            Especialidades:
                                        </Typography>
                                        <Box className="specialty-chips">
                                            {restaurant.specialties.map((specialty, index) => (
                                                <Chip
                                                    key={index}
                                                    label={specialty}
                                                    size="small"
                                                    className="specialty-chip"
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className="view-more-btn"
                                    >
                                        Ver Menú
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

export default Restaurants;