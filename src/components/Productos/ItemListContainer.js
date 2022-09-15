import React from 'react';
import Card from "./Card";
import "./itemListContainer.css";

function ItemListContainer(props) {
    return (
        <div> 
        <h2>{ "Beauty & Skin Care" }</h2>
        <div className="main-container">
            <Card
                img=".../public/assets/products/img/Cosmetic.jpg "
                title="CATEGORIA 1"
                detail="Lorem ipsum"
                precio={1000}
            />

            <Card
                img="../public/assets/products.Hair.jpg"
                title="CATEGORIA 2"
                detail="Lorem ipsum"
                precio={1900}
            />

            <Card
                img="../public/assets/products.Cosmetics.jpg"
                title="CATEGORIA 3"
                detail="Lorem ipsum"
                precio={2500}
            />
        </div>
        </div>
    )
}

export default ItemListContainer;