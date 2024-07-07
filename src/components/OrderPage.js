import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const OrderPage = () => {
  const { state } = useLocation();
  const { item } = state;
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleOrder = () => {
    const orderDetails = {
      item,
      quantity,
      instructions,
    };
    dispatch({ type: 'SET_ORDER_DETAILS', payload: orderDetails });
    navigate('/payment');
  };

  return (
    <div style={styles.orderPage}>
      <div style={styles.card}>
        <img
          src={item.item_pic} // Replace with the image URL of the item
          alt={item.name}
          style={styles.image}
        />
        <div style={styles.details}>
          <h1>Order {item.item}</h1>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={styles.input}
          />
          <textarea
            maxLength="200"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Add instructions (max 200 characters)"
            style={styles.textarea}
          />
          <button onClick={handleOrder} style={styles.button}>Order Food</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  orderPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  details: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  },
  '@media (max-width: 768px)': {
    card: {
      padding: '15px',
    },
    input: {
      padding: '8px',
      fontSize: '14px',
    },
    textarea: {
      padding: '8px',
      fontSize: '14px',
    },
    button: {
      padding: '8px',
      fontSize: '14px',
    },
  },
  '@media (max-width: 480px)': {
    card: {
      padding: '10px',
    },
    input: {
      padding: '6px',
      fontSize: '12px',
    },
    textarea: {
      padding: '6px',
      fontSize: '12px',
    },
    button: {
      padding: '6px',
      fontSize: '12px',
    },
  },
};

export default OrderPage;
