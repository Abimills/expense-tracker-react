import React, { useContext } from "react";
import { context } from "../context/contextapi";
import numberWithCommas from "../util/format";
const Balance = () => {
  const { transactions } = useContext(context);
  const amounts = transactions.map((item) => +item.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${numberWithCommas(total)}</h1>
    </div>
  );
};

export default Balance;
