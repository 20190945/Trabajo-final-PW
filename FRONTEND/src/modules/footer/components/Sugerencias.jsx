import React from "react";
import '../Style/footerEstilos.css';

const Sugerencias = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías manejar el envío del formulario
        console.log("Formulario enviado");
    };

    return (
        <div className="footer-section2">
            <h1>¿Cómo podemos mejorar?</h1>
            <p>Agradecemos puedan enviarnos sus sugerencias mediante el llenado del siguiente formulario.</p>
            <form  className="footer-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre y Apellidos</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Correo</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="phone">Teléfono o Celular</label>
                <input type="tel" id="phone" name="phone" />
                
                <label htmlFor="message">Presentación</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="button" onClick={() => console.log("Regresar")}>REGRESAR</button>
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    );
};

export default Sugerencias;
