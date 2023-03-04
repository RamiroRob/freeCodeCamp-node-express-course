const task = require("../models/task")


function getAllTasks (req,res) {
    res.send("All items Controller")
}

function getTask (req,res) {
    res.json({id:req.params.id})
}

async function createTask (req,res) {
   const Task = await task.create(req.body)
    res.status(201).json({Task})
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