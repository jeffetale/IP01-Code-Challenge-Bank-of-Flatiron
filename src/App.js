import React, { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionSearch from "./TransactionSearch";
import TransactionTable from "./TransactionTable";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    newTransaction.id = transactions.length + 1;
    setTransactions([...transactions, newTransaction]);
  };

  const transactionsFilter = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchInput.toLowerCase())
  );

  const sortTransactions = [...transactionsFilter].sort((a, b) => 
    a.category.localeCompare(b.category)
  );

  const deleteTransaction = (id) => {
    const newTransactions = transactions.filter((transaction) => transaction.id !==id);
    setTransactions(newTransactions);
  };

  return (
    <>
      <h1>FLAT IRON BANK</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionSearch searchInput={searchInput} setSearchInput={setSearchInput} />
      <TransactionTable transactions={sortTransactions} onDeleteTransaction={deleteTransaction} />
    </>
  );
};

export default App;
