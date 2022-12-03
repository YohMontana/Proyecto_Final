import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyButton from "../MyButton"
import "./styles.css"

const ProductCard = (props) => {
    const { producto } = props;
   
    return (
       
      
        <div>
        
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={producto.imagen} width={15} height={250} />
              <Card.Body className='text-center '> 
                  <Card.Title className='text-diplay-6 price desde' >Desde</Card.Title>
                    <Card.Title className='text-diplay-6 price '>s/.{producto.precio}</Card.Title>
                      <Card.Title className='text-diplay-6 price mx-3' >{producto.name}</Card.Title>
                 </Card.Body>
                 <MyButton><Link to={"/product/" + producto.id}>Ver detalle</Link></MyButton> 
                </Card>
              
                </div>
            );
        }

export default ProductCard;