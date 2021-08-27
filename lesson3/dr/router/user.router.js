const router = require('express').Router();
const users = require('../dataBase/users')

router.get('/:user_id',((req, res) => {
    const {user_id} = req.params
    const query = req.query
    res.json(users[user_id])
    // res.send('<div>hello </div>')

    console.log(query)
}))
router.delete('/:user_id', (req, res) => {
    res.json(users)
})

router.post('/users', (req, res) => {
    res.json(users)
})
router.get('/',((req, res) => {
    res.render('users', {userName: "Eugene", users, isMale:false })  // render page with name users.hbs / second parametrs is data
}))

module.exports = router