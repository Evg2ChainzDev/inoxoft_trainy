const users = require("../dataBase/users");
const userController = require("../controllers/user.controller");

const router = require('express').Router();

router.get('/:user_id', userController.getUserById);

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);


module.exports = router;