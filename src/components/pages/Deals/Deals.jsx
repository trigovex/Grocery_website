import React from 'react';
import { FaTag, FaClock, FaShoppingCart, FaPercent, FaGift, FaLeaf } from 'react-icons/fa';
import styles from './Deals.module.css';

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "20% Off on Organic Fruits",
      description: "Limited time offer on all organic fruits.",
      discount: 20,
      validUntil: "2024-03-31",
      category: "Fruits",
      image: "https://images.unsplash.com/photo-1589927986089-3581237890c0",
      isOrganic: true,
      originalPrice: 100,
      discountedPrice: 80,
      tag: "Best Seller"
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free on Dairy Products",
      description: "Get your favorite dairy products at a great price!",
      discount: 50,
      validUntil: "2024-03-25",
      category: "Dairy",
      image: "https://images.unsplash.com/photo-1589927986089-3581237890c0",
      isOrganic: false,
      originalPrice: 150,
      discountedPrice: 75,
      tag: "Hot Deal"
    },
    // Add more deals...
  ];

  return (
    <div className={styles.dealsContainer}>
      <div className={styles.dealsHeader}>
        <FaTag className={styles.headerIcon} />
        <div>
          <h1>Fresh Deals</h1>
          <p className={styles.subtitle}>Check out our latest offers and discounts on fresh groceries!</p>
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <select className={styles.select}>
            <option>All Categories</option>
            <option>Fruits & Vegetables</option>
            <option>Dairy Products</option>
            <option>Bakery Items</option>
          </select>
          <select className={styles.select}>
            <option>Sort by: Discount</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Ending Soon</option>
          </select>
        </div>
      </div>

      <div className={styles.dealsGrid}>
        {deals.map(deal => (
          <div key={deal.id} className={styles.dealCard}>
            <div className={styles.imageContainer}>
              <img src={deal.image} alt={deal.title} className={styles.dealImage} />
              <div className={styles.discountBadge}>
                <FaPercent /> {deal.discount}% OFF
              </div>
              {deal.isOrganic && (
                <div className={styles.organicBadge}>
                  <FaLeaf /> Organic
                </div>
              )}
              {deal.tag && (
                <div className={styles.tagBadge}>
                  <FaGift /> {deal.tag}
                </div>
              )}
            </div>

            <div className={styles.dealContent}>
              <h2 className={styles.dealTitle}>{deal.title}</h2>
              <p className={styles.dealDescription}>{deal.description}</p>

              <div className={styles.dealMeta}>
                <div className={styles.category}>{deal.category}</div>
                <div className={styles.validity}>
                  <FaClock />
                  <span>Valid until {new Date(deal.validUntil).toLocaleDateString()}</span>
                </div>
              </div>

              <div className={styles.priceSection}>
                <div className={styles.prices}>
                  <span className={styles.originalPrice}>₹{deal.originalPrice}</span>
                  <span className={styles.discountedPrice}>₹{deal.discountedPrice}</span>
                </div>
                <button className={styles.shopNowButton}>
                  <FaShoppingCart /> Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dealFeatures}>
        <div className={styles.feature}>
          <FaClock />
          <div>
            <h3>Limited Time Offers</h3>
            <p>Grab the deals before they expire</p>
          </div>
        </div>
        <div className={styles.feature}>
          <FaLeaf />
          <div>
            <h3>Fresh Products</h3>
            <p>Quality guaranteed on all items</p>
          </div>
        </div>
        <div className={styles.feature}>
          <FaPercent />
          <div>
            <h3>Best Prices</h3>
            <p>Unbeatable discounts every day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals; 