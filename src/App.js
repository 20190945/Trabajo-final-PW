import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';

const App = () => {
    return (
    
        <Router>
            <NavBar2 /> 
            <NavBar />
            <Routes> 
                <Route path="/" element={<h1>¡Bienvenido a mi aplicación!</h1>} />
                <Route path="/about" element={<h1>Esta es la página Acerca de.</h1>} />
                <Route path="/contact" element={<h1>Esta es la página de Contacto.</h1>} />
                <Route path="/terms" element={<h1>Políticas y Condiciones</h1>} />
                <Route path="/login" element={<h1>Iniciar Sesión</h1>} />
                <Route path="/signup" element={<h1>Crear Cuenta</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
