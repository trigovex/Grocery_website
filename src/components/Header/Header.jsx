import { useState } from 'react';
import styles from './Header.module.css';
import { FaSearch, FaShoppingBasket, FaUser, FaHeart, FaRegBell, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GiIndianSpices } from 'react-icons/gi';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State variables for counts
  const [alertCount] = useState(2); // Example count for alerts
  const [wishlistCount] = useState(5); // Example count for wishlist
  const [orderCount] = useState(3); // Example count for orders
  const [cartCount] = useState(3); // Example count for cart

  // Add search loading state
  const [isSearching, setIsSearching] = useState(false);

  // Add search suggestions
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  // Add notification system
  const [notifications, setNotifications] = useState([]);

  // Add user menu dropdown
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Add cart preview
  const [showCartPreview, setShowCartPreview] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.marquee}>
            <span>🌟 Free Delivery on Orders Above ₹500</span>
            <span className={styles.divider}>|</span>
            <span>🎁 Save 20% on your first order! Use code: <strong>INDIA20</strong></span>
            <span className={styles.divider}>|</span>
            <span>🥬 Fresh Vegetables Delivered Daily</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Fresh</span>
          <span className={styles.logoTextGreen}>Bazaar</span>
          <span className={styles.logoSubtext}>organic & fresh</span>
        </Link>

        <div className={styles.searchBar}>
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input type="text" placeholder="Search for fresh groceries..." />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="/alerts" className={styles.iconLink}>
            <FaRegBell />
            <span className={styles.iconText}>Alerts</span>
            {alertCount > 0 && <span className={styles.badgeSmall}>{alertCount}</span>} {/* Badge for Alerts */}
          </Link>
          <Link to="/wishlist" className={styles.iconLink}>
            <FaHeart />
            <span className={styles.iconText}>Wishlist</span>
            {wishlistCount > 0 && <span className={styles.badgeSmall}>{wishlistCount}</span>} {/* Badge for Wishlist */}
          </Link>
          <Link to="/account" className={styles.iconLink}>
            <FaUser />
            <span className={styles.iconText}>Account</span>
          </Link>
          <div className={styles.cartWrapper}>
            <Link to="/cart" className={`${styles.iconLink} ${styles.cartIcon}`}>
              <FaShoppingBasket />
              <span className={styles.iconText}>Cart</span>
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>} {/* Badge for Cart */}
            </Link>
          </div>

          <div className={styles.cartWrapper}>
            <Link to="/orders" className={`${styles.iconLink} ${styles.cartIcon}`}>
              <FaClipboardList />
              <span className={styles.iconText}>Orders</span>
              {orderCount > 0 && <span className={styles.badge}>{orderCount}</span>} {/* Badge for Orders */}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <ul className={styles.navLinks}>
            <li className={`${styles.dropdownTrigger} ${styles.categoryButton}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}>
              <Link to="/categories">
                <span>Browse Categories</span>
              </Link>
              {isDropdownOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.categoryColumn}>
                      <h3>Fresh Food</h3>
                      <a href="#">🥬 Fruits & Vegetables</a>
                      <a href="#">🥩 Meat & Poultry</a>
                      <a href="#">🐟 Fish & Seafood</a>
                      <a href="#">🥚 Dairy & Eggs</a>
                      <a href="#">🥗️ Spices & Condiments</a>
                    </div>
                    <div className={styles.categoryColumn}>
                      <h3>Pantry</h3>
                      <a href="#">🌾 Rice & Grains</a>
                      <a href="#">🍝 Pasta & Noodles</a>
                      <a href="#">🥫 Canned Goods</a>
                      <a href="#">🍞 Baking Essentials</a>
                      <a href="#">🧂 Spices & Seasonings</a>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li><Link to="/deals" className={styles.dealTag}>Fresh Deals</Link></li>
            <li><Link to="/categories/organic">Organic</Link></li>
            <li><Link to="/categories/fresh-produce">Fresh Produce</Link></li>
            <li><Link to="/categories/dairy">Dairy</Link></li>
            <li><Link to="/categories/meat">Meat</Link></li>
            <li><Link to="/categories/bakery">Bakery</Link></li>
            <li><Link to="/deals">Offers</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 