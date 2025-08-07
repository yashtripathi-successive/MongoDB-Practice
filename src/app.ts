import express from 'express'
import connectDB from './config/db'
import errorHandler from './middlewares/errorHandler'
import ordersRoute from './routes/ordersRoute'

const app = express()
connectDB()
app.use('/api/aggregation',ordersRoute)
app.use(errorHandler)
app.listen(3000,()=>{
    console.log('server active at port 3000')
})
