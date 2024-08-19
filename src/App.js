import "./App.css";
import Balance from "./components/Balance";
import { TransactionProvider } from "./store/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <div className="bg-slate-300 h-screen">
        <Balance />
      </div>
    </TransactionProvider>
  );
}

export default App;
