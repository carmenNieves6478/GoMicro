import React, { useEffect, useState } from 'react';
import '../../../../App.css';
import '../Body Section/body.css';
import Top from '../Body Section/Top Section/Top';
/* import Listing from '../Body Section/Map Section/Map'; */
import Listing from '../Body Section/Listing Section/Listing';
import Activity from '../Body Section/Activity Section/Activity';




const Body = () => {
    const [showContent, setShowContent] = useState(false);

    // Función para mostrar el contenido
    const handleShowContent = () => {
        setShowContent(true);
    };

    return (
        <div className="mainContent">
            <Top />
            <div className="bottom flex">
                {/* Botón para cargar la página dentro del iframe */}
                <button onClick={handleShowContent} className="searchButton">
                    Buscar
                </button>

                {/* Solo mostrar el iframe si el estado showContent es true */}
                {showContent && (
                    <iframe
                        src="https://virrgoecoing.com/RUTAS/index.html"
                        title="Rutas"
                        width="100%"
                        height="600px"
                        style={{ border: 'none', marginTop: '20px' }}
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default Body;