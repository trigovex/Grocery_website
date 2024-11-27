// src/components/pages/Orders/Orders.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaCreditCard, FaBox, FaChevronRight } from 'react-icons/fa';
import styles from './Orders.module.css';

const Orders = () => {
  const orders = [
    {
      id: 1,
      date: '2023-10-01',
      status: 'Delivered',
      paymentMethod: 'Credit Card',
      totalAmount: 320,
      items: [
        {
          id: 'p1',
          name: 'Organic Apples',
          quantity: 2,
          price: 150,
          image: 'https://images.unsplash.com/photo-1589927986089-3581237890c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGFwcGxlJTIwY29sb3J8ZW58MHx8fHwxNjA4MjY0NjY0&ixlib=rb-1.2.1&q=80&w=400',
        }
      ],
    },
    {
      id: 2,
      date: '2023-10-05',
      status: 'Pending',
      paymentMethod: 'PayPal',
      totalAmount: 50,
      items: [
        {
          id: 'p2',
          name: 'Dairy Milk',
          quantity: 1,
          price: 50,
          image: 'https://images.unsplash.com/photo-1589927986089-3581237890c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGRhaXJ5JTIwbWlsayUyMGltYWdlfGVufDB8fHx8MTYwODI2NDY2NA&ixlib=rb-1.2.1&q=80&w=400',
        },
      ],
    },
    // Add more orders as needed
  ];

  return (
    <div className={styles.orderHistoryContainer}>
      <h1>Order History</h1>
      <p className={styles.subtitle}>Track and manage your orders</p>
      
      {orders.length === 0 ? (
        <div className={styles.noOrders}>
          <FaBox size={48} />
          <p>No orders found.</p>
        </div>
      ) : (
        <div className={styles.ordersList}>
          {orders.map(order => (
            <div key={order.id} className={styles.order}>
              <div className={styles.orderHeader}>
                <div className={styles.orderHeaderLeft}>
                  <h2>Order #{order.id}</h2>
                  <span className={styles.orderDate}>
                    <FaCalendarAlt /> {order.date}
                  </span>
                </div>
                <div className={styles.orderHeaderRight}>
                  <span className={`${styles.orderStatus} ${styles[order.status.toLowerCase()]}`}>
                    <FaBox /> {order.status}
                  </span>
                </div>
              </div>

              <div className={styles.orderItems}>
                {order.items.map(item => (
                  <div key={item.id} className={styles.productDetails}>
                    <img src={item.image} alt={item.name} className={styles.productImage} />
                    <div className={styles.itemDetails}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemQuantity}>Quantity: {item.quantity}</span>
                      <span className={styles.itemPrice}>₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.orderFooter}>
                <div className={styles.paymentInfo}>
                  <span className={styles.paymentMethod}>
                    <FaCreditCard /> {order.paymentMethod}
                  </span>
                  <span className={styles.totalAmount}>
                    Total: ₹{order.totalAmount}
                  </span>
                </div>
                <Link to={`/orders/${order.id}`} className={styles.viewDetailsButton}>
                  View Details <FaChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;