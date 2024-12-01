import React, { useState } from "react";
import '../Style/footerEstilos.css';

const Politicas = () => {
    const [isVisible, setIsVisible] = useState({
        privacy: true,
        information: true,
        changes: true,
        refund: true
    });

    const toggleVisibility = (section) => {
        setIsVisible(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className="footer-section2">
            <h1>Políticas y condiciones de uso</h1>
            
            <h2>
                Políticas de Privacidad
                <button className="toggle-button" onClick={() => toggleVisibility("privacy")}>
                    {isVisible.privacy ? "✖" : "➕"}
                </button>
            </h2>
            {isVisible.privacy && (
                <p>
                    Phantom cuenta con una estricta política de privacidad y confidencialidad de la información 
                    otorgada por nuestros clientes. Nuestras bases de datos están codificadas y estructuradas 
                    de tal forma que garantizan la seguridad que nuestros clientes esperan...
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
                    Phantom es responsable de todo el contenido publicado en esta página web siendo la única empresa autorizada...
                </p>
            )}

            <h2>
                Políticas de cambios y devoluciones
                <button className="toggle-button" onClick={() => toggleVisibility("changes")}>
                    {isVisible.changes ? "✖" : "➕"}
                </button>
            </h2>
            {isVisible.changes && (
                <p>
                    Los datos personales contenidos en la información confidencial...
                </p>
            )}

            <h2>
                Devolución de dinero
                <button className="toggle-button" onClick={() => toggleVisibility("refund")}>
                    {isVisible.refund ? "✖" : "➕"}
                </button>
            </h2>
            {isVisible.refund && (
                <p>
                    Los datos personales contenidos en la información confidencial...
                </p>
            )}
        </div>
    );
};

export default Politicas;
