const dotenv = require('dotenv')
dotenv.config();
const bcrypt = require('bcryptjs')
const userSvc = require("../services/user.service");
const mailSvc = require('../services/mailer.service');
const helpers = require('../utilities/helpers');
const { MongoClient } = require("mongodb");
const jwt = require('jsonwebtoken')

class AuthController {
  login = async (req, res, next) => {
    try {
      let payload = req.body;
      if (!payload.email || !payload.password) {
        next({ status: 400, msg: "Credentials required" })
      }
      let userDetail = await userSvc.getUserByEmail(payload.email)

      // password validate
      if (bcrypt.compareSync(payload.password, userDetail.password)) {
        // password match
        if (userDetail.status === 'active') {


          let accessToekn = jwt.sign({
            userId: userDetail._id
          }, process.env.JWT_SECRET, {
            expiresIn: '3h'
          });

          let refreshToken = jwt.sign({
            userId: userDetail._id
          }, process.env.JWT_SECRET, {
            expiresIn: '5d'
          });

          res.json({
            result: {
              data: userDetail,
              token: {
                accessToken: accessToekn,
                accessType: "Bearer",
                refreshToken: refreshToken
              }
            },
            status: true,
            msg: "You are logged in"
          })
        } else {
          next({ status: 403, msg: "Your account has not been activated yet" })
        }
      } else {
        // password does not match
        next({ status: 400, msg: 'Credentials does not match.' })
      }
      // TODO: Paswword validate, jwt token, status, and response send
      // DB Query

    } catch (exception) {
      console.log(exception);
      next({ status: 400, msg: "Query Exception. View console" })
    }

  }

  register = async (req, res, next) => {
    try {
      // Business Logic ===> user register logic
      let registerData = req.body
      registerData.status = 'inactive';
      // console.log(req.file, req.files)
      if (req.file) {
        registerData.image = req.file.filename;
      }
      // password => plain text
      userSvc.validatedata(registerData)
      registerData.password = bcrypt.hashSync(registerData.password, 10);
      registerData.activationToken = helpers.generateRandomString();

      let registerResponse = await userSvc.registerUser(registerData);

      if (registerResponse) {
        let mailMsg = `Dear ${registerData.name},<br/>Your account has been registered 
                    successfully. Please click the link below or copy paste the url to activate your account: 
                    <a href="${process.env.FRONTEND_URL}activate/${registerData.activationToken}">${process.env.FRONTEND_URL}activate/${registerData.activationToken}</a>
                    <br/>
                    Regards,<br>
                    No-Reply, Admin
                    `
        mailSvc.sendMail(registerData.email, "Activate your account", mailMsg);
        // Data store -> Db 
        res.json({
          result: registerData,
          msg: "User registered successfully.",
          status: true
        })
      } else {
        next({ status: 400, msg: "User cannot be reigsterd at this moment" })
      }
    } catch (exception) {
      console.log(exception);
      next(exception)
    }
  }

  activateUser = async (req, res, next) => {
    try {
      let token = req.params.token;
      let userInfo = await userSvc.getUserByFilter({
        activationToken: token
      })

      console.log(userInfo);

      if (!userInfo || userInfo.length <= 0) {
        throw { status: 400, msg: "Token expired or alreay used" }
      } else {
        let update = await userSvc.updateUser({
          activationToken: null,
          status: "active"
        }, userInfo[0]._id)
        res.json({
          result: userInfo,
          msg: "User Activated successfully.",
          status: true
        })
      }
    } catch (exception) {
      console.log(exception);
      next(exception)
    }
  }

  forgetPassword = (req, res, next) => {

  }

  resetPassword = (req, res, next) => {

  }

  getLoggedInUser = (req, res, next) => {
    try {
      res.json({
        result: req.authUser,
        msg: "Your detail",
        status: true

      })
    } catch (exception) {
      console.log(exception);
      next(exception)
    }
  }

  refreshToken = async (req, res, next) => {

  }
}

// 
const authCtrl = new AuthController();
module.exports = authCtrl