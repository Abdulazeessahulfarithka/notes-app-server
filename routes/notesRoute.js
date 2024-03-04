import express from "express";

import notes from "../controllers/notesController.js";

const Router = express.Router();

Router.post("/notes", notes);
Router.get("/notes", notes);

export default Router;
