import React from 'react';
import { FaShoppingCart, FaHeart, FaStar, FaLeaf } from 'react-icons/fa';
import styles from './Bakery.module.css';

const Bakery = () => {
  const bakeryProducts = [
    {
      id: 1,
      name: "Fresh Bread",
      description: "Soft and fluffy bread, perfect for sandwiches or toast.",
      price: 40,
      unit: "loaf",
      rating: 4.5,
      reviews: 128,
      isOrganic: true,
      image: "https://images.unsplash.com/photo-1589927986089-3581237890c0"
    },
    {
      id: 2,
      name: "Croissant",
      description: "Buttery and flaky croissants, ideal for breakfast.",
      price: 25,
      unit: "each",
      rating: 4.8,
      reviews: 96,
      isOrganic: false,
      image: "https://images.unsplash.com/photo-1589927986089-3581237890c0"
    },
    // Add more products...
  ];

  return (
    <div className={styles.bakeryContainer}>
      <div className={styles.categoryHeader}>
        <div>
          <h1>Bakery Products</h1>
          <p className={styles.subtitle}>Explore our delicious bakery items, freshly baked every day.</p>
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <select className={styles.select}>
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Rating</option>
          </select>
        </div>
      </div>

      <div className={styles.productGrid}>
        {bakeryProducts.map(product => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <button className={styles.wishlistButton}>
                <FaHeart />
              </button>
              {product.isOrganic && (
                <div className={styles.organicBadge}>
                  <FaLeaf /> Organic
                </div>
              )}
            </div>

            <div className={styles.productContent}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productDescription}>{product.description}</p>
              
              <div className={styles.productMeta}>
                <div className={styles.rating}>
                  <FaStar className={styles.starIcon} />
                  <span>{product.rating}</span>
                  <span className={styles.reviews}>({product.reviews})</span>
                </div>
              </div>

              <div className={styles.productFooter}>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>₹{product.price}</span>
                  <span className={styles.unit}>/{product.unit}</span>
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

export default Bakery;