// ImageSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../estilos/ImageSlider.css';

const images = [
  'https://phantom.pe/media/wysiwyg/new_design/home/2022/banner-slider-super-mario-party-jamboree.jpg',
  'https://phantom.pe/media/wysiwyg/new_design/home/2022/banner-slider-principal-G309-1220x-415px.jpg',
  'https://phantom.pe/media/wysiwyg/new_design/home/2022/banner-slider-principal-power_1_.jpg',
  'https://phantom.pe/media/wysiwyg/new_design/home/2022/banner-slider-recojo-en-tienda.jpg'
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="image-slider"
    >
      {images.map((url, index) => (
        <SwiperSlide key={index}>
          <img src={url} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
