import React from "react";
import '../footer/Style/reclamos.css';

const Sugerencias = () => {
    return (
        <div className="divSugerencias">
            <h1>¿Como podemos mejorar</h1>
            <p>Agradecemos puedan enviarnos sus sugerencias mediante el llenado del siguiente formulario.</p>
            <form action="">
                <label htmlFor="">Nombre y Apellidos</label>
                    <input type="text" />
                <label htmlFor="">Correo</label>
                    <input type="email" />
                <label htmlFor="">Teléfono o Celular</label>
                    <input type="tel" />
                <label htmlFor="">Presentacion</label>
                    <textarea name="" id=""></textarea>
                <button>REGRESAR</button>
                <button>ENVIAR</button>
            </form>
        
        </div>
    )
}

export default Sugerencias;