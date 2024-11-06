// const mongoose =require('mongoose')
// const schema=mongoose.Schema

// const studentsSchema=new Schema(
//     {
//         name:String,
//         age:Number,
//         gpa:Number,
//         depart:String
//     }
// )

// const studentModel=mongoose.model("students",studentsSchema)

// module.exports=studentModel;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    description: String,
    active: Boolean,
    phone: Number
});

const BlogModel = mongoose.model("blogposts", BlogSchema);

module.exports = BlogModel;