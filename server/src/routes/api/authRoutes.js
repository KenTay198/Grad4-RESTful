import express from "express";

const router = express.Router();

router.get("/login", async (req, res) => {
  res.send("logged in");
});

router.get("/logout", async (req, res) => {
  res.send("logged out");
});

export default router;
