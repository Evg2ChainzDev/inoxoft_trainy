const ErrorHandler = require('../errors/ErrorHandler')
const {Car} = require("../dataBase");

module.exports = {
    getCarById: (req, res, next) => {
        try {
            // const { user_id } = req.params

            // const user = await User.findById(user_id);

            res.json(req.car)
            // res.send('<div>hello </div>')
            //
            // console.log(query)
        } catch (e) {
            next(e) // operator to move parametr upper of controller
        }

    },

    getAllCars: async (req, res, next) => {
        try {
            console.log(req.body);
            const carsAll = await Car.find()
            console.log(carsAll);
            res.status(201).json(carsAll)
        } catch(e) {
            next(e)
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            console.log('----------------x-----------');
            console.log(req.car);
            const {_id} = req.car
            console.log(_id);
            console.log(`we will delete this car`);
            const carDelete = await Car.findByIdAndDelete(_id)
            res.status(204).json(carDelete);
            console.log(`car deleted`);
        } catch(e) {
            next(e)
        }
    },

    updateCar: async (req, res, next) => {
        try {
            console.log('------updateCar start-------');
            console.log(req);
            console.log(`req.params`)
            console.log(req.params)
            const { cars_id } = req.params;
            console.log(cars_id);
            const { brand, model } = req.body;
            console.log(req.body);
            console.log(brand);
            console.log(model);
            console.log(`!brand || !model = `)
            console.log(!brand || !model);
            if (!brand || !model) {

                throw new ErrorHandler(400, 'No entriesS');
            }

            await Car.findByIdAndUpdate(cars_id, {
                ...req.body

            })

            res.json({
                message: 'Updated car data successfully'
            });
        } catch(e) {
            next(e)
        }
    },

    createCar: async (req, res, next) => {
        try {
            // console.log('+++++++++')
            console.log(req);
            const car = await Car.create(req.body);
            res.status(201).json(car)

        } catch (e) {
            next(e)
        }


    }
}

// postUser: (req, res) => {
//     try {
//         res.json(users)
//     } catch (e) {
//         res.status(400).json(e.message)
//     }
//
// }

