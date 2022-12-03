import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import {ProductItem} from "../../components"
import { getById } from "../../services";
import {CardFooter} from '../../components';
import {Division} from '../../components';


function Product()  {

    const  { id } = useParams();
	const history = useNavigate();
    const [product, setProduct] = useState([]);
    
	async function getDetail() {
		const productItem = await getById(id);
		console.log(productItem);
		if (productItem === null) {
			history("/");
		}

		setProduct(productItem);
	}

	useEffect(() => {
		// Bloque a ejecutar:
		getDetail();
		console.log("useEffect");
	}, []);
    return(
        <>
        <ProductItem product={product}/>
        <Division></Division>
        <CardFooter></CardFooter>
        </>
    )
}

export default Product;