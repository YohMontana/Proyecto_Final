import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import {
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from "@mui/material";

const Basket = () => {
  const { cartProducts, deleteItem } = useContext(ProductContext);


  
  const total = 
        cartProducts.length > 0 &&
        cartProducts.map((product) => product.precio).reduce((prev, curr) => prev + curr);






    // cartProducts.length > 0 &&
    // cartProducts
      // .map((product) =>
        // product.saleInfo.saleability === "NOT_FOR_SALE"
          // ? 0
          // : product.saleInfo.listPrice.amount
      // )
      // .reduce((prev, curr) => prev + curr);

  return (
    <Container>
      <Typography variant="h4">
        Carro ({cartProducts.length} productos){" "}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {cartProducts.length > 0 &&
            cartProducts.map((product) => (
              <Box my={3}>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={2}>
                        <img
                          src={product.imagen}
                          width={80}
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          {product.name}
                        </Typography>
                        <Typography mt={3} variant="body1">
                          {product.descripcion}
                        </Typography>
                        <Typography mt={3}>
                          {product.categoria}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <Typography variant="h6" color="#2A7B55"> 
                          S/{" "} 
                         {product.precio}                            
                        </Typography>

                        <Box mt={5}>
                          <Button
                            onClick={() => deleteItem(product)}
                            color="error"
                          >
                            Eliminar
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>Resumen de compra</Typography>
          <Box mt={4}>
            <Card>
              <CardContent>
                <Typography my={2}>Envio a domicilio no incluido</Typography>
                <Typography my={2} fontWeight="bold">
                  Productos: ({cartProducts.length})
                </Typography>
                <Typography my={2} fontWeight="bold">
                  Total: {total}
                </Typography>
                <Button fullWidth variant="contained" color="warning">
                  Comprar
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Basket;