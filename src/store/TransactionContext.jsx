import { createContext, useReducer } from "react";

const initialState = {
  income: 0,
  expense: 0,
  transactions: [],
};

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        income: state.income + action.payload.amount,
        transactions: [...state.transactions, action.payload],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expense: state.expense + action.payload.amount,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};
