const mongoose = require("mongoose")

const AddressSchema = mongoose.Schema({
    houseNo: Number,
    streetName: String,
    address: String
})

const UserSchema= new mongoose.Schema({
    name:{
        type: String,
        require: true,
        min: 3
    },
    email: {
        type: String, 
        require: true, 
        unique:true
    },
    password:{
        type: String, 
        require: true
    },
    role: {
        type: String,
        enum: ["admin","seller","customer"],
        default: "customer"
    },
    status:{
        type: String, 
        enum: ['active','inactive'],
        default:"inactive"
    },
    activationToken: {
        type: String,
        default: null
    },
    passwordResetToken:{
        type: String, 
        default: null
    },
    address:{
        shippingAddress: AddressSchema,
        billingAddresss: AddressSchema
    }
},{
    timestamps: true, // createdAt, updatedAt,
    autoIndex: true
});

const UserModel= mongoose.model("User", UserSchema)
module.exports = UserModel;

// table name => plural form of model name
// User => users 
// Document => key:value 
// every document is an instance of mongoose model
// user-> id 1 {}
// every key of a model is the column name of the document/table
// var => UserModel instance 