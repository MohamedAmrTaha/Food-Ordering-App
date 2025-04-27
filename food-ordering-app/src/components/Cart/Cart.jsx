import { UserPreferenceContext } from "../../Store/UserPreferenceContext";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import "./Cart.css";
function Cart() {
    const {preference, hideCart, showCheckout} = useContext(UserPreferenceContext);
    const { meals, removeFromCart, total } = useContext(CartContext);
  
  return (
    <Modal open={preference === "cart"} onClose={preference === 'cart' ? () => hideCart(): null}>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {meals.map((meal) => (
            <div key={meal.id} className="cart-item">
              <div className="cart-item-content">
                <h3>{meal.name}</h3>
                <p>Price: ${meal.price}</p>
                <p>Quantity: {meal.quantity}</p>
                <button onClick={() => removeFromCart(meal.id)}>Remove</button>
              </div>
              <img
                src={`http://localhost:3000/${meal.image}`}
                alt={meal.name}
              />
            </div>
          ))}
        </div>
        <div className="cart-total">
          <p>Total: ${total}</p>
        </div>
        <button className="checkout-button" onClick={hideCart}>
          close
        </button>
        {meals.length > 0 && (
          <button className="checkout-button" onClick={showCheckout}>Checkout</button>
        )}
      </div>
    </Modal>
  );
}
export default Cart;