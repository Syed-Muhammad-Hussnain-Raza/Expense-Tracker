import { useContext } from "react";
import TransactionMenu from "./TransactionMenu";
import { TransactionContext } from "../store/TransactionContext";

const Balance = () => {
  const { state } = useContext(TransactionContext);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl mt-16">
        Balance: <span className="font-bold">{state.balance}</span>
      </p>
      <div className="flex flex-row space-x-8 mt-5 text-white">
        <p className="bg-green-800 p-2 rounded-xl">
          Income: <span className="text-white font-bold">{state.income}</span>
        </p>
        <p className="bg-red-800 p-2 rounded-xl">
          Expense: <span className="text-white font-bold">{state.expense}</span>
        </p>
      </div>
      <TransactionMenu />
    </div>
  );
};

export default Balance;
