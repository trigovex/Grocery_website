// src/components/routes/routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';
import Categories from '../pages/Categories/Categories';
import Deals from '../pages/Deals/Deals';
import Cart from '../pages/Cart/Cart';
import Wishlist from '../pages/Wishlist/Wishlist';
import Alerts from '../pages/Alerts/Alerts';
import Account from '../pages/Account/Account';
import Organic from '../pages/Categories/Organic';
import Orders from '../pages/Orders/Orders';
import FreshProduce from '../pages/Categories/FreshProduce';
import Dairy from '../pages/Categories/Dairy';
import Meat from '../pages/Categories/Meat';
import Bakery from '../pages/Categories/Bakery';
import OrderDetails from '../pages/Orders/Orderdetails';
import ProductDetails from '../pages/Products/Productdetails/ProductDetails'
import Payment from '../pages/Payments/Payment'; // Ensure this import is correct
import CardPayment from '../pages/Payments/CardPayment';
import NetBanking from '../pages/Payments/NetBanking';
import OrderSuccess from '../pages/Payments/OrderSuccess';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/*<Route path="categories" element={<Categories />} />*/}
          <Route path="deals" element={<Deals />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetails/>} /> {/* Correct route for OrderDetails */}
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="payment" element={<Payment />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="account" element={<Account />} />
          <Route path="categories/organic" element={<Organic />} />
          <Route path="categories/fresh-produce" element={<FreshProduce />} />
          <Route path="categories/dairy" element={<Dairy />} />
          <Route path="categories/meat" element={<Meat />} />
          <Route path="categories/bakery" element={<Bakery />} />
          <Route path="payment/card" element={<CardPayment />} />
          <Route path="payment/netbanking" element={<NetBanking />} />
          <Route path="payment/success" element={<OrderSuccess />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;