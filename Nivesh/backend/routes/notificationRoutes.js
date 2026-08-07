const express = require("express");
const {
  monthlyExpenseNotification,
  monthlyIncomeNotification
} = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/monthly-income", protect, monthlyIncomeNotification);
router.get("/monthly-expense", protect, monthlyExpenseNotification);



module.exports = router;