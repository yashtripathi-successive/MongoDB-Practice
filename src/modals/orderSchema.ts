import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    _id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    orderId:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    items:[{
        productName:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    }],
    totalAmount:{
        type:Number,
        required:true
    }


}) 


export default mongoose.model('Orders',orderSchema)