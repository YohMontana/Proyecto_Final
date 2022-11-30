import { Store } from "../../components";
import {CardFooter} from '../../components';
import "./style.css"
import React from 'react';
import {Division} from '../../components';


const Stores = () => {
    return (
        <>
        <Store></Store>
        <Division></Division>
        <div className="containere">
            <CardFooter></CardFooter>
        </div>
    
        </>
        
    );
}

export default Stores;