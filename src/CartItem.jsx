import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice'; // Import from CartSlice
import './CartItem.css'; // Ensure you have the styling file for proper layout

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items); // Access the cart items from the Redux store
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + Number(item.cost) * item.quantity, 0);
  };

  // Calculate the total quantity of items in the cart
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Handle continue shopping action
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(); // Trigger the passed down onContinueShopping function
  };

  // Handle quantity increment
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 })); // Update the quantity
  };

  // Handle quantity decrement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 })); // Decrease the quantity
    } else {
      dispatch(removeItem(item.name)); // Remove item if quantity becomes 1 and the button is clicked
    }
  };

  // Handle item removal from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name)); // Remove item from the cart
  };

  // Calculate total cost for an item
  const calculateTotalCost = (item) => {
    return Number(item.cost) * item.quantity;
  };

  // Placeholder for future checkout functionality
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <h3>Total Items in Cart: {calculateTotalQuantity()}</h3>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Cost: ${item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount">
        {/* Displaying the total cart amount */}
        <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
