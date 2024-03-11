import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { product } from '../utils/data';

export default function ProductDetails() {
    const { productId } = useParams();
    const [productItem, setProductItem] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        // Find the product by its ID
        const foundProduct = product.find(item => item.id === parseInt(productId));
        if (foundProduct) {
            setProductItem(foundProduct);
        } else {
            // Handle case where product is not found
            console.log('Product not found');
        }
    }, [productId]); // Re-run effect when productId changes

    return (
        <>
            <Row>
                <Col md={6}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper border rounded"
                    >
                        <SwiperSlide>
                            <img src="./images/Featured_Product/mango_1.png" alt="avacado_1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./images/Featured_Product/avacado_1.png" alt="avacado_1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./images/Featured_Product/guava_1.png" alt="avacado_1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./images/Featured_Product/avacado_1.png" alt="avacado_1" />
                        </SwiperSlide>
                    </Swiper>
                </Col>
                <Col md={6}>
                    {productItem && (
                        <>
                            <h2>{productItem.name}</h2>
                            <p>Price: ₹{productItem.price}</p>
                            <p>Type: {productItem.type}</p>
                            {/* Add more product details as needed */}
                        </>
                    )}
                </Col>
            </Row>
        </>
    );
}
