import React from 'react';
import './style.css';
import postre from "../../asset/img/postre.png"

const Separator = () => {
    return (
        <div id="ribbon" className="container-fluid">
        <div id="birthday" className="container w-50 pl-5 rounded-lg" >
            <div className="row align-items-center">
                <div className="col-sm p-3">
                    <img src={postre} className=" mx-auto d-block" width={120}  alt=""/>
                </div>
                <div className="col-sm p-3 text-light text-center">
                    <p>Disfrutar un Postre es Amor a Primera </p>
                    <h4>Vista</h4>
                </div>
            </div>
    
        </div>
    </div>
    );
}

export default Separator;
