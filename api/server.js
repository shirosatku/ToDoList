const express = require ('express');
const mongoose = require('mongoose')
//create express app
const app = express();

//coneccting to DB
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
app.get('/api/', (req, res) => {
    res.send('Hello API')
})