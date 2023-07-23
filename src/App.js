import React, {useEffect, useState} from "react";
import TransactionForm from "./TransactionForm";
import TransactionSearch from "./TransactionSearch";
import TransactionTable from "./TransactionTable";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    fetch('../db.json')
         .then((r) => r.json())
         .then((data) => setTransactions(transactions))
         .catch((error) => console.error('Error fetching data:', error));
  },[]);

  const addTransaction = (newTransaction) => {
    newTransaction.id = transactions.length + 1;
    setTransactions([...transactions, newTransaction]);
  };

  const transactionsFilter = transactions.filter((transaction) =>
     transaction.description.includes(searchInput)
  );
  
  return (
    <>
      <h1>FLAT IRON BANK</h1>
      <TransactionForm addTransaction={addTransaction}/>
      <TransactionSearch searchInput={searchInput} setSearchInput={setSearchInput} />
      <TransactionTable transactions={transactionsFilter}/>
    </>
  );
};

export default App;