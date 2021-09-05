const users = require("../dataBase/users.js don\'t need it");
const userController = require("../controllers/user.controller");

const router = require('express').Router();

router.get('/:user_id', userController.getUserById);

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);


module.exports = router;