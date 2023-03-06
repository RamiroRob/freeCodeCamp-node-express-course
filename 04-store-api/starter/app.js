const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const connectDB = require("./db/connect")
const productsRouter = require("./routes/products")


const app = express()

const notFoundMIddleware = require("./middleware/not-found")
const errorMiddleware = require("./middleware/error-handler")


app.use(express.json())

app.get("/", (req,res)=> {
    res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>")
})

app.use("/api/v1/products", productsRouter)


app.use(notFoundMIddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()