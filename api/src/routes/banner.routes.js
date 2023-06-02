const express = require('express')
const app = express.Router()
const HttpResponse =  require("../config/http-response-codes")
const authCheck = require("../middleware/auth.middleware");

app.get("/", (req, res) => {
    // TODO: To list all the banners
    res.json({
        query: req.query
    })
})

app.post("/",authCheck, (req, res, next) => {
    // Create request
    console.log("I am controller Call")
    res.json({
        data: null,
        msg: "Banner created"
    })
})

// app.use("/", (req, res, next) => {
//     res.status(405).json({
//         msg: "Method not allowed"
//     })
// })

// http://localhost:3005/api/v1/banner/:id
app.put("/:id", (req, res) => {

    res.json({
        data: req.params,
        query: req.query
    })
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