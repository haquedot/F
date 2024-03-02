// Import Swiper React components
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { product } from '../utils/data';
import { getImageUrl } from '../utils/utils';
import { Container, Card } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';

import "../styles/style-Slider.css"
import "../App.css"

// import required modules
import { Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{

            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper mb-3"
        >
          {product.map((product, index) => (
            <SwiperSlide key={index}>
              <Card>
                <div className="d-block p-3">
                  <div className="d-flex">
                    <small className='w-50 text-start'>{product.type}</small>
                    {/* <span className='w-50 text-end'>wishlist</span> */}
                  </div>
                  <img src={getImageUrl(product)} alt={product.imageId} srcSet="" />
                  <div className="d-block text-start mb-3">
                    <h4>{product.price}$</h4>
                    <h6>{product.name}</h6>
                  </div>
                  <button  className='btn_white w-100'>Add to cart</button>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}

export default Slider;