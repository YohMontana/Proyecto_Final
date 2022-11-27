import React, { Component } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import 'react-floating-whatsapp-button/dist/index.css'
import {Carousel} from "../../components";
import {CardSlider} from '../../components';
import {Separator} from '../../components';
import {Division} from '../../components';
import {CardFooter} from '../../components';



function Home (){

return(
    <>
    <Carousel></Carousel>
    <Separator></Separator>
    <CardSlider></CardSlider>
    <Division></Division>
    <CardFooter></CardFooter> 
    <FloatingWhatsApp phoneNumber="992980249" accountName= "Foo" allowEsc allowClickAway> </FloatingWhatsApp>
    </>
) 
}

export default Home;
