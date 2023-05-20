const Users = require('./users.model')
const Tasks = require('./tasks.model')
const Categories = require('./categories.model')

const initModels = () => {
  Tasks.belongsTo(Users, { foreignKey: 'userId' })
  Users.hasMany(Tasks, { foreignKey: 'userId' })
  
  Tasks.belongsTo(Categories, { foreignKey: 'categoryId' })
  Categories.hasMany(Tasks, { foreignKey: 'categoryId' })
  
}

module.exports = initModels