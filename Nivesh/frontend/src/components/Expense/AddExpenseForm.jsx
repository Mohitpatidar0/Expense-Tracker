import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setExpense({ ...expense, [key]: value });

  return (
    <div
      className="max-w-md mx-auto rounded-lg p-6 shadow-md"
      style={{
        backgroundColor: "#fefefe",
        border: "1px solid #ddd",
        boxShadow: "0 4px 12px rgba(135,92,245,0.1)", // soft theme shadow
      }}
    >
      <h2
        className="text-2xl font-semibold mb-6 text-center"
        style={{ color: "#875cf5" }}
      >
        Add Expense
      </h2>

      {/* Emoji Picker */}
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      {/* Inputs */}
      <Input
        value={expense.category}
        onChange={({ target }) => handleChange("category", target.value)}
        label="Category"
        placeholder="Rent, Groceries, etc"
        type="text"
        className="mb-4"
        style={{ backgroundColor: "#eee7fe", border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}
      />

      <Input
        value={expense.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        type="number"
        className="mb-4"
        style={{ backgroundColor: "#eee7fe", border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}
      />

      <Input
        value={expense.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        type="date"
        className="mb-6"
        style={{ backgroundColor: "#eee7fe", border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}
      />

      {/* Add Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onAddExpense(expense)}
          className="text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          style={{ backgroundColor: "#875cf5" }}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
