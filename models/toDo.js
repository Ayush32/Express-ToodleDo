/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
// require mongoose
const mongoose = require('mongoose');

// creating schema for todo app
const TodoSchema =  new mongoose.Schema({
    description:{
        type: String
    },
    category: {
        type: String
    },
    due_date:{
        type: Date
    },
});

// convert schema into model
const Todo = mongoose.model('Todo', TodoSchema);
// exports todo model
module.exports = Todo;