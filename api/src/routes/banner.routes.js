const express = require('express')
const app = express()

app.get("/", (req, res) => {
    // TODO: To list all the banners
})

app.post("/create", (req, res) => {
    // TODO: To create a banner
})

// http://localhost:3005/api/v1/banner/:id
app.put("/:id", (req, res) => {
    // TODO: To update a banner
})

app.delete("/:id", (req, res) => {
    // TODO: To delete a banner
})

//http://localhost:3005/api/v1/banner/slug
// req.params.id => "1"
app.get("/:id", (req, res) => {
    // TODO: To get a detail of some data
})

//http://localhost:3005/api/v1/banner/active/by-status
// req.params.status = "active"
app.get("/:status/by-status", (req, res) => {
    // TODO: List all active banners
})
module.exports = app;