import { useState } from "react";

const TransactionMenu = ({ onIncome, onExpense }) => {
  const [menu, setMenu] = useState(false);

  const toggleButton = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="mt-6 flex flex-col items-center">
        <button
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-700 mb-6"
          onClick={toggleButton}
        >
          Add Transaction
        </button>
        {menu && (
          <div>
            <div className="flex flex-col text-black gap-2">
              <input
                required
                type="number"
                placeholder="Enter Amount"
                className="p-2 border rounded-lg border-black placeholder:text-gray-700"
              />
              <input
                required
                type="text"
                placeholder="Enter Title"
                className="p-2 border rounded-lg border-black placeholder:text-gray-700"
              />
              <select className="p-2 border rounded-lg">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionMenu;
