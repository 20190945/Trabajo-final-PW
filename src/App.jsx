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
import Politicas from './components/footer/Politicas';
import Sugerencias from './components/footer/Sugerencias';
import Nosotros from './components/footer/Nosotros';
import GuiaPadres from './components/footer/GuiaPadres';
import TrabajaConNos from './components/footer/TrabajaconNos';
import Sedes from './components/footer/Sedes';

const App = () => {
    const location = useLocation();
    const isPoliticasPage = location.pathname === '/politicas';
    const isSugerenciasPage = location.pathname === '/sugerencias'; // Nueva página para sugerencias
    const isNosotrosPage = location.pathname === '/nosotros';
    const isGuiaPadresPage = location.pathname === '/guiaPadres';
    const istrabajaPage = location.pathname === '/trabaja';
    const isTiendasPage = location.pathname === '/tiendas';

    return (
        <>
            {/* Siempre mostramos estas tres barras de navegación */}
            <SecondaryNavBar />
            <MainNavBar />
            <ProductNavBar />

            {isPoliticasPage ? (
                // Si estamos en la página de Politicas, mostramos el contenido de Politicas
                <Politicas />
            ) : isSugerenciasPage ? (
                // Si estamos en la página de sugerencias, mostramos el contenido de sugerencias
                <Sugerencias />
            ) : isNosotrosPage ? (
                <Nosotros />
            ) : isGuiaPadresPage ? (
                <GuiaPadres/>
            ) : istrabajaPage ? (
                <TrabajaConNos/>
            ) : isTiendasPage ? (
                <Sedes/>    
            ) :
            (
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
            <Route path="/polit" element={<h1>Políticas y Condiciones</h1>} />
            <Route path="/login" element={<h1>Iniciar Sesión</h1>} />
            <Route path="/signup" element={<h1>Crear Cuenta</h1>} />
            <Route path="/politicas" element={<App />} /> 
            <Route path="/sugerencias" element={<App />} /> 
            <Route path="/nosotros" element={<App />} />
            <Route path="/guiaPadres" element={<App />} />
            <Route path="/trabaja" element={<App />} />
            <Route path="/tiendas" element={<App />} />
        </Routes>
    </Router>
);

export default AppWrapper;
