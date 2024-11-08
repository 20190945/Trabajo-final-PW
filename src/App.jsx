import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import SecondaryNavBar from './components/SecondaryNavBar';
import ProductNavBar from './components/ProductNavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './pages/HomePage'
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <SecondaryNavBar/> 
            <MainNavBar />
            <ProductNavBar />
            <Routes> 
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<h1>Esta es la página Acerca de.</h1>} />
                <Route path="/contact" element={<h1>Esta es la página de Contacto.</h1>} />
                <Route path="/terms" element={<h1>Políticas y Condiciones</h1>} />
                <Route path="/login" element={<h1>Iniciar Sesión</h1>} />
                <Route path="/signup" element={<h1>Crear Cuenta</h1>} />
            </Routes>
            <PromoBanner />
            <Footer />
        </Router>
    );
};

export default App