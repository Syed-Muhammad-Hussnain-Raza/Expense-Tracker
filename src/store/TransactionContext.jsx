import React, { createContext, useContext, useState } from "react";

// Create a context
const TransactionContext = createContext();

// Create a custom hook
export const useTransaction = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [data, setData] = useState([]);

  const onIncome = (amount) => {
    setIncome((prevIncome) => prevIncome + amount);
    setBalance((prevBalance) => prevBalance + amount);
  };

  const onExpense = (amount) => {
    setExpense((prevExpense) => prevExpense + amount);
    setBalance((prevBalance) => prevBalance - amount);
  };

  const addTransaction = (transaction) => {
    setData((prevData) => [...prevData, transaction]);
  };

  return (
    <TransactionContext.Provider
      value={{
        balance,
        income,
        expense,
        onIncome,
        onExpense,
        data,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
