import { useState, useEffect } from 'react';
import styles from './Section.module.css';
import { FaTruck, FaLeaf, FaClock, FaShieldAlt } from 'react-icons/fa';

const Section = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
      title: "Fresh Organic Vegetables",
      subtitle: "Up to 30% Off on Organic Products"
    },
    {
      image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499",
      title: "Fresh Fruits Collection",
      subtitle: "Free Delivery on Orders Over $50"
    },
    {
      image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca",
      title: "Weekly Fresh Deals",
      subtitle: "Save Big on Fresh Produce"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      {/* Hero Slider Section */}
      <section className={styles.heroSlider}>
        <div className={styles.sliderWrapper}>
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.slideContent}>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button className={styles.shopButton}>Shop Now</button>
              </div>
            </div>
          ))}
          <div className={styles.sliderDots}>
            {sliderData.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <FaTruck className={styles.featureIcon} />
          <div className={styles.featureText}>
            <h3>Free Delivery</h3>
            <p>On orders over $50</p>
          </div>
        </div>
        <div className={styles.featureCard}>
          <FaLeaf className={styles.featureIcon} />
          <div className={styles.featureText}>
            <h3>Always Fresh</h3>
            <p>100% Organic foods</p>
          </div>
        </div>
        <div className={styles.featureCard}>
          <FaClock className={styles.featureIcon} />
          <div className={styles.featureText}>
            <h3>Quick Delivery</h3>
            <p>Within 24 hours</p>
          </div>
        </div>
        <div className={styles.featureCard}>
          <FaShieldAlt className={styles.featureIcon} />
          <div className={styles.featureText}>
            <h3>Secure Payment</h3>
            <p>100% secure checkout</p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Featured Categories</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
              <p>{category.items} items</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.products}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* Quick Picks Section */}
      <section className={styles.quickPicks}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Grocery Quick Picks</h2>
          <button className={styles.viewAll}>View All</button>
        </div>
        <div className={styles.quickPicksGrid}>
          {quickPicks.map((item, index) => (
            <div key={index} className={styles.quickPickCard}>
              <div className={styles.quickPickImage}>
                <img src={item.image} alt={item.name} />
                {item.tag && <span className={styles.tag}>{item.tag}</span>}
              </div>
              <div className={styles.quickPickInfo}>
                <h3>{item.name}</h3>
                <p>{item.weight}</p>
                <div className={styles.quickPickPrice}>
                  <span className={styles.price}>${item.price}</span>
                  <button className={styles.addButton}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Deals Section */}
      <section className={styles.bestDeals}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Best Deals On Grocery</h2>
          <div className={styles.timer}>
            Ends in: 23:59:59
          </div>
        </div>
        <div className={styles.dealsGrid}>
          {bestDeals.map((deal, index) => (
            <div key={index} className={styles.dealCard}>
              <div className={styles.dealBadge}>Save {deal.savePercentage}%</div>
              <div className={styles.dealImage}>
                <img src={deal.image} alt={deal.name} />
              </div>
              <div className={styles.dealInfo}>
                <span className={styles.dealCategory}>{deal.category}</span>
                <h3>{deal.name}</h3>
                <div className={styles.dealPricing}>
                  <div className={styles.priceBlock}>
                    <span className={styles.currentPrice}>${deal.currentPrice}</span>
                    <span className={styles.oldPrice}>${deal.oldPrice}</span>
                  </div>
                  <div className={styles.stockInfo}>
                    <div className={styles.stockBar}>
                      <div 
                        className={styles.stockProgress} 
                        style={{ width: `${deal.stockLeft}%` }}
                      ></div>
                    </div>
                    <span>{deal.stockLeft}% left</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Categories Section */}
      <section className={styles.trendingCategories}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Trending Categories</h2>
          <button className={styles.viewAll}>View All</button>
        </div>
        <div className={styles.trendingGrid}>
          {trendingCategories.map((category, index) => (
            <div key={index} className={styles.trendingCard}>
              <div className={styles.trendingImageWrap}>
                <img src={category.image} alt={category.name} />
              </div>
              <div className={styles.trendingInfo}>
                <h3>{category.name}</h3>
                <p>{category.itemCount} Products</p>
                <span className={styles.trendingBadge}>
                  {category.trending ? '🔥 Trending' : 'Popular'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

// Sample data
const categories = [
  {
    name: "Fresh Fruits",
    items: 45,
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b"
  },
  {
    name: "Vegetables",
    items: 58,
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c"
  },
  {
    name: "Meat & Fish",
    items: 35,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f"
  },
  {
    name: "Dairy & Eggs",
    items: 25,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da"
  },
  {
    name: "Bakery",
    items: 30,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
  },
  {
    name: "Beverages",
    items: 40,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3"
  },
  {
    name: "Organic Food",
    items: 42,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e"
  },
  {
    name: "Snacks",
    items: 50,
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087"
  }
];

const products = [
  {
    name: "Organic Bananas",
    category: "Fruits",
    price: 4.99,
    oldPrice: 6.99,
    discount: 28,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
    rating: 4.5
  },
  {
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 2.99,
    oldPrice: 3.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1546750687-5f6c25c00b43",
    rating: 4.3
  },
  {
    name: "Organic Chicken",
    category: "Meat",
    price: 12.99,
    oldPrice: 15.99,
    discount: 18,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
    rating: 4.7
  },
  {
    name: "Fresh Milk",
    category: "Dairy",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
    rating: 4.8
  },
  {
    name: "Whole Grain Bread",
    category: "Bakery",
    price: 4.29,
    oldPrice: 5.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    rating: 4.6
  },
  {
    name: "Organic Eggs",
    category: "Dairy",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f",
    rating: 4.9
  },
  {
    name: "Fresh Avocados",
    category: "Fruits",
    price: 6.99,
    oldPrice: 8.99,
    discount: 22,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    rating: 4.4
  },
  {
    name: "Bell Peppers Mix",
    category: "Vegetables",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83",
    rating: 4.2
  }
];

// Update the product card JSX to include ratings
const ProductCard = ({ product }) => (
  <div className={styles.productCard}>
    <div className={styles.productImage}>
      <img src={product.image} alt={product.name} />
      {product.discount && (
        <span className={styles.discount}>-{product.discount}%</span>
      )}
      <button className={styles.addToCart}>Add to Cart</button>
    </div>
    <div className={styles.productInfo}>
      <span className={styles.category}>{product.category}</span>
      <h3>{product.name}</h3>
      <div className={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={`${styles.star} ${index < Math.floor(product.rating) ? styles.filled : ''}`}
          >★</span>
        ))}
        <span className={styles.ratingNumber}>({product.rating})</span>
      </div>
      <div className={styles.pricing}>
        <span className={styles.price}>${product.price}</span>
        {product.oldPrice && (
          <span className={styles.oldPrice}>${product.oldPrice}</span>
        )}
      </div>
    </div>
  </div>
);

const quickPicks = [
  {
    name: "Fresh Strawberries",
    weight: "500g",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1518635017480-d9a4666cdc14",
    tag: "Fresh"
  },
  {
    name: "Organic Carrots",
    weight: "1kg",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37",
    tag: "Organic"
  },
  {
    name: "Greek Yogurt",
    weight: "400g",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    tag: "Daily"
  },
  {
    name: "Whole Grain Bread",
    weight: "700g",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    tag: "Fresh"
  },
  {
    name: "Mixed Nuts",
    weight: "250g",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1525278070609-779c7adb7b71",
    tag: "Healthy"
  },
  {
    name: "Fresh Milk",
    weight: "1L",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
    tag: "Daily"
  }
];

const bestDeals = [
  {
    name: "Organic Honey",
    category: "Organic",
    currentPrice: 8.99,
    oldPrice: 12.99,
    savePercentage: 30,
    stockLeft: 65,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38"
  },
  {
    name: "Premium Coffee Beans",
    category: "Beverages",
    currentPrice: 15.99,
    oldPrice: 24.99,
    savePercentage: 36,
    stockLeft: 45,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e"
  },
  {
    name: "Extra Virgin Olive Oil",
    category: "Cooking",
    currentPrice: 19.99,
    oldPrice: 29.99,
    savePercentage: 33,
    stockLeft: 75,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5"
  },
  {
    name: "Mixed Dry Fruits",
    category: "Healthy",
    currentPrice: 12.99,
    oldPrice: 18.99,
    savePercentage: 32,
    stockLeft: 25,
    image: "https://images.unsplash.com/photo-1596073419667-9d77d59f033f"
  }
];

const trendingCategories = [
  {
    name: "Organic Vegetables",
    itemCount: 86,
    trending: true,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
  },
  {
    name: "Fresh Fruits",
    itemCount: 123,
    trending: true,
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b"
  },
  {
    name: "Dairy Products",
    itemCount: 45,
    trending: false,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da"
  },
  {
    name: "Healthy Snacks",
    itemCount: 92,
    trending: true,
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087"
  },
  {
    name: "Beverages",
    itemCount: 67,
    trending: false,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3"
  },
  {
    name: "Baked Goods",
    itemCount: 54,
    trending: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
  }
];

export default Section; 