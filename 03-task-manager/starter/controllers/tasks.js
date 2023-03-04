

function getAllTasks (req,res) {
    res.send("All items Controller")
}

function getTask (req,res) {
    res.json({id:req.params.id})
}

function createTask (req,res) {
    res.json(req.body)
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