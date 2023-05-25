const express = require("express");
const app = express();
// => http://localhost:3005/api/v1/banner -> get (list all banner)
// => http://localhost:3005/api/v1/banner/create -> post (create a banner)
// => http://localhost:3005/api/v1/banner/update -> put (update a banner)
// => http://localhost:3005/api/v1/banner/delete -> delete (Delete a banner)
// => http://localhost:3005/api/v1/banner/active -> get (Get active a banner)

// http://localhost:3005/api/v1/auth/login
app.post('/login', (req, res) => {
    // TODO: Login logic 
});

// http://localhost:3005/api/v1/auth/register
app.post('/register', (req, res) => {
    // TODO: Register a user
})

// http://localhost:3005/api/v1/auth/activate
app.post('/activate', (req, res) => {
    // TODO: Activate a user
})

// http://localhost:3005/api/v1/auth/forget-password
app.post('/forget-password', (req, res) => {
    // TODO: Send Password reset link to a user
})

// http://localhost:3005/api/v1/auth/password-reset
app.post('/password-reset', (req, res) => {
    // TODO: Reset the password of a user
})

// http://localhost:3005/api/v1/auth/me
app.get('/me', (req, res) => {
    // TODO: Get logged in user profile
})

module.exports = app;