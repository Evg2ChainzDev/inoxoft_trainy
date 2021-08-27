const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const { PORT } = require('./configs/config');
const users = require('./dataBase/users');

const app = express();
const staticPath = path.join(__dirname, 'static');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('views', staticPath);

const { authRouter, userRouter } = require('./router')

app.use('/auth', authRouter)
app.use('/users', userRouter)



app.post('/auth')


app.get('/users/:user_id', (req, res) => {

});



// Render endpoints
app.get('/login', (req, res) => {
    res.json('login');
})

app.listen(PORT, () => {
    console.log('App listen', PORT);
});
