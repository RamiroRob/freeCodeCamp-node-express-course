const taskSchema = require("../models/task")


function getAllTasks (req,res) {
    res.send("All items Controller")
}

function getTask (req,res) {
    res.json({id:req.params.id})
}

async function createTask (req,res) {
    try {
        const Task = await taskSchema.create(req.body)
         res.status(201).json({Task})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

function updateTask (req,res) {
    res.send("update task")
}

function deleteTask (req,res) {
    res.send("delete task")
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}