const { User } = require('../dataBase')
const ErrorHandler = require('../errors/ErrorHandler')

module.exports = {
    isEmailExist: async (req, res, next) => {
        try {
            const { email = '' } = req.body
            const userByEmail = await User.findOne( { email: email.trim() } )

            if (userByEmail) {
                throw new ErrorHandler(409, 'email is already exist dummy');
            }
            next()
        } catch (e) {
            next(e);
        }
    },

    isUserByIdExist: async (req, res, next) => {
        try {
            const { user_id } = req.params

            const user = await User.findById(user_id);


            if (!user) {
                throw new ErrorHandler(404, 'User not found Dummy')
            }

            req.user = user;
            console.log('______middleware-works_______')
            console.log(`req.user = ${req.user}`);
            console.log('______middleware-works_______')

            next()
        } catch (e) {
            next(e);
        }
    }
};

