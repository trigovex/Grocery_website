import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaCreditCard, FaUniversity, FaTruck, FaUser, 
  FaMapMarkerAlt, FaShieldAlt, FaLock, FaArrowRight 
} from 'react-icons/fa';
import styles from './Payment.module.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity } = location.state;

  // Simulated user data from account (should come from context/redux in real app)
  const [userData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    addresses: [
      {
        id: 1,
        type: 'Home',
        address: '123 Fresh Street, Mumbai, MH 400001',
        isDefault: true
      }
    ]
  });

  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });

  // Load user details from account
  useEffect(() => {
    const defaultAddress = userData.addresses.find(addr => addr.isDefault);
    setUserDetails(prev => ({
      ...prev,
      name: userData.name,
      address: defaultAddress?.address || ''
    }));
  }, [userData]);

  const handlePaymentMethodSelect = (method) => {
    // Navigate to specific payment form pages
    switch(method) {
      case 'card':
        navigate('/payment/card', { 
          state: { product, quantity, userDetails } 
        });
        break;
      case 'netbanking':
        navigate('/payment/netbanking', { 
          state: { product, quantity, userDetails } 
        });
        break;
      case 'cod':
        setUserDetails(prev => ({ ...prev, paymentMethod: 'Cash on Delivery' }));
        break;
      default:
        break;
    }
  };

  const handlePayment = () => {
    if (userDetails.paymentMethod === 'Cash on Delivery') {
      alert(`Order placed for ${quantity} x ${product.name}!`);
      navigate('/order-success');
    }
  };

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentHeader}>
        <FaShieldAlt className={styles.headerIcon} />
        <div>
          <h1>Secure Checkout</h1>
          <p className={styles.subtitle}>Complete your purchase securely</p>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div className={styles.productInfo}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productDetails}>
              <h3>{product.name}</h3>
              <p className={styles.quantity}>Quantity: {quantity}</p>
              <p className={styles.price}>₹{product.price} x {quantity}</p>
              <p className={styles.total}>Total: ₹{product.price * quantity}</p>
            </div>
          </div>
        </div>

        <div className={styles.userDetailsSection}>
          <h2>Delivery Details</h2>
          <div className={styles.userInfo}>
            <div className={styles.infoItem}>
              <FaUser className={styles.infoIcon} />
              <div>
                <label>Name</label>
                <p>{userDetails.name}</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div>
                <label>Delivery Address</label>
                <p>{userDetails.address}</p>
              </div>
            </div>
          </div>

          <h2>Select Payment Method</h2>
          <div className={styles.paymentOptions}>
            <button 
              className={styles.paymentButton}
              onClick={() => handlePaymentMethodSelect('card')}
            >
              <FaCreditCard className={styles.paymentIcon} />
              <div className={styles.paymentText}>
                <span>Credit/Debit Card</span>
                <small>All major cards accepted</small>
              </div>
              <FaArrowRight className={styles.arrowIcon} />
            </button>

            <button 
              className={styles.paymentButton}
              onClick={() => handlePaymentMethodSelect('netbanking')}
            >
              <FaUniversity className={styles.paymentIcon} />
              <div className={styles.paymentText}>
                <span>Net Banking</span>
                <small>All major banks supported</small>
              </div>
              <FaArrowRight className={styles.arrowIcon} />
            </button>

            <button 
              className={styles.paymentButton}
              onClick={() => handlePaymentMethodSelect('cod')}
            >
              <FaTruck className={styles.paymentIcon} />
              <div className={styles.paymentText}>
                <span>Cash on Delivery</span>
                <small>Pay when you receive</small>
              </div>
              <FaArrowRight className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.paymentFooter}>
        <div className={styles.securityBadges}>
          <div className={styles.badge}>
            <FaShieldAlt /> 100% Secure Payments
          </div>
          <div className={styles.badge}>
            <FaLock /> End-to-end Encryption
          </div>
        </div>

        {userDetails.paymentMethod === 'Cash on Delivery' && (
          <button 
            className={styles.confirmButton}
            onClick={handlePayment}
          >
            Confirm Order - Pay ₹{product.price * quantity} on Delivery
          </button>
        )}
      </div>
    </div>
  );
};

export default Payment;
