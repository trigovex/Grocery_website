import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import './Productdetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;
  const [quantity, setQuantity] = useState(product.quantity);

  const handleProceedToPayment = () => {
    navigate('/payment', {
      state: { product, quantity },
    });
  };

  return (
    <div className="product-details-container">
      <h1 className="product-details-header">Product Details</h1>
      
      <div className="product-content">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
        </div>

        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">₹{product.price}</p>
          
          <div className="features-list">
            <div className="feature-item">
              <FaTruck /> <span>Free delivery on orders above ₹500</span>
            </div>
            <div className="feature-item">
              <FaShieldAlt /> <span>100% Secure Payment</span>
            </div>
            <div className="feature-item">
              <FaUndo /> <span>Easy 14-day returns</span>
            </div>
          </div>
          
          <div className="quantity-control">
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>

          <button 
            className="proceed-button"
            onClick={handleProceedToPayment}
          >
            <FaShoppingCart /> Proceed to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
