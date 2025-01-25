const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  techStackId: {type: Number, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true},
  duration: { type: Number, required: true },
  sampleInput: { type: String, required: true },
  sampleOutput: { type: String,required: true },
  createdDate: { type: String, required: true   },
//   status: { type: String, enum: ["active", "inactive"], default: "active" }

});

const Problem = mongoose.model("Problem", problemSchema);
module.exports = Problem;

