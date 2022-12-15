const mongoose = require("mongoose") //initialize mongoose

const CartSchema = new mongoose.Schema(
    {
        usernID: { type:String, required:true, unique:true},
        products: [
            {
                productId: {
                 type: String,
                },
                quantity: {
                 type: Number,
                 default: 1,
                },
        }],
      
    },
    { timestamps: true }
) // defined a schema

module.exports = mongoose.model("Cart", CartSchema); //exported schema