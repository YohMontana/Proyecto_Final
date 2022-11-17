import React from 'react'





function Footer () {


    return(
        <div>
            <div className='container'>
                <div className='row py-5 text-dark text-center'>
                    <div className='col-md-3 col-sm-12 text-center'>
                        <a href="#"><img src='./assets/logo.jpg' className='img-fluid rounded-circle mt-5 mb-5' width='150px'/></a>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h4 className='text-dark fw-bold pb-2'>Links de Interés</h4>
                        <div className='row'>
                            <a href="#" className='text-decoration-none text-dark p-2'>
                            Términos y Condiciones
                            </a>
                            <a href="#" className='text-decoration-none text-dark p-2'>Preguntas Frecuentes</a>
                            <a href="#" className='text-decoration-none text-dark p-2'>Libro de Reclamaciones</a>
                        </div>
                        

                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h4 className='text-dark fw-bold pb-3'>Contáctate con Nosotros</h4>
                        <p><i className="bi bi-whatsapp"></i> (+51) 971412245</p>
                        <p><i className="bi bi-envelope"></i> pedidos@dulces-cari.pe</p>
                        <p>Horario: De Lunes a Domingo de 11 am a 8 pm</p>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h4 className='text-dark fw-bold pb-3'>Síguenos</h4>
                        <div>
                        <i className="bi bi-facebook pe-4"></i>
                        <i className="bi bi-instagram ps-4"></i>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <p className='text-dark pb-4 text-center'>@copyright CODIGO 2022</p>
        </div>
       

    );
}

export default Footer