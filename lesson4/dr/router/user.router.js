const router = require('express').Router();

const userController = require('../controllers/user.controller')
const { isEmailExist, isUserByIdExist} = require("../middlewares/user.middlewares");


router.get('/all', userController.getAllUsers)

router.get('/:user_id', isUserByIdExist, userController.getUserById)

router.post('/', isEmailExist, userController.createUser)

router.delete('/:user_id', isUserByIdExist, userController.deleteUser)

router.patch('/:user_id', isUserByIdExist, userController.updateUser)

module.exports = router;


// const users = require('../dataBase/users')
// router.get('/', userController.deleteUser)
