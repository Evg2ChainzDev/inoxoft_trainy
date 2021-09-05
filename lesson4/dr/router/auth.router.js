const router = require('express').Router();
const users = require('../dataBase/users')

router.get('/',(req, res) => {
    res.send('<div>Auth page </div>')
})

router.post('/', (req, res) => {

    const {email, password} = req.body;
    console.log(email, password)

    const user = users.find(item => item.email === email );

    console.log(user)

    if (!user) {
        res.render('register')
        return;
    }
    // res.render('users')
    // if (!user) {
    //     res.status(404).end('User not found');
    //     return;
    // }
    res.render('users', {users})  // render page with name users.hbs / second parametrs is data

})

module.exports = router