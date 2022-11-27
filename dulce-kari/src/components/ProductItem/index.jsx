import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { styled } from '@mui/material/styles';
import torta from "../../asset/img/torta.jpg"
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import "./styles.css"


const cakes = [
  {
    relleno: 'Buttercream',
    keke: 'chocolate',
    porciones: '10 porciones',
  },
  {
    relleno: 'Fudge',
    keke: 'Vainilla',
    porciones: '20 porciones',
  },
  {
    relleno: 'Manjar',
    keke: 'Marmoleado',
    porciones: '30 porciones',
  },
  {
    relleno: 'Ganache',
    keke: 'Vainilla con chocochips',
    porciones: '40 porciones',
  },
];

const ProductItem = () => {
  
  const [cake, setcake] = React.useState();

  const handleChangeA = (event) => {
    setcake(event.target.value);
  };
  const handleChangeB = (event) => {
    setcake(event.target.value);
  };
  const handleChangeC = (event) => {
    setcake(event.target.value);
  };
  const history = useNavigate();
    const AddtoCart = () =>{
        history ("/carrito")
    }
    const BuyNow = () =>{
      history ("/finalizar-compra")
  }
  const ColorButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#C99DB4',
    border: 'none',
    margin: '10px 20px',
    '&:hover': {
      backgroundColor: '#5B3C66',
      border: 'none',
      margin: '10px 20px'
    },
  }));
  return (
    <div className='container-principal' >
      <div className='container  m-5 img'><img className='img-1'src={torta}  alt="..."/></div>
 <div className='container m-5 '>
  <h1>Torta de Cumpleaños</h1>
  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos saepe alias magni nihil quia repellat quam veritatis! Consequuntur libero ex molestias similique facilis voluptates doloremque, perspiciatis sequi mollitia et?</p>
  <h2>s/.30</h2>
    <Box
    className='m-3 '
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
   
    >
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Opción de cake"
          value={cake}
          onChange={handleChangeA}
          variant="standard"
        >
          {cakes.map((option) => (
            <MenuItem key={option.value} value={option.keke}>
              {option.keke}
            </MenuItem>
          ))}
        </TextField>
      </div>
     
      </Box>
      <Box
       className='m-3 '
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
   
    ><div>
        <TextField
          id="standard-select-currency"
          select
          label="Opción de relleno"
          value={cake}
          onChange={handleChangeB}
          variant="standard"
        >
          {cakes.map((option) => (
            <MenuItem key={option.relleno} value={option.relleno}>
              {option.relleno}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    <Box
     className='m-3 '
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
   
    ><div>
        <TextField
          id="standard-select-currency"
          select
          label="Porciones"
          value={cake}
          onChange={handleChangeC}
          variant="standard"
        >
          {cakes.map((option) => (
             <MenuItem key={option.porciones} value={option.porciones}>
             {option.porciones}
           </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    <Box
     className='m-3 '
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}>
      <TextField id="outlined-textarea"
          label="Dedicatoria"
          placeholder="Feliz cumpleaños..."
          multiline/></Box>
          <Box
    className='m-3 '
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
   
    >
<div className='buttons d-flex '>
<ColorButton  startIcon={<ShoppingCartIcon />}  variant="outlined" onClick={AddtoCart}>Añadir al carrito</ColorButton >
<ColorButton  variant="contained"  onClick={BuyNow} >Comprar</ColorButton>
</div>
</Box>
   
    </div>
     </div>
  );
}
export default ProductItem;