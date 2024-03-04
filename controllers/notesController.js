import notesModel from "../models/notesModel.js";

const createNote = async (req, res) => {
  try {
    const { Title, Description, Tag } = req.body;

    if (!Title) {
      return res.status(400).send({ message: "Title is Required" });
    }
    if (!Description) {
      return res.status(400).send({ message: "Description is Required" });
    }
    if (!Tag) {
      return res.status(400).send({ message: "Tag is Required" });
    }

    const note = await new notesModel({
      Title,
      Description,
      Tag,
    }).save();

    res.status(201).send({
      success: true,
      message: "Note created successfully",
      note,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in creating note",
    });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await notesModel.find();
    res.status(200).send({
      success: true,
      message: "Notes fetched successfully",
      notes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in fetching notes",
    });
  }
};

export { createNote, getNotes };
