import React from 'react'
import './style.css'

const LibroDeReclamaciones =() => {
    return (
        <div className='container'>
            <div className='text-center pt-5'>
                <span>
                <a className="text-decoration-none" href='/'>Inicio</a> / Libro de Reclamaciones 
                </span>
            </div>
            <div className='text-center'>
                <h1>Libro de Reclamaciones</h1>
            </div>
            <div className='pb-5'>
                <h3>Datos del Establecimiento</h3>
                <h4>Nombre Comercial: DULCES CARI</h4>
            </div>
            <form>
                <div className="form-row d-flex justify-content-evenly">
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Tipo de Documento</p>
                        <select className="form-control">
                            <option>DNI</option>
                            <option>CE</option>
                            <option>Pasaporte</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Numero de documento</p>
                        <input className="form-control" type="text" placeholder=""/>
                    </div>
                </div>
                <div className="form-row d-flex justify-content-evenly">
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Nombre</p>
                        <input className="form-control" type="text" placeholder=""/>
                    </div>
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Apellido</p>
                        <input className="form-control" type="text" placeholder=""/>
                    </div>
                </div>
                <div className="form-row d-flex justify-content-evenly">
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Tipo de Respuesta</p>
                        <select className="form-control">
                            <option>Correo Electronico</option>
                            <option>Dirección domiciliaria</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Email</p>
                        <input className="form-control" type="text" placeholder=""/>
                    </div>
                </div>
                <div className="form-row d-flex justify-content-evenly">
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Teléfono Fijo</p>
                        <input className="form-control" type="text" placeholder=""/>
                    </div>
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Celular</p>
                        <input className="form-control" type="text" placeholder=""/>
                    </div>
                </div>
                <div className="form-row d-flex justify-content-evenly">
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Departamento</p>
                        <select className="form-control">
                            <option>Lima</option>
                            <option>Amazonas</option>
                            <option>Ancash</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3 col-sm-12">
                        <p>Provincia</p>
                        <input className="form-control" type="text" placeholder=""/>
                    </div>
                </div>
                <div>
                    <h5>Si tu producto fue entregado, colocar estos datos:</h5>
                    <div className="form-row d-flex justify-content-evenly">
                        <div className="form-group col-md-3 col-sm-12">
                            <p>Numero de Boleta o Factura</p>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                        <div className="form-group col-md-3 col-sm-12">
                            <p>Fecha de Compra</p>
                            <input className="form-control" type="date" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Información General:</h5>
                    <div className="form-row d-flex justify-content-evenly">
                        <div className="form-group col-md-3 col-sm-12">
                            <p>Monto Reclamado</p>
                            <input className="form-control" type="text" placeholder="S/."/>
                        </div>
                        <div className="form-group col-md-3 col-sm-12">
                            <p>Identificacion del bien contratado</p>
                            <select className="form-control">
                                <option>Producto</option>
                                <option>Servicios</option>
                                <option>Otros</option>
                            </select>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Detalle de su reclamo:</h5>
                </div>
                <div className="row form-group d-flex justify-content-center px-5 mx-5">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <small className="d-flex justify-content-center" for="exampleFormControlTextarea1">Máximo permitido 1000 caracteres</small>
                </div>
                <div className='d-flex justify-content-center pb-5 pt-5'>
                    <button type="submit" className="btn btn-primary center">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default LibroDeReclamaciones