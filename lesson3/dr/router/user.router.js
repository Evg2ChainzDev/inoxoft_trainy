const router = require('express').Router();
const users = require('../dataBase/users')
const userController = require('../controllers/user.controller')

router.get('/:user_id', userController.getUserById)
router.delete('/:user_id', userController.getUserById)

router.get('/', userController.deleteUser)
router.post('/', userController.postUser)


module.exports = router