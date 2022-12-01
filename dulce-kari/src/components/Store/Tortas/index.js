import React, { useEffect, useState } from 'react';

import { Divider, Paper, Typography} from "@mui/material";

import { GridProducts } from "../../../components";

import {GetProduct} from "../../../services"

export const Tortas = () => {

    const [produtos, setProductos] = useState([]);

    useEffect(()=>{
        getData();
    },[])

   const getData = async ()=> {
    const data = await GetProduct()
    console.log(data)
    setProductos(data)
   }

    return (
        <>
          <Paper>
                <Typography variant='h4' textAlign="center">
                    
                </Typography>
            </Paper>
            <Divider sx={{margin: 3}} />
            <GridProducts products={produtos}/>

        </>
          
  
    );
}