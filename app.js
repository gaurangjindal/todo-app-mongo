require('./models/db');


const express= require('express')
const bodyparser = require('body-parser')
const path = require('path')
const expresshandlebars = require('express-handlebars')


const todocontroler = require('./controler/todocontroler.js');


var app = express()

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json()); // converting all the request data to json

// configuring the views
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',expresshandlebars({
    extname :'hbs',
    defaultLayout:'mainLayout',
    layoutDir:__dirname +'/views/layouts/'
}))

app.set('view engine','hbs'); // configured express handle bars

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(5000,()=>{
    console.log('server started at 5000');
})

app.use('/todo', todocontroler);