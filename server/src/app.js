import express from "express";
import morgan from "morgan";
import connect from "./db/connect.js";
import api from "#src/routes/api/index";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

connect();

app.get("/", (req, res) => {
  res.json({ message: "yeah 👩‍🎤" });
});

app.use("/api/v1", api);

export default app;
