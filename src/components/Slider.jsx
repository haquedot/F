// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { product } from '../utils/data';
import { getImageUrl } from '../utils/utils';
import { Container, Card } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "../styles/style-Slider.css"

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Container fluid>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-3"
        >
          {product.map((product, index) => (
            <SwiperSlide key={product.id}>
              <Card>
                <div className="d-block">
                  <img src={getImageUrl(product)} alt={product.imageId} srcSet="" />
                  <div className="d-block">
                    <h3>{product.name}</h3>
                  </div>
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