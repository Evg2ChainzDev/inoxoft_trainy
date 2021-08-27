const users = require('../dataBase/users');

module.exports = {
    getUserById: (req, res) => {
        const { user_id } = req.params;
        const { query } = req;

        console.log(query);

        // const userByEmail = getUserByEmail(email);

        res.json(users[user_id]);
    },

    getAllUsers: (req, res) => {
        const { user_id } = req.params;
        const { query } = req;

        console.log(query);

        res.json(users[user_id]);
    },

    deleteUserById: (req, res) => {
        const { user_id } = req.params;
        const { query } = req;

        console.log(query);

        res.json(users[user_id]);
    },

    createUser: (req, res) => {
        console.log('*****************************');
        console.log(req.body);
        console.log('*****************************');

        res.json(users);
    },
};
