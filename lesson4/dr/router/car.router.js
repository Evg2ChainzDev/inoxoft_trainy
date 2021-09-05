const router = require('express').Router();

const carController = require('../controllers/cars.controller')
const { isCarByIdExist } = require("../middlewares/car.middlewares");


router.get('/all', carController.getAllCars)

router.get('/:cars_id', isCarByIdExist, carController.getCarById)

router.post('/', carController.createCar)

router.delete('/:cars_id', isCarByIdExist, carController.deleteCar)

router.patch('/:cars_id', isCarByIdExist, carController.updateCar)

module.exports = router;
