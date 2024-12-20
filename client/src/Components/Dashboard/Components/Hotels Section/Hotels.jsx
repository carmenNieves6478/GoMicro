import React from 'react';
import './hotels.css';
import Top from '../Body Section/Top Section/Top';

import posadasInca from '../../Assets/posadasInca.jpg'; // Imagen de Posadas Inca
import premiumHotel from '../../Assets/premiumHotel.jpg'; // Imagen de Premium Hotel
import lagoHotel from '../../Assets/hotelLago.jpg'; // Imagen de Lago Hotel

import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Rating,
    Divider,
    Container,
    Button
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const hotels = [
    {
        id: 1,
        name: 'GHL Hotel Lago Titicaca',
        description: 'Hotel de lujo con vistas panorámicas al Lago Titicaca. Habitaciones elegantes y servicios premium.',
        image: lagoHotel,
        location: 'Av. Sesquicentenario 1128, Puno',
        rating: 5,
        priceRange: 'Desde $180/noche',
        amenities: ['wifi', 'pool', 'restaurant', 'parking', 'roomService'],
        rooms: ['Suites', 'Habitación Deluxe', 'Vista al Lago']
    },
    {
        id: 2,
        name: 'Casa Andina Premium Puno',
        description: 'Hotel boutique que combina el lujo moderno con la arquitectura tradicional andina.',
        image: premiumHotel,
        location: 'Jr. Independencia 185, Puno',
        rating: 4.8,
        priceRange: 'Desde $150/noche',
        amenities: ['wifi', 'restaurant', 'parking', 'roomService'],
        rooms: ['Suite Ejecutiva', 'Habitación Superior', 'Habitación Tradicional']
    },
    {
        id: 3,
        name: 'Sonesta Posadas del Inca',
        description: 'Ubicado en la orilla del lago, ofrece una experiencia única con servicios de primera clase.',
        image: posadasInca,
        location: 'Av. Sesquicentenario 610, Puno',
        rating: 4.7,
        priceRange: 'Desde $140/noche',
        amenities: ['wifi', 'pool', 'restaurant', 'parking'],
        rooms: ['Suite Lake View', 'Habitación Premium', 'Habitación Estándar']
    }
];

const amenityIcons = {
    wifi: <WifiIcon />,
    pool: <PoolIcon />,
    restaurant: <RestaurantIcon />,
    parking: <LocalParkingIcon />,
    roomService: <RoomServiceIcon />
};

const Hotels = () => {
    return (
        <div className="mainContent">
            <Top />
            <Container maxWidth="xl" className="hotelsContainer">
                <Typography
                    variant="h3"
                    component="h1"
                    className="section-title"
                >
                    Hoteles Exclusivos en Puno
                </Typography>

                <Grid container spacing={4}>
                    {hotels.map((hotel) => (
                        <Grid item xs={12} key={hotel.id}>
                            <Card className="hotel-card">
                                <Grid container>
                                    <Grid item xs={12} md={4} className="hotel-image">
                                        <img src={hotel.image} alt={hotel.name} />
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        <CardContent className="hotel-content">
                                            <Box className="hotel-header">
                                                <div>
                                                    <Typography variant="h4" className="hotel-name">
                                                        {hotel.name}
                                                    </Typography>
                                                    <Rating value={hotel.rating} precision={0.5} readOnly />
                                                </div>
                                                <Typography variant="h6" className="price-range">
                                                    {hotel.priceRange}
                                                </Typography>
                                            </Box>

                                            <Box className="location-info">
                                                <LocationOnIcon />
                                                <Typography>{hotel.location}</Typography>
                                            </Box>

                                            <Typography className="hotel-description">
                                                {hotel.description}
                                            </Typography>

                                            <Divider className="divider" />

                                            <Box className="amenities-section">
                                                <Typography variant="h6">Servicios</Typography>
                                                <Box className="amenities-list">
                                                    {hotel.amenities.map((amenity) => (
                                                        <Box key={amenity} className="amenity-item">
                                                            {amenityIcons[amenity]}
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Box>

                                            <Box className="rooms-section">
                                                <Typography variant="h6">Tipos de Habitación</Typography>
                                                <Box className="room-types">
                                                    {hotel.rooms.map((room, index) => (
                                                        <Typography key={index} className="room-type">
                                                            • {room}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Box>

                                            <Box className="action-buttons">
                                                <Button variant="outlined">Ver Detalles</Button>
                                                <Button variant="contained">Reservar Ahora</Button>
                                            </Box>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Hotels;