const express = require("express");
const { setMonthlyGoals } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.put("/monthly-goals", protect, setMonthlyGoals );


module.exports = router;