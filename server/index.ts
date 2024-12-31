import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000
app.get("/", (req, res) => {
    res.send({message : "Hello world"})
})
app.listen(PORT, () => {
    console.log(`PORT [${PORT}] SERVER OPEN!`)
})