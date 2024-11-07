import React from 'react';
import '../styles/ImageMosaic.css';
import mosaico1 from '../assets/mosaico/mosaico1.jpg';
import mosaico2 from '../assets/mosaico/mosaico2.jpg';
import mosaico3 from '../assets/mosaico/mosaico3.jpg';
import mosaico4 from '../assets/mosaico/mosaico4.jpg';
import mosaico5 from '../assets/mosaico/mosaico5.jpg';
import mosaico6 from '../assets/mosaico/mosaico6.jpg';
import mosaico7 from '../assets/mosaico/mosaico7.jpg';
import mosaico8 from '../assets/mosaico/mosaico8.jpg';
import mosaico9 from '../assets/mosaico/mosaico9.jpg';

const images = [mosaico1,mosaico2, mosaico3, mosaico4, mosaico5, mosaico6, mosaico7, mosaico8, mosaico9];

const ImageMosaic = () => {
    return (
      <div className="image-mosaic">
        {images.map((src, index) => (
          <div key={index} className="image-item">
            <img src={src} alt={`Mosaic Image ${index + 1}`} />
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageMosaic;