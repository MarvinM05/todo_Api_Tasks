const { Router } = require('express')
const { createUser, getUserTasks } = require('../controllers/users.controllers')


const router = Router()

router.post('/api/v1/users', createUser)

router.get("/api/v1/users/:id", getUserTasks);

module.exports = router