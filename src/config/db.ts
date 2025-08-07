import mongoose from "mongoose"

async function connectDB(){
    try{

        await mongoose.connect('mongodb://localhost:27017/successivedb')
        console.log('Database connected successfully')

    }catch(err){
        console.log('Database not connected')
    }
}


export default connectDB