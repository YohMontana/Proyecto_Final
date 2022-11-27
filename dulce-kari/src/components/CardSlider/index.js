import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import 'swiper/css';
import"swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../ProductCard';
import r1 from "../../asset/gif/r1.jpg";
import r3 from "../../asset/gif/r3.jpg";
import r4 from "../../asset/gif/r4.jpg";
import r5 from "../../asset/gif/r5.jpg";
import r6 from "../../asset/gif/r6.jpg";
import r7 from "../../asset/gif/r7.jpg";


const CardSlider = () => {
    return (
      <div className='container'>
      <div className='justify-content-center mt-5 mb-5'>
        <h1 className='text-center display-5' >
            !Las màs pedidas¡
        </h1>
      </div>
      <div className='container py-4 px-4 justify-content-center mt-5 mb-5'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3.5}
        >
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r1, price: '10 soles', title: 'el mejor regalo' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r3, price: '20 soles', title: 'el mejor regalo' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r3, price: '30 soles', title: 'el mejor regalo' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r4, price: '40 soles', title: 'el mejor regalo' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r5, price: '50 soles', title: 'el mejor regalo' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r6, price: '50 soles', title: 'el mejor regalo' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r7, price: '60 soles', title: 'el mejor regalo' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r1, price: '70 soles', title: 'el mejor regalo' }} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container-fluid h-100'>
        <div className='row w-100 align-items-center'>
          <div className='col text-center'>
            <a href="/tienda">
            <button className='btn btn-success mb-5 py-2'>Ver Mas Productos</button>
            </a>
            
          </div>
        </div>

      </div>
    </div>
    );
}

export default CardSlider;
