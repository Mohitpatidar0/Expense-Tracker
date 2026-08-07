const User = require("../models/User");

exports.setMonthlyGoals = async (req, res) => {
    
  try {
    const userId = req.user.id;
    const { monthlyIncomeGoal, monthlyExpenseLimit } = req.body;

    if ((monthlyIncomeGoal !== undefined && monthlyIncomeGoal < 0) ||
        (monthlyExpenseLimit !== undefined && monthlyExpenseLimit < 0))
      return res.status(400).json({ message: "Values cannot be negative" });

    const user = await User.findByIdAndUpdate(
      userId,
      {
        ...(monthlyIncomeGoal !== undefined && { monthlyIncomeGoal }),
        ...(monthlyExpenseLimit !== undefined && { monthlyExpenseLimit }),
      },
      { new: true }
    );

    res.status(200).json({
      message: "Monthly goals updated successfully",
      monthlyIncomeGoal: user.monthlyIncomeGoal,
      monthlyExpenseLimit: user.monthlyExpenseLimit,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
