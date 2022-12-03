import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {  useNavigate} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MyButton from "../MyButton"  
import {
  Box,
  TextField,
  Typography
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



function ProductItem(props){

  const { product } = props;
  
  const { addItem } = useContext(ProductContext);

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
     
    }
    const BuyNow = () =>{
      history ("/finalizar-compra")
  }

 
  return (
<div>
  <div className='container container-principal' >
  <div className='container  m-5 img'><img className='img-1'src={product.imagen}  alt="..."/></div>
 <div className='container m-5 '>
  <h1>{product.name}</h1>
  
  <p>{product.descripcion}</p>

  <Typography
    variant="h5"
  >s/.{product.precio}</Typography>
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


<MyButton  
startIcon={<ShoppingCartIcon />}  
onClick={() => addItem(product)}
variant="outlined" >
  Añadir al carrito</MyButton >
{




<MyButton  variant="contained"  

onClick={BuyNow} >Comprar</MyButton>

}

</div>
</Box>
   
    </div>
     </div>
    
</div>
  );
}
export default ProductItem;