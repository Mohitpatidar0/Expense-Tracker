const { Types } = require("mongoose");
const Expense = require("../models/Expense");
const Income = require("../models/Income");
const User = require("../models/User");
const { getExpenseNotification, getIncomeNotification } = require("../utils/notification");

const getMonthRange = () => {
  const now = new Date();
  return [new Date(now.getFullYear(), now.getMonth(), 1), new Date(now.getFullYear(), now.getMonth() + 1, 0)];
};

const getMonthlyTotal = async (Model, userId, start, end) => {
  const result = await Model.aggregate([
    { $match: { userId: new Types.ObjectId(String(userId)), date: { $gte: start, $lte: end } } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);
  return result[0]?.total || 0;
};

const generateNotification = (total, limit, getNotification, type) => {
  const target= type =="income" ? "goal" : "limit"
  if (!limit) return `💡 You haven't set a monthly ${type} ${target} yet.\nPlease set your monthly ${type} ${target} to start tracking.`;
  const percentage = (total / limit) * 100;
  const { emoji, msg } = getNotification(percentage);
  return `${emoji} This month’s ${type} :  ₹${total.toLocaleString()} / ₹${limit.toLocaleString()} (${percentage.toFixed(1)}%)\n${msg}`;
};

exports.monthlyExpenseNotification = async (req, res) => {
  try {
    // console.log("Expense notification requested at:", new Date().toLocaleTimeString());
    const userId = req.user.id;
    const [start, end] = getMonthRange();
    const totalExpense = await getMonthlyTotal(Expense, userId, start, end);
    const user = await User.findById(userId).select("monthlyExpenseLimit");
    const notification = generateNotification(totalExpense, user?.monthlyExpenseLimit, getExpenseNotification, "expense");
    res.status(200).json({ totalExpense , monthlyLimit: user?.monthlyExpenseLimit || 0, notification });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.monthlyIncomeNotification = async (req, res) => {
  try {
    // console.log("Income notification requested at:", new Date().toLocaleTimeString());
    const userId = req.user.id;
    const [start, end] = getMonthRange();
    const totalIncome = await getMonthlyTotal(Income, userId, start, end);
    const user = await User.findById(userId).select("monthlyIncomeGoal");
    const notification = generateNotification(totalIncome, user?.monthlyIncomeGoal, getIncomeNotification, "income");
    res.status(200).json({ totalIncome, monthlyGoal: user?.monthlyIncomeGoal || 0, notification });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
