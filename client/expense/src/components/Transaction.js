import React, { useContext } from "react";
import { context } from "../context/contextapi";
import numberWithCommas from "../util/format";

const Transaction = ({ item }) => {
  const { deleteTransaction } = useContext(context);
  const sign = item.amount < 0 ? "-" : "+";

  return (
    <li className={item.amount < 0 ? "minus" : "plus"}>
      {item.text}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(item.amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(item._id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
