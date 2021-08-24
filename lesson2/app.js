const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path')

const {PORT} = require('./configs/config.js')
const users = require('./dataBase/users')

const app = express()
const staticPath = path.join(__dirname, 'static')
//================
app.use(express.json())     // teach express to read json
app.use(express.urlencoded({ extended: true }));  //teach express to read objects from json
app.use(express.static(staticPath))   // use static folder unblock as exxpress
app.set('view engine', '.hbs');       // set view engine = hbs engine
app.engine('.hbs', expressHbs({defaultLayout: false}))
// hbs engine will be renderered by function expressHbs, without `main hbs`
app.set('views', staticPath)
// view exist in this path



app.get('/ping', (req, res) => {
    console.log(req);

    // res.send('Pong');
    res.status(402).json({name:'dima'})
    // res.end('Pong');
    // res.status(404).json({name: 'Dima'});
    // res.write('HELLO')
    // res.write('HELLO2222d')
    // res.end();
});



app.post('/auth', (req, res) => {


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

app.post('/authreg', (req, res) => {
    const {email, password} = req.body;
    const user = users.find(item => item.email === email );
    if (!user) {
        res.render('login')
        return;
    }
    res.render('err')
})


//--------------------
app.get('/users/:user_id',((req, res) => {
    const {user_id} = req.params
    const query = req.query
    res.json(users[user_id])
    // res.send('<div>hello </div>')

    console.log(query)
}))

// render endpoints
app.get('/login', (req, res) => {
    res.render('login')    // render understand that we means login.hbs
});

app.get('/users',((req, res) => {
    res.render('users', {userName: "Eugene", users, isMale:false })  // render page with name users.hbs / second parametrs is data
}))

app.get('/register',((req, res) => {
    res.render('register')
}))

app.listen(PORT, () => {
    console.log('app listen 5000')
} )