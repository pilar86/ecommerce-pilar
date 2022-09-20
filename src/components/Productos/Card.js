import React from 'react';
import "./card.css";
import ItemCount from "../ItemCount/ItemCount";


function Card(props) {
    let { img, title, detail, price} = props;
    /* Hooks*/

    const onAdd = (quantity) => {
    console.log(quantity)
    }

    return(
        
        <div className="card">
            <div className="card-img">
                <img src={img} alt="card img"></img>
            </div>
            <div className="card-detail">
                <h3>{title}</h3>
                <p>{detail}</p>
                <h4>${price}</h4>
            </div>

            <button>
                ver más
            </button>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <ItemCount initial={1} stock={15} onAdd={onAdd}/>
            <ItemCount initial={1} stock={0} onAdd={onAdd}/>
            
        </div>         
    );
}

export default Card;