import React, { useState } from "react";
import '../footer/Style/reclamos.css';

const Reclamaciones = () => {
    const [isVisible, setIsVisible] = useState({
        privacy: true,
        information: true,
        purpose: true
    });

    const toggleVisibility = (section) => {
        setIsVisible(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className="divReclamaciones">
            <h1>Politicas y condiciones de uso</h1>
            
            <h2>
                Politicas de Privacidad
                <button className="toggle-button" onClick={() => toggleVisibility("privacy")}>
                    {isVisible.privacy ? "✖" : "➕"}
                </button>
            </h2>
            {isVisible.privacy && (
                <p>
                    Phantom cuenta con una estricta política de privacidad y confidencialidad de la información 
                    otorgada por nuestros clientes. Nuestras bases de datos están codificadas y estructuradas 
                    de tal forma que garantizan la seguridad que nuestros clientes esperan. La información 
                    proporcionada por el usuario, está asegurada por una clave de acceso a la cual sólo el 
                    usuario podrá acceder y de la cual sólo él tiene conocimiento. El usuario es el único 
                    responsable de mantener en secreto su clave y la información de su cuenta. Para disminuir 
                    los riesgos, Phantom recomienda al usuario salir de su cuenta correctamente dando clic en 
                    el enlace Salir y cerrar la ventana de su navegador. La recomendación anterior debe tenerlo 
                    en cuenta cuando esté en su computador personal, cabina de internet, o en un establecimiento
                    comercial con acceso a internet.
                </p>
            )}

            <h2>
                Condiciones de uso
                <button className="toggle-button" onClick={() => toggleVisibility("information")}>
                    {isVisible.information ? "✖" : "➕"}
                </button>
            </h2>
            {isVisible.information && (
                <p>
                    RESPONSABILIDADES Phantom es responsable de todo el contenido publicado en esta 
                    página web siendo la única empresa autorizada y en capacidad de realizar cambios 
                    en la misma. Las transacciones que se realicen en esta página implican el 
                    cumplimiento por parte de Phantom de los siguientes puntos: Envío del Pedido: 
                    Todo lo solicitado por el cliente a través de su Orden de Compra, llamada "Pedido" 
                    por el sistema, y que haya sido pagado de forma satisfactoria a través de una 
                    tarjeta de crédito válida y vigente, deberá ser entregado por Phantom en la 
                    dirección consignada en el campo "Dirección de Envío". Ante el eventual y poco 
                    probable caso de agotamiento de stock de algún o algunos de los productos 
                    solicitados por el cliente, Phantom se reserva el derecho de no procesar la orden,
                    debiendo informar al cliente sobre la incapacidad de atender su pedido. Dificultad
                    para Entregar el Pedido: Ante una eventual dificultad en la entrega del pedido por 
                    dirección consignada de forma incorrecta o ausencia de personas en la dirección 
                    consignada, Phantom contactará al cliente para coordinar la entrega en otro lugar.
                    Garantía y Reposiciones: Todos los productos ofrecidos en esta página cuentan con 
                    una garantía de reposición al 100%, siempre que nuestra empresa haya sido 
                    contactada por el cliente dentro de las siguientes 24 horas de efectuada la 
                    entrega. Phantom repondrá el o los productos que el cliente considere inadecuados 
                    o que no estén dentro de sus expectativas de calidad. Precios e impuestos: 
                    Nuestros precios están consignados en Soles e incluyen el IGV.
                </p>
            )}

            <h2>
                Politicas de cambios y devoluciones
                <button className="toggle-button" onClick={() => toggleVisibility("purpose")}>
                    {isVisible.purpose ? "✖" : "➕"}
                </button>
            </h2>
            {isVisible.purpose && (
                <p>
                    Los datos personales contenidos en la información confidencial...
                </p>
            )}
            <h2>
                Devolucion de dinero
                <button className="toggle-button" onClick={() => toggleVisibility("purpose")}>
                    {isVisible.purpose ? "✖" : "➕"}
                </button>
            </h2>
            {isVisible.purpose && (
                <p>
                    Los datos personales contenidos en la información confidencial...
                </p>
            )}
        </div>
    );
};

export default Reclamaciones;




/*
import React from "react";
import '../footer/Style/reclamos.css';

const Reclamaciones = () => {
    return (
        <div className="divReclamaciones">
            <h1>Politicas y condiciones de uso</h1>
            <h2>Politicas de Privacidad</h2>
            <p>
            Phantom cuenta con una estricta política de privacidad y confidencialidad de la información 
            otorgada por nuestros clientes. Nuestras bases de datos están codificadas y estructuradas 
            de tal forma que garantizan la seguridad que nuestros clientes esperan. La información 
            proporcionada por el usuario, está asegurada por una clave de acceso a la cual sólo el 
            usuario podrá acceder y de la cual sólo él tiene conocimiento. El usuario es el único 
            responsable de mantener en secreto su clave y la información de su cuenta. Para disminuir 
            los riesgos, Phantom recomienda al usuario salir de su cuenta correctamente dando clic en 
            el enlace Salir y cerrar la ventana de su navegador. La recomendación anterior debe tenerlo 
            en cuenta cuando esté en su computador personal, cabina de internet, o en un establecimiento
            comercial con acceso a internet.
            </p>
            <h2>TIPO DE INFORMACIÓN QUE SE OBTIENE LOS USUARIOS.</h2>
            <p>
            La información personal que el usuario ingresa a nuestro sitio durante la inscripción o actualización son considerados estrictamente de carácter personal. El usuario puede modificar o actualizar esta información en cualquier momento ingresando con su respectivo correo y contraseña. En caso hubiese olvidado su contraseña podrá recuperarla ahora mismo.
            </p>
            <h2>FINALIDAD DE DICHA INFORMACION REGISTRADA POR EL USUARIO</h2>
            <p>
            Los datos personales contenidos en la información confidencial, son utilizados para proveerle al usuario un servicio personalizado en el momento de realizar su compra por internet y llevar el control respectivo de las órdenes.
            </p>

        </div>
    )
}

export default Reclamaciones;

*/