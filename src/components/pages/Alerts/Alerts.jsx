import React, { useState } from 'react';
import { FaBell, FaCheck, FaTrash, FaCalendarAlt } from 'react-icons/fa';
import styles from './Alerts.module.css';

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: "Your order has been shipped!", date: "2024-01-01", read: false },
    { id: 2, message: "New discounts available on fresh produce!", date: "2024-01-02", read: false },
    { id: 3, message: "Your subscription is about to expire.", date: "2024-01-03", read: false },
    { id: 4, message: "Flash Sale: 50% off on selected items!", date: "2024-01-04", read: false },
    { id: 5, message: "Your feedback is important to us. Please rate your last purchase.", date: "2024-01-05", read: false },
  ]);

  const handleDelete = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleMarkAsRead = (id) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, read: true } : alert
    ));
  };

  return (
    <div className={styles.alertsContainer}>
      <div className={styles.alertsHeader}>
        <FaBell className={styles.headerIcon} />
        <div>
          <h1>Your Alerts</h1>
          <p className={styles.subtitle}>Stay updated with your notifications</p>
        </div>
      </div>

      {alerts.length === 0 ? (
        <div className={styles.noAlerts}>
          <FaBell size={48} />
          <p>No alerts to show</p>
        </div>
      ) : (
        <ul className={styles.alertList}>
          {alerts.map(alert => (
            <li 
              key={alert.id} 
              className={`${styles.alertItem} ${alert.read ? styles.read : ''}`}
            >
              <div className={styles.alertContent}>
                <div className={styles.alertMessage}>
                  <FaBell className={styles.alertIcon} />
                  <span>{alert.message}</span>
                </div>
                <div className={styles.alertDate}>
                  <FaCalendarAlt />
                  <span>{alert.date}</span>
                </div>
              </div>

              <div className={styles.alertActions}>
                {!alert.read && (
                  <button 
                    className={styles.markAsReadButton} 
                    onClick={() => handleMarkAsRead(alert.id)}
                  >
                    <FaCheck /> Mark as Read
                  </button>
                )}
                <button 
                  className={styles.deleteButton} 
                  onClick={() => handleDelete(alert.id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alerts; 