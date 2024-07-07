import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  menuItems: [],
  selectedItems: [],
  orderDetails: {},
  tokenID: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MENU_ITEMS':
      return { ...state, menuItems: action.payload };
    case 'ADD_TO_ORDER':
      return { ...state, selectedItems: [...state.selectedItems, action.payload] };
    case 'SET_ORDER_DETAILS':
      return { ...state, orderDetails: action.payload };
    case 'SET_TOKEN_ID':
      return { ...state, tokenID: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
