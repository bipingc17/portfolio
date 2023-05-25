const express = require('express')
const app = express()

app.get("/", (req, res) => {
    // TODO: To list all the brands
})

app.post("/create", (req, res) => {
    // TODO: To create a brand
})

// http://localhost:3005/api/v1/brand/:id
app.put("/:id", (req, res) => {
    // TODO: To update a brand
})

app.delete("/:id", (req, res) => {
    // TODO: To delete a brand
})

//http://localhost:3005/api/v1/brand/slug
// req.params.id => "1"
app.get("/:id", (req, res) => {
    // TODO: To get a detail of some data
})

//http://localhost:3005/api/v1/brand/active/by-status
// req.params.status = "active"
app.get("/:status/by-status", (req, res) => {
    // TODO: List all active brands
})
module.exports = app;