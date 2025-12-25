const express = require("express");
const router = express.Router();
const {
  verifyToken,
  requireRole,
} = require("../middleware/authMiddleware");

router.get(
  "/dashboard",
  verifyToken,
  requireRole("instructor"),
  (req, res) => {
    res.json({
      message: "Welcome Instructor Dashboard",
      user: req.user,
    });
  }
);

module.exports = router;
