import React, { createContext, useContext, useReducer } from 'react';

const PaymentContext = createContext();

const paymentReducer = (state, action) => {
  switch (action.type) {
    case 'START_PAYMENT':
      return { ...state, loading: true, error: null };
    case 'PAYMENT_SUCCESS':
      return { ...state, loading: false, orderDetails: action.payload };
    case 'PAYMENT_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PaymentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paymentReducer, {
    loading: false,
    error: null,
    orderDetails: null
  });

  return (
    <PaymentContext.Provider value={{ state, dispatch }}>
      {children}
    </PaymentContext.Provider>
  ); };