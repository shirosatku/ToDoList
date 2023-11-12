const express = require ('express');
const mongoose = require ('mongoose')
const ToDo = require('./models/ToDo')

//create express app
const app = express();

//middleware
app.use(express.json())

//connecting to DB
mongoose.connect('mongodb+srv://shirosatku:123654@shirosatkucluster.2kdmtlh.mongodb.net/ToDoList?retryWrites=true&w=majority')
.then (() => {
    console.log('Connected to database')
})
.catch((error) => {
    console.log(error)
})

// starting server 
const port = 5000;
app.listen(port, () => {
    console.log (`Node API is running on port ${port}`);
})

//routes
//fetch todo list items
app.get('/api/todo', async(req, res) => {
    try{
        const todos = await ToDo.find({});
        res.status(200).json(todos)
    }        
    catch(error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

//add todo list item
app.post('/api/todo', async(req,res) => {
    try{
        const todo = await ToDo.create(req.body)
        res.status(200).json(todo)
    }        
    catch(error) {
        res.status(500).json({message:error.message})
    }
})

//change status of complete for a todo list item
app.patch('/api/todo/:id', async(req,res) => {
    try{
        const todo = await ToDo.findById(req.params.id)
        if(!todo){
            return res.status(404).json({message: "cannot find item"})
        }
        todo.complete = !todo.complete
        todo.save()
        res.status(200).json(todo)
    }        
    catch(error) {
        res.status(500).json({message:error.message})
    }
})

//delete a todo list item
app.delete('/api/todo/:id', async(req,res) => {
    try{
        const todo = await ToDo.findByIdAndDelete(req.params.id)
        if(!todo){
            return res.status(404).json({message: "cannot find item"})
        }
        todo.complete = !todo.complete
        res.status(200).json(todo)
    }        
    catch(error) {
        res.status(500).json({message:error.message})
    }
})