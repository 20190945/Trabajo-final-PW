import React, { useState } from "react";
import '../Style/footerEstilos.css';

const Sedes = () => {
    const sedeDefault = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.372266792811!2d-76.98019792610403!3d-12.086647742642187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7b2454c72e9%3A0x3f81a788ed327988!2sPhantom!5e0!3m2!1ses!2spe!4v1731217367466!5m2!1ses!2spe";
    const [mapUrl, setMapUrl] = useState(sedeDefault); // URL inicial del mapa

    // Tiendas Links
    const sanMiguel = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.510029124362!2d-77.08486392610423!3d-12.077196042465747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c97277e55551%3A0x6389619097730a17!2sPhantom!5e0!3m2!1ses!2spe!4v1731218350257!5m2!1ses!2spe";
    const jockeyPlaza = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3722667928205!2d-76.98019792610404!3d-12.086647742642192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7b2454c72e9%3A0x3f81a788ed327988!2sPhantom!5e0!3m2!1ses!2spe!4v1731220284724!5m2!1ses!2spe";

    // Función para actualizar la URL del mapa cuando se selecciona una tienda
    const handleClick = (url) => {
        setMapUrl(url);
    };

    return (
        <div className="footer-section2">
            <h1>Nuestras tiendas</h1>
        
        <div className="sedes-container">
            {/* Sección Izquierda */}
            <div className="sedes-list">
                <ul>
                    <h2>Lima</h2>
                    <label><b>San Miguel</b></label>
                    <li onClick={() => handleClick(sanMiguel)}>
                        <b>C.C. Plaza San Miguel, Primer Piso</b>
                    </li>
                    <label> <b>Celular: </b>981078024</label> <br />
                    <label> <b>Horario:</b> Lun-Dom:10:00 am - 10:00 pm</label>
                 
                    <hr />
                    <label htmlFor=""><b>Jockey Plaza</b></label>
                    <li onClick={() => handleClick(jockeyPlaza)}>
                        <b>C.C. Jockey Plaza, Primer Piso</b>
                    </li>
                    <label htmlFor=""> <b>Celular: </b>981078041</label> <br />
                    <label htmlFor=""> <b>Horario:</b> Lun-Dom:11:00 am - 10:00 pm</label>
                    <hr />
                </ul>
            </div>

            {/* Sección Derecha (Mapa) */}
            <div className="sedes-map">
                <iframe 
                    src={mapUrl} 
                    width="600" 
                    height="450" 
                    style={{ border: '0' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        </div>
    );
}

export default Sedes;
