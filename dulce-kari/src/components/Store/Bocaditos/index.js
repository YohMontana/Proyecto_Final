import React, { useEffect, useState } from 'react';

import { Divider, Paper, Typography} from "@mui/material";

import { GridProducts } from "../../../components";

import {GetProduct} from "../../../services"

export const Bocaditos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        getData();
    },[])

   const getData = async ()=> {
    const data = await GetProduct()
    const resul = data.filter((product, index) => product.categoria === "Bocadito")
  
    setProductos(resul)
   }

    return (
        <>
          <Paper>
                <Typography variant='h4' textAlign="center" sx={{color: "#545454"}}>
                    Categoría Bocaditos
                </Typography>
            </Paper>
            <Divider sx={{margin: 3}} />
            <GridProducts products={productos}/>

        </>
          
  
    );
}