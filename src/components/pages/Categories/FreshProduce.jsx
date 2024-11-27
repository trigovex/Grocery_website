   // src/components/pages/Categories/FreshProduce.jsx
   import React from 'react';
   import { FaShoppingCart, FaHeart, FaStar, FaLeaf, FaWeightHanging } from 'react-icons/fa';
   import styles from './FreshProducts.module.css';

   const FreshProduce = () => {
     const produceItems = [
       {
         id: 1,
         name: "Fresh Tomatoes",
         description: "Juicy and ripe tomatoes, perfect for salads and sauces.",
         price: 60,
         unit: "kg",
         rating: 4.8,
         reviews: 145,
         isOrganic: true,
         inStock: true,
         image: "https://images.unsplash.com/photo-1589927986089-3581237890c0",
         category: "Vegetables",
         freshness: "Picked Today"
       },
       {
         id: 2,
         name: "Fresh Broccoli",
         description: "Nutritious and vibrant broccoli, great for steaming or stir-frying.",
         price: 100,
         unit: "kg",
         rating: 4.6,
         reviews: 89,
         isOrganic: true,
         inStock: true,
         image: "https://images.unsplash.com/photo-1589927986089-3581237890c0",
         category: "Vegetables",
         freshness: "Farm Fresh"
       },
       // Add more items...
     ];

     return (
       <div className={styles.freshProduceContainer}>
         <div className={styles.categoryHeader}>
           <div>
             <h1>Fresh Produce</h1>
             <p className={styles.subtitle}>Discover our fresh fruits and vegetables, picked daily for quality.</p>
           </div>
         </div>

         <div className={styles.filters}>
           <div className={styles.filterGroup}>
             <select className={styles.select}>
               <option>All Categories</option>
               <option>Vegetables</option>
               <option>Fruits</option>
               <option>Herbs</option>
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
           {produceItems.map(item => (
             <div key={item.id} className={styles.productCard}>
               <div className={styles.imageContainer}>
                 <img src={item.image} alt={item.name} className={styles.productImage} />
                 <button className={styles.wishlistButton}>
                   <FaHeart />
                 </button>
                 {item.isOrganic && (
                   <div className={styles.organicBadge}>
                     <FaLeaf /> Organic
                   </div>
                 )}
                 <div className={styles.freshnessBadge}>
                   {item.freshness}
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

   export default FreshProduce;