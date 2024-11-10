import React from "react";

const TrabajaConNos = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
    };

    return(
        <div className="footer-section2">
            <h1>Únete a nuestro equipo</h1>
            <p>
                En Phantom agradecemos su interés por formar parte de nuestro gran equipo humano. 
                Constantemente estamos en la búsqueda de nuevos integrantes en variadas posiciones 
                de nuestra empresa.
            </p> 
            <p>
                ¿CÓMO POSTULAR? <br/>
                <ul>
                <li>Envíanos un correo con tu curriculum vitae adjunto.</li>
                    <li>En el asunto indicar el puesto al cual postulas y la ciudad donde te encuentras.</li>
                    <li>En el cuerpo del correo escríbenos una breve reseña presentándose e indicándonos tus conocimientos en videojuegos, música, audio y coleccionables.</li>
                </ul>
                ¿CUMPLO CON LAS CONDICIONES? <br />
                <ul>
                    <li>Debes tener 18 años como mínimo.</li>
                    <li>Disponibilidad para trabajar a tiempo completos (48 horas semanales).</li>
                    <li>Disponibilidad para trabajar en cualquiera de nuestras tiendas.</li>
                    <li>Proyección laboral, mínima de 2 años.</li>
                    <li>Responsabilidad y muchas ganas de cumplir con las metas de la empresa.</li>
                </ul>
            </p>
            <h4>¡Aquí somos gamers, melómanos, audiófilos y coleccionistas!</h4>
            <h4>Únete a nuestro equipo</h4>
            <p>Unete a nuestro equipo completando el siguiente formulario. (* Campo obligatorio)</p>
            <form  className="footer-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre completo</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="phone">Teléfono o Celular</label>
                <input type="tel" id="phone" name="phone" />
                
                <label htmlFor="departamento">Departamento</label>
                    <select id="departamento" name="departamento">
                        <option value="lima">Lima</option>
                        <option value="trujillo">Trujillo</option>
                        <option value="huancayo">Huancayo</option>
                        <option value="cusco">Cusco</option>
                        <option value="arequipa">Arequipa</option>
                    </select>
                <button type="button" onClick={() => console.log("Regresar")}>REGRESAR</button>
                <button type="submit">ENVIAR</button>
            </form>

        </div>
    )

}

export default TrabajaConNos
;