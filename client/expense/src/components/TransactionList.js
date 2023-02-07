import React, { useContext, useEffect } from "react";
import { context } from "../context/contextapi";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { getTransactions, transactions } = useContext(context);

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => {
          return <Transaction item={item} key={item._id} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
