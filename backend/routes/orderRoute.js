import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
import e from "express";


const orderRouter = express.Router()

// Admin Routes/Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Routes/Features

orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// User Routes/Features

orderRouter.post('/userorders', authUser, userOrders)




export default orderRouter