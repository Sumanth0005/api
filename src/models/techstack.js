const mongoose = require("mongoose");

const techStackSchema = new mongoose.Schema({
  techname: { type: String, required: true },
  icon: { type: String, required: true },
  slug: { type: String, required: true },
});

module.exports = mongoose.model("Techstack", techStackSchema);
