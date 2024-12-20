/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../../App.css';
import './map.css'; // Asegúrate de que esta hoja de estilo existe en la ruta correcta
import L from 'leaflet';

const MapView = () => {
    const [lugares, setLugares] = useState([]);
    const [rutas, setRutas] = useState([]);
    const [drawingPath, setDrawingPath] = useState(false);
    const [currentPath, setCurrentPath] = useState([]);
    const [map, setMap] = useState(null);
    const [userMarker, setUserMarker] = useState(null);
    const [currentPathLayer, setCurrentPathLayer] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState('');
    const [nombreRuta, setNombreRuta] = useState('');
    const [referencia, setReferencia] = useState('');
    const [nombreLugar, setNombreLugar] = useState('');

    useEffect(() => {
        // Inicializar el mapa
        const mapInstance = L.map('map').setView([-12.0464, -77.0428], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstance);

        setMap(mapInstance);

        // Obtener ubicación actual
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                document.getElementById('ubicacionActual').value = `${latitude}, ${longitude}`;

                if (userMarker) mapInstance.removeLayer(userMarker);
                const newUserMarker = L.marker([latitude, longitude]).addTo(mapInstance);
                setUserMarker(newUserMarker);
                mapInstance.setView([latitude, longitude], 15);
            });
        }

        return () => {
            if (mapInstance) mapInstance.remove();
        };
    }, []);

    // Cargar los lugares
    useEffect(() => {
        const cargarLugares = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/lugares');
                setLugares(response.data);
            } catch (error) {
                console.error('Error al cargar los lugares:', error);
            }
        };

        cargarLugares();
    }, []);

    // Cargar rutas cuando se selecciona un lugar
    useEffect(() => {
        if (selectedPlace) {
            const cargarRutas = async () => {
                try {
                    const response = await axios.post('http://localhost:3002/api/routes', {
                        lugar: selectedPlace,
                        destino: '',
                        referencia: referencia,
                    });
                    setRutas(response.data);
                } catch (error) {
                    console.error('Error al cargar las rutas:', error);
                }
            };

            cargarRutas();
        }
    }, [selectedPlace, referencia]);

    // Dibujar la ruta en el mapa
    const handleMapClick = (e) => {
        if (drawingPath) {
            const point = [e.latlng.lat, e.latlng.lng];
            const newPath = [...currentPath, point];
            setCurrentPath(newPath);
            updatePathDrawing(newPath);
        }
    };

    // Actualizar la ruta
    const updatePathDrawing = (path) => {
        if (currentPathLayer) {
            map.removeLayer(currentPathLayer);
        }

        if (path.length > 0) {
            const newPathLayer = L.polyline(path, { color: 'blue', weight: 3 }).addTo(map);
            setCurrentPathLayer(newPathLayer);
        }
    };

    const handleIniciarDibujo = () => {
        setDrawingPath(!drawingPath);
    };

    const handleGuardarRuta = async () => {
        if (!nombreRuta || !nombreLugar || currentPath.length === 0) {
            alert('Por favor, complete todos los campos');
            return;
        }

        const routeData = {
            nombre: nombreRuta,
            punto_inicio: currentPath[0].join(','),
            punto_fin: currentPath[currentPath.length - 1].join(','),
            coordenadas: JSON.stringify(currentPath),
            referencia: referencia,
            nombre_lugar: nombreLugar,
        };

        try {
            const response = await axios.post('http://localhost:3002/api/save-route', routeData);
            if (response.data.success) {
                alert('Ruta guardada exitosamente');
                setCurrentPath([]);
                setDrawingPath(false);
                setNombreRuta('');
                setReferencia('');
                setNombreLugar('');
            }
        } catch (error) {
            console.error('Error al guardar la ruta:', error);
            alert('Error al guardar la ruta');
        }
    };

    return (
        <div className="map-container">
            <div className="panel">
                <h2>Buscar Ruta</h2>
                <div className="search-form">
                    <input type="text" id="ubicacionActual" placeholder="Desde (Ubicación Actual)" readOnly />
                    <input
                        type="text"
                        placeholder="Referencia"
                        value={referencia}
                        onChange={(e) => setReferencia(e.target.value)}
                    />
                    <select
                        value={selectedPlace}
                        onChange={(e) => setSelectedPlace(e.target.value)}
                    >
                        <option value="">Selecciona un lugar</option>
                        {lugares.map((lugar, index) => (
                            <option key={index} value={lugar.lugar}>
                                {lugar.lugar}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="admin-panel">
                    <h3>Panel de Administración</h3>
                    <button onClick={handleIniciarDibujo}>
                        {drawingPath ? 'Detener Dibujo' : 'Iniciar Dibujo'}
                    </button>
                    <input
                        type="text"
                        placeholder="Nombre del Lugar"
                        value={nombreLugar}
                        onChange={(e) => setNombreLugar(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nombre de la Ruta"
                        value={nombreRuta}
                        onChange={(e) => setNombreRuta(e.target.value)}
                    />
                    <button onClick={handleGuardarRuta}>Guardar Ruta</button>
                </div>
            </div>

            <div id="map" style={{ height: '500px' }} onClick={handleMapClick}></div>

            <div className="ruta-lista">
                {rutas.length > 0 ? (
                    rutas.map((ruta, index) => (
                        <div key={index}>
                            <p>{ruta.nombre} - {ruta.referencia}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron rutas</p>
                )}
            </div>
        </div>
    );
};

export default MapView;
 */