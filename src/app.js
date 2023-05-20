const express = require('express')
require('dotenv').config()
const db = require('./utils/database')
const initModels = require('./models/initModels')
const userRoutes = require('./routes/users.routes')
const tasksRoutes = require('./routes/tasks.routes')


initModels()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8000

db.sync()
  .then(() => {
    console.log('Base de datos Sincronizada!')
  })
  .catch(error => console.log(error))

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente!')
})

app.use(userRoutes, tasksRoutes)


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})

