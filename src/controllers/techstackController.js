const techStackService = require("../services/techStackService");

exports.techstack = async (req, res) => {
    // console.log("req.body",req.body)
  try {
    const tech = await techStackService.addTechStack(req.body);
    res.status(201).json({ success: true, data: tech });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// To update
exports.updateTechStack = async (req, res) => {
  try{
    const id = req.params.id;

    // if(req.user.id !== id) {
    //   return res.status(403).json({message: "User is not authenticated"});
    // }

    const udpateTechStackRecord = await techStackService.update(req.body, id);
    if (!udpateTechStackRecord) {
      return res.status(404).json({ message: 'Techstack not found.' });
    }
    res.status(200).json({ message: 'TechStack updated successfully.', data: udpateTechStackRecord });

  } catch(e){
    res.status(401).json({success: false, message: e.message});
  }
};

//To delete

exports.deleteTechStack = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteStack = await techStackService.delete(id); 

    if (!deleteStack) {
      return res.status(404).json({ success: false, message: 'TechStack not found.' });
    }

    res.status(200).json({ success: true, message: 'TechStack deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//read the Techstack
exports.readTechstack = async (req, res) => {
  try {
    const { id } = req.params; 

    const readTech = await techStackService.get(id);
    if (!readTech) {
      return res.status(404).json({ message: 'Techstack not found.' });
    }

    res.status(200).json({ message: 'Techstack retrieved successfully.', data: readTech });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
// read all records
exports.readAllTechstack = async (req, res) => {
  console.log('Received request to /get')
  try {
    const allTech = await techStackService.getAll();
    res.status(200).json({ message: 'All Techstack retrieved successfully.', data: allTech });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};