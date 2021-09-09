const { User } = require('../dataBase');
const ErrorHandler = require('../errors/ErrorHandler')
const userValidators = require('../validators/user.validator')

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

            const user = await User.findById(user_id).select('+password');


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
    },

    isValidCreateUserValidator: (req, res, next) => {
        try {
            console.log('___body prevalidator___')
            console.log(req.body)
            console.log('___body prevalidator___')
            const { error, value } = userValidators.createUserValidator.validate(req.body)

            if (error) {
                throw new ErrorHandler(400, error.details[0].message)
            }

            console.log('___value___')
            console.log(value)
            console.log('___value___')

            req.body = value;

            next()
        } catch (e) {
            next(e)
        }
    },

    isValidUpdateUserValidator: (req, res, next) => {
        try {
            const { error, value } = userValidators.updateUserValidator.validate(req.body)

            if (error) {
                throw new ErrorHandler(400, error.details[0].message)
            }

            req.body = value;

            next()
        } catch (e) {
            next(e)
        }
    },

    isValidUserId: (req, res, next) => {
        try {
            console.log(`validator start work`);
            console.log(req.params);
            const {error, value} = userValidators.userByIdValidator.validate(req.params)

            if (error) {
                throw new ErrorHandler(400, error.details[0].message)
            }

            req.params = value;

            next()
        } catch (e) {
            next(e)
        }
    }

}

