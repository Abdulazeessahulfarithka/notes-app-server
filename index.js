import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js ";
dotenv.config();
const app = express();
/// database connectiom

connectDB();

const PORT = process.env.PORT;
console.log(PORT);
//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

///routes
app.use("/api/user", userRoute);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
