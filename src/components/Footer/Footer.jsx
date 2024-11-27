import React, { useState } from 'react';
import styles from './Footer.module.css';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaPinterest,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCreditCard,
  FaPaypal,
  FaApplePay,
  FaGooglePay,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaHeadset,
  FaGift,
  FaPercent,
  FaLeaf,
  FaHandshake,
  FaStore,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setSubscriptionStatus('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      {/* Enhanced Newsletter Section */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterText}>
            <h2>Subscribe to our Newsletter</h2>
            <p>Get daily updates about fresh deals and discounts</p>
            {subscriptionStatus && (
              <p className={styles.subscriptionStatus}>{subscriptionStatus}</p>
            )}
          </div>
          <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Enhanced Features Bar */}
      <div className={styles.featuresBar}>
        <div className={styles.feature}>
          <FaTruck className={styles.featureIcon} />
          <div>
            <h4>Free Delivery</h4>
            <p>Orders from ₹500</p>
          </div>
        </div>
        <div className={styles.feature}>
          <FaShieldAlt className={styles.featureIcon} />
          <div>
            <h4>Secure Payment</h4>
            <p>100% Protected</p>
          </div>
        </div>
        <div className={styles.feature}>
          <FaUndo className={styles.featureIcon} />
          <div>
            <h4>Easy Returns</h4>
            <p>14 Day Returns</p>
          </div>
        </div>
        <div className={styles.feature}>
          <FaHeadset className={styles.featureIcon} />
          <div>
            <h4>24/7 Support</h4>
            <p>Online Support</p>
          </div>
        </div>
        <div className={styles.feature}>
          <FaLeaf className={styles.featureIcon} />
          <div>
            <h4>100% Organic</h4>
            <p>Certified Products</p>
          </div>
        </div>
        <div className={styles.feature}>
          <FaPercent className={styles.featureIcon} />
          <div>
            <h4>Best Prices</h4>
            <p>Guaranteed Savings</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerLogo}>
              <span>Fresh</span>Bazaar
            </h3>
            <p className={styles.companyDesc}>
              Your one-stop destination for fresh groceries and daily essentials. 
              We deliver quality products right to your doorstep.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaPhoneAlt />
                <span>+91 98765 43210</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope />
                <span>support@freshbazaar.com</span>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt />
                <span>123 Fresh Street, Mumbai, MH 400001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Shop Now</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Enhanced Customer Service Column */}
          <div className={styles.footerColumn}>
            <h3>Customer Service</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#" className={styles.specialLink}>
                <FaWhatsapp /> WhatsApp Support
              </a></li>
              <li><a href="#" className={styles.specialLink}>
                <FaStore /> Find Stores
              </a></li>
            </ul>
          </div>

          {/* Enhanced Download App Section */}
          <div className={styles.footerColumn}>
            <h3>Download Our App</h3>
            <p>Shop on the go with our mobile app</p>
            <div className={styles.appFeatures}>
              <div className={styles.appFeature}>
                <FaGift />
                <span>Exclusive App Offers</span>
              </div>
              <div className={styles.appFeature}>
                <FaHandshake />
                <span>Loyalty Rewards</span>
              </div>
            </div>
            <div className={styles.appButtons}>
              <img src="https://your-domain.com/app-store.png" alt="App Store" />
              <img src="https://your-domain.com/play-store.png" alt="Play Store" />
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
              <a href="#" className={styles.socialIcon}><FaTwitter /></a>
              <a href="#" className={styles.socialIcon}><FaInstagram /></a>
              <a href="#" className={styles.socialIcon}><FaPinterest /></a>
            </div>
          </div>
        </div>

        {/* Enhanced Payment Section */}
        <div className={styles.paymentSection}>
          <div className={styles.paymentWrapper}>
            <h4>Accepted Payment Methods</h4>
            <div className={styles.paymentIcons}>
              <FaCreditCard />
              <FaPaypal />
              <FaApplePay />
              <FaGooglePay />
              <div className={styles.paymentMethod}>
                <FaCreditCard />
                <span>Credit Card</span>
              </div>
              <div className={styles.paymentMethod}>
                <FaPaypal />
                <span>PayPal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright Section */}
        <div className={styles.copyright}>
          <p>&copy; 2024 FreshBazaar. All rights reserved.</p>
          <div className={styles.copyrightLinks}>
            <a href="#">Privacy Policy</a>
            <span className={styles.divider}>|</span>
            <a href="#">Terms of Service</a>
            <span className={styles.divider}>|</span>
            <a href="#">Cookies Settings</a>
            <a href="#" className={styles.certificationLink}>
              <FaShieldAlt /> SSL Certified
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 