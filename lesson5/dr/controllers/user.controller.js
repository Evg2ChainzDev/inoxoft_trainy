const ErrorHandler = require('../errors/ErrorHandler')
const {User} = require("../dataBase");
const passwordService = require("../services/password.service");

module.exports = {
    getUserById: (req, res, next) => {
        try {
            // const { user_id } = req.params

            // const user = await User.findById(user_id);

            res.json(req.user)
            // res.send('<div>hello </div>')
            //
            // console.log(query)
        } catch (e) {
            next(e) // operator to move parametr upper of controller
        }

    },

    getAllUsers: async (req, res, next) => {
        try {
            console.log(req.body);
            const usersAll = await User.find()
            console.log(usersAll);
            res.status(201).json(usersAll)
        } catch(e) {
            next(e)
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            console.log('----------------x-----------');
            console.log(req.user);
            const {_id} = req.user
            console.log(_id);
            console.log(`we will delete this user`);
            const userDelete = await User.findByIdAndDelete(_id)
            res.status(204).json(userDelete);
            console.log(`user deleted`);
        } catch(e) {
            next(e)
        }
    },

    updateUser: async (req, res, next) => {
        try {
            console.log('------updateUser start-------');
            console.log(req);
            console.log(req.params)
            const { user_id } = req.params;
            console.log(user_id);
            const { name, email } = req.body;
            console.log(req.body);
            console.log(name);
            console.log(email);
            if (!name || !email) {

                throw new ErrorHandler(400, 'No entriesS');
            }

            await User.findByIdAndUpdate(user_id, {
                ...req.body

            })

            res.json({
                message: 'Updated data successfully'
            });
        } catch(e) {
            next(e)
        }
    },

    // postUser: (req, res) => {
    //     try {
    //         res.json(users)
    //     } catch (e) {
    //         res.status(400).json(e.message)
    //     }
    //
    // }

    createUser: async (req, res, next) => {
        try {
            const { password } =req.body;

            const hashPassword = await passwordService.hash(password)


            const user = await User.create({...req.body, password: hashPassword});
            res.status(201).json(user)

        } catch (e) {
            next(e)
        }


    }
}
