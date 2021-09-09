const router = require('express').Router();

const userController = require('../controllers/user.controller')
const { isValidCreateUserValidator, isValidUpdateUserValidator, isValidUserId,
    isEmailExist, isUserByIdExist} = require("../middlewares/user.middlewares");


router.get('/all', userController.getAllUsers)

router.get('/:user_id', isValidUserId, isUserByIdExist, userController.getUserById)

router.post('/', isValidCreateUserValidator, isEmailExist, userController.createUser)

router.delete('/:user_id', isValidUserId, isUserByIdExist, userController.deleteUser)

router.patch('/:user_id', isValidUpdateUserValidator, isUserByIdExist, userController.updateUser)

module.exports = router;


// const users = require('../dataBase/users')
// router.get('/', userController.deleteUser)
