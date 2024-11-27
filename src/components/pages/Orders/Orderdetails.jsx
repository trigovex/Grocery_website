import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRedoAlt, FaSearch, FaCalendarAlt, FaCreditCard, FaBox } from 'react-icons/fa';
import styles from './Orderdetails.module.css';

const Orderdetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // Example order data (in a real app, this would come from an API)
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

  // Find the order by ID
  const order = orders.find(o => o.id === parseInt(orderId));

  if (!order) {
    return <p>Order not found.</p>;
  }

  const handleOrderAgain = (item) => {
    navigate(`/product/${item.id}`, { state: { product: item } });
  };

  return (
    <div className={styles.orderDetailsContainer}>
      <h1>Order Details</h1>
      
      <div className={styles.orderInfo}>
        <p>
          <strong>Order ID</strong>
          #{order.id}
        </p>
        <p>
          <strong>Order Date</strong>
          <span><FaCalendarAlt /> {order.date}</span>
        </p>
        <p>
          <strong>Payment Method</strong>
          <span><FaCreditCard /> {order.paymentMethod}</span>
        </p>
        <p>
          <strong>Status</strong>
          <span><FaBox /> {order.status}</span>
        </p>
      </div>

      <h3>Ordered Items</h3>
      <div className={styles.orderItems}>
        {order.items.map(item => (
          <div key={item.id} className={styles.productDetails}>
            <img src={item.image} alt={item.name} className={styles.productImage} />
            
            <div className={styles.itemDetails}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemQuantity}>Quantity: {item.quantity}</span>
              <span className={styles.itemPrice}>Price: ₹{item.price}</span>
            </div>

            <div className={styles.actions}>
              <button 
                className={styles.orderAgainButton} 
                onClick={() => handleOrderAgain(item)}
              >
                <FaRedoAlt /> Order Again
              </button>
              <button 
                className={styles.viewSimilarButton}
                onClick={() => alert('View Similar Items functionality not implemented.')}
              >
                <FaSearch /> View Similar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orderdetails;
