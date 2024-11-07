import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../styles/ImageSlider.css';
import slide1 from '../assets/slider/slide1.jpg';
import slide2 from '../assets/slider/slide2.jpg';
import slide3 from '../assets/slider/slide3.jpg';
import slide4 from '../assets/slider/slide4.jpg';

const images = [ slide1, slide2, slide3, slide4 ];

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