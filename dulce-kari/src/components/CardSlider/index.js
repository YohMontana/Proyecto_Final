import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import 'swiper/css';
import"swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../ProductCard';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetProduct } from "../../services";
import "./styles.css"
import MyButton from "../MyButton"
import { Grid} from "@mui/material";
const CardSlider = () => {



    const [product, setProduct] = useState([]);
    


	// setProduct(productItem);
	

	useEffect(() => {
	
    getData();
	}, []);
  const getData = async ()=> {
    const data = await GetProduct()
    const resul = data.filter((product, index) => product.categoria === "Torta")
  
    setProduct(resul)
   }



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
         
            
          <Grid container spacing={3}>
          {product.length > 0 &&
                    product.map((producto, index) => (

          <Grid key={index} item md={2} xs={12}>
             <SwiperSlide>
            <ProductCard producto={producto} />
            </SwiperSlide>
            </Grid>
         ))}
           </Grid>
      
         
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
