const express = require('express');
const mongoose = require('mongoose');
// const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

const {PORT} = require('./configs/config');

mongoose.connect('mongodb://localhost:27017/inoxoft')

const staticPath = path.join(__dirname, 'static');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(staticPath));
app.set('view engine', '.hbs');
// app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', staticPath);

const {authRouter, userRouter} = require('./router');

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use(_mainErrorHandler);  // handler for all errors

app.get('/ping', (req, res) => res.send('Pong'));

app.listen(PORT, () => {
    console.log('App listen', PORT);
});

// eslint-disable-next-line no-unused-vars
function _mainErrorHandler(err, req, res, next) {  // function to catch errors
    res
        .status(err.status || 500)
        .json({
            message: err.message
        })

}