import mongoose from "mongoose";
import connectDB from "../config/db";
import orderSchema from "../modals/orderSchema";
import {faker} from "@faker-js/faker"

(async function seedData(){
    
        await connectDB()
        console.log('started')
        const products = ['Macbook','Monitor','Keyboard','Laptop','Mobile']
        const shipped = ['delivered','shipped','pending']

        await orderSchema.deleteMany()

        const orders = []
        
        for(let i=0;i<20;i++){

        const items = []

        let totalAmount = 0

        const totalItemsQuantity = Math.floor(Math.random()*2)+1
        
        for(let j=0;j<totalItemsQuantity;j++){

            const price = Math.floor(Math.random()*100)+10
            const quantity = Math.floor(Math.random()*2)+1
            const productName = faker.helpers.arrayElement(products)
            totalAmount += quantity*price

            items.push({ productName,quantity,price})
        }

        orders.push({

            _id:new mongoose.Types.ObjectId(),
            orderId:faker.string.uuid(),
            customerName:faker.person.fullName(),
            orderDate:faker.date.recent(),
            status:faker.helpers.arrayElement(shipped),
            items,
            totalAmount
        })
       
        }

        await orderSchema.insertMany(orders)
        
        console.log(`orders successfully inserted`)

})()




