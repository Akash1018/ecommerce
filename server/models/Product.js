const mongoose = require("mongoose") //initialize mongoose


const ProductSchema = new mongoose.Schema(
    {
        title: { type:String, required:true, unique:true},
        desc: { type:String, required:true},
        img: { type:String, required:true},
        categories: { type:Array},
        size: { type:Array},
        color: { type:Array},
        price: { type:Number,required:true},
        inStock: {type: Boolean, default: true}
    },
    { timestamps: true }
) // defined a schema

module.exports = mongoose.model("Product", ProductSchema); //exported schema