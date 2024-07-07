import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const NotificationPage = () => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`/api/notification/${state.tokenID}`)
        .then(response => {
          // Update order status if needed
        })
        .catch(error => {
          console.error('Error checking order status:', error);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, [state.tokenID]);

  return (
    <div style={styles.notificationPage}>
      <h1>Order Status</h1>
      <p>Token ID: {state.tokenID}</p>
      {/* Display additional order status if available */}
    </div>
  );
};

const styles = {
  notificationPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  '@media (max-width: 768px)': {
    notificationPage: {
      padding: '15px',
    },
  },
  '@media (max-width: 480px)': {
    notificationPage: {
      padding: '10px',
    },
  },
};

export default NotificationPage;
