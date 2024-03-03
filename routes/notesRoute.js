// Importing express module using ES6 module syntax
import express from "express";

// Importing the notesController module from the specified path
import notes from "../controllers/notesController.js";

// Creating a new router instance
const Router = express.Router();

// Defining a POST route for '/notes' and associating it with the 'notes' controller
Router.post("/notes", notes);

// Exporting the router instance
export default Router;
