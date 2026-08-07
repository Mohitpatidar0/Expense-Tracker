import React, { useState, useContext, useEffect } from "react";
import Input from "../Inputs/Input";
import { UserContext } from "../../context/UserContext";

const SaveGoalsForm = ({ onSaveGoals }) => {
  const { user } = useContext(UserContext);

  const [goals, setGoals] = useState({
    monthlyIncomeGoal: "",
    monthlyExpenseLimit: "",
  });

  useEffect(() => {
    if (user) {
      setGoals({
        monthlyIncomeGoal: user.monthlyIncomeGoal || "",
        monthlyExpenseLimit: user.monthlyExpenseLimit || "",
      });
    }
  }, [user]);

  const handleChange = (key, value) => setGoals({ ...goals, [key]: value });

  return (
    <div
      className="max-w-md mx-auto rounded-lg p-6 shadow-md"
      style={{
        backgroundColor: "#fefefe",
        border: "1px solid #ddd",
        // boxShadow: "0 4px 12px rgba(135,92,245,0.1)", // replaced #364153
      }}
    >
      <h2
        className="text-2xl font-semibold mb-6 text-center"
        style={{ color: "#875cf5" }}
      >
        Set Your Monthly Goals
      </h2>

      <Input
        value={goals.monthlyIncomeGoal}
        onChange={({ target }) => handleChange("monthlyIncomeGoal", target.value)}
        label="Monthly Income Goal"
        placeholder="Enter your monthly income goal"
        type="number"
        className="mb-4"
        style={{ backgroundColor: "#eee7fe", border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}
      />

      <Input
        value={goals.monthlyExpenseLimit}
        onChange={({ target }) => handleChange("monthlyExpenseLimit", target.value)}
        label="Monthly Expense Limit"
        placeholder="Enter your monthly expense limit"
        type="number"
        className="mb-6"
        style={{ backgroundColor: "#eee7fe", border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}
      />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => onSaveGoals(goals)}
          className="text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          style={{ backgroundColor: "#875cf5" }}
        >
          Save Goals
        </button>
      </div>
    </div>
  );
};

export default SaveGoalsForm;
