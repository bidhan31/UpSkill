const express = require("express");
const router = express.Router();
const {
  verifyToken,
  requireRole,
} = require("../middleware/authMiddleware");

router.get(
  "/dashboard",
  verifyToken,
  requireRole("student"),
  (req, res) => {
    res.json({
      message: "Welcome Student Dashboard",
      user: req.user,
    });
  }
);

module.exports = router;
