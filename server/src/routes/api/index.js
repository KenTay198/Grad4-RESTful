import express from "express";
import ping from "./pingRoutes.js";
import users from "./usersRoutes.js";
import auth from "./authRoutes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API/V1",
  });
});



router.use('/ping', ping);
router.use('/auth', auth);
router.use('/users', users);


export default router;
