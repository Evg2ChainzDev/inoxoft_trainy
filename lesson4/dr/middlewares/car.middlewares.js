const { Car } = require('../dataBase')
const ErrorHandler = require('../errors/ErrorHandler')

module.exports = {
    // isEmailExist: async (req, res, next) => {
    //     try {
    //         const { email = '' } = req.body
    //         const userByEmail = await User.findOne( { email: email.trim() } )
    //
    //         if (userByEmail) {
    //             throw new ErrorHandler(409, 'email is already exist dummy');
    //         }
    //         next()
    //     } catch (e) {
    //         next(e);
    //     }
    // },

    isCarByIdExist: async (req, res, next) => {
        try {
            console.log('______middleware-works_______')
            console.log(`req`)
            console.log(req)
            console.log(`req.body`)
            console.log(req.body)
            console.log(`req.params`)
            console.log(req.params)

            const { cars_id } = req.params

            const car = await Car.findById(cars_id);

            if (!car) {
                throw new ErrorHandler(404, 'Car not found Dummy')
            }

            req.car = car;

            console.log('______middleware-works_______')

            next()
        } catch (e) {
            next(e);
        }
    }
};
