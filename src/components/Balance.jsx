const Balance = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl mt-16">
        Balance: <span className="font-bold">{10000}</span>
        <div className="flex flex-row space-x-8 mt-5 text-white">
          <p className="bg-green-800 p-2 rounded-xl">
            Income: <span className="text-white font-bold">1000 </span>
          </p>
          <p className="bg-red-800 p-2 rounded-xl">
            Expense: <span className="text-white font-bold">1000 </span>
          </p>
        </div>
      </p>
    </div>
  );
};

export default Balance;
