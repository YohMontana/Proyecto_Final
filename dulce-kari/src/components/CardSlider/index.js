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
import "./styles.css"
import MyButton from "../MyButton"

const CardSlider = () => {

    return (
      <div className='container'>
      <div className='justify-content-center mt-5 mb-5'>
    
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
            <ProductCard data={{ imgSrc: r1, price: 's/. 30 ', title: 'El mejor arreglo #1' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r3, price: 's/. 30 ', title: 'El mejor arreglo #1' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r3, price: 's/. 30 ', title: 'El mejor regalo #1' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r4, price: 's/. 30 ', title: 'El mejor regalo #1' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r5, price: 's/. 30 ', title: 'El mejor regalo #1' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r6, price: 's/. 30 ', title: 'El mejor regalo #1' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r7, price: 's/. 30 ', title: 'El mejor regalo #1' }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: r1, price: 's/. 30 ', title: 'El mejor regalo #1' }} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container-fluid h-100'>
        <div className='row w-100 align-items-center'>
          <div className='col text-center'>
            <a href="/tienda" >
            <MyButton>Ver más productos</MyButton>
            </a>
            
          </div>
        </div>

      </div>
    </div>
    );
}

export default CardSlider;
