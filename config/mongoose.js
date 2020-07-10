/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
// set the mongoose
const mongoose = require('mongoose');

// connect the database

mongoose.connect('mongodb://localhost/todo_app_db');

// acquire the connection (if it is successful)

const db = mongoose.connection;

// on error the db

db.on('error', console.log.bind(console,'connection error:'));

db.once('open', function(){
    console.log('Successfully Connected to the database ')
})