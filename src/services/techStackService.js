const Techstack = require("../models/techstack");

exports.addTechStack = async (techData) => {
  const newTechstack = new Techstack(techData);
  return await newTechstack.save();
};

exports.update = async (techData, techId) => {
  return await Techstack.findByIdAndUpdate(
    techId,
    { $set: techData }, 
    { new: true, runValidators: true } 
  );
};


exports.delete = async (id) => {
  return await Techstack.findByIdAndDelete(id); 
};

exports.get = async (id) => {
  return await Techstack.findById(id);
};

exports.getAll = async () => {
  return await Techstack.find();
};