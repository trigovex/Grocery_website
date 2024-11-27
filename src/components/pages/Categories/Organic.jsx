import React from 'react';
import { FaShoppingCart, FaHeart, FaStar, FaLeaf, FaWeightHanging } from 'react-icons/fa';
import styles from './Organic.module.css';

const Organic = () => {
  const organicProducts = [
    {
      id: 1,
      name: "Organic Apples",
      description: "Freshly picked organic apples, perfect for snacking or baking.",
      price: 150,
      unit: "kg",
      rating: 4.8,
      reviews: 156,
      isOrganic: true,
      inStock: true,
      image: "https://images.unsplash.com/photo-1589927986089-3581237890c0",
      category: "Fruits",
      certification: "Certified Organic"
    },
    {
      id: 2,
      name: "Organic Carrots",
      description: "Crisp and crunchy organic carrots, great for salads and juices.",
      price: 80,
      unit: "kg",
      rating: 4.6,
      reviews: 89,
      isOrganic: true,
      inStock: true,
      image: "https://images.unsplash.com/photo-1589927986089-3581237890c0",
      category: "Vegetables",
      certification: "Certified Organic"
    },
    // Add more items...
  ];

  return (
    <div className={styles.organicContainer}>
      <div className={styles.categoryHeader}>
        <div>
          <h1>Organic Products</h1>
          <p className={styles.subtitle}>Explore our range of organic products sourced from the best farms.</p>
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <select className={styles.select}>
            <option>All Categories</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Grains</option>
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
        {organicProducts.map(item => (
          <div key={item.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <button className={styles.wishlistButton}>
                <FaHeart />
              </button>
              <div className={styles.organicBadge}>
                <FaLeaf /> {item.certification}
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

export default Organic; 