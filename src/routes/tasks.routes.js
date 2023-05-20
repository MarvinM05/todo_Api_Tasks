const { Router } = require('express')
const { createTask, updateStatusTask, deleteTask } = require('../controllers/tasks.controllers')


const router = Router()

router.post('/api/v1/tasks', createTask)

router.put('/api/v1/tasks/:id', updateStatusTask)

router.delete('/api/v1/tasks/:id', deleteTask)

module.exports = router