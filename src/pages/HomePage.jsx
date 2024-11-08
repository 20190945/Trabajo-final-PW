import React from 'react';
import '../styles/homePage.css';
import ImageSlider from '../components/ImageSlider'; 
import ImageMosaic from '../components/ImageMosaic';
import CategoriesSection from '../components/CategoriesSection';
import ProductSection from '../components/ProductSection';
import product1 from '../assets/product/funko_pop_eddie.jpg';
import product2 from '../assets/product/bandai_goku.jpg';
import product3 from '../assets/product/bandai_gohan.jpg';
import product4 from '../assets/product/funko_pop_deadpool.jpg';
import product5 from '../assets/product/logitech_g335_audifonos.jpg';
import product6 from '../assets/product/logitech_g_pro_mouse.jpg';
import product7 from '../assets/product/playstation_5_slim.jpg';
import product8 from '../assets/product/hello_kitty.jpg';
import product9 from '../assets/product/pokemon_multipack.jpg';
import product10 from '../assets/product/dragon_ball_torneo.jpg';

const HomePage = () => {
    const novedades = [
        { image: product1, name: "Funko Pop Stranger Things - Eddie", rating: 4, price: "69.90", isNew: true },
        { image: product2, name: "Bandai Dragon Ball Super - Goku", rating: 5, price: "99.90" },
        { image: product3, name: "Bandai Dragon Ball Super - Gohan", rating: 4, price: "99.90", oldPrice: "129.90", isNew: true, discountPercentage: 23 },
        { image: product4, name: "Funko Pop Marvel - Deadpool", rating: 4, price: "89.90" },
        { image: product6, name: "Logitech G Pro Mouse", rating: 4, price: "279.90", oldPrice: "329.90", isNew: true, discountPercentage: 47 },
      ];
    
      const masVendidos = [
        { image: product5, name: "Logitech G335 Audífonos", rating: 5, price: "189.90", oldPrice: "259.90", discountPercentage: 37 },
        { image: product6, name: "Logitech G Pro Mouse", rating: 4, price: "279.90", oldPrice: "329.90", isNew: true, discountPercentage: 47 },
        { image: product1, name: "Funko Pop Stranger Things - Eddie", rating: 4, price: "69.90", isNew: true },
        { image: product7, name: "PlayStation 5 Slim con ranura de disco + Returnal + Ratchet & Clank", rating: 4, price: "2599,90", oldPrice: "2799,90", discountPercentage: 7 },
        { image: product2, name: "Bandai Dragon Ball Super - Goku", rating: 5, price: "99.90" },
      ];
    
      const promociones = [
        { image: product8, name: "Hello Kitty 50 años", rating: 3, price: "129.90", oldPrice: "159.90", isNew: true, discountPercentage: 19 },
        { image: product3, name: "Bandai Dragon Ball Super - Gohan", rating: 4, price: "99.90", oldPrice: "129.90", isNew: true, discountPercentage: 23 },
        { image: product9, name: "Pokémon Multipack", rating: 4, price: "79.90", isNew: true, discountPercentage: 27 },
        { image: product10, name: "Dragon Ball Super - Torneo", rating: 5, price: "139.90", oldPrice: "179.90", isNew: true, discountPercentage: 30 },
        { image: product5, name: "Logitech G335 Audífonos", rating: 5, price: "189.90", oldPrice: "259.90", discountPercentage: 37 },
      ];


    return (
        <div className="homepage">
            <ImageSlider />
            <ImageMosaic />
            <CategoriesSection />
            <ProductSection title="NOVEDADES" products={novedades} />
            <ProductSection title="MÁS VENDIDOS" products={masVendidos} />
            <ProductSection title="PROMOCIONES" products={promociones} />
        </div>
    );
}

export default HomePage;