import React, { useContext } from "react";
import './Meal.css';
import { CartContext } from '../../Store/CartContext';

function Meal({...props}){
  const { addToCart } = useContext(CartContext);
    return (
      <div className="meal-card">
        <img
          src={`http://localhost:3000/${props.image}`}
          alt={props.name}
          className="meal-image"
        />
        <h3 className="meal-name">{props.name}</h3>
        <p className="meal-description">{props.description}</p>
        <p className="meal-price">${props.price}</p>

        <button className="add-button" onClick={() => addToCart({ ...props })}>
          Add to Cart
        </button>
      </div>
    );
}
export default Meal;