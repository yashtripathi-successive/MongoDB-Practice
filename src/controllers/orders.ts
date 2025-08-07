import { Request, Response, text } from "express";
import orderSchema from "../modals/orderSchema";

export async function totalRevenueGenerated(req:Request,res:Response){

    const result = await orderSchema.aggregate([
        {
            $group:{
                _id:null,
                totalRevenue:{$sum:"$totalAmount"}
            }
        }
    ])

    const ans = result[0].totalRevenue

    res.json({ans})
    
}


export async function totalNumberOfOrdersByStatus(req:Request,res:Response){

    const result = await orderSchema.aggregate([
        {
            $group:{
                _id:"$status",
                count:{$sum:1}
            }
        }
    ])

    const ans = result


    res.json({ans})
    
}


export async function topThreeCustomers(req:Request,res:Response){

    const result = await orderSchema.aggregate([
            {

            $group:{
                _id:"$customerName",
                totalSpent:{ $sum:"$totalAmount" }
            }

            },

            {
                $sort:{totalSpent:-1}
            },

            {
                $limit:3
            }
        
    ])

    const ans = result


    res.json({ans})
    
}


export async function averageOrderPerCustomer(req:Request,res:Response){

    const result = await orderSchema.aggregate([
        {
            $group:{
                _id:"$customerName",
                averageSpentPerCustomer:{$avg:"$totalAmount"}
            }
        }
    ])

    const ans = result


    res.json({ans})
    
}


export async function productsSoldMoreThanTenTimes(req:Request,res:Response){

    const result = await orderSchema.aggregate([
        {
            $unwind:"$items"
        },
        {
            $group:{
                _id:"$items.productName",
                productSoldMoreThanTenTimes:{$sum:"$items.quantity"}
            }
        },
        {
            $match:{
                productSoldMoreThanTenTimes:{$gt:10}
            }
        }
    ])

    const ans = result


    res.json({ans})
    
}

export async function customerWithTwoOrders(req:Request,res:Response){

    const result = await orderSchema.aggregate([
        {
            $group:{
                _id:"$customerName",
                count:{
                    $sum:1                    
                }
            }
        },
        {
            $match:{
                count:{$gt:2}
            }
        }
    ])

    const ans = result


    res.json({ans})
    
}


export async function productNames(req:Request,res:Response){

    const result = await orderSchema.aggregate([
        {
            $unwind:"$items"
        },
        {
            $group:{
                _id:"$items.productName",
                count:{
                    $sum:1                    
                }
            }
        }
    ])

    const ans = result


    res.json({ans})
    
}



export async function deliveredOrdersRevenue(req:Request,res:Response){

    const result = await orderSchema.aggregate([

        {
            $match:{
                status:"delivered"
            }
        },
    
        {
            $group:{
                _id:"$status",
                totalRevenue:{
                    $sum:"$totalAmount"                   
                }
            },
        }
             
    ])

    const ans = result
    res.json({ans}) 
}



export async function totalQuantityAndRevenuePerProduct(req:Request,res:Response){

    const result = await orderSchema.aggregate([

        {
            $unwind:"$items"
        },
    
        {
            $group:{
                _id:"$items.productName",
                totalRevenue:{
                    $sum:{
                        $multiply:["$items.quantity","$items.price"]
                    }                   
                }
            },
        }
             
    ])

    const ans = result
    res.json({ans}) 
}


export async function revenueByMonthAndYear(req:Request,res:Response){
    console.log('start')
    const currentDate = new Date()
    const sixMonthsAgo = new Date()

    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

    const result = await orderSchema.aggregate([

      {
        $match: {
          orderDate: { $lte: currentDate , $gte: sixMonthsAgo }
        }
      },

      {
        $group:{
            _id:{month:{$month:"$orderDate"},year:{$year:"$orderDate"}},
            totalRevenue:{$sum:"$totalAmount"}
        }
      }
       
    ])
    console.log('end')
    const ans = result
    res.json({ans}) 
}


export async function checkIndex(req:Request,res:Response){

    //const result = await orderSchema.collection.createIndex({customerName:10})

    //const result =await orderSchema.collection.dropIndex("customerName_10")

    //const result = await orderSchema.find({customerName:"Mr. Loren Kreiger"}).explain()

    //const result = await orderSchema.collection.getIndexes()

    //const result = await orderSchema.collection.dropIndexes()


    //const result = await orderSchema.find({status:"shipped"}).explain()

    //const result = await orderSchema.collection.createIndex({status:1})
    
    //const result = await orderSchema.collection.dropIndex("items.productName_text")
    //const result = await orderSchema.collection.createIndex({"items.productName":"text"})
    const textSearch = await orderSchema.find({$text:{$search:"laptop"}}).explain()
    
    const ans = textSearch
    res.json({ans}) 
}
