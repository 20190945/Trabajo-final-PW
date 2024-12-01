import React from "react";
import '../Login/styles/Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <h1 className="login-title">Inicio de Sesión</h1>
            <p>Inicie sesión con su correo electrónico.</p>
            <form className="login-form">
                <label htmlFor="email">
                    Correo electrónico <span>*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Ingrese su correo electrónico"
                    required
                />

                <label htmlFor="password">
                    Contraseña <span>*</span>
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    required
                />

                <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>

                <button type="submit" className="login-btn">INICIAR SESIÓN</button>
                <button type="button" className="create-account-btn">CREAR UNA CUENTA</button>
            </form>
            <p className="mandatory-fields">* Campos obligatorios</p>
        </div>
    );
};

export default Login;
