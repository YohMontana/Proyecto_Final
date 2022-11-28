import { Store } from "../../components";
import {CardFooter} from '../../components';
import "./style.css"
import React from 'react';


const Stores = () => {
    return (
        <>
        <Store></Store>
        <div className="containere">
            <CardFooter></CardFooter>
        </div>
    
        </>
        
    );
}

export default Stores;
