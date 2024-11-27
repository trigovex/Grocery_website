import React from 'react';
import { FaShoppingCart, FaHeart, FaStar, FaLeaf, FaWeightHanging, FaAward } from 'react-icons/fa';
import styles from './Meat.module.css';

const Meat = () => {
  const meatProducts = [
    {
      id: 1,
      name: "Fresh Chicken",
      description: "High-quality, free-range chicken, perfect for grilling or roasting.",
      price: 200,
      unit: "kg",
      rating: 4.7,
      reviews: 134,
      isFreeRange: true,
      inStock: true,
      image: "https://images.unsplash.com/photo-1589927986089-3581237890c0",
      category: "Poultry",
      quality: "Premium"
    },
    {
      id: 2,
      name: "Beef",
      description: "Tender cuts of beef, ideal for steaks and stews.",
      price: 350,
      unit: "kg",
      rating: 4.9,
      reviews: 92,
      isFreeRange: true,
      inStock: true,
      image: "https://images.unsplash.com/photo-1589927986089-3581237890c0",
      category: "Red Meat",
      quality: "Premium Grade"
    },
    // Add more items...
  ];

  return (
    <div className={styles.meatContainer}>
      <div className={styles.categoryHeader}>
        <div>
          <h1>Meat & Poultry</h1>
          <p className={styles.subtitle}>Find the freshest meat and poultry products sourced from trusted farms.</p>
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <select className={styles.select}>
            <option>All Categories</option>
            <option>Poultry</option>
            <option>Red Meat</option>
            <option>Seafood</option>
          </select>
          <select className={styles.select}>
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Rating</option>
          </select>
        </div>
      </div>

      <div className={styles.productGrid}>
        {meatProducts.map(item => (
          <div key={item.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <button className={styles.wishlistButton}>
                <FaHeart />
              </button>
              {item.isFreeRange && (
                <div className={styles.freeRangeBadge}>
                  <FaAward /> Free Range
                </div>
              )}
              <div className={styles.qualityBadge}>
                {item.quality}
              </div>
            </div>

            <div className={styles.productContent}>
              <div className={styles.category}>{item.category}</div>
              <h2 className={styles.productName}>{item.name}</h2>
              <p className={styles.productDescription}>{item.description}</p>
              
              <div className={styles.productMeta}>
                <div className={styles.rating}>
                  <FaStar className={styles.starIcon} />
                  <span>{item.rating}</span>
                  <span className={styles.reviews}>({item.reviews})</span>
                </div>
                <div className={styles.weight}>
                  <FaWeightHanging /> Sold by {item.unit}
                </div>
              </div>

              <div className={styles.productFooter}>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>₹{item.price}</span>
                  <span className={styles.unit}>/{item.unit}</span>
                </div>
                <button className={styles.addToCartButton}>
                  <FaShoppingCart /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meat; 