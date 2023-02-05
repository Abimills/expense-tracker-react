import React, { useContext } from "react";
import { context } from "../context/contextapi";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(context);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => {
          return <Transaction item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
