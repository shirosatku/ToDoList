const mongoose = require ('mongoose')

const ToDoSchema = mongoose.Schema ({
    text: {
        type: String,
        retuired: [true, "Please enter an item to add to the To Do List"]
    },
    complete:{
        type: Boolean,
        default: false
    }
})

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;