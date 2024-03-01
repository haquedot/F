// Import Swiper React components
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { product } from '../utils/data';
import { getImageUrl } from '../utils/utils';
import { Container, Card } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../styles/style-Slider.css"
import "../App.css"

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Container fluid>
        <Swiper
          // slidesPerView={6}
          // spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
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
          modules={[Autoplay, Navigation]}
          className="mySwiper mb-3"
        >
          {product.map((product, index) => (
            <SwiperSlide key={index}>
              <Card>
                <div className="d-block p-3">
                  <div className="d-flex">
                    <p className='w-50 text-start'>Vegetables</p>
                    <span className='w-50 text-end'>wishlist</span>
                  </div>
                  <img src={getImageUrl(product)} alt={product.imageId} srcSet="" />
                  <div className="d-block text-start mb-3">
                    <h3>{product.price}$</h3>
                    <h5>{product.name}</h5>
                  </div>
                  <button  className='btn_white w-100'>Add to cart</button>

                </div>

              </Card>
            </SwiperSlide>
          ))}

        </Swiper>
      </Container>
    </>
  );
}

export default Slider;