import { Grid, Paper, Typography, Card, CardMedia,Button } from "@mui/material";

function GridProducts(props) {
    const { products } = props;
    
    return (
        <>
            <Grid container spacing={2}>
       
                {products.length > 0 &&
                    products.map((product, index) => (
                        <Grid item sx={12} sm={6} md={4} lg={3} key={index}>
                            <Paper sx={{ padding: 3 }}>
                                <Typography>{product.name}</Typography>
                            </Paper>
                            <Paper sx={{ padding: 3 }}>
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        width={140}
                                        height="140"
                                        image={product.imagen}
                                    />
                                </Card>
                            </Paper>
                            <Paper sx={{ padding: 3 }}>
                                <Typography>{product.precio} {"/ "} Soles</Typography>
                                     <Button variant="contained" >Ver Detalle</Button>
                            </Paper>
                        </Grid>
                    ))}
            </Grid>

        </>
    )
}
export default GridProducts;