const mongoose = require("mongoose")

const connectionString = "mongodb+srv://taskManager-api:Mozart0906@taskmanagernodeexpress.q7euu1k.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {

    mongoose
    .connect(connectionString, { //deprecated in mongoose v6
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true,
    })
    // .then(()=> {console.log("Connected to the DB...")})
    // .catch(err => console.log(err))
}

module.exports = connectDB