const mongoose = require('mongoose');

const url ="mongodb://localhost:27017/todo"

// conections mongoos

mongoose.connect(url,{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('mongodb connection is sucuessful');
    }
    else
    {
        console.log("error in database connection" + err)
    }
    
})

// include the todo model


require('./todo.model');