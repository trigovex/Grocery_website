import React, { useState } from 'react';
import { FaHeart, FaTrash, FaShoppingCart, FaSort, FaFilter, FaCheck } from 'react-icons/fa';
import styles from './Wishlist.module.css';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Organic Honey", price: 8.99, category: "Organic", date: "2024-01-01", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38" },
    { id: 2, name: "Premium Coffee Beans", price: 15.99, category: "Beverages", date: "2024-01-02", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e" },
    { id: 3, name: "Extra Virgin Olive Oil", price: 19.99, category: "Cooking", date: "2024-01-03", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5" },
    { id: 4, name: "Organic Almonds", price: 12.99, category: "Nuts", date: "2024-01-04", image: "https://images.unsplash.com/photo-1589927986089-35812378c1b2" },
    { id: 5, name: "Quinoa", price: 9.99, category: "Grains", date: "2024-01-05", image: "https://images.unsplash.com/photo-1589927986089-35812378c1b2" },
  ]);

  const [sortBy, setSortBy] = useState('date');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  const categories = ['all', ...new Set(wishlistItems.map(item => item.category))];

  const handleRemove = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  };

  const handleAddToCart = (item) => {
    console.log(`Add to cart: ${item.name}`);
  };

  const handleSort = (value) => {
    setSortBy(value);
    const sorted = [...wishlistItems].sort((a, b) => {
      switch (value) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'date':
          return new Date(b.date) - new Date(a.date);
        default:
          return 0;
      }
    });
    setWishlistItems(sorted);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const handleSelectItem = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleBulkDelete = () => {
    setWishlistItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const handleBulkAddToCart = () => {
    const selectedProducts = wishlistItems.filter(item => selectedItems.includes(item.id));
    console.log('Adding to cart:', selectedProducts);
  };

  const filteredItems = wishlistItems.filter(item => 
    filterCategory === 'all' ? true : item.category === filterCategory
  );

  return (
    <div className={styles.wishlistContainer}>
      <div className={styles.wishlistHeader}>
        <FaHeart className={styles.headerIcon} />
        <div>
          <h1>Your Wishlist</h1>
          <p className={styles.subtitle}>Items you wish to purchase later</p>
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <div className={styles.emptyWishlist}>
          <FaHeart size={48} />
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <>
          <div className={styles.controls}>
            <div className={styles.bulkActions}>
              {selectedItems.length > 0 && (
                <>
                  <button 
                    className={styles.bulkActionButton} 
                    onClick={handleBulkAddToCart}
                  >
                    <FaShoppingCart /> Add Selected to Cart
                  </button>
                  <button 
                    className={styles.bulkActionButton} 
                    onClick={handleBulkDelete}
                  >
                    <FaTrash /> Remove Selected
                  </button>
                </>
              )}
            </div>
            <div className={styles.filterSort}>
              <div className={styles.select}>
                <FaSort />
                <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
                  <option value="date">Sort by Date</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
              <div className={styles.select}>
                <FaFilter />
                <select value={filterCategory} onChange={(e) => handleFilter(e.target.value)}>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.wishlistGrid}>
            {filteredItems.map(item => (
              <div key={item.id} className={styles.wishlistItem}>
                <div className={styles.itemSelect}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.name} className={styles.wishlistImage} />
                  <div className={styles.itemCategory}>{item.category}</div>
                </div>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemPrice}>₹{item.price.toFixed(2)}</p>
                  <p className={styles.itemDate}>Added on {item.date}</p>
                  <div className={styles.itemActions}>
                    <button 
                      className={styles.addToCartButton}
                      onClick={() => handleAddToCart(item)}
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                    <button 
                      className={styles.removeButton}
                      onClick={() => handleRemove(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist; 