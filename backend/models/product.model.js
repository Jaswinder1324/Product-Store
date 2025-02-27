import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    //rules & regulations for data
    {
        name: { 
            type: String, 
            required: true 
        },
        price: 
        { type: Number,
            required: true 
        },
       
        image: 
        { type: String, 
            required: true
         },
    },
    {timestamps: true }
    //yaha time stamps ke liye hai toh mongoose k time stamps mein data ko save karne k liye hai
);

const Product = mongoose.model("Product", productSchema);
//products in database
export default Product;