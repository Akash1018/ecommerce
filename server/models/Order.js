const mongoose = require("mongoose") //initialize mongoose

const OrderSchema = new mongoose.Schema(
    {
        userID: { type:String, required:true, unique:true},
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
       amount: { type: Number, required: true },
       address: { type: Object, required: true },
       status: {type: String, default: "pending" },
    },
    { timestamps: true }
) // defined a schema

module.exports = mongoose.model("Order", OrderSchema); //exported schema