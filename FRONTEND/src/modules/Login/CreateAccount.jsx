import React from "react";
import '../Login/StyleLogin.css';

const CreateAccount = () => {
    
    return (
        <div>
            <h1>Crear Cuenta</h1>
            <div className="form-container">
                <form>
                    {/* Sección 1: Información Personal */}
                    <div className="form-section">
                        <h2>Información Personal</h2>
                        <label>Nombre</label>
                        <input type="text" name="nombre" />
                        
                        <label>Apellidos</label>
                        <input type="text" name="apellido" />
                        
                        <label>Telefono</label>
                        <input type="tel" name="telefono" />
                        
                        <label>Fecha de nacimiento</label>
                        <input type="date" name="fecha_nacimiento" />
                        
                        <label>DNI/ Carnet de Extranjería</label>
                        <input type="number" name="ndni" />
                        
                        <div>
                            <input type="checkbox" /> 
                            <label> Suscribirse al newsletter</label>
                        </div>
                    </div>

                    {/* Sección 2: Información de Inicio de Sesión */}
                    <div className="form-section">
                        <h2>Información de Inicio de Sesión</h2>
                        <label>Correo Electrónico</label>
                        <input type="email" name="email" />
                        
                        <label>Contraseña</label>
                        <input type="password" name="password" />
                        
                        <label>Confirmar Contraseña</label>
                        <input type="password" name="confirmPassword" />
                    </div>

                    {/* Botón de Envío */}
                    <div className="submit-container">
                        <button type="submit">Crear Cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
