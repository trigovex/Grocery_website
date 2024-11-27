import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaFileAlt } from 'react-icons/fa';
import styles from './PaymentForms.module.css';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderDetails } = location.state || {};

  return (
    <div className={styles.successContainer}>
      <div className={styles.successContent}>
        <FaCheckCircle className={styles.successIcon} />
        <h1>Order Successful!</h1>
        <p>Your order has been placed successfully</p>
        
        {orderDetails && (
          <div className={styles.orderInfo}>
            <h2>Order #{orderDetails.orderId}</h2>
            <p>Amount Paid: ₹{orderDetails.amount}</p>
          </div>
        )}

        <div className={styles.actionButtons}>
          <button onClick={() => navigate('/orders')} className={styles.primaryButton}>
            <FaFileAlt /> View Orders
          </button>
          <button onClick={() => navigate('/')} className={styles.secondaryButton}>
            <FaHome /> Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess; 