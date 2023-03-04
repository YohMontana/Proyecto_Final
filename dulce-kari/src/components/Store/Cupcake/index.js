import React, { useEffect, useState } from 'react';

import { Divider, Paper, Typography} from "@mui/material";

import { GridProducts } from "../../../components";

import {GetProduct} from "../../../services"

export const CupCake = () => {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        getData();
    },[])

   const getData = async ()=> {
    const data = await GetProduct()
    const resul = data.filter((product, index) => product.categoria === "Cupcakes")
  
    setProductos(resul)
   }

    return (
        <>
          <Paper>
                <Typography variant='h4' textAlign="center" sx={{color: "#545454"}}>
                Categoria CupCakes
                </Typography>
            </Paper>
            <Divider sx={{margin: 3}} />
            <GridProducts products={productos}/>

        </>
          
  
    );
}