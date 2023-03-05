const taskSchema = require("../models/task")

async function getAllTasks(req, res) {
    try {
        const getTasks = await taskSchema.find({})
        res.status(200).json({ getTasks })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function getTask(req, res) {

    try {
        const { id: taskID } = req.params
        const task = await taskSchema.findOne({ _id: taskID })

        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }

        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json(error)
    }
}

async function createTask(req, res) {
    try {
        const createTask = await taskSchema.create(req.body)
        res.status(201).json({ createTask })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


async function deleteTask(req, res) {
    try {
        const { id: taskID } = req.params 
        const task = await taskSchema.findOneAndDelete({_id: taskID})
        
        if(!task) return res.status(404).json({msg: `task with id ${taskID} doesn't exist`})
        
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ message: error })
        
    }
    
}

async function updateTask(req, res) {

    try {
        const { id: taskID } = req.params

        const task = await taskSchema.findOneAndUpdate({_id:taskID}, req.body, {
            new: true, runValidators: true,
        })

        if(!task) return res.status(404).json({msg: `task with id ${taskID} doesn't exist`})

        res.status(200).json({ task })
        
    } catch (error) {
        res.status(500).json({ message: error })

    }

   
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}