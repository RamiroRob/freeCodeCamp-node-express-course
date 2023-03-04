const mongoose = require("mongoose")



const connectDB = (url) => {

    mongoose
    .connect(url, { //deprecated in mongoose v6
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true,
    })
    // .then(()=> {console.log("Connected to the DB...")})
    // .catch(err => console.log(err))
}

module.exports = connectDB