import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, CardImg} from 'react-bootstrap'
import { useNavigate} from "react-router-dom";

import "./styles.css"

const ProductCard = (props) => {

    
      
    let { imgSrc, price, title} = props.data

    const history = useNavigate();
    const ViewDetail = () =>{
        history ("/product")
    }
    return (
       
        <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} width={15} height={250} />
      <Card.Body className='text-center '> 
          <Card.Title className='text-diplay-6 price desde' >Desde</Card.Title>
            <Card.Title className='text-diplay-6 price ' >{price}</Card.Title>
              <Card.Title className='text-diplay-6 price mx-3' >{title}</Card.Title>
         </Card.Body>
        <Button className='btn btn-secondary w-100' onClick={ViewDetail}>Ver Detalle</Button>
        </Card>
        </div>
    );
}

export default ProductCard;
