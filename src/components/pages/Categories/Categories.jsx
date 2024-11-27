import React from 'react';
import styles from './Categories.module.css';

const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
      <h1>Categories</h1>
      <p>Explore our wide range of grocery categories.</p>
      {/* Add category items here */}
    </div>
  );
};

export default Categories; 