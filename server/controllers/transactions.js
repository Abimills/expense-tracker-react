const Transaction = require("../models/transaction");

// @desc Get all transactions
// @route Get /api/vi/transactions
// @access  Public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      Error: err.message,
    });
  }
};
// @desc Post a transaction
// @route Post /api/vi/transactions
// @access  Public

exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        Error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        Error: err.message,
      });
    }
  }
};
// @desc Delete a transaction
// @route Delete /api/vi/transactions/:id
// @access  Public

exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        Error: "Transaction not found",
      });
    }
    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      Error: err.message,
    });
  }
};
