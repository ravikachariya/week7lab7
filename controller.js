const SendRecip = require("./model");

// Render Controller: Render index.html with sendrecips using EJS
const renderSendRecips = async (req, res) => {
  try {
    const sendrecips = await SendRecip.find({});
    console.log (sendrecips)
    res.render("index", { sendrecips }); // Render index.ejs with sendrecips data
  } catch (error) {
    console.error("Error rendering index.html:", error);
    res.status(500).send("Internal Server Error");
  }
};

// get all SendRecips
const getSendRecips = async (req, res) => {
  try {
    const sendrecips = await SendRecip.find({});
    res.status(200).json(sendrecips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add one SendRecip
const addSendRecip = async (req, res) => {
  try {
    const { sender, recipient, content } = req.body;
    const newSendRecip = new SendRecip({ sender, recipient, content });
    await newSendRecip.save();
    res.status(201).json(newSendRecip);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

// Delete all SendRecips
const deleteAllSendRecips = async (req, res) => {
  try {
    const result = await SendRecip.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} books successfully` });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

module.exports = {
  getSendRecips,
  renderSendRecips,
  addSendRecip,
  deleteAllSendRecips,
};
