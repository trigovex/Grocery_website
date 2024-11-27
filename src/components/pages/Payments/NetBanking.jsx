import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUniversity, FaArrowLeft } from 'react-icons/fa';
import styles from './PaymentForms.module.css';

const NetBanking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, userDetails } = location.state;

  const [selectedBank, setSelectedBank] = useState('');

  const banks = [
    { id: 'sbi', name: 'State Bank of India' },
    { id: 'hdfc', name: 'HDFC Bank' },
    { id: 'icici', name: 'ICICI Bank' },
    { id: 'axis', name: 'Axis Bank' },
    { id: 'kotak', name: 'Kotak Mahindra Bank' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedBank) {
      alert('Please select a bank');
      return;
    }
    // Add bank payment processing logic here
    alert('Redirecting to bank...');
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
        <FaUniversity className={styles.headerIcon} />
        <div>
          <h1>Net Banking</h1>
          <p className={styles.subtitle}>Select your bank</p>
        </div>
      </div>

      <div className={styles.formContent}>
        <div className={styles.orderInfo}>
          <h3>Order Amount: ₹{product.price * quantity}</h3>
        </div>

        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <div className={styles.bankList}>
            {banks.map(bank => (
              <label key={bank.id} className={styles.bankOption}>
                <input
                  type="radio"
                  name="bank"
                  value={bank.id}
                  checked={selectedBank === bank.id}
                  onChange={(e) => setSelectedBank(e.target.value)}
                />
                <span>{bank.name}</span>
              </label>
            ))}
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={!selectedBank}
          >
            Continue to Bank
          </button>
        </form>
      </div>
    </div>
  );
};

export default NetBanking; 