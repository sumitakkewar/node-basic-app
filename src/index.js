import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 1234;

app.get('/', (req, res) => {
    res.status(200).send(`Hello World! This is ${process.env.NODE_ENV} Environtment ok!`)
})

app.listen(port, () => {
    console.log(`App is listening on: ${port}`)
})
