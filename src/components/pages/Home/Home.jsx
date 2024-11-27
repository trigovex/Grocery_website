import React from 'react';
import styles from './Home.module.css';
import Section from '../../Section/Section';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/*<h1>Welcome to FreshMarket</h1>
      <p>Your one-stop shop for fresh groceries.</p>
       Add home page content here */}
      <Section />
    </div>
  );
};

export default Home;
