const router = require('express').Router();

const users = require("../dataBase/users.js don\'t need it");

router.post('/', (req, res) => {
    const { name, password } = req.body;

    const user = users.find(user => user.name === name);

    if (!user) {
        res.status(404).end('User not found');
        return;
    }

    res.json(user);
})

module.exports = router;