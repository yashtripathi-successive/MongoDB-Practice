import express from 'express'
import {averageOrderPerCustomer, checkIndex, customerWithTwoOrders, deliveredOrdersRevenue, productNames, productsSoldMoreThanTenTimes, revenueByMonthAndYear, topThreeCustomers, totalNumberOfOrdersByStatus, totalQuantityAndRevenuePerProduct, totalRevenueGenerated} from '../controllers/orders'

const ordersRoute = express.Router()


ordersRoute.get('/total-revenue',totalRevenueGenerated)
ordersRoute.get('/total-no-of-orders-by-status',totalNumberOfOrdersByStatus)
ordersRoute.get('/top-three-customers',topThreeCustomers)
ordersRoute.get('/average-order-per-customer',averageOrderPerCustomer)
ordersRoute.get('/product-sold-more-than-ten-times',productsSoldMoreThanTenTimes)
ordersRoute.get('/customer-with-two-orders',customerWithTwoOrders)
ordersRoute.get('/product-names',productNames)
ordersRoute.get('/delivered-orders-revenue',deliveredOrdersRevenue)
ordersRoute.get('/total-quantity-total-revenue-per-product',totalQuantityAndRevenuePerProduct)
ordersRoute.get('/revenue-by-month-and-year',revenueByMonthAndYear)
ordersRoute.get('/check-performance',checkIndex)


export default ordersRoute