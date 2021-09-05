// const users = require('../dataBase/users);
const ErrorHandler = require('../errors/ErrorHandler')
const { User } = require('../dataBase')

module.exports = {

    getUserById: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            const user = await User.findById(user_id);
            res.json(users[user_id]);

            if (!user) {
                throw new ErrorHandler(404, 'User not found')
            }

            res.json(user);
            // throw new errorHandler(404, 'test this is error')
            // throw new Error('TEST')

            // }

        } catch (e) {
            // res.status(400).json(e.message)npm
            next(e);
        }

    },

    getAllUsers: (req, res) => {
        try {
            const { user_id } = req.params;
            const { query } = req;

            console.log(query);

            res.json(users[user_id]);
        } catch (e) {
            res.status(400).json(e.message)

        }

    },

    deleteUserById: (req, res) => {
        try {
            const { user_id } = req.params;
            const { query } = req;

            console.log(query);

            res.json(users[user_id]);
        } catch (e) {
            res.status(400).json(e.message)
        }

    },

    createUser: async (req, res, next) => {
        try {
            const user = await User.create(req.body);

            res.status(201).json(users);
        } catch (e) {
            next(e)
        }

    }

};
