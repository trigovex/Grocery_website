import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCreditCard, FaLock, FaArrowLeft } from 'react-icons/fa';
import styles from './PaymentForms.module.css';

const CardPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, userDetails } = location.state;

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    alert('Payment Successful!');
    navigate('/order-success');
  };

  return (
    <div className={styles.formContainer}>
      <button 
        className={styles.backButton}
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Back
      </button>

      <div className={styles.formHeader}>
        <FaCreditCard className={styles.headerIcon} />
        <div>
          <h1>Card Payment</h1>
          <p className={styles.subtitle}>Enter your card details</p>
        </div>
      </div>

      <div className={styles.formContent}>
        <div className={styles.orderInfo}>
          <h3>Order Amount: ₹{product.price * quantity}</h3>
          <div className={styles.secureNote}>
            <FaLock /> Secured by SSL encryption
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <div className={styles.inputGroup}>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Name on Card</label>
            <input
              type="text"
              name="cardName"
              placeholder="John Doe"
              value={cardDetails.cardName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.rowInputs}>
            <div className={styles.inputGroup}>
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                maxLength="5"
                value={cardDetails.expiry}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>CVV</label>
              <input
                type="password"
                name="cvv"
                placeholder="123"
                maxLength="3"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
          >
            Pay ₹{product.price * quantity}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardPayment; 