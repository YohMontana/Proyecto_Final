import React from "react";
import Logo from '../../asset/img/logo.jpg'
import ImgFacebook from '../../asset/img/facebook.png'
import ImgInstagram from '../../asset/img/instagram.png'



function CardFooter() {
    return(
        <div>
            <div className='container'>
                <div className='row py-5 text-dark text-center'>
                    <div className='col-md-3 col-sm-12 text-center'>
                        <a href="/"><img src={Logo} className='img-fluid rounded-circle mt-5 mb-5' width='150px'/></a>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h4 className='fw-bold pb-2 px-2'>Links de Interés</h4>
                        <div className='row m-3'>
                            <a href="/terminos-y-condiciones" className='text-decoration-none p-2'>
                            Términos y Condiciones
                            </a>
                            <a href="preguntas-frecuentes" className='text-decoration-none p-2'>Preguntas Frecuentes</a>
                            <a href="libro-de-reclamaciones" className='text-decoration-none p-2'>Libro de Reclamaciones</a>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12 text-center'>
                        <h4 className='fw-bold d-flex justify-content-start'>Contáctate con Nosotros</h4>
                        <div className="text-center">
                            <p className="mb-0"><h5 className="fw-bold d-flex justify-content-start">WhatsApp:</h5> (+51) 971412245</p>
                            <p className="mb-0"><h5 className="fw-bold d-flex justify-content-start">Correo Electrónico:</h5> pedidos@dulceskari.pe</p>
                            <p className="mb-0"><h5 className="fw-bold d-flex justify-content-start">Horario de atención:</h5> De Lunes a Domingo de 11am a 7pm</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12 text-center'>
                        <h4 className='fw-bold pb-3 d-flex justify-content-start'>Síguenos</h4>
                        <div className='col-md-3 col-sm-12 d-flex justify-content-center align-content-center'>
                        <a href="facebook"><img src={ImgFacebook} className='img-fluid pb-3'/></a>
                        <a href="instagram"><img src={ImgInstagram} className='img-fluid mx-3'/></a>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <p className='text-dark pb-4 text-center'>@copyright CODIGO 2022</p>
        </div>

    )
};


export default CardFooter 