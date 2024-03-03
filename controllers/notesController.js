import notesModel from "../models/notesModel.js";

const notes = async (req, res) => {
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

    const user = await new notesModel({
      Title,
      Description,
      Tag,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in registration",
    });
  }
};

export default notes;
