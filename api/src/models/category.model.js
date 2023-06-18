const mongoose = require("mongoose")
// SmartPhone -> Parent Category => 1 parent -=> null
// Android => child of Smartphone => parent -> 1, 2
// Smasung Phne => child of Androidn => parent-2, 3
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        default: null
    },
    image: {
        type: String
    },
    slug:  {
        type: String, 
        require: true,
        unique: true
    },
    brands:[{
        type: mongoose.Types.ObjectId,
        ref: "Brand",
        default: null
    }],
    attributes:[{
        key: String,
        value: [String]
    }],
    status: {
        type: String, 
        enum: ['active','inactive'],
        default: "inactive"
    }
}, {
    timestamps: true,
    autoIndex: true
})

const CategoryModel = mongoose.model("Category", CategorySchema)
module.exports = CategoryModel;