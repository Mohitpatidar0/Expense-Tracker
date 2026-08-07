import toast from "react-hot-toast";
import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

export const saveGoals = async ({ monthlyIncomeGoal, monthlyExpenseLimit }, updateUser) => {
  const income = Number(monthlyIncomeGoal);
  const expenseLimit = Number(monthlyExpenseLimit);

  if (income < 0) return toast.error("Income goal cannot be negative.");
  if (expenseLimit < 0) return toast.error("Expense limit cannot be negative.");

  try {
    const { data } = await axiosInstance.put(API_PATHS.USER.SET_MONTHLY_GOALS, {
      monthlyIncomeGoal: income,
      monthlyExpenseLimit: expenseLimit,
    });

    toast.success(data?.message || "Goals saved successfully");

    // Update frontend context so UI updates immediately
    updateUser?.((prev) => ({
      ...prev,
      monthlyIncomeGoal: income,
      monthlyExpenseLimit: expenseLimit,
    }));

  } catch (err) {
    toast.error(err.response?.data?.message || "Failed to save goals");
    console.error("Error saving goals:", err);
  }
};
