import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import SecondaryNavBar from './components/SecondaryNavBar';
import ProductNavBar from './components/ProductNavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoriesSection from './components/CategoriesSection';
import ImageSlider from './components/ImageSlider';
import ImageMosaic from './components/ImageMosaic';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import Reclamaciones from './components/footer/Reclamaciones';
import Sugerencias from './components/footer/Sugerencias';
import Nosotros from './components/footer/Nosotros';

const App = () => {
    const location = useLocation();
    const isReclamacionesPage = location.pathname === '/reclamos';
    const isSugerenciasPage = location.pathname === '/sugerencias'; // Nueva página para sugerencias
    const isNosotrosPage = location.pathname === '/nosotros';

    return (
        <>
            {/* Siempre mostramos estas tres barras de navegación */}
            <SecondaryNavBar />
            <MainNavBar />
            <ProductNavBar />

            {isReclamacionesPage ? (
                // Si estamos en la página de reclamaciones, mostramos el contenido de reclamaciones
                <Reclamaciones />
            ) : isSugerenciasPage ? (
                // Si estamos en la página de sugerencias, mostramos el contenido de sugerencias
                <Sugerencias />
            ) : isNosotrosPage ? (
                <Nosotros />
            ) : (
                <>
                    {/* En caso contrario, mostramos el contenido principal */}
                    <ImageSlider />
                    <ImageMosaic />
                    <CategoriesSection />
                    <PromoBanner />
                </>
            )}

            {/* Mostrar el Footer siempre, sin importar la página */}
            <Footer />
        </>
    );
};

const AppWrapper = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<h1>Esta es la página Acerca de.</h1>} />
            <Route path="/contact" element={<h1>Esta es la página de Contacto.</h1>} />
            <Route path="/terms" element={<h1>Políticas y Condiciones</h1>} />
            <Route path="/login" element={<h1>Iniciar Sesión</h1>} />
            <Route path="/signup" element={<h1>Crear Cuenta</h1>} />
            <Route path="/reclamos" element={<App />} /> {/* Ruta para la página de reclamaciones */}
            <Route path="/sugerencias" element={<App />} /> {/* Ruta para la página de sugerencias */}
            <Route path="/nosotros" element={<App />} /> {/* Ruta para la página Nosotros */}
        </Routes>
    </Router>
);

export default AppWrapper;
