const express = require('express')

const mongoose = require('mongoose');

const todo = mongoose.model('todo')

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('layouts/todo/addoredit',{
        viewTitle:'Add your task'
    })
})


module.exports= router;

router.post('/',(req,res)=>{

    if(req.body._id ==""){
        insertRecord(req,res);
    }
    else{
        updateRecord(req,res);
    }
    
})

function insertRecord(req,res){
    var todos = new todo();

    todos.todoid = req.body.todoid;

    todos.todoname = req.body.todoname;

    todos.priority = req.body.priority;

    todos.description = req.body.description;

    if(todos.todois =="" || todos.todoname == "" || todos.priority == "" || todos.description =="" ){
        res.render('layouts/todo/addoredit',({
            viewTitle:'Inert task',
            error:'Enter all the details',
            todos:req.body
        }))
        return ;
    }
    todos.save((err,docs)=>{
        if(!err){
            res.redirect('todo/list');
        }
        else{
            console.log("an error  occured"+ err);
        }
    })
}


// create route for displaying the list 

router.get('/list',(req,res)=>{
    todo.find((err,docs) =>{
        if(!err){
            res.render('layouts/todo/list',{
                list:docs
            })
        }
    })
})

router.get('/:id',(req,res)=>{
    todo.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render('todo/addoredit',{
                viewTitle:'update task',
                todo:"docs"
            })
        }
    })
})
function updateRecord(req,res){
    todo.findOneAndUpdate({_id:req.body-_id},req.body,{new:true},(err,docs)=>{
        if(!err){
            res.redirect('todo/list');
        }
        else{
            console.log('error occured in updating the record'+ err);
        }
    })
}

router.get('/delete/:id',(req,res)=>{
    todo.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.redirect('/todo/list');
        }
        else{
            console.log("an error occured during delete operation"+err)
        }
    })
})