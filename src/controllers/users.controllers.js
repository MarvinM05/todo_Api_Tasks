const Users = require('../models/users.model')
const Tasks = require('../models/tasks.model')
const Categories = require('../models/categories.model')

const createUser = async (req, res) => {
  try {
    
    const { username, email, password } = req.body
    
    if (typeof(username) !== 'string' || !username)  {
      return res.status(400).json({
        error: 'invalid username',
        message: 'username cannot be null or diferrent to str'
      })
    }
    if (typeof(email) !== 'string' || !email)  {
      return res.status(400).json({
        error: "invalid email",
        message: "email can't be null or diferrent to str",
      });
    }
    if (typeof(password) !== 'string' || !password)  {
      return res.status(400).json({
        error: "invalid password",
        message: "password cannot be null or different to string",
      });
    }

    await Users.create({ username, email, password })
    
    res.status(201).send()

  } catch (error) {
    res.status(400).json(error)
  }
}

const getUserTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const userTasks = await Users.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
      include: {
        model: Tasks,
        attributes: ["title", "description", "completed"],
        include: {
          model: Categories,
          attributes: ['name', 'description']
        }
      },
    });

    res.json(userTasks);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createUser, 
  getUserTasks
}