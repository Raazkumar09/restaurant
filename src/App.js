import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import OrderPage from './components/OrderPage';
import PaymentPage from './components/PaymentPage';
import NotificationPage from './components/NotificationPage';
import './style.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/notification" element={<NotificationPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
