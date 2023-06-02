const authCheck = (req, res, next) => {
    try{
        // TODO: Build auth middleware
        next();
    } catch(exception){
        console.log("AuthException: ", exception)
        next({status: 500, msg: exception?.message})
    }
}

module.exports = authCheck
