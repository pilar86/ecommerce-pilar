import React from 'react';
import "./card.css";

function Card(props) {
    console.log(props);
    return(
        
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt="card img"></img>
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <p>Descripcion</p>
                <h4>$ {props.precio}</h4>
            </div>
        </div>  
    )
}

export default Card;