import { Grid, Paper, Typography, Card, CardMedia, Button} from "@mui/material";
import { Link } from 'react-router-dom';
import MyButton from "../MyButton"

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
                                <Typography>s/. {product.precio}</Typography>
                                <MyButton><Link to={"/product/" + product.id}>Ver detalles</Link></MyButton>
                               
                            </Paper>
                        </Grid>
                    ))}
            </Grid>

        </>
    )
}
export default GridProducts;