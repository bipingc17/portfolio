const app = require("express").Router()
const authCheck = require("../middleware/auth.middleware");
const uploader = require("../middleware/uploader.middleware");

const authCtrl = require("../controllers/auth.controller")


app.post('/login', authCtrl.login);

// if file is not uploaded but content type is multpart/form-data -> use .none() function
// if single file is uploaded, use .single("filedName") function
// if multiple file is uploaded, use .array("fieldname", options) functions

// Task: 1 make dynamic folder to upload in uploader middleware
// /public/filename.ext
// /public/user/userfilename.ext
// /public/banner/bannerfilename.ext
// /public/product/productfilename.ext

app.post('/register', uploader.single('image'),  authCtrl.register)

app.post('/activate/:token', authCtrl.activateUser)
app.post('/forget-password', authCtrl.forgetPassword)
app.post('/password-reset', authCtrl.resetPassword)
app.get('/me',authCheck, authCtrl.getLoggedInUser)

module.exports = app;