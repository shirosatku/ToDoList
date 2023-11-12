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
app.get('/api', (req, res) => {
    res.send('Hello API')
})

app.post('/api/todo', async(req,res) => {
    try{
        const todo = await ToDo.create(req.body)
        res.status(200).json(todo)
    }        
    catch(error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

