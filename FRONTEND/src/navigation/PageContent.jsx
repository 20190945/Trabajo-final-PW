
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Politicas from '../modules/footer/components/Politicas';
import Sugerencias from '../modules/footer/components/Sugerencias';
import Nosotros from '../modules/footer/components/Nosotros';
import GuiaPadres from '../modules/footer/components/GuiaPadres';
import TrabajaConNos from '../modules/footer/components/TrabajaconNos';
import Sedes from '../modules/footer/components/Sedes';
import HomePage from './HomePage';
import PromoBanner from '../modules/Product/banners/PromoBanner';
import CreateAccount from '../modules/Login/CreateAccount';

const PageContent = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <HomePage />
               
                    <PromoBanner />
                </>
            } />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/sugerencias" element={<Sugerencias />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/guiaPadres" element={<GuiaPadres />} />
            <Route path="/trabaja" element={<TrabajaConNos />} />
            <Route path="/tiendas" element={<Sedes />} />
            <Route path="/signup" element={<CreateAccount />} />
        </Routes>
    );
};

export default PageContent;
