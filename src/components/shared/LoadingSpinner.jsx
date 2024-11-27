import React from 'react';
import styles from './Shared.module.css';

export const LoadingSpinner = () => (
  <div className={styles.spinnerOverlay}>
    <div className={styles.spinner}></div>
    <p>Processing your payment...</p>
  </div>
); 