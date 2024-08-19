import React, { createContext } from "react";

// Creating a Context
const TransactionContext = createContext();

// Initial state
const initialState = {
  balance: 0,
  income: 0,
  expense: 0,
  transactions: [],
};

// Reducer function
const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        income: state.income + action.payload.amount,
        balance: state.balance + action.payload.amount,
        transactions: [action.payload, ...state.transactions],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expense: state.expense + action.payload.amount,
        balance: state.balance - action.payload.amount,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

// Transaction Provider
const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};
