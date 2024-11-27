   // src/components/pages/Categories/Dairy.jsx
   import React from 'react';
   import { FaShoppingCart, FaHeart, FaStar, FaLeaf } from 'react-icons/fa';
   import styles from './Dairy.module.css';

   const Dairy = () => {
     const dairyProducts = [
       {
         id: 1,
         name: "Fresh Milk",
         description: "Pure and creamy milk, perfect for drinking or cooking.",
         price: 50,
         unit: "liter",
         rating: 4.7,
         reviews: 156,
         isOrganic: true,
         image: "https://images.unsplash.com/photo-1589927986089-3581237890c0"
       },
       {
         id: 2,
         name: "Yogurt",
         description: "Delicious and healthy yogurt, great for breakfast or snacks.",
         price: 30,
         unit: "500g",
         rating: 4.5,
         reviews: 89,
         isOrganic: true,
         image: "https://images.unsplash.com/photo-1589927986089-3581237890c0"
       },
       // Add more dairy products...
     ];

     return (
       <div className={styles.dairyContainer}>
         <div className={styles.categoryHeader}>
           <div>
             <h1>Dairy Products</h1>
             <p className={styles.subtitle}>Check out our selection of dairy products, fresh and wholesome.</p>
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
           {dairyProducts.map(product => (
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

   export default Dairy;