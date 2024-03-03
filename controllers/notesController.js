import notesModel from "../models/notesModel.js";

const notes = async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    if (!title) {
      return res.status(400).send({ message: "title is Required" });
    }
    if (!description) {
      return res.status(400).send({ message: "description is Required" });
    }
    if (!tag) {
      return res.status(400).send({ message: "tag is Required" });
    }

    const user = await new notesModel({
      title,
      description,
      tag,
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
