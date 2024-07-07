import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const PaymentPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    const paymentDetails = {
      orderDetails: state.orderDetails,
      totalAmount: state.orderDetails.item.price * state.orderDetails.quantity,
    };

    axios.post('/api/payment', paymentDetails)
      .then(response => {
        dispatch({ type: 'SET_TOKEN_ID', payload: response.data.tokenID });
        navigate('/notification');
      })
      .catch(error => {
        console.error('Error processing payment:', error);
      });
  };

  return (
    <div style={styles.paymentPage}>
      <h1>Payment</h1>
      <p>Total Amount: ${state.orderDetails.item.price * state.orderDetails.quantity}</p>
      <button onClick={handlePayment} style={styles.button}>Pay Now</button>
    </div>
  );
};

const styles = {
  paymentPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  },
  '@media (max-width: 768px)': {
    button: {
      padding: '8px 16px',
      fontSize: '14px',
    },
  },
  '@media (max-width: 480px)': {
    button: {
      padding: '6px 12px',
      fontSize: '12px',
    },
  },
};

export default PaymentPage;
