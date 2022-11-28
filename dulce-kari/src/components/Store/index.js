import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css'

const Store = () => {
    return (
        <frames>
            <div className='navdar'>
               <h2>Tienda / Inicio</h2>
            </div>

            <div className='flex'>
                <div className='sidebar'>
                    <div className='content'>
                        <div className='search'>
                            <input type="text" placeholder='Ingresa tu precio' />
                        </div>
                    </div>
                    <ul>
                        <h1>Categorias</h1>
                        <li>
                            <Link to="/tienda/tortas">Tortas</Link>
                        </li>
                        <li>
                            <Link to="/tienda/bocaditos">Bocaditos</Link>
                        </li>
                        <li>
                            <Link to="/tienda/cupcake">CupCakes</Link>
                        </li>
                    </ul>

                </div>
                <div className='container'>
                <Outlet />
                </div>


            </div>

        </frames>

    );
}

export default Store;
