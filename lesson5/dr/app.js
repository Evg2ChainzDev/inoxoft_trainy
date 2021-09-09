const express = require('express');
const mongoose = require('mongoose')
const path = require('path')

const app = express()

const {PORT} = require('./configs/config.js')

mongoose.connect('mongodb://localhost:27017/inoxoft')

// const users = require('./dataBase/users') // maybe can remove

const staticPath = path.join(__dirname, 'static')
//================
app.use(express.json()) // teach express to read json
app.use(express.urlencoded({ extended: true })); //teach express to read objects from json
app.use(express.static(staticPath)) // use static folder unblock as express

const {authRouter, userRouter, carRouter} = require('./router')

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/cars', carRouter);
app.use(_mainErrorHandler);

app.get('/ping', (req, res) => {
    console.log(req);
    res.send('Pong');
});

app.post('/authreg', (req, res) => {
    const {email, password} = req.body;
    const newUserObj = req.body;
    const user = users.find(item => item.email === email );
    if (!user) {
        res.render('login')
        console.log(users)
        console.log(email, password)
        console.log(newUserObj)
        users.push(newUserObj)
        console.log(users)
        return;
    }
    res.render('err')
})

// render endpoints
app.get('/login', (req, res) => {
    res.render('login') // render understand that we means login.hbs
});

app.get('/register',((req, res) => {
    res.render('register')
}))

app.listen(PORT, () => {
    console.log('app listen 5000')
} )

// eslint-disable-next-line no-unused-vars
function _mainErrorHandler(err, req, res, next) { // '_' means that this func is as private
    res
        .status(err.status || 502)
        .json({
            message: err.message || 'unknown error Dummy'
        });

}

// const expressHbs = require('express-handlebars');  // and also disabling handlebars

//////////////////  we don't need it cause we don't render anything
// app.set('view engine', '.hbs');       // set view engine = hbs engine
// app.engine('.hbs', expressHbs({defaultLayout: false}))
// // hbs engine will be renderered by function expressHbs, without `main hbs`
// app.set('views', staticPath)
// // view exist in this path
