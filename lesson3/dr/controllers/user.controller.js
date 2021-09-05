const users = require('../dataBase/users')
const { getUserByEmail } = require('../services/user.service')

module.exports = {
    getUserById: (req, res) => {
        const {user_id} = req.params
        const query = req.query
        res.json(users[user_id])
        // res.send('<div>hello </div>')

        // const userByEmail = getUserByEmail(email)

        console.log(query)
    },
    getAllUsers:  (req, res) => {
        res.render('users', {userName: "Eugene", users, isMale:false })  // render page with name users.hbs / second parametrs is data
    },
    deleteUser: (req, res) => {
        res.json(users)
    },
    postUser: (req, res) => {
        res.json(users)
    }
}