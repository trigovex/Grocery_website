import React, { useState } from 'react';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaTruck, FaShieldAlt, FaCreditCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Fresh Strawberries", price: 4.99, quantity: 2, image: "https://images.unsplash.com/photo-1518635017480-d9a4666cdc14" },
    { id: 2, name: "Organic Carrots", price: 2.49, quantity: 1, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37" },
    { id: 3, name: "Greek Yogurt", price: 3.99, quantity: 1, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777" },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    navigate('/payment', { state: { items: cartItems, total } });
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <FaShoppingCart className={styles.headerIcon} />
        <div>
          <h1>Shopping Cart</h1>
          <p className={styles.subtitle}>{cartItems.length} items in your cart</p>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <FaShoppingCart size={48} />
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/')} className={styles.continueShoppingButton}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p className={styles.itemPrice}>₹{item.price.toFixed(2)}</p>
                </div>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(item.id, -1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>
                    <FaPlus />
                  </button>
                </div>
                <div className={styles.itemTotal}>
                  <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  className={styles.removeButton}
                  onClick={() => handleRemove(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Tax (18%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <button 
              className={styles.checkoutButton}
              onClick={handleCheckout}
            >
              <FaCreditCard /> Proceed to Checkout
            </button>

            <div className={styles.features}>
              <div className={styles.feature}>
                <FaTruck />
                <span>Free delivery on orders above ₹50</span>
              </div>
              <div className={styles.feature}>
                <FaShieldAlt />
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 