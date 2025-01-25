const Problem = require('../models/problem');

exports.addProblem = async (problemData) => {
  const problem = new Problem(problemData);
  return await problem.save();
};

exports.update = async (problemData, problemId) => {
  return await Problem.findByIdAndUpdate(
    problemId,
    { $set: problemData },
    { new: true, runValidators: true }
  );
};

exports.get = async (id) => {
  return await Problem.findById(id);
};

exports.delete = async (id) => {
  return await Problem.findByIdAndDelete(id);
};

exports.getAll = async () => {
  return await Problem.find();
};