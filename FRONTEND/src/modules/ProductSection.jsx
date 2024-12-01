import React from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import '../styles/productSection.css';

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section">
      <div className="product-section-title">
        <h2>{title}</h2>
      </div>
      <hr />
      <Swiper
        modules={[Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        mousewheel={{ forceToAxis: true }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="product-carousel"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSection;