const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, "src")))
app.get("/occupation", async(req, res) => {
    res.sendFile(path.join(__dirname, "src", "occupation.html"));
})
app.get("/timetable", async(req, res) => {
    res.sendFile(path.join(__dirname, "src", "timetable.html"));
})
app.listen(8080, ()=> {
    console.log("server running successfully on port 8080")
})
