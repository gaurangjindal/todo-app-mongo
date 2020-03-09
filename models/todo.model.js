// todo task id  // todo // priority // description
//scheme

const mongoose = require('mongoose')

 var todoSchema = new mongoose.Schema({
     todoid :{
         type: String
     },
     todoname:{
         type:String
     },
     priority:{
         type : String
     },
     description:{
         type:String
     }
 })

 mongoose.model('todo',todoSchema);