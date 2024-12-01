// src/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBarContainer from './modules/Header/screens/NavBarContainer';
import ProductNavBar from './modules/ProductNavBar';
import Footer from './modules/footer/screens/Footer';
import PageContent from './navigation/PageContent';

import Productos from './modules/Product/productos/Productos';

const App = () => {
    return (
        <Router>
            <div>
                {/* Barras de navegación comunes */}
                <NavBarContainer />
                <ProductNavBar />

                {/* Contenido principal */}
                <PageContent />
                <Productos/>
                {/* Footer siempre visible */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
