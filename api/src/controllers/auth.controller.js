const bcrypt = require('bcryptjs')
const userSvc = require("../services/user.service")

class AuthController {
    login = (req, res, next) => {
        // TODO: Login logic 
        let payload = req.body;
        res.json({
            result: payload
        })

    }

    register = (req, res, next) =>{
        try{
            // Business Logic ===> user register logic
            let registerData =  req.body
            // console.log(req.file, req.files)
            if(req.file) {
                registerData.image = req.file.filename;
            }
            // password => plain text
            
            userSvc.validatedata(registerData)
            
            registerData.password = bcrypt.hashSync(registerData.password, 10);
            
            // TODO: DB Query
            res.json({
                result: registerData
            })
        } catch(exception){
            console.log(exception);
            next(exception)
        }
    }

    activateUser = (req, res, next) => {

    }

    forgetPassword = (req, res, next) => {

    }

    resetPassword = (req, res, next) => {

    }

    getLoggedInUser = ( req, res, next) => {

    }
}

// 
const authCtrl = new AuthController();
module.exports = authCtrl