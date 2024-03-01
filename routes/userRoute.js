import express from "express";

import { login, register } from "../controllers/userController.js";
import { requireSignIn } from "../middleWare/authMiddlewares.js";

const Router = express.Router();

Router.post("/register", register);

// login
Router.post("/login", login);

Router.get("/test", requireSignIn);

export default Router;
