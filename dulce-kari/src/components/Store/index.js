
import { Link, Outlet } from 'react-router-dom';
import './style.css'
import { useEffect, useState } from 'react';

import { Divider, Paper, Typography } from "@mui/material";

import { GridProducts } from "../../components";

import { GetProduct } from "../../services"

const Store = () => {


    const [produtos, setProductos] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await GetProduct()

        setProductos(data)

    }


    return (
        <div>

            <div className='navbar'>
                <h1>Tienda</h1>
            </div>

            <div className='flex'>
                <div className='sidebar'>
                
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

                    <Paper>
                        <Typography variant='h4' textAlign="center"sx={{ color: "#545454" }}  >
                          
                        </Typography>
                    </Paper>
                    <Divider sx={{ margin: 3 }} />
                    <GridProducts products={produtos} />
                    <Outlet />
                </div>


            </div>

        </div>

    );
}

export default Store;