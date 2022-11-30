import React from "react";
import Logo from '../../asset/img/logo.jpg'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./style.css"
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
function CardFooter() {


    return(
        <div className='container'>
            <div >
                <div className='row py-5 text-dark text-center'>
                    <div className='col-md-3 col-sm-12 text-center'>
                        <a href="/"><img src={Logo} className='img-fluid rounded-circle mt-5 mb-5' width='150px'/></a>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h2 className='fw-bold text-center'>Links de Interés</h2>
                        <div className='row m-3 text-center'>
                        <Link to="/terminos-y-condiciones"><h5 className="text-center" id="link">Preguntas Frecuentes</h5></Link>
                        <Link to="/libro-de-reclamaciones"><h5 className="text-center" id="link">Libro de Reclamaciones</h5></Link>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12 text-center'>
                        <h2 className='fw-bold text-center'>Contáctate con Nosotros
                        </h2>
                        <div className="text-center">
                            <div>
                            <h5 className="fw-bold text-center">WhatsApp</h5>
                            <a className="text-center" href="https://api.whatsapp.com/send?phone=+51971412245&text=Hola,%20quiero%20informaci%C3%B3n%20sobre..."  target="_blank"><h6 id="link" >(+51) 971412245</h6></a>
                            </div>
                            <div>
                            <h5 className="fw-bold text-center">Correo Electrónico</h5> 
                            <h6 className="text-center">pedidos@dulceskari.pe</h6>
                            </div>
                            <div>
                            <h5 className="fw-bold text-center">Horario de atención</h5> 
                            <h6 className="text-center">Lunes a Domingo de 11am a 7pm</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12 text-center'>
                        <h2 className='fw-bold pb-3 d-flex justify-content-start'>Síguenos</h2>
                        <div className='col-md-3 col-sm-12 d-flex justify-content-center align-content-center'>
                     <a href="https://www.facebook.com/DulcesKari1" target="_blank" ><IconButton color="secondary" >
                        <FacebookIcon />
                        </IconButton></a>
                        <a href="https://www.instagram.com/dulces.kari/" target="_blank" ><IconButton color="secondary" >
                
                        <InstagramIcon />
                        </IconButton></a>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <p className='text-dark pb-4 text-center'>@copyright CODIGO 2022</p>
        </div>

    )
};


export default CardFooter 