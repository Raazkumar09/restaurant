import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const MenuPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://49.207.7.220:8080/api/table-data?tableName=restaurant&schemaName=mudumbai')
      .then(response => {
        dispatch({ type: 'SET_MENU_ITEMS', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });
  }, [dispatch]);

  const handleOrder = (item) => {
    navigate('/order', { state: { item } });
  };

  return (
    <div style={styles.menuPage}>
      <h1>Menu</h1>
      <div style={styles.menuItems}>
        {state.menuItems.map(item => (
          <div key={item.id} style={styles.menuCard}>
            <img
              src={item.item_pic} 
              alt={item.item}
              style={styles.image}
            />
            <h3>Name : {item.item}</h3>
            <h3>Price : {item.price}</h3>
            <button onClick={() => handleOrder(item)} style={styles.button}>Order Food</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  menuPage: {
    padding: '20px',
    textAlign: 'center',
  },
  menuItems: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  menuCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    width: '100%',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
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
    menuCard: {
      padding: '15px',
    },
    button: {
      padding: '8px',
      fontSize: '14px',
    },
  },
  '@media (max-width: 480px)': {
    menuCard: {
      padding: '10px',
    },
    button: {
      padding: '6px',
      fontSize: '12px',
    },
  },
};

export default MenuPage;
