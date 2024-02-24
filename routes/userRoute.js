import express from "express";

import { login, register } from "../controllers/userController.js";

const Router = express.Router();

Router.post("/register", register);

// login
Router.post("/login",login);

export default Router;
