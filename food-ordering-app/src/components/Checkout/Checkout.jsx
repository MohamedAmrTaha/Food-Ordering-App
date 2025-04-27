import Modal from "../Modal/Modal";
import { UserPreferenceContext } from "../../Store/UserPreferenceContext";
import { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import useInput from "../../useInput";
import "./Checkout.css";
function Checkout() {
    const { preference, hideCheckout } = useContext(UserPreferenceContext);
    const { total, meals, resetCart } = useContext(CartContext);
    const { value: name, isValid: nameIsValid, hasError: nameHasError, handleChange: handleNameChange, handleBlur: handleNameBlur, reset: resetName } = useInput(value => value.trim() !== '');
    const { value: email, isValid: emailIsValid, hasError: emailHasError, handleChange: handleEmailChange, handleBlur: handleEmailBlur, reset: resetEmail } = useInput(value => value.includes('@'));
    const { value: address, isValid: addressIsValid, hasError: addressHasError, handleChange: handleAddressChange, handleBlur: handleAddressBlur, reset: resetAddress } = useInput(value => value.trim() !== '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nameIsValid || !emailIsValid || !addressIsValid) {
            return;
        }
        const customerData = {
            name,
            email,
            address
        };
        fetch("http://localhost:3000/orders", {
          method: "POST",
          body: JSON.stringify({
            order:{
              customer: customerData,
              meals: meals
            }
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Order placed successfully:", data);
            resetName();
            resetEmail();
            resetAddress();
            hideCheckout();
            resetCart();
            alert("Order placed successfully!");
          })
          .catch((error) => {
            console.error("Error placing order:", error);
          });
    }
  return (
    <Modal open={preference === "checkout"}>
      <div className="checkout">
        <h2>Checkout</h2>
        <div className="checkout-summary">
          <p>Total Amount: ${total}</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              required
            />
            {nameHasError && (
              <p className="error-text">Please enter a valid name!</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              required
            />
            {emailHasError && (
              <p className="error-text">Please enter a valid email!</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              onBlur={handleAddressBlur}
              required
            />
            {addressHasError && (
              <p className="error-text">Please enter a valid address!</p>
            )}
          </div>

          <button type="button"  onClick={hideCheckout}>
            Close
          </button>
          <button type="submit">Place Order</button>
        </form>
      </div>
    </Modal>
  );
}
export default Checkout;