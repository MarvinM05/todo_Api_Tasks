const Tasks = require('../models/tasks.model')

const createTask = async (req, res) => {
  try {
    
    const { title, description, userId, categoryId } = req.body
    
    if (typeof(title) !== "string" || !title) {
      return res.status(400).json({
        error: "invalid title",
        message: "title cannot be null or diferrent to str",
      });
    }
    if (typeof(description) !== "string" || !description) {
      return res.status(400).json({
        error: "invalid description",
        message: "description cannot be null or diferrent to str",
      });
    }
    if (typeof(userId) !== 'number' || !userId) {
      return res.status(400).json({
        error: "invalid userId",
        message: "userId cannot be null or diferrent to number",
      });
    }
    if (typeof(categoryId) !== 'number' || !categoryId) {
      return res.status(400).json({
        error: "invalid categoryID",
        message: "categoryID cannot be null or diferrent to number",
      });
    }

    await Tasks.create({ title, description, userId, categoryId })
    res.status(201).send()

  } catch (error) {
    res.status(400).json(error)
  }
}

const updateStatusTask = async (req, res) => {
  try {
    
    const { id } = req.params
    const { title, description, completed } = req.body
    await Tasks.update({ title, description, completed }, {
      where: { id }
      
    })
    res.status(204).send()
    
  } catch (error) {
    res.status(400).json(error)
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Tasks.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createTask,
  updateStatusTask, deleteTask
}