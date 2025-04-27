import React from "react";
import "./Header.css";
import { CartContext } from "../../Store/CartContext";
import { useContext } from "react";
import { UserPreferenceContext } from "../../Store/UserPreferenceContext";

function Header() {
  const { meals } = useContext(CartContext);
  const { showCart } = useContext(UserPreferenceContext);
  const totalMeals = meals.reduce((total, meal) => total + meal.quantity, 0);
  
  return (
    <header className="header">
      <h1 className="header-title">Food Order App</h1>
      <button className="cart-button" onClick={showCart}>
        View Cart ({totalMeals})
      </button>
    </header>
  );
}

export default Header;
