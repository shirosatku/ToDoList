const express = require ('express');

//create express app
const app = express();

// starting server 
const port = 5000;
app.listen(port, () => {
    console.log (`Node API is running on port ${port}`);
})

//routes
app.get('/api/', (req, res) => {
    res.send('Hello API')
})

