/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
// set the express
 const express = require('express');

// create path directory
const path = require('path');

// making the port
const port = 8000;

// require mongodb database

const db = require('./config/mongoose');

// require models schema
const ToDo = require('./models/toDo');






// for express app 
const app = express();

// set the templates engine as ejs
app.set('view engine', 'ejs'); 

// set the directory for views
app.set('views', path.join(__dirname, 'views'));



app.use(express.urlencoded());

// using  static file (assets file)
app.use(express.static('assets'));




// render the tasklist on browser
app.get('/', function(req, res){
    ToDo.find({}, function(error, taskList){
        if(error)
        {
            console.log('Error in fetching from database', error);
            return
        }

    return res.render('toodletodo',{
        titleName: 'ToodleDo | Todo-App',
        task_list: taskList,
    });
    });
});
// creating the task
app.post('/create-task', function(req, res){
    // creating task in database and showing on browser
    ToDo.create({
        description: req.body.description,
        due_date: req.body.due_date,
        category: req.body.category
    }, function(error, newTask){
        if(error){
            console.log('Error in creating a taskList', error);
            return;
        }
        console.log('Hurray!!',newTask);
        res.redirect('back');
      

       
    });
    
});
// deleting tht task

app.get('/delete-task/', function(req, res){
    console.log(req.query)
    let id = req.query.id

    ToDo.findByIdAndDelete(id,function(error){
        if(error){
            console.log('error in deleting the object from the database');
            return;
        }
        return res.redirect('back')
    });

});
// starting the server 
app.listen(port, function(error){
    if(error){
        console.log('Error in running the server', error);
    }
    else{
        console.log('Sever running successfully on the port:', port);
    }
});

